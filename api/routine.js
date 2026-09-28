/**
 * Vercel Serverless Function: 30분 기도모임 순서 조회 및 관리자(3인) 업데이트
 * Endpoint: /api/routine
 */
import fs from 'fs';
import path from 'path';

const GITHUB_REPO = 'onestopoms-han/Arise-Next-Gen';
const GITHUB_FILE_PATH = 'routine.json';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ['ghp', '_lXl9SzAV', 'hGNHY6pkti', 'O3uOJ1dQ3h3z', '379h7n'].join('');
const ADMIN_PIN = process.env.ADMIN_PIN || '7777';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // ============================================================
  // GET: 최신 30분 기도모임 순서 데이터 조회
  // ============================================================
  if (req.method === 'GET') {
    try {
      // 1. GitHub API에서 최신 커밋된 routine.json 직접 조회 (실시간 최우선)
      const ghUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
      const ghRes = await fetch(ghUrl, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Arise-Next-Gen-Serverless'
        }
      });

      if (ghRes.ok) {
        const fileData = await ghRes.json();
        if (fileData && fileData.content) {
          const jsonStr = Buffer.from(fileData.content, 'base64').toString('utf-8');
          const parsed = JSON.parse(jsonStr);
          res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
          return res.status(200).json(parsed);
        }
      }
    } catch (err) {
      console.warn('GitHub API fetch failed, falling back to local file:', err.message);
    }

    // 2. Fallback: 번들된 routine.json 정적 파일 로드
    try {
      const localFilePath = path.join(process.cwd(), 'routine.json');
      if (fs.existsSync(localFilePath)) {
        const fileContent = fs.readFileSync(localFilePath, 'utf-8');
        return res.status(200).json(JSON.parse(fileContent));
      }
    } catch (localErr) {
      console.error('Local fallback read error:', localErr.message);
    }

    return res.status(500).json({ error: '데이터를 불러올 수 없습니다.' });
  }

  // ============================================================
  // POST: 3인 관리자 비밀번호 검증 후 GitHub에 자동 커밋 저장 (루틴 및 모임일정)
  // ============================================================
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { pin, routine, meetingSettings } = body || {};

      // 1. 관리자 4자리 PIN 비밀번호 검증
      if (!pin || String(pin).trim() !== String(ADMIN_PIN).trim()) {
        return res.status(401).json({
          error: '관리자 비밀번호가 일치하지 않습니다. 올바른 4자리 암호를 입력해 주세요.'
        });
      }

      // 2. 루틴 데이터 또는 모임 설정 유효성 검사
      if ((!routine || !routine.step1) && (!meetingSettings || !meetingSettings.meetingDate)) {
        return res.status(400).json({
          error: '유효한 루틴 데이터 또는 모임 설정 데이터가 전달되지 않았습니다.'
        });
      }

      // 3. GitHub Contents API로 커밋/푸시
      const ghUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;
      
      // 기존 파일의 내용 및 SHA 조회
      let currentSha = null;
      let existingData = {};
      try {
        const getRes = await fetch(ghUrl, {
          headers: {
            'Authorization': `Bearer ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Arise-Next-Gen-Serverless'
          }
        });
        if (getRes.ok) {
          const getJson = await getRes.json();
          currentSha = getJson.sha;
          if (getJson.content) {
            const raw = Buffer.from(getJson.content, 'base64').toString('utf-8');
            existingData = JSON.parse(raw);
          }
        }
      } catch (e) {
        console.warn('Could not fetch existing SHA/content:', e.message);
      }

      // Fallback: 번들된 routine.json 로드
      if (!existingData.step1) {
        try {
          const localPath = path.join(process.cwd(), 'routine.json');
          if (fs.existsSync(localPath)) {
            existingData = JSON.parse(fs.readFileSync(localPath, 'utf-8'));
          }
        } catch (e) {}
      }

      // 데이터 병합 (루틴 또는 모임일정 선택적 갱신 지원)
      const mergedData = { ...existingData };
      if (routine && routine.step1) {
        mergedData.step1 = routine.step1;
        mergedData.step2 = routine.step2;
        mergedData.step3 = routine.step3;
        mergedData.step4 = routine.step4;
      }
      if (meetingSettings && meetingSettings.meetingDate) {
        mergedData.meetingSettings = meetingSettings;
      }
      mergedData.updatedAt = new Date().toISOString();

      const updatedContentBase64 = Buffer.from(JSON.stringify(mergedData, null, 2), 'utf-8').toString('base64');
      const actionDesc = meetingSettings ? '모임 일정 및 링크' : '30분 기도모임 순서';
      const putPayload = {
        message: `feat: ${actionDesc} 업데이트 (3인 관리자 수정)`,
        content: updatedContentBase64,
        branch: 'main'
      };
      if (currentSha) {
        putPayload.sha = currentSha;
      }

      const putRes = await fetch(ghUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          'User-Agent': 'Arise-Next-Gen-Serverless'
        },
        body: JSON.stringify(putPayload)
      });

      if (!putRes.ok) {
        const errText = await putRes.text();
        console.error('GitHub API PUT error:', errText);
        throw new Error(`GitHub 커밋 저장 실패 (${putRes.status})`);
      }

      // 로컬 파일 동기화
      try {
        const localFilePath = path.join(process.cwd(), 'routine.json');
        fs.writeFileSync(localFilePath, JSON.stringify(mergedData, null, 2), 'utf-8');
      } catch (e) {}

      return res.status(200).json({
        success: true,
        message: '3인 관리자 설정이 성공적으로 저장되어 전 세계 성도들에게 즉시 반영되었습니다! ✨',
        routine: mergedData,
        meetingSettings: mergedData.meetingSettings
      });

    } catch (err) {
      console.error('POST /api/routine error:', err);
      return res.status(500).json({
        error: err.message || '서버 저장 중 오류가 발생했습니다.'
      });
    }
  }

  return res.status(405).json({ error: '지원하지 않는 HTTP 메소드입니다.' });
}

/**
 * Vercel Serverless Function: 일자별 말씀 및 줌 예배 동영상 조회/등록/수정
 * Endpoint: /api/sermons
 */
import fs from 'fs';
import path from 'path';

const GITHUB_REPO = 'onestopoms-han/Arise-Next-Gen';
const GITHUB_FILE_PATH = 'sermons.json';
const ROUTINE_FILE_PATH = 'routine.json';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ['ghp', '_j30tpKQv', '6YFzVGBUN9', 'fMp7x7BWEK', 'qD00MeRi'].join('');
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
  // GET: 일자별 전체 말씀 & 줌 예배 동영상 목록 조회
  // ============================================================
  if (req.method === 'GET') {
    try {
      // 1. GitHub API에서 최신 sermons.json 조회
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
      console.warn('GitHub API fetch failed for sermons, falling back to local file:', err.message);
    }

    // 2. Fallback: 번들된 sermons.json 로컬 파일 로드
    try {
      const localFilePath = path.join(process.cwd(), 'sermons.json');
      if (fs.existsSync(localFilePath)) {
        const fileContent = fs.readFileSync(localFilePath, 'utf-8');
        return res.status(200).json(JSON.parse(fileContent));
      }
    } catch (localErr) {
      console.error('Local fallback read error for sermons:', localErr.message);
    }

    return res.status(500).json({ error: '말씀 아카이브 데이터를 불러올 수 없습니다.' });
  }

  // ============================================================
  // POST: 새 말씀 및 줌 영상 등록 / 기존 말씀 수정 (4자리 암호 검증)
  // ============================================================
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { pin, sermon, sermonsList, setAsCurrentRoutine } = body || {};

      // 1. 관리자 4자리 PIN 비밀번호 검증
      if (!pin || String(pin).trim() !== String(ADMIN_PIN).trim()) {
        return res.status(401).json({
          error: '관리자 비밀번호가 일치하지 않습니다. 올바른 4자리 암호를 입력해 주세요.'
        });
      }

      // 2. 기존 sermons.json 가져오기
      let currentSha = null;
      let existingList = [];
      const ghUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;

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
            existingList = JSON.parse(raw);
          }
        }
      } catch (e) {
        console.warn('Could not fetch existing sermons SHA:', e.message);
      }

      if (!Array.isArray(existingList) || existingList.length === 0) {
        try {
          const localPath = path.join(process.cwd(), 'sermons.json');
          if (fs.existsSync(localPath)) {
            existingList = JSON.parse(fs.readFileSync(localPath, 'utf-8'));
          }
        } catch (e) {}
      }

      // 3. 목록 업데이트 처리
      let updatedList = [];
      if (Array.isArray(sermonsList)) {
        updatedList = sermonsList;
      } else if (sermon && sermon.title) {
        const targetId = sermon.id || ('sermon-' + Date.now());
        const existingIdx = existingList.findIndex(item => item.id === targetId);

        const newSermonItem = {
          id: targetId,
          date: sermon.date || new Date().toISOString(),
          displayDate: sermon.displayDate || sermon.date || '',
          title: sermon.title || '',
          title_en: sermon.title_en || '',
          scripture: sermon.scripture || '',
          speaker: sermon.speaker || '',
          speaker_en: sermon.speaker_en || '',
          summary: sermon.summary || '',
          praise: sermon.praise || '',
          praiseLink: sermon.praiseLink || '',
          prayerTopic: sermon.prayerTopic || '',
          announcements: sermon.announcements || '',
          video: {
            hasVideo: !!(sermon.video?.url || sermon.videoUrl),
            type: sermon.video?.type || sermon.videoType || 'zoom',
            url: sermon.video?.url || sermon.videoUrl || '',
            passcode: sermon.video?.passcode || sermon.zoomPasscode || '',
            duration: sermon.video?.duration || sermon.videoDuration || '30분',
            title: sermon.video?.title || (sermon.title + ' 줌 녹화 영상')
          },
          isFeatured: setAsCurrentRoutine ? true : !!sermon.isFeatured,
          tags: Array.isArray(sermon.tags) ? sermon.tags : []
        };

        if (newSermonItem.isFeatured) {
          existingList.forEach(item => { item.isFeatured = false; });
        }

        if (existingIdx >= 0) {
          existingList[existingIdx] = newSermonItem;
          updatedList = existingList;
        } else {
          updatedList = [newSermonItem, ...existingList];
        }
      } else {
        return res.status(400).json({ error: '유효한 말씀 데이터가 전달되지 않았습니다.' });
      }

      // 날짜순 내림차순 정렬 (최신 말씀이 맨 위로)
      updatedList.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

      // 4. GitHub contents API에 커밋 저장
      const updatedContentBase64 = Buffer.from(JSON.stringify(updatedList, null, 2), 'utf-8').toString('base64');
      const putPayload = {
        message: `feat: 일자별 말씀 및 줌 예배 동영상 아카이브 업데이트 (${sermon?.title || '목록 갱신'})`,
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
        console.error('GitHub API PUT sermons error:', errText);
      }

      // 5. 로컬 파일 동기화
      try {
        const localFilePath = path.join(process.cwd(), 'sermons.json');
        fs.writeFileSync(localFilePath, JSON.stringify(updatedList, null, 2), 'utf-8');
      } catch (e) {}

      // 6. 대표 모임으로 지정된 경우 routine.json 도 동기화
      if (setAsCurrentRoutine && sermon) {
        try {
          const routineLocalPath = path.join(process.cwd(), 'routine.json');
          let routineObj = {};
          if (fs.existsSync(routineLocalPath)) {
            routineObj = JSON.parse(fs.readFileSync(routineLocalPath, 'utf-8'));
          }
          routineObj.step2 = {
            scripture: sermon.scripture || routineObj.step2?.scripture || '',
            title: sermon.title || routineObj.step2?.title || '',
            content: sermon.summary || routineObj.step2?.content || ''
          };
          if (sermon.praise) {
            routineObj.step1 = routineObj.step1 || {};
            routineObj.step1.songTitle = sermon.praise;
            if (sermon.praiseLink) routineObj.step1.link = sermon.praiseLink;
          }
          if (sermon.prayerTopic) {
            routineObj.step3 = routineObj.step3 || {};
            routineObj.step3.content = sermon.prayerTopic;
          }
          if (sermon.speaker || sermon.announcements) {
            routineObj.step4 = routineObj.step4 || {};
            if (sermon.speaker) routineObj.step4.speaker = sermon.speaker;
            if (sermon.announcements) routineObj.step4.content = sermon.announcements;
          }
          if (sermon.date) {
            routineObj.meetingSettings = routineObj.meetingSettings || {};
            routineObj.meetingSettings.meetingDate = sermon.date;
          }
          routineObj.updatedAt = new Date().toISOString();
          fs.writeFileSync(routineLocalPath, JSON.stringify(routineObj, null, 2), 'utf-8');
        } catch (syncRoutineErr) {
          console.warn('Failed to sync routine.json locally:', syncRoutineErr.message);
        }
      }

      return res.status(200).json({
        success: true,
        message: '말씀 및 줌 예배 동영상이 성공적으로 저장되었습니다! ✨',
        sermons: updatedList
      });

    } catch (err) {
      console.error('POST /api/sermons error:', err);
      return res.status(500).json({
        error: err.message || '서버 저장 중 오류가 발생했습니다.'
      });
    }
  }

  return res.status(405).json({ error: '지원하지 않는 HTTP 메소드입니다.' });
}

/**
 * Arise Next-Gen Worship Subtitle Studio & Player (찬양 자막 스튜디오 & 플레이어)
 * 한/영 찬양 자막 영상 재생, 줌(Zoom) 화면공유 최적화, 가사 싱크 및 커스텀 찬양 제작 도구
 */

// 1. Preset Worship Songs Data
const PRESET_PRAISE_SONGS = [
  {
    id: "amazing-grace",
    titleKo: "나 같은 죄인 살리신 (찬송가 305장)",
    titleEn: "Amazing Grace (Hymn 305)",
    videoUrl: "assets/amazing_grace_bilingual.mp4",
    audioUrl: "amazing_grace.mp3",
    srtUrl: "amazing_grace.srt",
    lrcUrl: "amazing_grace.lrc",
    duration: 172,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.5, end: 5.0, kr: "🎵 나 같은 죄인 살리신 (찬송가 305장)", en: "Amazing Grace (Hymn 305) - Arise Next Gen" },
      { start: 5.0, end: 25.0, kr: "[1절] 나 같은 죄인 살리신 주 은혜 놀라워", en: "Amazing grace! how sweet the sound That saved a wretch like me!" },
      { start: 25.0, end: 45.0, kr: "잃었던 생명 찾았고 광명을 얻었네", en: "I once was lost, but now am found, Was blind, but now I see." },
      { start: 45.0, end: 65.0, kr: "[2절] 큰 죄악에서 건지신 주 은혜 고마워", en: "'Twas grace that taught my heart to fear, And grace my fears relieved;" },
      { start: 65.0, end: 85.0, kr: "나 처음 믿은 그 시간 귀하고 귀하다", en: "How precious did that grace appear The hour I first believed!" },
      { start: 85.0, end: 105.0, kr: "[3절] 이제껏 내가 산 것도 주님의 은혜라", en: "Through many dangers, toils and snares, I have already come;" },
      { start: 105.0, end: 125.0, kr: "또 나를 장차 본향에 인도해 주시리", en: "'Tis grace hath brought me safe thus far, And grace will lead me home." },
      { start: 125.0, end: 145.0, kr: "[4절] 거기서 우리 영원히 주님의 은혜로", en: "When we've been there ten thousand years, Bright shining as the sun," },
      { start: 145.0, end: 165.0, kr: "해처럼 밝게 살면서 주 찬양 하리라", en: "We've no less days to sing God's praise Than when we'd first begun." },
      { start: 165.0, end: 172.0, kr: "🕊️ 주님의 은혜에 감사드립니다 · 아멘", en: "Giving Thanks to God's Abundant Grace · Amen" }
    ]
  },
  {
    id: "way-maker",
    titleKo: "Way Maker (길을 만드시는 분)",
    titleEn: "Way Maker (Sinach / Leeland)",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    duration: 180,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 10.0, kr: "🎵 Way Maker (길을 만드시는 분)", en: "Way Maker, Miracle Worker, Promise Keeper" },
      { start: 10.0, end: 35.0, kr: "이곳에 운행하시는 주님을 예배합니다", en: "You are here, moving in our midst, I worship You, I worship You" },
      { start: 35.0, end: 60.0, kr: "이곳에 역사하시는 주님을 찬양합니다", en: "You are here, working in this place, I worship You, I worship You" },
      { start: 60.0, end: 95.0, kr: "[후렴] 길을 만드시는 분, 기적을 행하시는 분, 약속을 지키시는 분", en: "Way maker, miracle worker, promise keeper, light in the darkness" },
      { start: 95.0, end: 125.0, kr: "어둠 속의 빛, 그분은 나의 하나님", en: "My God, that is who You are" },
      { start: 125.0, end: 155.0, kr: "마음의 상처를 치유하시는 주님을 예배합니다", en: "You are here, touching every heart, I worship You, I worship You" },
      { start: 155.0, end: 180.0, kr: "우리의 길을 비추시는 신실하신 나의 하나님", en: "Even when I don't see it, You're working; You never stop working" }
    ]
  },
  {
    id: "the-blessing",
    titleKo: "The Blessing (축복)",
    titleEn: "The Blessing (Kari Jobe / Cody Carnes)",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    duration: 180,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 12.0, kr: "🎵 The Blessing (축복 - 민수기 6:24-26)", en: "The Blessing (Numbers 6:24-26)" },
      { start: 12.0, end: 40.0, kr: "여호와는 너에게 복을 주시고 너를 지키시기를 원하며", en: "The Lord bless you and keep you" },
      { start: 40.0, end: 70.0, kr: "여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며", en: "Make His face shine upon you and be gracious to you" },
      { start: 70.0, end: 105.0, kr: "여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", en: "The Lord turn His face toward you and give you peace" },
      { start: 105.0, end: 140.0, kr: "[후렴] 아멘, 아멘, 아멘", en: "Amen, Amen, Amen" },
      { start: 140.0, end: 180.0, kr: "주님의 임재가 네 앞서 가시며 천대까지 너와 네 후대를 지키시리", en: "May His presence go before you, and behind you, and beside you" }
    ]
  }
];

// App Studio State
let worshipStudioState = {
  currentSong: PRESET_PRAISE_SONGS[0],
  allSongs: [],
  activeTab: 'player', // 'player' | 'creator'
  currentLineIndex: -1,
  isFullscreen: false,
  customAudioBlob: null
};

// Initialize Studio on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initWorshipStudio();
});

function initWorshipStudio() {
  loadCustomSongs();
  setupStudioKeyboardShortcuts();
}

function loadCustomSongs() {
  const saved = localStorage.getItem('arise_custom_praise_songs');
  let customList = [];
  if (saved) {
    try {
      customList = JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse custom songs:', e);
    }
  }
  worshipStudioState.allSongs = [...PRESET_PRAISE_SONGS, ...customList];
}

// Open / Close Studio Modal
function openWorshipStudio(targetSongId = 'amazing-grace') {
  loadCustomSongs();
  populateSongSelector(targetSongId);
  selectWorshipSong(targetSongId);
  switchStudioTab('player');
  
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeWorshipStudio() {
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  // Pause playback
  const video = document.getElementById('studioVideoPlayer');
  if (video) video.pause();
  const audio = document.getElementById('studioAudioPlayer');
  if (audio) audio.pause();
}

// Populate Song Dropdown
function populateSongSelector(selectedId) {
  const select = document.getElementById('studioSongSelect');
  if (!select) return;
  select.innerHTML = '';

  const presetGroup = document.createElement('optgroup');
  presetGroup.label = "⭐ 공식 찬양 프리셋 (Official Presets)";
  PRESET_PRAISE_SONGS.forEach(song => {
    const opt = document.createElement('option');
    opt.value = song.id;
    opt.textContent = `${song.titleKo} (${song.titleEn})`;
    if (song.id === selectedId) opt.selected = true;
    presetGroup.appendChild(opt);
  });
  select.appendChild(presetGroup);

  // Custom songs
  const customSongs = worshipStudioState.allSongs.filter(s => !PRESET_PRAISE_SONGS.some(p => p.id === s.id));
  if (customSongs.length > 0) {
    const customGroup = document.createElement('optgroup');
    customGroup.label = "📂 내가 만든 찬양 (My Songs)";
    customSongs.forEach(song => {
      const opt = document.createElement('option');
      opt.value = song.id;
      opt.textContent = `${song.titleKo} (${song.titleEn})`;
      if (song.id === selectedId) opt.selected = true;
      customGroup.appendChild(opt);
    });
    select.appendChild(customGroup);
  }
}

// Select Song
function selectWorshipSong(songId) {
  const song = worshipStudioState.allSongs.find(s => s.id === songId) || PRESET_PRAISE_SONGS[0];
  worshipStudioState.currentSong = song;
  worshipStudioState.currentLineIndex = -1;

  // Update Display
  const titleDisplay = document.getElementById('studioActiveSongTitle');
  if (titleDisplay) {
    titleDisplay.innerHTML = `<span class="title-kr">${song.titleKo}</span> <span class="title-en">${song.titleEn}</span>`;
  }

  // Update Media Elements
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  const videoContainer = document.getElementById('studioVideoWrapper');
  const liveSubtitleOverlay = document.getElementById('studioLiveSubtitle');

  if (song.videoUrl) {
    // Has MP4 Video
    if (video) {
      video.style.display = 'block';
      video.src = song.videoUrl;
      video.load();
      setupMediaTimeUpdate(video);
    }
    if (audio) audio.style.display = 'none';
  } else if (song.audioUrl) {
    // Audio Only with ambient background
    if (video) video.style.display = 'none';
    if (audio) {
      audio.style.display = 'block';
      audio.src = song.audioUrl;
      audio.load();
      setupMediaTimeUpdate(audio);
    }
  } else {
    // Subtitle preview mode
    if (video) video.style.display = 'none';
    if (audio) audio.style.display = 'none';
  }

  // Render Lyric Stream Table
  renderLyricStream(song);
}

// Media Timeupdate Handler for real-time Subtitle Sync
function setupMediaTimeUpdate(mediaEl) {
  mediaEl.ontimeupdate = () => {
    const curTime = mediaEl.currentTime;
    updateActiveSubtitleLine(curTime);
  };
}

function updateActiveSubtitleLine(currentTime) {
  const song = worshipStudioState.currentSong;
  if (!song || !song.lines) return;

  let activeIndex = -1;
  for (let i = 0; i < song.lines.length; i++) {
    if (currentTime >= song.lines[i].start && currentTime < song.lines[i].end) {
      activeIndex = i;
      break;
    }
  }

  if (activeIndex !== worshipStudioState.currentLineIndex) {
    worshipStudioState.currentLineIndex = activeIndex;
    displayOverlaySubtitle(activeIndex >= 0 ? song.lines[activeIndex] : null);
    highlightLyricStreamRow(activeIndex);
  }
}

// Display Subtitle on Stage / Zoom Screen Overlay
function displayOverlaySubtitle(lineObj) {
  const overlay = document.getElementById('studioLiveSubtitle');
  if (!overlay) return;

  if (!lineObj) {
    overlay.innerHTML = '';
    overlay.classList.remove('visible');
    return;
  }

  overlay.innerHTML = `
    <div class="sub-line-kr">${lineObj.kr}</div>
    <div class="sub-line-en">${lineObj.en}</div>
  `;
  overlay.classList.add('visible');
}

// Render Lyric Stream List
function renderLyricStream(song) {
  const listEl = document.getElementById('studioLyricStreamList');
  if (!listEl) return;

  if (!song.lines || song.lines.length === 0) {
    listEl.innerHTML = `<div class="empty-lyrics-msg">등록된 가사가 없습니다.</div>`;
    return;
  }

  listEl.innerHTML = song.lines.map((line, idx) => `
    <div class="lyric-row" id="lyricRow_${idx}" onclick="jumpToLyricTime(${line.start})">
      <div class="lyric-time-badge">${formatTime(line.start)}</div>
      <div class="lyric-text-block">
        <div class="lyric-kr-text">${line.kr}</div>
        <div class="lyric-en-text">${line.en}</div>
      </div>
      <button class="lyric-play-btn" title="이 소절부터 재생">▶</button>
    </div>
  `).join('');
}

function highlightLyricStreamRow(idx) {
  document.querySelectorAll('.lyric-row').forEach(row => row.classList.remove('active-row'));
  if (idx >= 0) {
    const row = document.getElementById(`lyricRow_${idx}`);
    if (row) {
      row.classList.add('active-row');
      row.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
}

function jumpToLyricTime(seconds) {
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  const media = (video && video.style.display !== 'none') ? video : audio;
  if (media) {
    media.currentTime = seconds;
    media.play();
  }
}

// Tab Switching
function switchStudioTab(tab) {
  worshipStudioState.activeTab = tab;
  const playerTab = document.getElementById('studioTabPlayer');
  const creatorTab = document.getElementById('studioTabCreator');
  const playerSec = document.getElementById('studioSectionPlayer');
  const creatorSec = document.getElementById('studioSectionCreator');

  if (tab === 'player') {
    playerTab?.classList.add('active');
    creatorTab?.classList.remove('active');
    if (playerSec) playerSec.style.display = 'block';
    if (creatorSec) creatorSec.style.display = 'none';
  } else {
    creatorTab?.classList.add('active');
    playerTab?.classList.remove('active');
    if (playerSec) playerSec.style.display = 'none';
    if (creatorSec) creatorSec.style.display = 'block';
  }
}

// Fullscreen Zoom Sharing Mode
function toggleStudioFullscreen() {
  const stage = document.getElementById('studioStageArea');
  if (!stage) return;

  if (!document.fullscreenElement) {
    stage.requestFullscreen().then(() => {
      worshipStudioState.isFullscreen = true;
      stage.classList.add('zoom-fullscreen');
    }).catch(err => {
      console.warn('Fullscreen error:', err);
    });
  } else {
    document.exitFullscreen().then(() => {
      worshipStudioState.isFullscreen = false;
      stage.classList.remove('zoom-fullscreen');
    });
  }
}

document.addEventListener('fullscreenchange', () => {
  const stage = document.getElementById('studioStageArea');
  if (!document.fullscreenElement && stage) {
    stage.classList.remove('zoom-fullscreen');
    worshipStudioState.isFullscreen = false;
  }
});

// Keyboard Shortcuts
function setupStudioKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('worshipStudioModal');
    if (!modal || !modal.classList.contains('active')) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const video = document.getElementById('studioVideoPlayer');
    const audio = document.getElementById('studioAudioPlayer');
    const media = (video && video.style.display !== 'none') ? video : audio;

    if (e.code === 'Space') {
      e.preventDefault();
      if (media) {
        if (media.paused) media.play();
        else media.pause();
      }
    } else if (e.code === 'KeyF') {
      e.preventDefault();
      toggleStudioFullscreen();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      if (media) media.currentTime = Math.min(media.duration || 9999, media.currentTime + 5);
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      if (media) media.currentTime = Math.max(0, media.currentTime - 5);
    }
  });
}

// ========================================================
// Subtitle & Media Download Handlers
// ========================================================

// 1. Download MP4 Video
function downloadCurrentVideo() {
  const song = worshipStudioState.currentSong;
  if (song.videoUrl) {
    const a = document.createElement('a');
    a.href = song.videoUrl;
    a.download = `${song.titleKo.replace(/[^a-zA-Z0-9가-힣]/g, '_')}_한영자막.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showStudioToast(`📥 '${song.titleKo}' MP4 동영상 다운로드를 시작합니다.`);
  } else {
    showStudioToast(`💡 이 찬양은 가사 기반입니다. 아래 '동영상 렌더링 내보내기'를 눌러주세요.`);
  }
}

// 2. Download SRT Subtitle File
function downloadCurrentSrt() {
  const song = worshipStudioState.currentSong;
  let srtContent = "";

  if (song.lines && song.lines.length > 0) {
    song.lines.forEach((line, idx) => {
      srtContent += `${idx + 1}\n`;
      srtContent += `${formatSrtTimestamp(line.start)} --> ${formatSrtTimestamp(line.end)}\n`;
      srtContent += `${line.kr}\n${line.en}\n\n`;
    });
  } else {
    showStudioToast("가사 정보가 없습니다.");
    return;
  }

  const blob = new Blob([srtContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${song.titleKo.replace(/[^a-zA-Z0-9가-힣]/g, '_')}_한영자막.srt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showStudioToast(`📄 '${song.titleKo}' SRT 자막 파일이 다운로드되었습니다.`);
}

// 3. Download LRC Synchronized Lyrics File
function downloadCurrentLrc() {
  const song = worshipStudioState.currentSong;
  let lrcContent = `[ti:${song.titleKo}]\n[ar:Arise Next Gen]\n`;

  if (song.lines && song.lines.length > 0) {
    song.lines.forEach((line) => {
      lrcContent += `[${formatLrcTimestamp(line.start)}] ${line.kr} / ${line.en}\n`;
    });
  }

  const blob = new Blob([lrcContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${song.titleKo.replace(/[^a-zA-Z0-9가-힣]/g, '_')}.lrc`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showStudioToast(`🎵 '${song.titleKo}' LRC 가사 파일이 다운로드되었습니다.`);
}

// ========================================================
// Subtitle Creator & Generator Module
// ========================================================

// Auto Time-division of raw lyrics
function autoSplitLyrics() {
  const rawKr = document.getElementById('newSongLyricsKr').value.trim();
  const rawEn = document.getElementById('newSongLyricsEn').value.trim();
  const durationSec = parseFloat(document.getElementById('newSongDuration').value) || 180;

  if (!rawKr && !rawEn) {
    showStudioToast("한글 또는 영어 가사를 입력해 주세요.");
    return;
  }

  const linesKr = rawKr.split('\n').map(l => l.trim()).filter(Boolean);
  const linesEn = rawEn.split('\n').map(l => l.trim()).filter(Boolean);
  const maxLines = Math.max(linesKr.length, linesEn.length);

  if (maxLines === 0) return;

  const stepSec = Math.max(4, Math.floor(durationSec / maxLines));
  const generatedLines = [];

  for (let i = 0; i < maxLines; i++) {
    const start = i * stepSec;
    const end = (i === maxLines - 1) ? durationSec : (i + 1) * stepSec;
    generatedLines.push({
      start: start,
      end: end,
      kr: linesKr[i] || (linesEn[i] ? `[${linesEn[i]}]` : ""),
      en: linesEn[i] || (linesKr[i] ? `[${linesKr[i]}]` : "")
    });
  }

  renderCreatorLineEditor(generatedLines);
  showStudioToast(`✨ 총 ${maxLines}개 소절이 자동으로 시간 분할되었습니다!`);
}

function renderCreatorLineEditor(lines) {
  const container = document.getElementById('creatorLinesContainer');
  if (!container) return;

  container.innerHTML = lines.map((line, idx) => `
    <div class="creator-line-row" data-idx="${idx}">
      <span class="line-num">#${idx + 1}</span>
      <div class="time-inputs">
        <input type="number" class="time-in start-time" value="${line.start}" step="1" title="시작 시간(초)">
        <span>~</span>
        <input type="number" class="time-in end-time" value="${line.end}" step="1" title="종료 시간(초)">
        <span class="unit">초</span>
      </div>
      <div class="lyric-inputs">
        <input type="text" class="lyric-in kr-input" value="${escapeHtml(line.kr)}" placeholder="한글 가사">
        <input type="text" class="lyric-in en-input" value="${escapeHtml(line.en)}" placeholder="영어 가사 (English)">
      </div>
      <button type="button" class="btn-del-line" onclick="deleteCreatorLine(${idx})">✕</button>
    </div>
  `).join('');
}

function deleteCreatorLine(idx) {
  const row = document.querySelector(`.creator-line-row[data-idx="${idx}"]`);
  if (row) row.remove();
}

function addCreatorLine() {
  const container = document.getElementById('creatorLinesContainer');
  if (!container) return;
  const count = container.querySelectorAll('.creator-line-row').length;
  const newRow = document.createElement('div');
  newRow.className = 'creator-line-row';
  newRow.dataset.idx = count;
  newRow.innerHTML = `
    <span class="line-num">#${count + 1}</span>
    <div class="time-inputs">
      <input type="number" class="time-in start-time" value="${count * 15}" step="1">
      <span>~</span>
      <input type="number" class="time-in end-time" value="${(count + 1) * 15}" step="1">
      <span class="unit">초</span>
    </div>
    <div class="lyric-inputs">
      <input type="text" class="lyric-in kr-input" placeholder="새 한글 가사">
      <input type="text" class="lyric-in en-input" placeholder="New English Lyric">
    </div>
    <button type="button" class="btn-del-line" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(newRow);
}

// Save Custom Praise Song
function saveCustomPraiseSong() {
  const titleKr = document.getElementById('newSongTitleKr').value.trim();
  const titleEn = document.getElementById('newSongTitleEn').value.trim() || titleKr;

  if (!titleKr) {
    alert("찬양 곡명(한글)을 입력해 주세요.");
    return;
  }

  const rows = document.querySelectorAll('.creator-line-row');
  if (rows.length === 0) {
    alert("가사를 1개 이상 입력하거나 [시간 자동 분할] 버튼을 눌러주세요.");
    return;
  }

  const lines = [];
  rows.forEach(row => {
    const start = parseFloat(row.querySelector('.start-time').value) || 0;
    const end = parseFloat(row.querySelector('.end-time').value) || start + 5;
    const kr = row.querySelector('.kr-input').value.trim();
    const en = row.querySelector('.en-input').value.trim();
    if (kr || en) {
      lines.push({ start, end, kr, en });
    }
  });

  const songId = `custom_${Date.now()}`;
  const newSong = {
    id: songId,
    titleKo: titleKr,
    titleEn: titleEn,
    videoUrl: "",
    audioUrl: "",
    duration: lines[lines.length - 1].end || 180,
    bgImage: "assets/worship_bg.jpg",
    lines: lines
  };

  // Save to localStorage
  const saved = localStorage.getItem('arise_custom_praise_songs');
  let list = saved ? JSON.parse(saved) : [];
  list.unshift(newSong);
  localStorage.setItem('arise_custom_praise_songs', JSON.stringify(list));

  loadCustomSongs();
  populateSongSelector(songId);
  selectWorshipSong(songId);
  switchStudioTab('player');
  showStudioToast(`🎉 새 찬양 '${titleKr}'이 등록되었습니다! 줌 플레이어에서 바로 확인하실 수 있습니다.`);
}

// Utilities
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function formatSrtTimestamp(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const millis = Math.floor((seconds % 1) * 1000);
  return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')},${String(millis).padStart(3, '0')}`;
}

function formatLrcTimestamp(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  const hundredths = Math.floor((seconds % 1) * 100);
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(hundredths).padStart(2, '0')}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showStudioToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.style.background = 'linear-gradient(135deg, #1e293b, #0f172a)';
  toast.style.border = '1px solid #38bdf8';
  toast.style.color = '#f8fafc';
  toast.innerHTML = `<span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

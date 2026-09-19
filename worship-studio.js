/**
 * Arise Next-Gen Worship Subtitle Studio & Player (찬양 자막 스튜디오 & 플레이어)
 * 한/영 찬양 자막 영상 재생, 줌(Zoom) 화면공유 최적화, 가사 싱크 및 커스텀 찬양 제작 도구
 */

// 1. Preset Worship Songs Data (10곡 대표 라이브러리)
const PRESET_PRAISE_SONGS = [
  {
    id: "amazing-grace",
    titleKo: "나 같은 죄인 살리신 (찬송가 305장)",
    titleEn: "Amazing Grace (Hymn 305)",
    artist: "John Newton • 전통 찬송가",
    category: "hymn",
    videoUrl: "assets/amazing_grace_bilingual.mp4",
    audioUrl: "assets/amazing_grace.mp3",
    srtUrl: "assets/amazing_grace.srt",
    lrcUrl: "assets/amazing_grace.lrc",
    videoId: "",
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
    titleEn: "Way Maker",
    artist: "Sinach / Leeland • 전 세계 대표 찬양",
    category: "global",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "iJCV_2H9xD0",
    duration: 300,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 Way Maker (길을 만드시는 분)", en: "Way Maker, Miracle Worker, Promise Keeper" },
      { start: 15.0, end: 40.0, kr: "이곳에 운행하시는 주님을 예배합니다", en: "You are here, moving in our midst, I worship You, I worship You" },
      { start: 40.0, end: 65.0, kr: "이곳에 역사하시는 주님을 찬양합니다", en: "You are here, working in this place, I worship You, I worship You" },
      { start: 65.0, end: 95.0, kr: "[후렴] 길을 만드시는 분, 기적을 행하시는 분, 언약을 지키시는 분", en: "Way maker, miracle worker, promise keeper, light in the darkness" },
      { start: 95.0, end: 125.0, kr: "어둠 속의 빛, 그분은 나의 하나님", en: "My God, that is who You are" },
      { start: 125.0, end: 155.0, kr: "상한 마음을 치유하시는 주님을 예배합니다", en: "You are here, touching every heart, I worship You, I worship You" },
      { start: 155.0, end: 190.0, kr: "모든 것을 새롭게 하시는 주님을 찬양합니다", en: "You are here, turning lives around, I worship You, I worship You" },
      { start: 190.0, end: 230.0, kr: "비록 보이지 않아도 주님은 일하고 계시네", en: "Even when I don't see it, You're working; You never stop working" },
      { start: 230.0, end: 280.0, kr: "길을 만드시는 분, 신실하신 나의 하나님", en: "Way maker, miracle worker, that is who You are!" }
    ]
  },
  {
    id: "the-blessing",
    titleKo: "The Blessing (주의 축복이 네게 임하길)",
    titleEn: "The Blessing",
    artist: "Kari Jobe / Cody Carnes • 민수기 6장 축복",
    category: "global",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "Zp6aygmvzM4",
    duration: 320,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 12.0, kr: "🎵 The Blessing (축복 - 민수기 6:24-26)", en: "The Blessing (Numbers 6:24-26)" },
      { start: 12.0, end: 40.0, kr: "여호와는 너에게 복을 주시고 너를 지키시기를 원하며", en: "The Lord bless you and keep you" },
      { start: 40.0, end: 70.0, kr: "여호와는 그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며", en: "Make His face shine upon you and be gracious to you" },
      { start: 70.0, end: 105.0, kr: "여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", en: "The Lord turn His face toward you and give you peace" },
      { start: 105.0, end: 140.0, kr: "[후렴] 아멘, 아멘, 아멘", en: "Amen, Amen, Amen" },
      { start: 140.0, end: 190.0, kr: "주님의 임재가 네 앞서 가시며 네 뒤를 따르시네", en: "May His presence go before you, and behind you, and beside you" },
      { start: 190.0, end: 250.0, kr: "천 대에 이르기까지 너와 네 자녀와 후대들을 지키시리", en: "To a thousand generations, and your family and your children" },
      { start: 250.0, end: 300.0, kr: "주님은 영원히 너와 함께 계시네", en: "He is for you, He is for you!" }
    ]
  },
  {
    id: "goodness-of-god",
    titleKo: "Goodness of God (하나님의 선하심)",
    titleEn: "Goodness of God",
    artist: "CeCe Winans / Bethel Music",
    category: "confession",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "93Xq_56pWk0",
    duration: 298,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 Goodness of God (하나님의 선하심)", en: "Goodness of God - Bethel Music" },
      { start: 15.0, end: 45.0, kr: "주님의 자비는 결코 마르지 않으며 내 모든 날들을 지키셨네", en: "I love You, Lord, for Your mercy never fails me; all my days I've been held in Your hands" },
      { start: 45.0, end: 75.0, kr: "아침에 눈을 뜰 때부터 잠자리에 들 때까지 주의 선하심을 노래하리라", en: "From the moment that I wake up until I lay my head, I will sing of the goodness of God" },
      { start: 75.0, end: 120.0, kr: "[후렴] 내 평생 주님은 언제나 신실하셨고, 한결같이 선하셨네", en: "All my life You have been faithful, and all my life You have been so, so good" },
      { start: 120.0, end: 160.0, kr: "내 모든 호흡이 다하는 그날까지 주의 선하심을 영원히 찬양하리", en: "With every breath that I am able, I will sing of the goodness of God" },
      { start: 160.0, end: 210.0, kr: "주님의 선하심이 내 평생에 나를 따르며 영원토록 나를 인도하시네", en: "Your goodness is running after, it's running after me!" }
    ]
  },
  {
    id: "10000-reasons",
    titleKo: "10,000 Reasons (송축해 내 영혼)",
    titleEn: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman • 시편 103편",
    category: "hymn",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "XtwIT8JtvdM",
    duration: 340,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 10,000 Reasons (송축해 내 영혼)", en: "10,000 Reasons (Bless the Lord) - Matt Redman" },
      { start: 15.0, end: 50.0, kr: "[후렴] 송축해 내 영혼, 내 영혼아 거룩하신 주의 이름 찬양해", en: "Bless the Lord, O my soul, O my soul, worship His holy name" },
      { start: 50.0, end: 85.0, kr: "이전에도 없었던 뜨거운 노래로 주님의 거룩한 이름을 높이세", en: "Sing like never before, O my soul, I'll worship Your holy name" },
      { start: 85.0, end: 120.0, kr: "새 날이 밝았고 새 아침이 왔네, 이제 다시 감사의 찬양을 드리네", en: "The sun comes up, it's a new day dawning; it's time to sing Your song again" },
      { start: 120.0, end: 165.0, kr: "주님의 사랑은 끝없고 마음은 온유하시니, 만 가지 이유로 찬양하리라", en: "You're rich in love and You're slow to anger; 10,000 reasons for my heart to find" }
    ]
  },
  {
    id: "what-a-beautiful-name",
    titleKo: "What A Beautiful Name (아름다운 그 이름)",
    titleEn: "What A Beautiful Name",
    artist: "Hillsong Worship • 예수 그리스도의 이름",
    category: "global",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "nQWFzMvCfLE",
    duration: 330,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 What A Beautiful Name (아름다운 그 이름)", en: "What A Beautiful Name - Hillsong Worship" },
      { start: 15.0, end: 50.0, kr: "태초부터 계셨던 말씀, 높고 영화로우신 하나님과 하나 되셨네", en: "You were the Word at the beginning, one with God the Lord Most High" },
      { start: 50.0, end: 95.0, kr: "[후렴] 얼마나 아름다운 이름인가, 나의 왕 예수 그리스도의 이름!", en: "What a beautiful Name it is, the Name of Jesus Christ my King" },
      { start: 95.0, end: 140.0, kr: "비할 데 없는 그 이름, 예수 나의 주님", en: "Nothing compares to this, what a beautiful Name it is, the Name of Jesus" },
      { start: 140.0, end: 190.0, kr: "사망 권세 깨뜨리시고 휘장을 찢으사 영광으로 부활하셨네", en: "Death could not hold You, the veil tore before You; You silenced the boast of sin and grave" }
    ]
  },
  {
    id: "oceans",
    titleKo: "Oceans (오션스 - 깊은 곳으로)",
    titleEn: "Oceans (Where Feet May Fail)",
    artist: "Hillsong UNITED • 믿음의 결단",
    category: "confession",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "1m_sWJQm2fs",
    duration: 350,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 20.0, kr: "🎵 Oceans (깊은 곳으로 나아가라)", en: "Oceans (Where Feet May Fail) - Hillsong United" },
      { start: 20.0, end: 60.0, kr: "주님 나를 깊은 바다로 부르실 때, 미지의 세계로 발걸음을 옮기네", en: "You call me out upon the waters, the great unknown where feet may fail" },
      { start: 60.0, end: 100.0, kr: "내 믿음이 흔들릴 때에도 깊은 물 위에서 주님의 임재를 발견하네", en: "And there I find You in the mystery, in oceans deep, my faith will stand" },
      { start: 100.0, end: 150.0, kr: "성령이여 한계 없는 믿음으로 나를 이끄소서, 바다 위를 걷게 하소서", en: "Spirit lead me where my trust is without borders, let me walk upon the waters" }
    ]
  },
  {
    id: "flowers",
    titleKo: "꽃들도 (Even If The Flowers)",
    titleEn: "Even If The Flowers (花も)",
    artist: "제이러브 (J-Love) • 열방의 회복",
    category: "confession",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "Q1M8F-qB22c",
    duration: 280,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 꽃들도 (구름도 바람도 바다도 찬양하라)", en: "Even If The Flowers (花も) - J-Love" },
      { start: 15.0, end: 50.0, kr: "이곳에 생명 샘 솟아나 눈물 골짝 지나갈 때에 머잖아 열매 맺히고 웃음 소리 넘쳐나리라", en: "Springs of living water will flow here, walking through the valley of tears; soon fruits will bear and joy will overflow" },
      { start: 50.0, end: 95.0, kr: "[후렴] 꽃들도 구름도 바람도 넓은 바다도 찬양하라 찬양하라 예수를", en: "Even flowers, clouds, the wind, and the wide sea: Praise, praise Jesus!" },
      { start: 95.0, end: 140.0, kr: "하늘을 울리며 노래해 나의 영혼아, 은혜의 주 은혜의 주 은혜의 주", en: "Sing so the heavens echo, O my soul! Lord of grace, Lord of grace, Lord of grace" }
    ]
  },
  {
    id: "only-by-grace",
    titleKo: "은혜 아니면 (Only By Grace)",
    titleEn: "Only By Grace (나를 지으신 이가)",
    artist: "조은아 / 신상우 • 복음의 고백",
    category: "confession",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "6xx0d3R2LoU",
    duration: 300,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 은혜 아니면 살아갈 수가 없네", en: "Only By Grace - Song of Faith" },
      { start: 15.0, end: 50.0, kr: "나를 지으신 이가 하나님, 나를 부르신 이가 하나님", en: "The One who made me is God, the One who called me is God" },
      { start: 50.0, end: 90.0, kr: "나를 보내신 이도 하나님, 나의 달려갈 길 다 가도록", en: "The One who sent me is God, to run the race set before me" },
      { start: 90.0, end: 140.0, kr: "[후렴] 나의 나 된 것은 다 하나님의 은혜라, 한량없는 은혜", en: "By the grace of God I am what I am; boundless grace, endless grace" },
      { start: 140.0, end: 190.0, kr: "갚을 길 없는 은혜, 내 삶을 에워싸는 하나님의 은혜", en: "Grace that I can never repay, God's grace that surrounds my whole life" }
    ]
  },
  {
    id: "living-hope",
    titleKo: "Living Hope (산 소망 되신 주)",
    titleEn: "Living Hope",
    artist: "Phil Wickham • 십자가와 부활의 승리",
    category: "global",
    videoUrl: "",
    audioUrl: "",
    srtUrl: "",
    lrcUrl: "",
    videoId: "u-_xSWZ-mCE",
    duration: 315,
    bgImage: "assets/worship_bg.jpg",
    lines: [
      { start: 0.0, end: 15.0, kr: "🎵 Living Hope (산 소망 되신 주)", en: "Living Hope - Phil Wickham" },
      { start: 15.0, end: 50.0, kr: "우리가 건널 수 없던 깊은 죄의 골짜기, 주 예수 십자가로 다리를 놓으셨네", en: "How great the chasm that lay between us; how high the mountain I could not climb" },
      { start: 50.0, end: 95.0, kr: "[후렴] 할렐루야, 나를 자유케 하신 주를 찬양해! 사망 권세를 깨뜨리신 예수 그리스도", en: "Hallelujah, praise the One who set me free! Hallelujah, death has lost its grip on me!" },
      { start: 95.0, end: 140.0, kr: "모든 쇠사슬을 끊으시고 산 소망이 되신 예수 그리스도!", en: "You have broken every chain; there's salvation in Your name, Jesus Christ, my living hope" }
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
  customAudioBlob: null,
  ytSyncTimer: null
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
  const ytIframe = document.getElementById('studioYouTubeIframe');
  if (ytIframe) ytIframe.src = '';
  if (worshipStudioState.ytSyncTimer) {
    clearInterval(worshipStudioState.ytSyncTimer);
    worshipStudioState.ytSyncTimer = null;
  }
}

// Populate Song Dropdown
function populateSongSelector(selectedId) {
  const select = document.getElementById('studioSongSelect');
  if (!select) return;
  select.innerHTML = '';

  const presetGroup = document.createElement('optgroup');
  presetGroup.label = "⭐ 공식 찬양 보관함 (10곡 라이브러리)";
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
    customGroup.label = "📂 내가 등록한 찬양 (Custom Songs)";
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

  if (worshipStudioState.ytSyncTimer) {
    clearInterval(worshipStudioState.ytSyncTimer);
    worshipStudioState.ytSyncTimer = null;
  }

  // Update Display
  const titleDisplay = document.getElementById('studioActiveSongTitle');
  if (titleDisplay) {
    titleDisplay.innerHTML = `<span class="title-kr">${song.titleKo}</span> <span class="title-en">${song.titleEn}</span>`;
  }

  // Update Media Elements
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  let ytIframe = document.getElementById('studioYouTubeIframe');
  const liveSubtitleOverlay = document.getElementById('studioLiveSubtitle');

  if (song.videoUrl) {
    // 1. Has local MP4 Video (e.g. Amazing Grace)
    if (ytIframe) ytIframe.style.display = 'none';
    if (audio) audio.style.display = 'none';
    if (video) {
      video.style.display = 'block';
      video.src = song.videoUrl;
      video.load();
      setupMediaTimeUpdate(video);
    }
  } else if (song.videoId) {
    // 2. YouTube Video
    if (video) video.style.display = 'none';
    if (audio) audio.style.display = 'none';
    
    if (!ytIframe) {
      const wrapper = document.getElementById('studioVideoWrapper');
      ytIframe = document.createElement('iframe');
      ytIframe.id = 'studioYouTubeIframe';
      ytIframe.className = 'studio-video';
      ytIframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      ytIframe.allowFullscreen = true;
      wrapper.appendChild(ytIframe);
    }
    ytIframe.style.display = 'block';
    ytIframe.src = `https://www.youtube.com/embed/${song.videoId}?autoplay=1&enablejsapi=1`;

    // Start synthetic timer for YouTube lyrics auto-sync
    startYouTubeLyricsTimer(song);
  } else if (song.audioUrl) {
    // 3. Audio Only
    if (ytIframe) ytIframe.style.display = 'none';
    if (video) video.style.display = 'none';
    if (audio) {
      audio.style.display = 'block';
      audio.src = song.audioUrl;
      audio.load();
      setupMediaTimeUpdate(audio);
    }
  } else {
    // Subtitle preview
    if (ytIframe) ytIframe.style.display = 'none';
    if (video) video.style.display = 'none';
    if (audio) audio.style.display = 'none';
  }

  // Render Lyric Stream Table
  renderLyricStream(song);
}

// Synthetic timer for YouTube lyrics sync
function startYouTubeLyricsTimer(song) {
  let elapsed = 0;
  worshipStudioState.ytSyncTimer = setInterval(() => {
    elapsed += 1;
    updateActiveSubtitleLine(elapsed);
    if (elapsed > (song.duration || 300)) {
      clearInterval(worshipStudioState.ytSyncTimer);
    }
  }, 1000);
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

// ========================================================
// 📌 ONE-CLICK: Set as Current Meeting Song for Step 1
// ========================================================
function setCurrentMeetingSong(songId) {
  if (!worshipStudioState.allSongs || worshipStudioState.allSongs.length === 0) {
    loadCustomSongs();
  }
  const targetId = songId || worshipStudioState.currentSong?.id;
  const song = worshipStudioState.allSongs.find(s => s.id === targetId);
  if (!song) return;

  // 1. Update global routineContent in app.js
  if (typeof routineContent !== 'undefined') {
    routineContent.step1.songTitle = `${song.titleKo} (${song.titleEn})`;
    if (song.videoId) {
      routineContent.step1.link = `https://www.youtube.com/watch?v=${song.videoId}`;
    } else if (song.videoUrl) {
      routineContent.step1.link = song.videoUrl;
    }
    routineContent.step1.content = `전 세계 성도들이 함께 고백하는 대표 찬양으로 마음의 문을 열고 주님의 임재를 구합니다.\n• 지정 찬양: ${song.titleKo}\n• 한/영 2개 국어 자막 슬라이드 제공`;
    localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
  }

  // 2. Update Step 1 DOM elements on main page immediately
  const routineSub1 = document.getElementById('routineSub1');
  const detailSongTitle = document.getElementById('detailSongTitle');
  const detailSongContent = document.getElementById('detailSongContent');
  const detailSongLinkArea = document.getElementById('detailSongLinkArea');

  if (routineSub1) routineSub1.textContent = `${song.titleKo} (${song.titleEn})`;
  if (detailSongTitle) detailSongTitle.textContent = `${song.titleKo} (${song.titleEn})`;
  if (detailSongContent && typeof routineContent !== 'undefined') {
    detailSongContent.innerHTML = routineContent.step1.content.replace(/\n/g, '<br>');
  }
  if (detailSongLinkArea) {
    const linkUrl = song.videoUrl || (song.videoId ? `https://www.youtube.com/watch?v=${song.videoId}` : '');
    if (linkUrl) {
      detailSongLinkArea.innerHTML = `
        <a href="${linkUrl}" target="_blank" rel="noopener noreferrer" class="btn-routine-link">
          <span>🔗 찬양 바로가기 (${song.titleKo})</span>
        </a>
      `;
    }
  }

  // 3. Re-render Lounge cards if lounge is active
  if (typeof renderWorshipLounge === 'function') {
    renderWorshipLounge();
  }

  showStudioToast(`🎉 '${song.titleKo}'이(가) 이번 30분 기도모임의 찬양으로 설정되었습니다!`);
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
    showStudioToast(`💡 이 찬양은 가사 기반입니다. 상단의 YouTube 버튼을 통해 고화질로 감상하실 수 있습니다.`);
  }
}

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

function downloadCurrentLrc() {
  const song = worshipStudioState.currentSong;
  let lrcContent = `[ti:${song.titleKo}]\n[ar:${song.artist || 'Arise Next Gen'}]\n`;

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

// Global Window Exports
window.PRESET_PRAISE_SONGS = PRESET_PRAISE_SONGS;
window.worshipStudioState = worshipStudioState;
window.openWorshipStudio = openWorshipStudio;
window.closeWorshipStudio = closeWorshipStudio;
window.setCurrentMeetingSong = setCurrentMeetingSong;
window.selectWorshipSong = selectWorshipSong;
window.loadCustomSongs = loadCustomSongs;


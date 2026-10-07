/**
 * Arise Next-Gen Faith Next-Gen Storybook & Interactive Viewer (믿음의 후대관)
 * 다음 세대 믿음의 후대들을 위한 따뜻한 일러스트 동화책, 한/영 바이링구얼 내레이션,
 * 실시간 TTS 읽어주기, 배경 찬양 음악, 줌 발표 모드 및 PPTX 다운로드
 */

const KIDS_STORYBOOK_DATA = {
  id: "original-blessing",
  titleKo: "하나님의 가장 큰 선물, 원래 축복",
  titleEn: "God's Greatest Gift: The Original Blessing",
  subtitleKo: "창세기 1장과 복음의 5단계 여정",
  subtitleEn: "Genesis 1 & The 5-Step Gospel Journey",
  slides: [
    {
      chapterKo: "제 1장 · 아름다운 에덴",
      chapterEn: "Chapter 1 · Beautiful Eden",
      scripture: "창세기 1:27-28 (Genesis 1:27-28)",
      img: "assets/kids_gospel_1.jpg",
      titleKo: "하나님이 만드신 가장 아름다운 세상",
      titleEn: "The Most Beautiful World Created by God",
      textKo: "하나님께서 푸른 하늘과 바다, 예쁜 꽃과 나무, 그리고 귀여운 동물들을 만드셨어요. 그리고 하나님의 형상대로 우리 아이들을 가장 사랑스럽고 존귀하게 만드셨답니다.",
      textEn: "God created the clear blue sky and ocean, lovely blooming flowers, and wonderful animals. And in His own divine image, God lovingly created us to be dearly treasured!"
    },
    {
      chapterKo: "제 2장 · 창조의 원리",
      chapterEn: "Chapter 2 · The Order of Creation",
      scripture: "창세기 1:28, 시편 23:1 (Psalm 23:1)",
      img: "assets/kids_gospel_2.jpg",
      titleKo: "창조의 원리와 원래 축복",
      titleEn: "The Order of Creation & Original Blessing",
      textKo: "물고기는 시원한 물속에서, 새는 푸른 하늘을 날 때, 나무는 땅속에 뿌리를 깊이 내릴 때 가장 행복해요. 마찬가지로 사람은 언제나 하나님과 함께할 때 가장 참된 평안과 행복을 누려요.",
      textEn: "Fish are happiest in the water, birds are happiest soaring in the open sky, and trees flourish with roots deep in fertile soil. Likewise, we are truly joyful, safe, and blessed when we are with God!"
    },
    {
      chapterKo: "제 3장 · 약속의 빛",
      chapterEn: "Chapter 3 · The Light of Promise",
      scripture: "창세기 3:15, 로마서 3:23 (Romans 3:23)",
      img: "assets/kids_gospel_3.jpg",
      titleKo: "하나님을 떠난 슬픔과 약속의 빛",
      titleEn: "Separated from God & The Light of Promise",
      textKo: "물고기가 물을 떠나면 숨을 쉴 수 없듯이, 사람은 죄와 사탄에 속아 하나님을 떠나면서 슬픔과 두려움이 찾아왔어요. 하지만 하나님은 우리를 버려두지 않으시고, 구원의 빛을 약속해 주셨어요!",
      textEn: "Just as a fish suffers when taken out of water, humans fell into sorrow and fear when separated from God. But our loving Father never abandoned us; He promised a shining light of salvation and hope!"
    },
    {
      chapterKo: "제 4장 · 오직 예수 그리스도",
      chapterEn: "Chapter 4 · Only Jesus Christ",
      scripture: "요한복음 14:6, 요한복음 1:12 (John 1:12)",
      img: "assets/kids_gospel_4.jpg",
      titleKo: "우리를 찾아오신 예수 그리스도",
      titleEn: "Jesus Christ Who Came to Save Us",
      textKo: "예수님께서 우리를 너무나 사랑하셔서 이 땅에 오셨어요. 십자가에서 우리의 모든 아픔을 끝내시고 부활하셔서 하나님 만나는 참된 길이 되셨어요. 예수님을 마음에 모시면 우리는 영원한 하나님의 자녀예요!",
      textEn: "Jesus loved us so deeply that He came down to earth. Dying on the cross and rising again in victory, He became the only way to God. When we welcome Jesus into our hearts, we are forever God's precious children!"
    },
    {
      chapterKo: "제 5장 · 열방의 빛 (Arise Next-Gen)",
      chapterEn: "Chapter 5 · Light for All Nations",
      scripture: "이사야 60:1-3 (Isaiah 60:1), 마태복음 28:19",
      img: "assets/kids_gospel_5.jpg",
      titleKo: "열방을 비추는 믿음의 후대 (Arise Next-Gen)",
      titleEn: "Next-Gen of Faith Shining for All Nations",
      textKo: "\"일어나라 빛을 발하라!\" 우리는 온 세상을 밝히는 복음의 후대예요. 세계 모든 민족과 친구들에게 예수님의 사랑을 전하며, 세상을 살리는 빛으로 씩씩하게 자라나요!",
      textEn: "\"Arise, shine, for your light has come!\" We are the next generation of the gospel, shining Christ's love across the nations. Let us carry Jesus' light to every corner of the world with courage and joy!"
    }
  ]
};

// Kids Story State
let kidsStoryState = {
  currentSlideIndex: 0,
  langMode: 'bilingual', // 'bilingual' | 'ko' | 'en'
  viewerMode: 'storybook', // 'storybook' | 'video'
  isAutoPlay: false,
  autoPlayTimer: null,
  isSpeaking: false,
  isBgmPlaying: false,
  bgmAudio: null
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initKidsStorybook();
});

function initKidsStorybook() {
  const container = document.getElementById('kidsZoneSection') || document.getElementById('kids-zone');
  if (!container) return;

  renderKidsSlide(0, false);
  setupKidsKeyboardShortcuts();
  setupKidsTouchGestures();
  setupKidsBgm();
}

// Render Current Slide
function renderKidsSlide(index, animate = true) {
  const slides = KIDS_STORYBOOK_DATA.slides;
  if (index < 0) index = 0;
  if (index >= slides.length) index = slides.length - 1;

  kidsStoryState.currentSlideIndex = index;
  const slide = slides[index];

  // Visual Image update
  const imgEl = document.getElementById('kidsSlideImg');
  const frameEl = document.getElementById('kidsSlideFrame');
  const badgeEl = document.getElementById('kidsSlideBadge');
  const counterEl = document.getElementById('kidsPageCounter');

  if (imgEl) {
    if (animate) {
      imgEl.classList.add('kids-slide-fade-out');
      setTimeout(() => {
        imgEl.src = slide.img;
        imgEl.alt = slide.titleKo;
        imgEl.classList.remove('kids-slide-fade-out');
        imgEl.classList.add('kids-slide-zoom-in');
        setTimeout(() => imgEl.classList.remove('kids-slide-zoom-in'), 600);
      }, 150);
    } else {
      imgEl.src = slide.img;
      imgEl.alt = slide.titleKo;
    }
  }

  if (badgeEl) badgeEl.textContent = `Page ${index + 1} / ${slides.length}`;
  if (counterEl) counterEl.textContent = `${index + 1} / ${slides.length}`;

  // Content text update
  const chapterTag = document.getElementById('kidsChapterTag');
  const scriptureRef = document.getElementById('kidsScriptureRef');
  const titleKo = document.getElementById('kidsStoryTitleKo');
  const titleEn = document.getElementById('kidsStoryTitleEn');
  const textKo = document.getElementById('kidsTextKo');
  const textEn = document.getElementById('kidsTextEn');

  if (chapterTag) chapterTag.textContent = slide.chapterKo;
  if (scriptureRef) scriptureRef.textContent = `📖 ${slide.scripture}`;
  if (titleKo) titleKo.textContent = slide.titleKo;
  if (titleEn) titleEn.textContent = slide.titleEn;
  if (textKo) textKo.textContent = slide.textKo;
  if (textEn) textEn.textContent = slide.textEn;

  // Render Dots
  renderKidsDots(index, slides.length);

  // Update Button States
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  if (btnPrev) btnPrev.disabled = (index === 0);
  if (btnNext) btnNext.disabled = (index === slides.length - 1);

  // If Fullscreen Modal is open, update its elements as well
  updateKidsFullscreenSlide(slide, index, slides.length);

  // If reading aloud was actively running, read current page
  if (kidsStoryState.isSpeaking) {
    speakKidsCurrentPage();
  }
}

// Render Dots Indicator
function renderKidsDots(currentIndex, total) {
  const container = document.getElementById('kidsDotsContainer');
  if (!container) return;

  container.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `kids-dot ${i === currentIndex ? 'active' : ''}`;
    dot.title = `${i + 1}장으로 이동`;
    dot.setAttribute('aria-label', `${i + 1}장`);
    dot.onclick = () => goToKidsSlide(i);
    container.appendChild(dot);
  }
}

// Navigation Functions
function nextKidsSlide() {
  if (kidsStoryState.currentSlideIndex < KIDS_STORYBOOK_DATA.slides.length - 1) {
    renderKidsSlide(kidsStoryState.currentSlideIndex + 1, true);
  } else if (kidsStoryState.isAutoPlay) {
    // Loop back to start in autoplay
    renderKidsSlide(0, true);
  }
}

function prevKidsSlide() {
  if (kidsStoryState.currentSlideIndex > 0) {
    renderKidsSlide(kidsStoryState.currentSlideIndex - 1, true);
  }
}

function goToKidsSlide(index) {
  renderKidsSlide(index, true);
}

// Language Mode Switcher
function setKidsStoryLang(mode) {
  kidsStoryState.langMode = mode;

  const btnBi = document.getElementById('btnKidsLangBilingual');
  const btnKo = document.getElementById('btnKidsLangKo');
  const btnEn = document.getElementById('btnKidsLangEn');
  [btnBi, btnKo, btnEn].forEach(btn => btn && btn.classList.remove('active'));

  if (mode === 'bilingual' && btnBi) btnBi.classList.add('active');
  if (mode === 'ko' && btnKo) btnKo.classList.add('active');
  if (mode === 'en' && btnEn) btnEn.classList.add('active');

  const card = document.getElementById('kidsStoryCard');
  if (card) {
    card.classList.remove('mode-bilingual', 'mode-ko', 'mode-en');
    card.classList.add(`mode-${mode}`);
  }

  const modalCard = document.getElementById('kidsModalStoryCard');
  if (modalCard) {
    modalCard.classList.remove('mode-bilingual', 'mode-ko', 'mode-en');
    modalCard.classList.add(`mode-${mode}`);
  }

  // If speech is active, restart with selected language
  if (kidsStoryState.isSpeaking) {
    speakKidsCurrentPage();
  }
}

// Viewer Mode Switcher: Storybook vs Video
function switchKidsViewerMode(mode) {
  kidsStoryState.viewerMode = mode;
  const tabStory = document.getElementById('tabBookStorybook');
  const tabVideo = document.getElementById('tabBookVideo');
  const viewStory = document.getElementById('kidsStorybookMode');
  const viewVideo = document.getElementById('kidsVideoMode');

  if (tabStory) tabStory.classList.toggle('active', mode === 'storybook');
  if (tabVideo) tabVideo.classList.toggle('active', mode === 'video');

  if (viewStory) viewStory.style.display = (mode === 'storybook') ? 'block' : 'none';
  if (viewVideo) viewVideo.style.display = (mode === 'video') ? 'block' : 'none';

  const videoPlayer = document.getElementById('kidsVideoPlayer');
  if (mode === 'video' && videoPlayer) {
    // If BGM is playing, stop it so video audio plays cleanly
    stopKidsBgm();
    stopKidsSpeech();
  } else if (mode === 'storybook' && videoPlayer) {
    videoPlayer.pause();
  }
}

// Auto-Play Feature (every 6.5 seconds flip page)
function toggleKidsAutoPlay() {
  kidsStoryState.isAutoPlay = !kidsStoryState.isAutoPlay;
  const btn = document.getElementById('btnKidsAutoPlay');
  const modalBtn = document.getElementById('btnModalAutoPlay');

  if (kidsStoryState.isAutoPlay) {
    if (btn) btn.innerHTML = '⏸️ 넘김 일시정지';
    if (modalBtn) modalBtn.innerHTML = '⏸️ 넘김 일시정지';
    kidsStoryState.autoPlayTimer = setInterval(() => {
      nextKidsSlide();
    }, 6500);
  } else {
    if (btn) btn.innerHTML = '▶️ 자동 넘김';
    if (modalBtn) modalBtn.innerHTML = '▶️ 자동 넘김';
    if (kidsStoryState.autoPlayTimer) {
      clearInterval(kidsStoryState.autoPlayTimer);
      kidsStoryState.autoPlayTimer = null;
    }
  }
}

// TTS (Text-to-Speech) Read Aloud Feature
function toggleKidsSpeech() {
  if (!('speechSynthesis' in window)) {
    alert("현재 브라우저에서는 음성 낭독(TTS) 기능을 지원하지 않습니다.");
    return;
  }

  const btn = document.getElementById('btnKidsTts');
  const modalBtn = document.getElementById('btnModalTts');

  if (kidsStoryState.isSpeaking) {
    stopKidsSpeech();
    if (btn) btn.innerHTML = '🔊 소리내어 읽기';
    if (modalBtn) modalBtn.innerHTML = '🔊 소리내어 읽기';
  } else {
    kidsStoryState.isSpeaking = true;
    if (btn) btn.innerHTML = '⏹️ 낭독 멈추기';
    if (modalBtn) modalBtn.innerHTML = '⏹️ 낭독 멈추기';
    speakKidsCurrentPage();
  }
}

function stopKidsSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  kidsStoryState.isSpeaking = false;
  const btn = document.getElementById('btnKidsTts');
  const modalBtn = document.getElementById('btnModalTts');
  if (btn) btn.innerHTML = '🔊 소리내어 읽기';
  if (modalBtn) modalBtn.innerHTML = '🔊 소리내어 읽기';
}

function speakKidsCurrentPage() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  if (!slide) return;

  let textToSpeak = '';
  let lang = 'ko-KR';

  if (kidsStoryState.langMode === 'en') {
    textToSpeak = `${slide.titleEn}. ${slide.textEn}`;
    lang = 'en-US';
  } else {
    textToSpeak = `${slide.titleKo}. ${slide.textKo}`;
    lang = 'ko-KR';
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = lang;
  utterance.rate = 0.92; // Slightly gentle, calm speed for kids
  utterance.pitch = 1.08; // Friendly warm tone

  utterance.onend = () => {
    // If autoplay is also on, it naturally flows
  };

  utterance.onerror = () => {
    kidsStoryState.isSpeaking = false;
    const btn = document.getElementById('btnKidsTts');
    if (btn) btn.innerHTML = '🔊 소리내어 읽기';
  };

  window.speechSynthesis.speak(utterance);
}

// Background Praise BGM Setup
function setupKidsBgm() {
  kidsStoryState.bgmAudio = new Audio('assets/only_by_grace.mp3');
  kidsStoryState.bgmAudio.loop = true;
  kidsStoryState.bgmAudio.volume = 0.18; // Soft gentle ambient level
}

function toggleKidsBgm() {
  if (!kidsStoryState.bgmAudio) setupKidsBgm();

  const btn = document.getElementById('btnKidsBgm');
  const modalBtn = document.getElementById('btnModalBgm');

  if (kidsStoryState.isBgmPlaying) {
    stopKidsBgm();
    if (btn) btn.innerHTML = '🎵 배경음악';
    if (modalBtn) modalBtn.innerHTML = '🎵 배경음악';
  } else {
    kidsStoryState.bgmAudio.play().then(() => {
      kidsStoryState.isBgmPlaying = true;
      if (btn) btn.innerHTML = '⏸️ 배경음악 끄기';
      if (modalBtn) modalBtn.innerHTML = '⏸️ 배경음악 끄기';
    }).catch(err => {
      console.warn("Autoplay audio blocked or error:", err);
    });
  }
}

function stopKidsBgm() {
  if (kidsStoryState.bgmAudio) {
    kidsStoryState.bgmAudio.pause();
  }
  kidsStoryState.isBgmPlaying = false;
  const btn = document.getElementById('btnKidsBgm');
  const modalBtn = document.getElementById('btnModalBgm');
  if (btn) btn.innerHTML = '🎵 배경음악';
  if (modalBtn) modalBtn.innerHTML = '🎵 배경음악';
}

// Fullscreen Presentation Mode (Zoom / Sunday School TV)
function openKidsFullscreen() {
  const modal = document.getElementById('kidsFullscreenModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  updateKidsFullscreenSlide(slide, kidsStoryState.currentSlideIndex, KIDS_STORYBOOK_DATA.slides.length);
}

function closeKidsFullscreen() {
  const modal = document.getElementById('kidsFullscreenModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateKidsFullscreenSlide(slide, index, total) {
  const modalImg = document.getElementById('kidsModalImg');
  const modalBadge = document.getElementById('kidsModalBadge');
  const modalChap = document.getElementById('kidsModalChap');
  const modalScript = document.getElementById('kidsModalScript');
  const modalTitleKo = document.getElementById('kidsModalTitleKo');
  const modalTitleEn = document.getElementById('kidsModalTitleEn');
  const modalTextKo = document.getElementById('kidsModalTextKo');
  const modalTextEn = document.getElementById('kidsModalTextEn');

  if (modalImg) modalImg.src = slide.img;
  if (modalBadge) modalBadge.textContent = `${index + 1} / ${total}`;
  if (modalChap) modalChap.textContent = slide.chapterKo;
  if (modalScript) modalScript.textContent = `📖 ${slide.scripture}`;
  if (modalTitleKo) modalTitleKo.textContent = slide.titleKo;
  if (modalTitleEn) modalTitleEn.textContent = slide.titleEn;
  if (modalTextKo) modalTextKo.textContent = slide.textKo;
  if (modalTextEn) modalTextEn.textContent = slide.textEn;
}

// Keyboard arrow navigation
function setupKidsKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Only handle if kids zone or modal is visible and not typing in an input
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
      nextKidsSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      prevKidsSlide();
    } else if (e.key === 'Escape') {
      closeKidsFullscreen();
    }
  });
}

// Touch swipe gestures for mobile
function setupKidsTouchGestures() {
  const frame = document.getElementById('kidsSlideFrame');
  const modalFrame = document.getElementById('kidsModalFrame');

  [frame, modalFrame].forEach(el => {
    if (!el) return;
    let startX = 0;
    let startY = 0;

    el.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;

      // Horizontal swipe threshold 45px
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextKidsSlide(); // swipe left = next
        } else {
          prevKidsSlide(); // swipe right = prev
        }
      }
    }, { passive: true });
  });
}

// PowerPoint (.pptx) Generator for Sunday School
function downloadKidsStorybookPptx() {
  if (typeof PptxGenJS === 'undefined') {
    alert("PowerPoint 생성 모듈(pptxgen.bundle.js)을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
    return;
  }

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Arise Next-Gen Global Faith Hub';
  pptx.company = 'Arise Next-Gen';
  pptx.title = '믿음의 후대 복음 동화 - 원래 축복 (Original Blessing)';

  // Slide 1: Cover
  const sCover = pptx.addSlide();
  sCover.background = { color: '0A192F' };
  sCover.addText("🌱 ARISE NEXT-GEN OF FAITH", {
    x: 0.8, y: 0.8, w: 11.5, h: 0.5,
    fontSize: 14, color: '38BDF8', bold: true, align: 'center', letterSpacing: 2
  });
  sCover.addText("말씀과 그림으로 만나는 믿음의 후대 복음 동화", {
    x: 0.8, y: 1.4, w: 11.5, h: 0.5,
    fontSize: 16, color: 'F59E0B', bold: true, align: 'center'
  });
  sCover.addText("하나님의 가장 큰 선물, 원래 축복", {
    x: 0.8, y: 2.2, w: 11.5, h: 1.2,
    fontSize: 36, color: 'FFFFFF', bold: true, align: 'center'
  });
  sCover.addText("God's Greatest Gift: The Original Blessing", {
    x: 0.8, y: 3.5, w: 11.5, h: 0.7,
    fontSize: 20, color: '93C5FD', italic: true, align: 'center'
  });
  sCover.addText("📖 창세기 1:27-28 (Genesis 1:27-28) & 5단계 복음의 여정", {
    x: 0.8, y: 4.4, w: 11.5, h: 0.6,
    fontSize: 16, color: '34D399', bold: true, align: 'center'
  });
  sCover.addText("주일학교 공과 / 다민족 Zoom 나눔 / 가정 예배 슬라이드", {
    x: 0.8, y: 6.2, w: 11.5, h: 0.5,
    fontSize: 12, color: '64748B', align: 'center'
  });

  // Slides 2 to 6: 5 Chapters
  KIDS_STORYBOOK_DATA.slides.forEach((item, idx) => {
    const s = pptx.addSlide();
    s.background = { color: '0F172A' };

    // Header bar
    s.addText(`${item.chapterKo} • ${item.chapterEn}`, {
      x: 0.6, y: 0.4, w: 8.0, h: 0.4,
      fontSize: 12, color: '38BDF8', bold: true
    });
    s.addText(`📖 ${item.scripture}`, {
      x: 8.6, y: 0.4, w: 4.0, h: 0.4,
      fontSize: 11, color: '34D399', align: 'right', bold: true
    });

    // Illustration Image (Left Side)
    try {
      s.addImage({
        path: item.img,
        x: 0.6, y: 0.9, w: 6.8, h: 5.6
      });
    } catch(e) {
      console.warn("Could not embed image directly to PPT:", e);
    }

    // Right Side: Card Box
    s.addShape(pptx.ShapeType.roundRect, {
      x: 7.7, y: 0.9, w: 4.9, h: 5.6,
      fill: { color: '1E293B' },
      line: { color: '38BDF8', width: 1.5 }
    });

    // Title (Korean)
    s.addText(item.titleKo, {
      x: 8.0, y: 1.2, w: 4.3, h: 0.8,
      fontSize: 20, color: 'FFFFFF', bold: true
    });
    // Title (English)
    s.addText(item.titleEn, {
      x: 8.0, y: 2.0, w: 4.3, h: 0.6,
      fontSize: 14, color: 'F59E0B', italic: true, bold: true
    });

    // Story Text (Korean)
    s.addText(item.textKo, {
      x: 8.0, y: 2.7, w: 4.3, h: 1.8,
      fontSize: 13, color: 'F8FAFC', lineSpacing: 22
    });

    // Story Text (English)
    s.addText(item.textEn, {
      x: 8.0, y: 4.6, w: 4.3, h: 1.6,
      fontSize: 11, color: '94A3B8', italic: true, lineSpacing: 18
    });
  });

  // Save PPTX
  const filename = `어라이즈_믿음의후대_복음동화_원래축복_${new Date().toISOString().slice(0,10)}.pptx`;
  pptx.writeFile({ fileName: filename }).then(() => {
    if (typeof showToast === 'function') {
      showToast("📥 믿음의 후대 복음 동화 PPTX 슬라이드가 성공적으로 생성되었습니다!");
    } else {
      alert("📥 믿음의 후대 복음 동화 PPTX 슬라이드가 다운로드되었습니다.");
    }
  }).catch(err => {
    console.error("PPTX write error:", err);
  });
}

// Global window exposure
window.nextKidsSlide = nextKidsSlide;
window.prevKidsSlide = prevKidsSlide;
window.goToKidsSlide = goToKidsSlide;
window.setKidsStoryLang = setKidsStoryLang;
window.switchKidsViewerMode = switchKidsViewerMode;
window.toggleKidsAutoPlay = toggleKidsAutoPlay;
window.toggleKidsSpeech = toggleKidsSpeech;
window.toggleKidsBgm = toggleKidsBgm;
window.openKidsFullscreen = openKidsFullscreen;
window.closeKidsFullscreen = closeKidsFullscreen;
window.downloadKidsStorybookPptx = downloadKidsStorybookPptx;

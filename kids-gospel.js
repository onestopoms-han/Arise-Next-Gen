/**
 * Arise Next-Gen Faith Next-Gen Storybook & Interactive Viewer (믿음의 후대관)
 * 창세기 1장~3장의 원색 복음 흐름: 원래인간(창 1:31 심히 좋았더라) -> 생명 언약 -> 사탄의 유혹
 * -> 숨음과 핑계 -> 창 3:15 여자의 후손 -> 창 3:21 가죽옷(피의 언약) -> 원래 축복의 회복
 * 실시간 고품질 TTS 음성 낭독 (Web Speech API 최적화 보이스 엔진)
 */

const KIDS_STORYBOOK_DATA = {
  id: "original-blessing",
  titleKo: "하나님의 가장 큰 선물, 원래 인간과 피의 언약",
  titleEn: "God's Greatest Gift: The Original Human & The Covenant of Blood",
  subtitleKo: "창세기 1장부터 3장까지 이어지는 구원의 7단계 여정",
  subtitleEn: "The 7-Step Journey of Salvation from Genesis 1 to 3",
  slides: [
    {
      chapterKo: "제 1장 · 심히 좋았더라",
      chapterEn: "Chapter 1 · Exceedingly Good",
      scripture: "창세기 1:27, 31 (Genesis 1:27, 31)",
      img: "assets/kids_gospel_1.jpg",
      titleKo: "하나님의 심히 큰 기쁨, 원래 인간",
      titleEn: "God's Exceeding Joy: The Original Human",
      textKo: "하나님께서 푸른 하늘과 바다, 예쁜 꽃과 귀여운 동물들을 만드시고는 \"참 보기 좋다!\" 하셨어요. 그리고 하나님의 형상대로 사람을 만드시고는 온 마음으로 기뻐하시며 \"와아! 너무너무 좋아서 내 마음이 꽉 찬다! 심히 좋다!\" 하고 감탄하셨답니다. 사람은 언제나 하나님 품에서 영원히 행복하도록 지어진 최고의 보물이에요!",
      textEn: "God created the clear skies, oceans, blooming flowers, and lovely animals, saying, \"It is good!\" Then God created humans in His own divine image and rejoiced with deep joy: \"It is exceedingly, wonderfully good!\" We were created as God's treasured masterpiece, designed to be completely joyful and safe in His loving presence!"
    },
    {
      chapterKo: "제 2장 · 생명의 사랑 언약",
      chapterEn: "Chapter 2 · The Covenant of Life",
      scripture: "창세기 1:28, 창세기 2:16-17",
      img: "assets/kids_gospel_2.jpg",
      titleKo: "사랑의 안전벨트, 생명의 언약",
      titleEn: "The Covenant of Life & Sacred Promise",
      textKo: "하나님은 사람에게 모든 것을 다스리고 누리는 엄청난 축복을 주시고, 서로 사랑할 돕는 배필 하와를 선물로 주셨어요. 그리고 단 하나의 사랑의 약속을 주셨지요. \"동산 중앙의 선악을 알게 하는 나무 열매는 절대 먹지 마라, 먹으면 반드시 죽으리라!\" 이 약속은 우리를 구속하는 것이 아니라, 하나님 품 안에 있을 때 가장 안전하다는 생명의 안전벨트였답니다.",
      textEn: "God blessed humans to care for all creation and gave a loving helper, Eve, to share life together. God also gave one sacred promise: \"You must not eat from the tree of the knowledge of good and evil, for when you eat from it, you will certainly die.\" Like a protective seatbelt, this loving covenant kept us safe, holy, and truly blessed."
    },
    {
      chapterKo: "제 3장 · 거짓말쟁이 뱀의 유혹",
      chapterEn: "Chapter 3 · The Serpent's Deceit",
      scripture: "창세기 3:1-6 (Genesis 3:1-6)",
      img: "assets/kids_gospel_fall.jpg",
      titleKo: "약속을 깨뜨린 거짓말쟁이 뱀",
      titleEn: "The Serpent's Lie & The Broken Covenant",
      textKo: "인간이 누리는 큰 행복을 몹시 질투한 옛 뱀(사탄, 마귀)이 찾아왔어요. 뱀은 돕는 배필 하와에게 다가가 달콤하게 속삭였어요. \"결코 죽지 않아! 그걸 먹으면 하나님처럼 대단해질 거야!\" 결국 하나님의 말씀보다 사탄의 거짓말에 속아 선악과를 따먹고, 하나님과의 소중한 언약을 와장창 깨뜨려버렸어요.",
      textEn: "Jealous of human happiness, the ancient serpent (Satan) approached Eve with a deceitful whisper: \"You will not certainly die! If you eat it, your eyes will open and you will be like God!\" Believing Satan's lie over God's word of love, humans ate the forbidden fruit and broke the sacred covenant with their Creator."
    },
    {
      chapterKo: "제 4장 · 숨음과 핑계",
      chapterEn: "Chapter 4 · Shame, Hiding & Blame",
      scripture: "창세기 3:7-13, 로마서 3:23",
      img: "assets/kids_gospel_3.jpg",
      titleKo: "\"아담아, 네가 어디 있느냐?\"",
      titleEn: "\"Where Are You?\" – Fear & Broken Fellowship",
      textKo: "하나님을 떠나자마자 마음속에 평안이 사라지고 부끄러움과 두려움이 찾아왔어요. 아담과 하와는 시들어버릴 나뭇잎으로 몸을 가리고 나무 뒤에 숨었지요. 다 아시는 하나님께서 \"네가 어디 있느냐?\" 부르시며 찾아오셨지만, 아담은 아내에게, 하와는 뱀에게 잘못을 떠넘기며 핑계를 대기 시작했어요. 죄로 인해 사랑의 관계가 다 깨어져버린 거예요.",
      textEn: "Separated from God, true peace vanished, replaced by sudden shame and fear. Adam and Eve hid behind the trees in fragile fig leaves. When God tenderly called out, \"Where are you?\", Adam blamed his beloved wife, and Eve blamed the serpent. Sin tore apart their sweet relationship with God and one another."
    },
    {
      chapterKo: "제 5장 · 여자의 후손",
      chapterEn: "Chapter 5 · The Seed of the Woman",
      scripture: "창세기 3:14-15 (Genesis 3:15)",
      img: "assets/kids_gospel_promise.jpg",
      titleKo: "뱀의 머리를 깨뜨릴 살 길, 여자의 후손",
      titleEn: "Crushing the Serpent: The Seed of the Woman",
      textKo: "하나님은 죄를 범한 사람과 뱀에게 공의의 책임을 물으셨어요. 하지만 하나님은 우리가 사탄의 노예로 멸망하도록 내버려 두지 않으셨답니다! 그래서 즉시 놀라운 구원의 살 길을 주셨어요. \"여자의 후손이 와서 뱀의 머리를 완전히 박살 낼 것이다!(창세기 3장 15절)\" 사탄의 권세를 꺾으시고 우리를 다시 살리실 구원자 예수 그리스도를 약속해 주신 거예요!",
      textEn: "God held humans and the serpent accountable for sin. Yet our loving Father would never abandon us to despair! Immediately, He proclaimed the glorious promise of salvation: \"The offspring of the woman will crush the serpent's head! (Genesis 3:15)\" God promised Jesus Christ, the Victorious King who breaks Satan's grip and restores our eternal life!"
    },
    {
      chapterKo: "제 6장 · 따뜻한 가죽옷 (피의 언약)",
      chapterEn: "Chapter 6 · Coats of Skin (Blood Covenant)",
      scripture: "창세기 3:21, 히브리서 9:22",
      img: "assets/kids_gospel_leather_coat.jpg",
      titleKo: "피의 언약, 따뜻한 가죽옷을 입히시다",
      titleEn: "The Covenant of Blood: Clothed in Grace",
      textKo: "부끄러워 떨고 있는 아담과 하와를 보시며 하나님의 마음은 찢어지듯 아프셨어요. 그래서 쉽게 부서지는 나뭇잎 대신, 하나님이 직접 따뜻한 '가죽옷'을 지어 입혀주셨답니다. 가죽옷을 만들려면 죄 없는 어린양이 대신 피를 흘려야만 했어요. 장차 십자가에서 피 흘려 우리의 모든 죄와 부끄러움을 덮어주실 예수님의 피의 언약이었답니다!",
      textEn: "Looking at trembling Adam and Eve, God's heart overflowed with tender compassion. Instead of frail leaves, God lovingly fashioned warm coats of skin and clothed them. An innocent lamb had to bleed and sacrifice its life to provide these garments. This was the blood covenant pointing to Jesus, whose sacrifice on the cross covers all our shame and sin!"
    },
    {
      chapterKo: "제 7장 · 원래 축복의 회복",
      chapterEn: "Chapter 7 · Restored in Christ",
      scripture: "요한복음 19:30, 요한복음 1:12, 이사야 60:1",
      img: "assets/kids_gospel_4.jpg",
      titleKo: "원래 축복을 회복한 믿음의 후대",
      titleEn: "Original Blessing Restored: Next-Gen of Faith",
      textKo: "예수님께서 십자가에서 \"다 이루었다!\" 선포하시며 뱀의 머리를 깨뜨리시고 하나님 만나는 참된 길이 되셨어요! 이제 예수님을 마음에 모신 우리는 하나님이 \"심히 좋다!\" 감탄하셨던 원래 인간의 참 행복을 완전히 되찾았답니다. 우리는 세상을 살리는 빛, 하나님의 가장 큰 기쁨인 믿음의 후대(Arise Next-Gen)예요!",
      textEn: "On the cross, Jesus proclaimed, \"It is finished!\", crushing Satan and opening the living way back to God! When we welcome Jesus into our hearts, our original blessing of pure joy and peace is forever restored. We are beloved children of God, rising as faithful Next-Gen to shine Christ's light across all nations!"
    }
  ]
};

// Kids Story State
let kidsStoryState = {
  currentSlideIndex: 0,
  langMode: 'bilingual', // 'bilingual' | 'ko' | 'en'
  viewerMode: 'storybook', // 'storybook' | 'video'
  isAutoPlay: false,
  isSpeechActive: false, // User enabled read-aloud mode
  autoPlayTimer: null,   // Timer for silent auto-play (when TTS is off)
  autoAdvanceTimer: null, // Timer for advancing after speech finishes
  isBgmPlaying: false,
  bgmAudio: null
};

// TTS Engine State & Voice Cache
let kidsVoices = [];
let kidsKeepAliveTimer = null;
let kidsUtteranceTimer = null;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initKidsStorybook();
  initKidsVoices();
});

function initKidsStorybook() {
  const container = document.getElementById('kidsZoneSection') || document.getElementById('kids-zone');
  if (!container) return;

  renderKidsSlide(0, false);
  setupKidsKeyboardShortcuts();
  setupKidsTouchGestures();
  setupKidsBgm();

  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  updateKidsZoneLanguage(lang);
}

// -------------------------------------------------------------
// Voice Cache Initialization (Handles Chrome/Edge Async Loading)
// -------------------------------------------------------------
function initKidsVoices() {
  if (!('speechSynthesis' in window)) return;

  function loadVoices() {
    kidsVoices = window.speechSynthesis.getVoices() || [];
  }

  loadVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

// Pick the best natural voice for Korean or English
function getBestVoice(targetLang) {
  if (!kidsVoices || kidsVoices.length === 0) {
    kidsVoices = window.speechSynthesis.getVoices() || [];
  }
  if (!kidsVoices || kidsVoices.length === 0) return null;

  if (targetLang.startsWith('ko')) {
    // 1. Natural / Online voices (Edge/Windows: Heami, SunHi)
    let v = kidsVoices.find(voice => 
      voice.lang.includes('KR') && 
      (voice.name.includes('Natural') || voice.name.includes('Online'))
    );
    // 2. Google Korean or Heami / SunHi
    if (!v) {
      v = kidsVoices.find(voice => 
        voice.lang.startsWith('ko') && 
        (voice.name.includes('Heami') || voice.name.includes('SunHi') || voice.name.includes('혜미') || voice.name.includes('선희') || voice.name.includes('Google'))
      );
    }
    // 3. Any Korean voice
    if (!v) {
      v = kidsVoices.find(voice => voice.lang.startsWith('ko') || voice.lang.includes('KR'));
    }
    return v || null;
  } else {
    // English: Priority to high-quality natural voices (Jenny, Aria, Guy, Google US English, Samantha, Zira)
    let v = kidsVoices.find(voice => 
      (voice.lang === 'en-US' || voice.lang === 'en-GB') && 
      (voice.name.includes('Natural') || voice.name.includes('Online') || voice.name.includes('Jenny') || voice.name.includes('Aria'))
    );
    if (!v) {
      v = kidsVoices.find(voice => 
        (voice.lang === 'en-US' || voice.lang === 'en-GB') && 
        (voice.name.includes('Google') || voice.name.includes('Zira') || voice.name.includes('Samantha') || voice.name.includes('David'))
      );
    }
    if (!v) {
      v = kidsVoices.find(voice => voice.lang.startsWith('en'));
    }
    return v || null;
  }
}

// Helper: Clear all active auto-play & advance timers
function clearAllAutoTimers() {
  if (kidsStoryState.autoPlayTimer) {
    clearTimeout(kidsStoryState.autoPlayTimer);
    clearInterval(kidsStoryState.autoPlayTimer);
    kidsStoryState.autoPlayTimer = null;
  }
  if (kidsStoryState.autoAdvanceTimer) {
    clearTimeout(kidsStoryState.autoAdvanceTimer);
    kidsStoryState.autoAdvanceTimer = null;
  }
}

// -------------------------------------------------------------
// Slide Rendering
// -------------------------------------------------------------
function renderKidsSlide(index, animate = true) {
  clearAllAutoTimers();

  const slides = KIDS_STORYBOOK_DATA.slides;
  if (index < 0) index = 0;
  if (index >= slides.length) index = slides.length - 1;

  kidsStoryState.currentSlideIndex = index;
  const slide = slides[index];

  // Visual Image update
  const imgEl = document.getElementById('kidsSlideImg');
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

  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  if (chapterTag) {
    chapterTag.textContent = (lang === 'ko') 
      ? slide.chapterKo 
      : (lang === 'en' ? slide.chapterEn : `${slide.chapterEn} (${slide.chapterKo})`);
  }
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

  // Update Fullscreen Modal if present
  updateKidsFullscreenSlide(slide, index, slides.length);

  // 🌟 Smart Speech & Auto-Play Coordination:
  if (kidsStoryState.isSpeechActive) {
    // When read-aloud is ON, read current slide immediately!
    // Never start a fixed timer while reading; finishSpeaking() will trigger next slide upon completion.
    speakKidsCurrentPage();
  } else if (kidsStoryState.isAutoPlay) {
    // When read-aloud is OFF, advance after 8.5 seconds of silent reading.
    kidsStoryState.autoPlayTimer = setTimeout(() => {
      if (kidsStoryState.isAutoPlay && !kidsStoryState.isSpeechActive) {
        nextKidsSlide();
      }
    }, 8500);
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
  clearAllAutoTimers();
  if (kidsStoryState.currentSlideIndex < KIDS_STORYBOOK_DATA.slides.length - 1) {
    renderKidsSlide(kidsStoryState.currentSlideIndex + 1, true);
  } else if (kidsStoryState.isAutoPlay) {
    // When auto-play is on, loop back to the first slide
    renderKidsSlide(0, true);
  }
}

function prevKidsSlide() {
  clearAllAutoTimers();
  if (kidsStoryState.currentSlideIndex > 0) {
    renderKidsSlide(kidsStoryState.currentSlideIndex - 1, true);
  }
}

function goToKidsSlide(index) {
  clearAllAutoTimers();
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

  if (kidsStoryState.isSpeechActive) {
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
    stopKidsBgm();
    stopKidsSpeech();
  } else if (mode === 'storybook' && videoPlayer) {
    videoPlayer.pause();
  }
}

function updateAutoPlayButtonUI() {
  const btn = document.getElementById('btnKidsAutoPlay');
  const modalBtn = document.getElementById('btnModalAutoPlay');
  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : ((typeof translations !== 'undefined' && translations['en']) ? translations['en'] : null);

  const playText = (t && t.kids_btn_autoplay) || '▶️ 자동 넘김';
  const pauseText = (t && t.kids_btn_pause) || '⏸️ 넘김 일시정지';
  const text = kidsStoryState.isAutoPlay ? pauseText : playText;

  if (btn) btn.innerHTML = text;
  if (modalBtn) modalBtn.innerHTML = text;
}

// -------------------------------------------------------------
// Auto-Play Feature (Intelligently synchronized with Speech)
// -------------------------------------------------------------
function toggleKidsAutoPlay() {
  kidsStoryState.isAutoPlay = !kidsStoryState.isAutoPlay;
  updateAutoPlayButtonUI();

  clearAllAutoTimers();

  if (kidsStoryState.isAutoPlay) {
    // If reading is currently active, DO NOT start a conflicting timer!
    // speech completion (finishSpeaking) will smoothly trigger next slide.
    if (!kidsStoryState.isSpeechActive) {
      kidsStoryState.autoPlayTimer = setTimeout(() => {
        if (kidsStoryState.isAutoPlay && !kidsStoryState.isSpeechActive) {
          nextKidsSlide();
        }
      }, 8500);
    }
  }
}

// -------------------------------------------------------------
// Robust TTS (Text-to-Speech) Read Aloud Feature
// -------------------------------------------------------------
function updateTtsButtonUI(isSpeaking) {
  const btn = document.getElementById('btnKidsTts');
  const modalBtn = document.getElementById('btnModalTts');

  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : ((typeof translations !== 'undefined' && translations['en']) ? translations['en'] : null);

  const readText = (t && t.kids_btn_read_aloud) || '🔊 소리내어 읽기';
  const stopText = (t && t.kids_btn_stop_reading) || '⏹️ 낭독 멈추기';
  const text = isSpeaking ? stopText : readText;

  if (btn) {
    btn.innerHTML = text;
    btn.classList.toggle('tts-active', isSpeaking);
  }
  if (modalBtn) {
    modalBtn.innerHTML = text;
    modalBtn.classList.toggle('tts-active', isSpeaking);
  }
}

function toggleKidsSpeech() {
  if (!('speechSynthesis' in window)) {
    alert("현재 브라우저에서는 음성 낭독(TTS) 기능을 지원하지 않습니다. 크롬(Chrome)이나 엣지(Edge) 브라우저를 사용해 주세요.");
    return;
  }

  if (kidsStoryState.isSpeechActive) {
    stopKidsSpeech();
  } else {
    kidsStoryState.isSpeechActive = true;
    updateTtsButtonUI(true);
    speakKidsCurrentPage();
  }
}

function stopKidsSpeech() {
  clearAllAutoTimers();
  if (kidsUtteranceTimer) {
    clearTimeout(kidsUtteranceTimer);
    kidsUtteranceTimer = null;
  }
  if (kidsKeepAliveTimer) {
    clearInterval(kidsKeepAliveTimer);
    kidsKeepAliveTimer = null;
  }

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  kidsStoryState.isSpeechActive = false;
  updateTtsButtonUI(false);

  // Restore BGM volume if it was lowered
  if (kidsStoryState.bgmAudio && kidsStoryState.isBgmPlaying) {
    kidsStoryState.bgmAudio.volume = 0.18;
  }

  // If auto-play was on and speech was stopped, resume normal 8.5s silent timer
  if (kidsStoryState.isAutoPlay) {
    kidsStoryState.autoPlayTimer = setTimeout(() => {
      if (kidsStoryState.isAutoPlay && !kidsStoryState.isSpeechActive) {
        nextKidsSlide();
      }
    }, 8500);
  }
}

function speakKidsCurrentPage() {
  if (!('speechSynthesis' in window)) return;

  clearAllAutoTimers();
  if (kidsUtteranceTimer) clearTimeout(kidsUtteranceTimer);
  if (kidsKeepAliveTimer) clearInterval(kidsKeepAliveTimer);

  // Cancel prior speech
  window.speechSynthesis.cancel();

  // If paused by browser bug, resume
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }

  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  if (!slide) return;

  const mode = kidsStoryState.langMode; // 'bilingual' | 'ko' | 'en'

  // Chromium bug fix: Must wait 60ms after cancel() before calling speak()
  kidsUtteranceTimer = setTimeout(() => {
    try {
      kidsStoryState.isSpeechActive = true;
      updateTtsButtonUI(true);

      // Duck background music smoothly while speaking
      if (kidsStoryState.bgmAudio && kidsStoryState.isBgmPlaying) {
        kidsStoryState.bgmAudio.volume = 0.05;
      }

      function cleanTextForSpeechKo(text) {
        if (!text) return '';
        return text
          .replace(/창\s*(\d+)[:장]\s*(\d+)절?/g, '창세기 $1장 $2절')
          .replace(/창세기\s*(\d+):(\d+)/g, '창세기 $1장 $2절')
          .replace(/(\d+):(\d+)/g, '$1장 $2절') // '3:15' -> '3장 15절' (시간 오인식 영구 방지)
          .replace(/·/g, ', ')
          .replace(/[\(\)]/g, ', ');
      }

      const rawTextKo = `${slide.chapterKo}. ${slide.titleKo}. ${slide.textKo}`;
      const textKo = cleanTextForSpeechKo(rawTextKo);
      const textEn = `${slide.chapterEn}. ${slide.titleEn}. ${slide.textEn}`;

      function createUtterance(text, lang) {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = lang;
        utt.volume = 1.0;
        utt.rate = lang.startsWith('ko') ? 0.92 : 0.90; // Gentle storytelling pace
        utt.pitch = 1.05; // Warm, friendly tone
        const voice = getBestVoice(lang);
        if (voice) utt.voice = voice;
        return utt;
      }

      function finishSpeaking() {
        if (kidsKeepAliveTimer) clearInterval(kidsKeepAliveTimer);

        // Restore BGM volume
        if (kidsStoryState.bgmAudio && kidsStoryState.isBgmPlaying) {
          kidsStoryState.bgmAudio.volume = 0.18;
        }

        // 🌟 Seamless Synchronization with Auto-Play:
        // When speech is completely done, give 1.5s to view the illustration, then smoothly advance!
        if (kidsStoryState.isAutoPlay && kidsStoryState.isSpeechActive) {
          clearAllAutoTimers();
          kidsStoryState.autoAdvanceTimer = setTimeout(() => {
            if (kidsStoryState.isAutoPlay && kidsStoryState.isSpeechActive) {
              nextKidsSlide(); // Advances slide -> triggers speakKidsCurrentPage() on next slide!
            }
          }, 1500);
        } else if (!kidsStoryState.isAutoPlay) {
          // If auto-play is OFF, conclude reading for this single slide
          updateTtsButtonUI(false);
          kidsStoryState.isSpeechActive = false;
        }
      }

      function handleTtsError(e) {
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn("TTS Utterance error:", e.error);
          finishSpeaking();
        }
      }

      if (mode === 'ko') {
        // Pure Korean
        const utt = createUtterance(textKo, 'ko-KR');
        utt.onend = finishSpeaking;
        utt.onerror = handleTtsError;
        window.speechSynthesis.speak(utt);
      } else if (mode === 'en') {
        // Pure English
        const utt = createUtterance(textEn, 'en-US');
        utt.onend = finishSpeaking;
        utt.onerror = handleTtsError;
        window.speechSynthesis.speak(utt);
      } else {
        // Bilingual: Read Korean first, then English!
        const uttKo = createUtterance(textKo, 'ko-KR');
        const uttEn = createUtterance(textEn, 'en-US');

        uttKo.onend = () => {
          if (!kidsStoryState.isSpeechActive) return;
          // Gentle 0.5s pause between Korean and English
          kidsStoryState.autoAdvanceTimer = setTimeout(() => {
            if (!kidsStoryState.isSpeechActive) return;
            window.speechSynthesis.speak(uttEn);
          }, 500);
        };
        uttKo.onerror = handleTtsError;

        uttEn.onend = finishSpeaking;
        uttEn.onerror = handleTtsError;

        window.speechSynthesis.speak(uttKo);
      }

      // Keepalive loop for Chromium long-speech bug (pauses/resumes every 10s)
      kidsKeepAliveTimer = setInterval(() => {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        } else {
          clearInterval(kidsKeepAliveTimer);
        }
      }, 9500);

    } catch (err) {
      console.error("SpeechSynthesis execution error:", err);
      kidsStoryState.isSpeechActive = false;
      updateTtsButtonUI(false);
    }
  }, 60);
}

// -------------------------------------------------------------
// Background Praise BGM Setup
// -------------------------------------------------------------
function setupKidsBgm() {
  kidsStoryState.bgmAudio = new Audio('assets/only_by_grace.mp3');
  kidsStoryState.bgmAudio.loop = true;
  kidsStoryState.bgmAudio.volume = 0.18;
}

function updateKidsBgmButtonUI() {
  const btn = document.getElementById('btnKidsBgm');
  const modalBtn = document.getElementById('btnModalBgm');
  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  const t = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : ((typeof translations !== 'undefined' && translations['en']) ? translations['en'] : null);

  const bgmOnText = (t && t.kids_btn_bgm) || '🎵 배경음악';
  const bgmOffText = (lang === 'ko') ? '⏸️ 배경음악 끄기' : '⏸️ Stop BGM';
  const text = kidsStoryState.isBgmPlaying ? bgmOffText : bgmOnText;

  if (btn) btn.innerHTML = text;
  if (modalBtn) modalBtn.innerHTML = text;
}

function toggleKidsBgm() {
  if (!kidsStoryState.bgmAudio) setupKidsBgm();

  if (kidsStoryState.isBgmPlaying) {
    stopKidsBgm();
  } else {
    kidsStoryState.bgmAudio.play().then(() => {
      kidsStoryState.isBgmPlaying = true;
      updateKidsBgmButtonUI();
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
  updateKidsBgmButtonUI();
}

// -------------------------------------------------------------
// Fullscreen Presentation Mode (Zoom / Sunday School TV)
// -------------------------------------------------------------
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

  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  if (modalImg) modalImg.src = slide.img;
  if (modalBadge) modalBadge.textContent = `${index + 1} / ${total}`;
  if (modalChap) {
    modalChap.textContent = (lang === 'ko')
      ? slide.chapterKo
      : (lang === 'en' ? slide.chapterEn : `${slide.chapterEn} (${slide.chapterKo})`);
  }
  if (modalScript) modalScript.textContent = `📖 ${slide.scripture}`;
  if (modalTitleKo) modalTitleKo.textContent = slide.titleKo;
  if (modalTitleEn) modalTitleEn.textContent = slide.titleEn;
  if (modalTextKo) modalTextKo.textContent = slide.textKo;
  if (modalTextEn) modalTextEn.textContent = slide.textEn;
}

// Keyboard arrow navigation
function setupKidsKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
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

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
        if (diffX < 0) {
          nextKidsSlide();
        } else {
          prevKidsSlide();
        }
      }
    }, { passive: true });
  });
}

// -------------------------------------------------------------
// PowerPoint (.pptx) Generator for Sunday School (7 Chapters)
// -------------------------------------------------------------
function downloadKidsStorybookPptx() {
  if (typeof PptxGenJS === 'undefined') {
    alert("PowerPoint 생성 모듈(pptxgen.bundle.js)을 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
    return;
  }

  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Arise Next-Gen Global Faith Hub';
  pptx.company = 'Arise Next-Gen';
  pptx.title = '믿음의 후대 복음 동화 - 원래 인간과 피의 언약';

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
  sCover.addText("하나님의 가장 큰 선물, 원래 인간과 피의 언약", {
    x: 0.8, y: 2.2, w: 11.5, h: 1.2,
    fontSize: 34, color: 'FFFFFF', bold: true, align: 'center'
  });
  sCover.addText("God's Greatest Gift: The Original Human & The Covenant of Blood", {
    x: 0.8, y: 3.5, w: 11.5, h: 0.7,
    fontSize: 18, color: '93C5FD', italic: true, align: 'center'
  });
  sCover.addText("📖 창세기 1:31 심히 좋았더라 • 창세기 3:15 여자의 후손 • 창세기 3:21 가죽옷", {
    x: 0.8, y: 4.4, w: 11.5, h: 0.6,
    fontSize: 15, color: '34D399', bold: true, align: 'center'
  });
  sCover.addText("주일학교 공과 / 다민족 Zoom 나눔 / 가정 예배 슬라이드 (7단계 복음 여정)", {
    x: 0.8, y: 6.2, w: 11.5, h: 0.5,
    fontSize: 12, color: '64748B', align: 'center'
  });

  // Slides 2 to 8: 7 Chapters
  KIDS_STORYBOOK_DATA.slides.forEach((item) => {
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
      fontSize: 19, color: 'FFFFFF', bold: true
    });
    // Title (English)
    s.addText(item.titleEn, {
      x: 8.0, y: 2.0, w: 4.3, h: 0.6,
      fontSize: 13, color: 'F59E0B', italic: true, bold: true
    });

    // Story Text (Korean)
    s.addText(item.textKo, {
      x: 8.0, y: 2.7, w: 4.3, h: 1.8,
      fontSize: 12, color: 'F8FAFC', lineSpacing: 20
    });

    // Story Text (English)
    s.addText(item.textEn, {
      x: 8.0, y: 4.6, w: 4.3, h: 1.6,
      fontSize: 10.5, color: '94A3B8', italic: true, lineSpacing: 16
    });
  });

  // Save PPTX
  const filename = `어라이즈_믿음의후대_복음동화_원래인간과피의언약_${new Date().toISOString().slice(0,10)}.pptx`;
  pptx.writeFile({ fileName: filename }).then(() => {
    if (typeof showToast === 'function') {
      showToast("📥 믿음의 후대 복음 동화 PPTX(7단계)가 성공적으로 다운로드되었습니다!");
    } else {
      alert("📥 믿음의 후대 복음 동화 PPTX(7단계)가 다운로드되었습니다.");
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
window.stopKidsSpeech = stopKidsSpeech;
window.speakKidsCurrentPage = speakKidsCurrentPage;
window.toggleKidsBgm = toggleKidsBgm;
window.openKidsFullscreen = openKidsFullscreen;
window.closeKidsFullscreen = closeKidsFullscreen;
window.downloadKidsStorybookPptx = downloadKidsStorybookPptx;

// -------------------------------------------------------------
// Multi-Language Updater for Kids Zone (8 Languages)
// -------------------------------------------------------------
function updateKidsZoneLanguage(lang) {
  if (!lang) lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  const t = (typeof translations !== 'undefined' && translations[lang]) 
    ? translations[lang] 
    : ((typeof translations !== 'undefined' && translations['en']) ? translations['en'] : null);
  if (!t) return;

  const tabStory = document.getElementById('tabBookStorybook');
  const tabVideo = document.getElementById('tabBookVideo');
  if (tabStory && t.kids_tab_storybook) tabStory.innerHTML = t.kids_tab_storybook;
  if (tabVideo && t.kids_tab_video) tabVideo.innerHTML = t.kids_tab_video;

  const btnBi = document.getElementById('btnKidsLangBilingual');
  if (btnBi && t.kids_lang_bilingual) btnBi.innerHTML = t.kids_lang_bilingual;

  const btnFs = document.querySelector('.kids-tool-actions button[onclick="openKidsFullscreen()"]');
  if (btnFs && t.kids_btn_fullscreen) btnFs.innerHTML = t.kids_btn_fullscreen;

  const btnPptx = document.querySelector('.kids-tool-actions button[onclick="downloadKidsStorybookPptx()"]');
  if (btnPptx && t.kids_btn_pptx) btnPptx.innerHTML = t.kids_btn_pptx;

  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  if (btnPrev && t.kids_btn_prev_page) btnPrev.innerHTML = t.kids_btn_prev_page;
  if (btnNext && t.kids_btn_next_page) btnNext.innerHTML = t.kids_btn_next_page;

  const vidDown = document.querySelector('.kids-video-desc a[download]');
  if (vidDown && t.kids_btn_video_download) vidDown.innerHTML = t.kids_btn_video_download;

  updateTtsButtonUI(kidsStoryState.isSpeechActive);
  updateKidsBgmButtonUI();
  updateAutoPlayButtonUI();

  renderKidsSlide(kidsStoryState.currentSlideIndex, false);
}
window.updateKidsZoneLanguage = updateKidsZoneLanguage;



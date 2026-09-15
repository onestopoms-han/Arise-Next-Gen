/**
 * 하나님의 기쁨이들 | Global Next-Gen Prayer Hub
 * Core Application Logic & Bilingual Engine
 */

// ==========================================
// 1. i18n Translation Dictionary (한 / EN)
// ==========================================
const translations = {
  ko: {
    brand_title: "아라이즈 넥스트젠",
    brand_subtitle: "Arise Next-Gen Prayer Hub",
    nav_meeting: "기도모임 안내",
    nav_routine: "30분 루틴",
    nav_prayer_wall: "기도 정원",
    nav_testimonies: "은혜의 간증",
    nav_worship: "찬양 라운지",
    hero_badge: "월 1회 30분 | 전 세계가 함께하는 다음 세대 중보기도",
    hero_title: "일어나 빛을 발하라!<br><span class=\"gradient-text\">열방의 후대를 기도로 품다</span>",
    hero_subtitle: "복음으로 만난 외국인 성도들과 전도자가 한자리에 모여 다음 세대와 렘넌트를 위해 간절히 기도하는 거룩한 다락방입니다.",
    hero_scripture_text: "\"또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라 그들이 또 다른 사람들을 가르칠 수 있으리라\"",
    hero_scripture_ref: "디모데후서 2:2 (2 Timothy 2:2)",
    countdown_tag: "다음 모임 D-Day",
    time_days: "일 (Days)",
    time_hours: "시간 (Hours)",
    time_mins: "분 (Mins)",
    time_secs: "초 (Secs)",
    btn_join_room: "온라인 기도모임 입장하기 (Zoom)",
    btn_copy_link: "초대 링크 & ID 복사",
    routine_badge: "타이트하고 깊은 은혜",
    routine_title: "30분 집중 기도모임 황금 루틴",
    routine_desc: "시차와 국경을 넘어 짧은 시간 가장 강력하게 성령 안에서 하나 되는 4단계 순서입니다.",
    routine_step1_title: "웰컴 & 글로벌 찬양",
    routine_step1_desc: "전 세계 성도들이 함께 아는 익숙한 찬양 1곡으로 마음의 문을 열고 주님의 임재를 구합니다.",
    routine_step2_title: "후대 언약의 숏 메시지",
    routine_step2_desc: "성경 1~2구절 중심의 핵심 말씀 나눔 (영어-한국어 자막 슬라이드 제공).",
    routine_step3_title: "3대 집중 중보기도",
    routine_step3_desc: "① 전 세계 후대 복음화 ② 각 나라 현장 사역 ③ 전도자와 교회. 각자의 모국어로 부르짖습니다!",
    routine_step4_title: "1분 간증 & 축복 기도",
    routine_step4_desc: "외국인 지체의 짧은 현장 응답 간증을 듣고, 서로를 향한 축도와 주기도문으로 마칩니다.",
    core_prayer_heading: "📌 이달의 3대 핵심 기도제목 (This Month's Focus)",
    focus_1_title: "열방의 후대들에게 구원의 빛이 비추어지도록",
    focus_1_desc: "세속화와 영적 혼란 속에 있는 각 나라의 청소년, 청년들이 복음 안에서 참된 정체성을 발견하게 하옵소서.",
    focus_2_title: "외국인 성도들의 모국에 후대 사역자가 세워지도록",
    focus_2_desc: "복음을 받은 성도들이 자기 나라와 가문의 후대들을 양육할 제자로 굳건히 서게 하옵소서.",
    focus_3_title: "복음 전하는 전도자들의 건강과 성령 충만을 위해",
    focus_3_desc: "후대를 살리기 위해 현장에서 쉬지 않고 복음을 전파하는 전도자들에게 오력(영력·지력·체력·경제력·인력)을 더하옵소서.",
    prayer_badge: "24시간 중보 네트워크",
    prayer_title: "글로벌 기도 정원 (Prayer Wall)",
    prayer_desc: "각 나라 지체들이 올린 후대 기도제목입니다. [아멘 🙏]을 눌러 함께 기도해 주세요.",
    btn_post_prayer: "후대 기도제목 올리기",
    filter_all: "전체보기",
    filter_nextgen: "👶 후대/청소년",
    filter_missions: "🌍 열방 선교",
    filter_evangelism: "✝️ 전도와 제자",
    testimony_badge: "하나님이 하신 일",
    testimony_title: "은혜의 현장 간증 (Grace Feed)",
    testimony_desc: "외국인 성도들과 현장에서 일어난 감사의 열매와 복음 응답을 나눕니다.",
    btn_post_testimony: "간증 나누기",
    worship_badge: "한 목소리로 찬양",
    worship_title: "글로벌 워십 라운지 (Worship Lounge)",
    worship_desc: "기도모임 때 함께 부르거나 일상 속에서 묵상하기 좋은 전 세계 찬양 모음입니다.",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\" (길을 만드시고 기적을 행하시는 주님)",
    lyrics_snippet_2: "\"주의 은혜가 네게 넘쳐나길 원하네. 천 대까지 네 자손에게 복이 있기를.\" (후대를 향한 민수기 6장 제사장적 축복)",
    lyrics_snippet_3: "\"온 땅이여 주를 찬양하라, 위대하신 우리 하나님을 노래하라.\" (만유의 주 예수 그리스도 찬양)",
    footer_desc: "열방의 렘넌트와 후대를 위해 복음의 전도자와 세계 성도들이 기도로 하나 되는 곳입니다.",
    footer_schedule_title: "정기 기도모임 안내",
    footer_schedule_text: "• 일시: 매월 첫째 주 화요일 21:00 ~ 21:30 (KST 기준 30분)<br>• 방식: 온라인 화상회의 (Zoom / Google Meet)<br>• 언어: 한국어 & 영어 (Bilingual Session)",
    footer_action_title: "빠른 연결",
    global_times_title: "🌍 참여 열방 현지 시각 (Meeting Time by Nation)",
    nations_label: "함께 기도하는 열방 :",
    btn_join_room_short: "기도모임 접속",
    btn_settings_short: "관리 및 설정",
    modal_prayer_title: "🙏 후대를 위한 기도제목 작성",
    modal_lbl_name: "이름 또는 닉네임 (Name / Nickname)",
    modal_lbl_flag: "국가 / 국기 (Country)",
    modal_lbl_category: "기도 분야 (Category)",
    modal_lbl_content: "기도 제목 (Prayer Request - 한국어 or English)",
    btn_cancel: "취소",
    btn_submit_prayer: "기도 올리기",
    modal_testimony_title: "🌟 은혜의 간증 나누기",
    modal_lbl_title: "간증 제목 (Title)",
    modal_lbl_testimony_content: "은혜 내용 (Testimony Content)",
    btn_submit_testimony: "간증 등록",
    modal_settings_title: "기도모임 일정 및 링크 설정",
    settings_info_text: "전도자님께서 다음 모임 일시와 Zoom/Meet 링크를 직접 입력하여 참여자들에게 안내할 수 있습니다.",
    lbl_next_meeting_date: "다음 모임 일시 (날짜 & 시간)",
    lbl_zoom_link: "Zoom / Google Meet 회의 링크 URL",
    lbl_meeting_id: "회의 ID & 암호 안내 (Meeting ID & Passcode)",
    btn_save_settings: "설정 저장",
    amen_btn_label: "아멘 🙏",
    toast_prayer_added: "기도제목이 성공적으로 등록되었습니다. 함께 기도합니다! 🙏",
    toast_testimony_added: "은혜로운 간증이 등록되었습니다! 할렐루야 ✨",
    toast_copied: "모임 링크 및 안내문이 클립보드에 복사되었습니다! 📋",
    toast_settings_saved: "기도모임 정보가 성공적으로 저장되었습니다! ⚙️",
    toast_amen_clicked: "함께 중보기도에 동참하셨습니다. 아멘! ❤️",
    local_time_prefix: "귀하의 현지 시각: "
  },
  en: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Global Prayer Hub",
    nav_meeting: "Meeting Info",
    nav_routine: "30-Min Routine",
    nav_prayer_wall: "Prayer Wall",
    nav_testimonies: "Grace & Stories",
    nav_worship: "Worship Lounge",
    hero_badge: "Once a Month • 30 Mins | Global Intercession for Next-Gen",
    hero_title: "Arise, Shine!<br><span class=\"gradient-text\">Embracing the Next Generation in Prayer</span>",
    hero_subtitle: "A sacred upper room where evangelists and believers from all nations unite once a month to pray for the next generation and remnants.",
    hero_scripture_text: "\"And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.\"",
    hero_scripture_ref: "2 Timothy 2:2",
    countdown_tag: "Next Meeting Countdown",
    time_days: "Days",
    time_hours: "Hours",
    time_mins: "Mins",
    time_secs: "Secs",
    btn_join_room: "Join 30-Min Prayer Room (Zoom)",
    btn_copy_link: "Copy Invite Link & ID",
    routine_badge: "Tight & Spirit-Filled",
    routine_title: "The 30-Minute Golden Prayer Routine",
    routine_desc: "A powerful 4-step sequence designed to transcend time zones and unite our hearts deeply in the Holy Spirit.",
    routine_step1_title: "Welcome & Global Praise",
    routine_step1_desc: "Open our hearts with 1 globally known worship song to seek the Holy Spirit's presence together.",
    routine_step2_title: "Gospel Word for Next-Gen",
    routine_step2_desc: "A concise 7-minute core message rooted in 1-2 key scriptures (with bilingual slides provided).",
    routine_step3_title: "3 Core Intercessory Prayers",
    routine_step3_desc: "① Next-Gen Salvation ② National Mission Fields ③ Gospel Preachers. Cry out in your own native tongue!",
    routine_step4_title: "1-Min Testimony & Blessing",
    routine_step4_desc: "Hear a quick testimony of God's work abroad, followed by mutual blessings and benediction.",
    core_prayer_heading: "📌 This Month's 3 Core Prayer Topics",
    focus_1_title: "That the Light of Christ May Shine on the Next-Gen",
    focus_1_desc: "May youth and young adults trapped in secularism and confusion find their true identity in the Gospel.",
    focus_2_title: "Disciples to be Raised in Each Believer's Homeland",
    focus_2_desc: "May believers who embraced Christ stand as faithful leaders to nurture the next generation in their nations.",
    focus_3_title: "For the Health and Spiritual Fullness of Evangelists",
    focus_3_desc: "Grant five spiritual powers (spiritual, intellectual, physical, financial, human strength) to those preaching tirelessly.",
    prayer_badge: "24/7 Intercession Network",
    prayer_title: "Global Prayer Wall (Next-Gen)",
    prayer_desc: "Prayer requests from international believers. Click [Amen 🙏] to join in intercession.",
    btn_post_prayer: "Share Prayer Request",
    filter_all: "All Prayers",
    filter_nextgen: "👶 Next-Gen / Youth",
    filter_missions: "🌍 Global Missions",
    filter_evangelism: "✝️ Evangelism & Disciples",
    testimony_badge: "What God Has Done",
    testimony_title: "Grace & Field Testimonies",
    testimony_desc: "Heartwarming fruits of faith, gospel answers, and field testimonies with international believers.",
    btn_post_testimony: "Share Testimony",
    worship_badge: "Sing With One Voice",
    worship_title: "Global Worship Lounge",
    worship_desc: "Handpicked praise songs to sing during our monthly meeting or for personal daily meditation.",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\"",
    lyrics_snippet_2: "\"The Lord bless you and keep you, make His face shine upon you and be gracious to you.\" (Numbers 6 Blessing)",
    lyrics_snippet_3: "\"The King of Kings and Lord of Lords, how great is our God, sing with me, how great is our God.\"",
    footer_desc: "A united prayer hub connecting gospel evangelists and international saints for the next generation.",
    footer_schedule_title: "Monthly Meeting Info",
    footer_schedule_text: "• When: 1st Tuesday of every month, 21:00 ~ 21:30 KST (30 mins)<br>• Platform: Online Video Conference (Zoom / Google Meet)<br>• Language: Korean & English (Bilingual Session)",
    footer_action_title: "Quick Links",
    global_times_title: "🌍 Meeting Time by Participating Nation",
    nations_label: "Participating Nations :",
    btn_join_room_short: "Join Meeting",
    btn_settings_short: "Settings",
    modal_prayer_title: "🙏 Submit a Prayer for the Next Generation",
    modal_lbl_name: "Name / Nickname",
    modal_lbl_flag: "Country",
    modal_lbl_category: "Category",
    modal_lbl_content: "Prayer Request (Korean or English)",
    btn_cancel: "Cancel",
    btn_submit_prayer: "Submit Prayer",
    modal_testimony_title: "🌟 Share Your Grace & Testimony",
    modal_lbl_title: "Testimony Title",
    modal_lbl_testimony_content: "Content",
    btn_submit_testimony: "Post Testimony",
    modal_settings_title: "Meeting Schedule & Link Settings",
    settings_info_text: "The evangelist/host can update the next meeting time and Zoom/Meet URL here for all members.",
    lbl_next_meeting_date: "Next Meeting Date & Time",
    lbl_zoom_link: "Zoom / Google Meet URL",
    lbl_meeting_id: "Meeting ID & Passcode Info",
    btn_save_settings: "Save Settings",
    amen_btn_label: "Amen 🙏",
    toast_prayer_added: "Your prayer has been posted. We pray together with you! 🙏",
    toast_testimony_added: "Your testimony has been registered. Glory to God! ✨",
    toast_copied: "Meeting invitation & link copied to clipboard! 📋",
    toast_settings_saved: "Meeting settings successfully saved! ⚙️",
    toast_amen_clicked: "You joined in prayer. Amen! ❤️",
    local_time_prefix: "Your Local Time: "
  }
};

// Current active language
let currentLang = localStorage.getItem('prayer_hub_lang') || 'ko';

// ==========================================
// 2. Default Initial Seed Data (12 Global Nations)
// ==========================================
const defaultPrayers = [
  {
    id: 1,
    author: "Kwame Mensah",
    country: "🇬🇭 Ghana",
    category: "next-gen",
    content: "아크라와 서아프리카의 다음 세대들이 복음의 지도자로 일어나, 어두운 우상과 경제적 어려움을 이기고 영적 부흥을 이끌도록 기도합니다.",
    content_en: "Praying for the next generation in Accra and West Africa to rise as gospel leaders, overcoming spiritual darkness and leading revival.",
    amenCount: 46,
    date: "2026-09-15"
  },
  {
    id: 2,
    author: "Emmanuel Okonkwo",
    country: "🇳🇬 Nigeria",
    category: "missions",
    content: "나이지리아의 청소년들이 종교적 갈등과 혼란 속에서도 그리스도의 평안을 누리며, 온 아프리카를 살릴 참된 전도 제자로 자라나길 소망합니다.",
    content_en: "May youth across Nigeria enjoy the peace of Christ amid conflict and turmoil, growing into faithful disciples to reach all of Africa.",
    amenCount: 52,
    date: "2026-09-14"
  },
  {
    id: 3,
    author: "Somchai Prasert",
    country: "🇹🇭 Thailand",
    category: "next-gen",
    content: "방콕과 태국 전역의 강력한 불교 문화 속에서 자라나는 우리 후대들이 오직 유일한 구원자이신 예수 그리스도를 만나 빛의 자녀로 서게 하옵소서.",
    content_en: "May our children and youth growing up in Buddhist traditions across Thailand encounter Jesus Christ as their only Savior and stand as children of light.",
    amenCount: 39,
    date: "2026-09-14"
  },
  {
    id: 4,
    author: "Mina Youssef",
    country: "🇪🇬 Egypt",
    category: "evangelism",
    content: "카이로와 중동 땅의 다음 세대들이 핍박을 두려워하지 않고 초대교회의 뜨거운 복음의 믿음으로 아랍권 현장을 살리는 주역이 되게 하소서.",
    content_en: "May the next generation in Cairo and Egypt stand boldly in the faith of the early church without fear of persecution, reaching the Arab world.",
    amenCount: 35,
    date: "2026-09-13"
  },
  {
    id: 5,
    author: "Claire Dubois",
    country: "🇫🇷 France",
    category: "next-gen",
    content: "유럽과 파리의 극심한 세속화 속에서 방황하는 청소년들이 복음의 생명을 발견하고, 무너진 영적 성벽을 재건할 렘넌트로 일어나길 기도합니다.",
    content_en: "Praying for wandering youth in Paris and Europe to discover the life of the gospel and rise as remnants to rebuild broken spiritual walls.",
    amenCount: 41,
    date: "2026-09-12"
  },
  {
    id: 6,
    author: "왕전도사 (Brother Wang)",
    country: "🇨🇳 China",
    category: "evangelism",
    content: "중국의 가정교회와 다음 세대들에게 참된 복음의 언약이 끊어지지 않고 온전히 전수되며, 캠퍼스마다 복음 가진 제자들이 세워지게 하옵소서.",
    content_en: "May the covenant of the true gospel be faithfully passed on to the next generation across China, and gospel disciples be raised on campuses.",
    amenCount: 48,
    date: "2026-09-11"
  },
  {
    id: 7,
    author: "Budi Santoso",
    country: "🇮🇩 Indonesia",
    category: "missions",
    content: "수천 개의 섬으로 이루어진 인도네시아의 어린이와 청년들에게 복음의 빛이 전파되고, 영적 치유와 제자 운동이 일어나게 하소서.",
    content_en: "May the light of Christ shine across the thousands of islands in Indonesia, bringing spiritual healing and raising next-generation disciples.",
    amenCount: 37,
    date: "2026-09-10"
  },
  {
    id: 8,
    author: "Aung San (아웅산)",
    country: "🇲🇲 Myanmar",
    category: "next-gen",
    content: "오랜 분쟁과 경제적 시련 속에 있는 미얀마의 후대들에게 하나님의 특별한 위로가 임하고, 어떤 환경도 뛰어넘는 렘넌트의 믿음을 주옵소서.",
    content_en: "May God's tender comfort heal the children of Myanmar suffering from conflict, granting them remnant faith to transcend all adversity.",
    amenCount: 44,
    date: "2026-09-09"
  },
  {
    id: 9,
    author: "김전도자 (Evangelist Kim)",
    country: "🇰🇷 Korea",
    category: "next-gen",
    content: "우리 후대들이 세상 미디어와 스마트폰의 흑암 문화에서 벗어나, 하나님의 말씀 속에서 참된 평안과 렘넌트의 정체성을 굳건히 발견하게 하옵소서.",
    content_en: "May our next generation break free from dark media and smartphone addictions, and firmly discover their true identity and peace in God's Word.",
    amenCount: 65,
    date: "2026-09-08"
  }
];

const defaultTestimonies = [
  {
    id: 1,
    author: "Kwame & Kofi",
    country: "🇬🇭 Ghana",
    title: "가나 청년 5명의 렘넌트 성경공부 시작",
    title_en: "5 Ghanaian Youths Began Gospel Study",
    content: "한국에서 전도자님을 통해 복음을 전해 들은 후 고향 가나에 연락했습니다. 고향의 사촌과 동네 청년 5명이 줌으로 함께 모여 성경을 공부하기 시작했습니다!",
    content_en: "After hearing the gospel in Korea, I contacted home. My cousins and 5 neighborhood youths in Ghana started a weekly Zoom Bible study!",
    date: "2026-09-14"
  },
  {
    id: 2,
    author: "Niran (니란)",
    country: "🇹🇭 Thailand",
    title: "불교 가정에서 예수님을 영접한 태국 유학생",
    title_en: "Thai Student Accepted Christ",
    content: "어릴 때부터 사원에만 다녔던 제가 예수님을 그리스도로 영접하고 참 평안을 얻었습니다. 태국에 계신 부모님과 조카들을 위해 매일 기도하고 있습니다.",
    content_en: "Having only visited temples all my life, I accepted Jesus as Christ and found true peace. I am now praying daily for my family back in Thailand.",
    date: "2026-09-10"
  },
  {
    id: 3,
    author: "Thida (티다)",
    country: "🇲🇲 Myanmar",
    title: "미얀마 난민촌 아이들과의 비대면 찬양 나눔",
    title_en: "Sharing Worship with Myanmar Children",
    content: "어려운 환경에 있는 고향 미얀마의 아이들에게 스마트폰으로 'Way Maker' 찬양을 가르쳐주었습니다. 아이들의 눈빛에 희망과 복음의 빛이 깃들기 시작했습니다.",
    content_en: "I taught the song 'Way Maker' to children back in Myanmar via smartphone. Hope and the light of Christ are filling their eyes!",
    date: "2026-09-06"
  }
];

// Always sync newly added nations
const DATA_VERSION = 'v2_8_nations';
if (localStorage.getItem('prayer_hub_data_ver') !== DATA_VERSION) {
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(defaultPrayers));
  localStorage.setItem('prayer_hub_testimonies', JSON.stringify(defaultTestimonies));
  localStorage.setItem('prayer_hub_data_ver', DATA_VERSION);
}

// App State
let prayers = JSON.parse(localStorage.getItem('prayer_hub_prayers')) || defaultPrayers;
let testimonies = JSON.parse(localStorage.getItem('prayer_hub_testimonies')) || defaultTestimonies;
let currentFilter = 'all';
    title_en: "Youth Healed Through Gospel Worship",
    content: "우울증으로 방황하던 현지 청소년이 우리 모임에서 배운 'Way Maker' 찬양을 함께 부르며 눈물로 회복되었습니다. 이제는 유초등부 찬양팀을 돕고 있습니다.",
    content_en: "A struggling teenager found peace and joy in Christ while singing 'Way Maker' together. He is now serving on the children's worship team!",
    date: "2026-09-02"
  }
];

// App State
let prayers = JSON.parse(localStorage.getItem('prayer_hub_prayers')) || defaultPrayers;
let testimonies = JSON.parse(localStorage.getItem('prayer_hub_testimonies')) || defaultTestimonies;
let currentFilter = 'all';

// Meeting Settings
const defaultMeetingSettings = {
  // Set default to first Tuesday of next month 21:00 KST
  meetingDate: getNextMeetingDateString(),
  zoomUrl: "https://zoom.us/j/88812345678",
  meetingId: "Zoom ID: 888 1234 5678 | Passcode: 7777"
};

let meetingSettings = JSON.parse(localStorage.getItem('prayer_hub_meeting_settings')) || defaultMeetingSettings;

// Compute default next first Tuesday
function getNextMeetingDateString() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  // find first Tuesday
  while (nextMonth.getDay() !== 2) {
    nextMonth.setDate(nextMonth.getDate() + 1);
  }
  nextMonth.setHours(21, 0, 0, 0);
  // Return ISO string local format
  return nextMonth.toISOString().slice(0, 16);
}

// ==========================================
// 3. Language Switcher (i18n Engine)
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('prayer_hub_lang', lang);
  document.body.dataset.lang = lang;

  // Toggle active button
  const btnKo = document.getElementById('btnLangKo');
  const btnEn = document.getElementById('btnLangEn');
  if (btnKo && btnEn) {
    btnKo.classList.toggle('active', lang === 'ko');
    btnEn.classList.toggle('active', lang === 'en');
  }

  // Update static translated elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Re-render prayers and testimonies with updated language tags/content
  renderPrayers();
  renderTestimonies();
  updateMeetingDisplay();
}

// ==========================================
// 4. Live Countdown & Timezone Handling
// ==========================================
function updateMeetingDisplay() {
  const displayElem = document.getElementById('displayMeetingDate');
  const localTimeElem = document.getElementById('localTimeDisplay');
  if (!displayElem) return;

  const targetDate = new Date(meetingSettings.meetingDate);
  const optionsKST = { month: 'long', day: 'numeric', weekday: 'short', hour: '2-digit', minute: '2-digit' };
  
  const kstString = targetDate.toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', optionsKST);
  displayElem.textContent = `${kstString} (KST / UTC+9)`;

  // Local user time display
  if (localTimeElem) {
    const userLocalStr = targetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    localTimeElem.textContent = `${translations[currentLang].local_time_prefix}${userLocalStr}`;
  }
}

function startCountdown() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMinutes');
  const secsEl = document.getElementById('countSeconds');

  function tick() {
    const now = new Date().getTime();
    const target = new Date(meetingSettings.meetingDate).getTime();
    const diff = target - now;

    if (diff <= 0) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "LIVE";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(m).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(s).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}

// Join Room Action
function joinMeetingRoom() {
  if (meetingSettings.zoomUrl) {
    window.open(meetingSettings.zoomUrl, '_blank');
  } else {
    showToast("회의 링크가 등록되지 않았습니다.", "⚠️");
  }
}

// Copy Meeting Info
function copyMeetingLink() {
  const targetDate = new Date(meetingSettings.meetingDate);
  const text = `🕊️ [아라이즈 넥스트젠 | Arise Next-Gen] 
Global Prayer Meeting for the Next Generation
Date/Time: ${targetDate.toLocaleString()} (KST)
Link: ${meetingSettings.zoomUrl}
${meetingSettings.meetingId}
"Arise, Shine! Praying together for the Next Generation across all nations!"`;

  navigator.clipboard.writeText(text).then(() => {
    showToast(translations[currentLang].toast_copied, "📋");
  }).catch(() => {
    // Fallback
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast(translations[currentLang].toast_copied, "📋");
  });
}

// ==========================================
// 5. Prayer Wall Management & Amen Interaction
// ==========================================
function filterPrayers(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === category);
  });
  renderPrayers();
}

function filterByCountry(countryKey) {
  currentFilter = 'country:' + countryKey;
  document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  renderPrayers();
  const prayerWall = document.getElementById('prayer-wall');
  if (prayerWall) {
    prayerWall.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`${countryKey} ${translations[currentLang].prayer_badge}`, "🌍");
}

function renderPrayers() {
  const grid = document.getElementById('prayerGrid');
  if (!grid) return;

  let filtered = prayers;
  if (currentFilter.startsWith('country:')) {
    const target = currentFilter.replace('country:', '').toLowerCase();
    filtered = prayers.filter(p => p.country.toLowerCase().includes(target));
  } else if (currentFilter !== 'all') {
    filtered = prayers.filter(p => p.category === currentFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: rgba(255,255,255,0.03); border-radius: 16px; border: 1px dashed rgba(255,255,255,0.15);">
        <p style="font-size: 1.1rem; color: #94A3B8; margin-bottom: 1rem;">
          ${currentLang === 'ko' ? '아직 이 국가의 기도제목이 등록되지 않았습니다.' : 'No prayer requests yet for this selection.'}
        </p>
        <button class="btn btn-primary" onclick="openModal('prayerModal')">
          <span>✍️</span> ${translations[currentLang].btn_post_prayer}
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    // Show English version if current language is 'en' and translation exists
    const content = (currentLang === 'en' && item.content_en) ? item.content_en : item.content;
    const catLabel = getCategoryLabel(item.category);

    return `
      <div class="prayer-card" id="prayer-${item.id}">
        <div class="prayer-card-header">
          <div class="prayer-author-info">
            <span class="country-flag">${getCountryFlag(item.country)}</span>
            <div>
              <div class="prayer-author-name">${escapeHtml(item.author)}</div>
              <div class="prayer-date">${item.date} • ${getCountryNameOnly(item.country)}</div>
            </div>
          </div>
          <span class="prayer-category-tag">${catLabel}</span>
        </div>
        <p class="prayer-content">${escapeHtml(content)}</p>
        <div class="prayer-card-footer">
          <button type="button" class="btn-amen" onclick="handleAmenClick(event, ${item.id})">
            <span>🙏</span>
            <span>${translations[currentLang].amen_btn_label}</span>
            <strong id="amen-count-${item.id}">${item.amenCount}</strong>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function getCategoryLabel(cat) {
  if (currentLang === 'ko') {
    if (cat === 'next-gen') return '👶 후대/청소년';
    if (cat === 'missions') return '🌍 열방 선교';
    return '✝️ 전도와 제자';
  } else {
    if (cat === 'next-gen') return '👶 Next-Gen';
    if (cat === 'missions') return '🌍 Missions';
    return '✝️ Evangelism';
  }
}

function getCountryFlag(countryString) {
  const match = countryString.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]|🌍/);
  return match ? match[0] : '🌐';
}

function getCountryNameOnly(countryString) {
  return countryString.replace(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]|🌍/, '').trim();
}

function handleAmenClick(e, id) {
  const prayer = prayers.find(p => p.id === id);
  if (!prayer) return;

  prayer.amenCount += 1;
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(prayers));

  const countElem = document.getElementById(`amen-count-${id}`);
  if (countElem) {
    countElem.textContent = prayer.amenCount;
  }

  // Floating heart/amen particle effect
  createFloatingAmen(e);
  showToast(translations[currentLang].toast_amen_clicked, "🙏");
}

function createFloatingAmen(e) {
  const particle = document.createElement('div');
  particle.className = 'floating-amen';
  const symbols = ['🙏', '❤️', '✨', '🕊️'];
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const rect = e.currentTarget.getBoundingClientRect();
  particle.style.left = `${e.clientX || (rect.left + rect.width / 2)}px`;
  particle.style.top = `${e.clientY || rect.top}px`;

  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1200);
}

function handlePrayerSubmit(e) {
  e.preventDefault();
  const author = document.getElementById('prayerAuthor').value.trim();
  const country = document.getElementById('prayerCountry').value;
  const category = document.getElementById('prayerCategory').value;
  const content = document.getElementById('prayerContent').value.trim();

  if (!author || !content) return;

  const newPrayer = {
    id: Date.now(),
    author,
    country,
    category,
    content,
    content_en: content, // stored same initially
    amenCount: 1,
    date: new Date().toISOString().slice(0, 10)
  };

  prayers.unshift(newPrayer);
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(prayers));

  renderPrayers();
  closeModal('prayerModal');
  e.target.reset();
  showToast(translations[currentLang].toast_prayer_added, "🕊️");
}

// ==========================================
// 6. Testimonies Feed Management
// ==========================================
function renderTestimonies() {
  const grid = document.getElementById('testimonyGrid');
  if (!grid) return;

  grid.innerHTML = testimonies.map(item => {
    const title = (currentLang === 'en' && item.title_en) ? item.title_en : item.title;
    const content = (currentLang === 'en' && item.content_en) ? item.content_en : item.content;

    return `
      <div class="testimony-card">
        <div class="testimony-top">
          <span class="country-flag">${getCountryFlag(item.country)}</span>
          <span class="prayer-author-name">${escapeHtml(item.author)}</span>
          <span class="prayer-date">(${getCountryNameOnly(item.country)}) • ${item.date}</span>
        </div>
        <h4 class="testimony-title">${escapeHtml(title)}</h4>
        <p class="testimony-quote">“${escapeHtml(content)}”</p>
      </div>
    `;
  }).join('');
}

function handleTestimonySubmit(e) {
  e.preventDefault();
  const author = document.getElementById('testimonyAuthor').value.trim();
  const country = document.getElementById('testimonyCountry').value;
  const title = document.getElementById('testimonyTitle').value.trim();
  const content = document.getElementById('testimonyContent').value.trim();

  if (!author || !title || !content) return;

  const newTestimony = {
    id: Date.now(),
    author,
    country,
    title,
    title_en: title,
    content,
    content_en: content,
    date: new Date().toISOString().slice(0, 10)
  };

  testimonies.unshift(newTestimony);
  localStorage.setItem('prayer_hub_testimonies', JSON.stringify(testimonies));

  renderTestimonies();
  closeModal('testimonyModal');
  e.target.reset();
  showToast(translations[currentLang].toast_testimony_added, "🌟");
}

// ==========================================
// 7. Settings Modal Handling
// ==========================================
function handleSettingsSubmit(e) {
  e.preventDefault();
  const dateVal = document.getElementById('settingsDateTime').value;
  const zoomVal = document.getElementById('settingsZoomUrl').value.trim();
  const idVal = document.getElementById('settingsMeetingId').value.trim();

  if (dateVal) meetingSettings.meetingDate = dateVal;
  if (zoomVal) meetingSettings.zoomUrl = zoomVal;
  if (idVal) meetingSettings.meetingId = idVal;

  localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(meetingSettings));

  updateMeetingDisplay();
  closeModal('settingsModal');
  showToast(translations[currentLang].toast_settings_saved, "⚙️");
}

// ==========================================
// 8. Modals, Mobile Menu & Toast Helpers
// ==========================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Populate settings inputs if opening settings
    if (id === 'settingsModal') {
      const dtInput = document.getElementById('settingsDateTime');
      const zoomInput = document.getElementById('settingsZoomUrl');
      const idInput = document.getElementById('settingsMeetingId');
      if (dtInput) dtInput.value = meetingSettings.meetingDate;
      if (zoomInput) zoomInput.value = meetingSettings.zoomUrl;
      if (idInput) idInput.value = meetingSettings.meetingId;
    }
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeModalOnBackdrop(e, id) {
  if (e.target.id === id) {
    closeModal(id);
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('navMenu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Close mobile menu when clicking nav-link
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')) {
    const menu = document.getElementById('navMenu');
    if (menu) menu.classList.remove('open');
  }
});

function showToast(message, icon = "✨") {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(string) {
  if (!string) return '';
  return String(string)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ==========================================
// 9. App Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  updateMeetingDisplay();
  startCountdown();
  renderPrayers();
  renderTestimonies();
});

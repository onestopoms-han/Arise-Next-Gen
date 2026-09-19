/**
 * 하나님의 기쁨이들 | Global Next-Gen Prayer Hub
 * Core Application Logic & Bilingual Engine
 */

// ==========================================
// 1. i18n Translation Dictionary (한 / EN)
// ==========================================
const translations = {
  ko: {
    brand_title: "어라이즈 넥스트젠",
    brand_subtitle: "Arise Next-Gen Prayer Hub",
    nav_meeting: "기도모임 안내",
    nav_routine: "30분 루틴",
    nav_prayer_guide: "공동 기도문",
    nav_prayer_wall: "기도 정원",
    nav_testimonies: "은혜의 간증",
    nav_worship: "찬양 라운지",
    nav_worship_studio: "🎬 찬양 자막 스튜디오",
    hero_badge: "월 1회 30분 | 전 세계가 함께하는 다음 세대 중보기도",
    hero_title: "일어나 빛을 발하라!<br><span class=\"gradient-text\">열방의 후대를 기도로 품다</span>",
    hero_subtitle: "복음으로 만난 다민족 제자들과 전도자가 한자리에 모여<br>하나님의 모든 관심인 모든 족속 복음화와<br>다음 세대에 이 복음을 전달하기 위해 간절히 기도하는 플랫폼입니다.",
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
    routine_step1_title: "웰컴 & 글로벌 찬양 (~5분)",
    routine_step1_desc: "전 세계 성도들이 함께 아는 익숙한 찬양 1곡으로 마음의 문을 열고 주님의 임재를 구합니다.",
    routine_step2_title: "후대 복음 말씀 (5분)",
    routine_step2_desc: "성경 본문 중심의 핵심 복음 메시지 나눔 (영어-한국어 자막 슬라이드 제공).",
    routine_step3_title: "3대 집중 중보기도 (15분)",
    routine_step3_desc: "① 나 자신을 위한 기도 ② 모든 민족을 위한 기도 ③ 후대를 위한 기도. 각자의 모국어로 함께 기도합시다!",
    routine_step4_title: "현장 간증 & 마무리 축복 (5분)",
    routine_step4_desc: "다민족 제자의 짧은 현장 응답 간증을 듣고, 서로를 향한 축도와 주기도문으로 마칩니다.",
    core_prayer_heading: "📌 이달의 3대 핵심 기도제목 (This Month's Focus)",
    focus_1_title: "열방의 후대들에게 구원의 빛이 비추어지도록",
    focus_1_desc: "세속화와 영적 혼란 속에 있는 각 나라의 청소년, 청년들이 복음 안에서 참된 정체성을 발견하게 하옵소서.",
    focus_2_title: "다민족 제자들의 모국에 후대 사역자가 세워지도록",
    focus_2_desc: "복음을 받은 다민족 제자들이 자기 나라와 가문의 후대들을 양육할 사역자로 굳건히 서게 하옵소서.",
    focus_3_title: "복음 전하는 전도자들의 건강과 성령 충만을 위해",
    focus_3_desc: "후대를 살리기 위해 현장에서 쉬지 않고 복음을 전파하는 전도자들에게 영육 간의 강건함과 성령 충만, 지혜를 더하옵소서.",
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
    testimony_desc: "다민족 제자들과 현장에서 일어난 감사의 열매와 복음 응답을 나눕니다.",
    btn_post_testimony: "간증 나누기",
    worship_badge: "한 목소리로 찬양",
    worship_title: "글로벌 워십 라운지 (Worship Lounge)",
    worship_desc: "기도모임 때 함께 부르거나 일상 속에서 묵상하기 좋은 전 세계 찬양 모음입니다.",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\" (길을 만드시고 기적을 행하시는 주님)",
    lyrics_snippet_2: "\"주의 은혜가 네게 넘쳐나길 원하네. 천 대까지 네 자손에게 복이 있기를.\" (후대를 향한 민수기 6장 제사장적 축복)",
    lyrics_snippet_3: "\"온 땅이여 주를 찬양하라, 위대하신 우리 하나님을 노래하라.\" (만유의 주 예수 그리스도 찬양)",
    footer_desc: "열방의 다음세대와 후대를 위해 복음의 전도자와 세계 성도들이 기도로 하나 되는 곳입니다.",
    footer_schedule_title: "정기 기도모임 안내",
    footer_schedule_text: "• 일시: 2026년 10월 4일 (일) 20:00 퀸즈랜드 (호주) / 19:00 서울 (KST)<br>• 방식: 온라인 화상회의 (Zoom / Google Meet)<br>• 언어: 한국어 & 영어 (Bilingual Session)",
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
    settings_info_text: "모임을 인도하시는 호주 퀸즈랜드(AEST / UTC+10) 현지 시각 기준으로 일시를 입력하시면, 참여하는 각국 성도들의 현지 시각 및 한국 시각으로 자동 변환되어 안내됩니다.",
    lbl_next_meeting_date: "다음 모임 일시 (🇦🇺 호주 퀸즈랜드 시각 기준 / AEST)",
    lbl_zoom_link: "Zoom / Google Meet 회의 링크 URL",
    lbl_meeting_id: "회의 ID & 암호 안내 (Meeting ID & Passcode)",
    btn_save_settings: "설정 저장",
    amen_btn_label: "아멘 🙏",
    toast_prayer_added: "기도제목이 성공적으로 등록되었습니다. 함께 기도합니다! 🙏",
    toast_testimony_added: "은혜로운 간증이 등록되었습니다! 할렐루야 ✨",
    toast_copied: "모임 링크 및 안내문이 클립보드에 복사되었습니다! 📋",
    toast_settings_saved: "기도모임 정보가 성공적으로 저장되었습니다! ⚙️",
    toast_amen_clicked: "함께 중보기도에 동참하셨습니다. 아멘! ❤️",
    local_time_prefix: "귀하의 현지 시각: ",
    country_filter_title: "🌍 8개국 열방별 기도보기",
    country_filter_all: "🌐 전체 열방",
    btn_edit_routine: "이번 모임 순서 & 내용 등록",
    routine_time_step1: "00 ~ 05 min (5분)",
    routine_time_step2: "05 ~ 10 min (5분)",
    routine_time_step3: "10 ~ 25 min (15분)",
    routine_time_step4: "25 ~ 30 min (5분)",
    modal_routine_title: "30분 기도모임 순서 & 세부 내용 작성",
    routine_modal_info: "매월 모임의 4단계 순서별 실제 프로그램(찬양곡, 5분 말씀 본문/요약, 15분 집중 기도제목, 5분 마무리 간증/축복)을 입력하여 성도들에게 안내합니다.",
    lbl_routine_step1_song: "지정 찬양 곡명 (Song Title)",
    lbl_routine_step1_link: "유튜브 찬양 영상 링크 (선택)",
    lbl_routine_step1_desc: "찬양 안내 및 묵상 가사",
    lbl_routine_step2_scripture: "본문 성경구절 (Scripture)",
    lbl_routine_step2_title: "설교 / 나눔 제목 (Title)",
    lbl_routine_step2_content: "핵심 말씀 요약 / 3포인트 나눔 (5분 내용)",
    lbl_routine_step3_title: "집중 기도 주제 (Focus Topic)",
    lbl_routine_step3_content: "3대 기도제목 상세 내용 (Prayer Topics)",
    lbl_routine_step4_speaker: "간증자 / 축도 안내 (Speaker / Blessing)",
    lbl_routine_step4_content: "마무리 순서 및 축복 기도문",
    btn_save_routine: "루틴 내용 저장하기",
    btn_edit_sheet: "구글 시트에서 편집",
    toast_routine_saved: "30분 기도모임 루틴 내용이 성공적으로 저장되었습니다! 📋",
    toast_sheet_synced: "구글 스프레드시트의 최신 내용이 동기화되었습니다! 📊",
    toast_sheet_sync_failed: "구글 시트 동기화에 실패했습니다. 링크 및 공개 설정을 확인해 주세요. ⚠️",
    routine_step3_sub: "나 자신 · 모든 민족 · 후대",
    routine_btn_text3: "이번 모임 집중 기도제목 보기",
    routine_detail_badge3: "🔥 3대 집중 기도 가이드",
    routine_form_badge_step3: "🔥 3단계: 3대 집중 중보기도 (15분) - 나 자신 · 모든 민족 · 후대",
    prayer_guide_tag: "공동 기도문 • Official Prayer Guide",
    prayer_guide_heading: "함께 기도합시다 (Let Us Pray Together)",
    prayer_guide_sub: "어라이즈 넥스트젠 모임 때 성도들과 전도자가 한마음으로 고백하는 3대 공식 기도문입니다.",
    btn_prayer_presentation: "기도문 전문 발표 모드",
    btn_copy_prayer_guide: "줌 채팅용 복사",
    btn_open_pdf: "PDF 원본",
    pillar_1_cat: "내면과 믿음의 기초",
    pillar_1_title: "1. 나를 위한 기도",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“내가 제일 중요하다”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "내가 복음이 되기를",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "무기력하게 느껴지는 그리스도가 아니라, 성경에 나타난 능력의 그리스도를 누리기를",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "Up & Down에 흔들리지 않고 다니엘처럼 항상 한결같은 믿음이 되기를",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "열방과 세계 현장",
    pillar_2_title: "2. 모든 민족을 위한 기도",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "모든 민족이 그리스도 앞에 무릎 꿇도록",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "이곳에 모인 나라들과 세계 모든 나라를 위하여",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "전쟁 속에서 고통받는 나라들과 사람들을 위하여",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "다음 세대와 미래",
    pillar_3_title: "3. 후대를 위한 기도",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "후대가 복음을 알도록",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "복음이 정말 좋은 것임을 알도록",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "인생에 무슨 일이 생겨도 그리스도 안에 있으면 괜찮다는 것을 알도록",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "학업과 모든 일이 모든 민족을 살리는 준비임을 알도록",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "함께 기도합시다",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "성령 안에서 하나 되어 믿음으로 부르짖습니다",
    pill_myself: "나 자신을 위하여",
    pill_myself_sub: "For myself",
    pill_nations: "모든 민족을 위하여",
    pill_nations_sub: "For all nations",
    pill_nextgen: "후대를 위하여",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "공식 기도문 (Let Us Pray Together)",
    slide_badge_1: "슬라이드 1 / 4 • 나를 위한 기도",
    slide_badge_2: "슬라이드 2 / 4 • 모든 민족을 위한 기도",
    slide_badge_3: "슬라이드 3 / 4 • 후대를 위한 기도",
    slide_badge_4: "슬라이드 4 / 4 • 함께 기도합시다",
    btn_prev_slide: "이전 슬라이드",
    btn_next_slide: "다음 슬라이드",
    toast_prayer_guide_copied: "공동 기도문이 클립보드에 복사되었습니다! 줌 채팅창에 붙여넣어 공유하세요. 📋"
  },
  en: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Global Prayer Hub",
    nav_meeting: "Meeting Info",
    nav_routine: "30-Min Routine",
    nav_prayer_guide: "Prayer Guide",
    nav_prayer_wall: "Prayer Wall",
    nav_testimonies: "Grace & Stories",
    nav_worship: "Worship Lounge",
    nav_worship_studio: "🎬 Subtitle Studio",
    hero_badge: "Once a Month • 30 Mins | Global Intercession for Next-Gen",
    hero_title: "Arise, Shine!<br><span class=\"gradient-text\">Embracing the Next Generation in Prayer</span>",
    hero_subtitle: "A prayer platform where disciples of all nations and evangelists gather to earnestly pray for world evangelization—God's ultimate heart—and passing the Gospel to the next generation.",
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
    routine_step1_title: "Welcome & Global Praise (5m)",
    routine_step1_desc: "Open our hearts with 1 globally known worship song to seek the Holy Spirit's presence together.",
    routine_step2_title: "Gospel Word for Next-Gen (5m)",
    routine_step2_desc: "Core Gospel message rooted in scripture (with Korean-English bilingual slides provided).",
    routine_step3_title: "3 Core Intercessory Prayers (15m)",
    routine_step3_desc: "① Prayer for Myself ② Prayer for All Nations ③ Prayer for Next Generation. Cry out in your own tongue!",
    routine_step4_title: "Field Testimony & Blessing (5m)",
    routine_step4_desc: "Hear a quick testimony from a multi-ethnic disciple, followed by mutual blessings and benediction.",
    core_prayer_heading: "📌 This Month's 3 Core Prayer Topics",
    focus_1_title: "That the Light of Christ May Shine on the Next-Gen",
    focus_1_desc: "May youth and young adults trapped in secularism and confusion find their true identity in the Gospel.",
    focus_2_title: "Disciples to be Raised in Multi-Ethnic Believers' Homelands",
    focus_2_desc: "May multi-ethnic disciples who embraced Christ stand as faithful leaders to nurture the next generation in their nations.",
    focus_3_title: "For the Health and Spiritual Fullness of Evangelists",
    focus_3_desc: "Grant spiritual fullness, physical health, divine wisdom, and strength to those preaching the Gospel tirelessly.",
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
    testimony_desc: "Heartwarming fruits of faith, gospel answers, and field testimonies with multi-ethnic disciples.",
    btn_post_testimony: "Share Testimony",
    worship_badge: "Sing With One Voice",
    worship_title: "Global Worship Lounge",
    worship_desc: "Handpicked praise songs to sing during our monthly meeting or for personal daily meditation.",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\"",
    lyrics_snippet_2: "\"The Lord bless you and keep you, make His face shine upon you and be gracious to you.\" (Numbers 6 Blessing)",
    lyrics_snippet_3: "\"The King of Kings and Lord of Lords, how great is our God, sing with me, how great is our God.\"",
    footer_desc: "A united prayer hub connecting gospel evangelists and international saints for the next generation.",
    footer_schedule_title: "Monthly Meeting Info",
    footer_schedule_text: "• When: Sun, Oct 4, 2026, 20:00 QLD (Australia) / 19:00 Seoul (KST)<br>• Platform: Online Video Conference (Zoom / Google Meet)<br>• Language: Korean & English (Bilingual Session)",
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
    settings_info_text: "Please enter the meeting time based on Queensland, Australia (AEST / UTC+10) where the leader resides. It will be automatically converted to each nation's local time and Korea time.",
    lbl_next_meeting_date: "Next Meeting Date & Time (🇦🇺 Queensland Base / AEST)",
    lbl_zoom_link: "Zoom / Google Meet URL",
    lbl_meeting_id: "Meeting ID & Passcode Info",
    btn_save_settings: "Save Settings",
    amen_btn_label: "Amen 🙏",
    toast_prayer_added: "Your prayer has been posted. We pray together with you! 🙏",
    toast_testimony_added: "Your testimony has been registered. Glory to God! ✨",
    toast_copied: "Meeting invitation & link copied to clipboard! 📋",
    toast_settings_saved: "Meeting settings successfully saved! ⚙️",
    toast_amen_clicked: "You joined in prayer. Amen! ❤️",
    local_time_prefix: "Your Local Time: ",
    country_filter_title: "🌍 Filter by 8 Nations",
    country_filter_all: "🌐 All Nations",
    btn_edit_routine: "Edit Meeting Program & Content",
    routine_time_step1: "00 ~ 05 min (5 mins)",
    routine_time_step2: "05 ~ 10 min (5 mins)",
    routine_time_step3: "10 ~ 25 min (15 mins)",
    routine_time_step4: "25 ~ 30 min (5 mins)",
    modal_routine_title: "Edit 30-Min Prayer Routine Program",
    routine_modal_info: "Post and update the actual program for each of the 4 steps (Praise, 5m Gospel Message, 15m Intercession, 5m Closing & Blessing) for all global attendees.",
    lbl_routine_step1_song: "Song Title",
    lbl_routine_step1_link: "YouTube Music Link (Optional)",
    lbl_routine_step1_desc: "Praise Guide & Lyrics Meditation",
    lbl_routine_step2_scripture: "Scripture Reference",
    lbl_routine_step2_title: "Sermon / Sharing Title",
    lbl_routine_step2_content: "Gospel Word Summary / 3 Core Points (5m)",
    lbl_routine_step3_title: "Intercessory Prayer Theme",
    lbl_routine_step3_content: "3 Core Prayer Topics & Details",
    lbl_routine_step4_speaker: "Testimony Speaker / Blessing Guide",
    lbl_routine_step4_content: "Closing Order & Blessing Prayer",
    btn_save_routine: "Save Routine Program",
    btn_edit_sheet: "Edit in Google Sheet",
    toast_routine_saved: "30-min prayer program successfully saved! 📋",
    toast_sheet_synced: "Latest routine synced from Google Sheet! 📊",
    toast_sheet_sync_failed: "Failed to sync Google Sheet. Please check the URL and sharing permissions. ⚠️",
    routine_step3_sub: "Myself • All Nations • Next-Gen",
    routine_btn_text3: "View Focus Prayer Topics",
    routine_detail_badge3: "🔥 3-Pillar Focus Prayer Guide",
    routine_form_badge_step3: "🔥 Step 3: 3 Core Intercessory Prayers (15m) - Myself · All Nations · Next-Gen",
    prayer_guide_tag: "Official Prayer Guide",
    prayer_guide_heading: "Let Us Pray Together",
    prayer_guide_sub: "The official three-pillar prayer recited united in faith during Arise Next-Gen global gatherings.",
    btn_prayer_presentation: "Presentation Mode",
    btn_copy_prayer_guide: "Copy for Zoom Chat",
    btn_open_pdf: "PDF Original",
    pillar_1_cat: "Inner Faith & Foundation",
    pillar_1_title: "1. Prayer for Myself",
    pillar_1_sub: "1. 나를 위한 기도",
    pillar_1_quote: "“I must begin with myself.”",
    pillar_1_quote_sub: "“내가 제일 중요하다”",
    p1_b1_title: "May the Gospel become real and evident in my life.",
    p1_b1_sub: "내가 복음이 되기를",
    p1_b2_title: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b2_sub: "무기력하게 느껴지는 그리스도가 아니라, 성경에 나타난 능력의 그리스도를 누리기를",
    p1_b3_title: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    p1_b3_sub: "Up & Down에 흔들리지 않고 다니엘처럼 항상 한결같은 믿음이 되기를",
    pillar_2_cat: "Global Mission Fields",
    pillar_2_title: "2. Prayer for All Nations",
    pillar_2_sub: "2. 모든 민족을 위한 기도",
    p2_b1_title: "May all nations bow before Christ.",
    p2_b1_sub: "모든 민족이 그리스도 앞에 무릎 꿇도록",
    p2_b2_title: "For the nations represented here and for every nation of the world.",
    p2_b2_sub: "이곳에 모인 나라들과 세계 모든 나라를 위하여",
    p2_b3_title: "For countries and people suffering in the midst of war.",
    p2_b3_sub: "전쟁 속에서 고통받는 나라들과 사람들을 위하여",
    pillar_3_cat: "Next Generation & Future",
    pillar_3_title: "3. Prayer for the Next Generation",
    pillar_3_sub: "3. 후대를 위한 기도",
    p3_b1_title: "May the next generation know the Gospel.",
    p3_b1_sub: "후대가 복음을 알도록",
    p3_b2_title: "May they discover that the Gospel is truly good news.",
    p3_b2_sub: "복음이 정말 좋은 것임을 알도록",
    p3_b3_title: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b3_sub: "인생에 무슨 일이 생겨도 그리스도 안에 있으면 괜찮다는 것을 알도록",
    p3_b4_title: "May they see their studies and every part of life as preparation to serve and save all nations.",
    p3_b4_sub: "학업과 모든 일이 모든 민족을 살리는 준비임을 알도록",
    together_bar_title: "Let Us Pray Together",
    together_bar_sub: "함께 기도합시다",
    together_bar_desc: "United as one in the Holy Spirit, crying out in faith",
    pill_myself: "For myself",
    pill_myself_sub: "나 자신을 위하여",
    pill_nations: "For all nations",
    pill_nations_sub: "모든 민족을 위하여",
    pill_nextgen: "For the next generation",
    pill_nextgen_sub: "후대를 위하여",
    modal_guide_title: "Official Prayer Guide (Let Us Pray Together)",
    slide_badge_1: "Slide 1 / 4 • Prayer for Myself",
    slide_badge_2: "Slide 2 / 4 • Prayer for All Nations",
    slide_badge_3: "Slide 3 / 4 • Prayer for Next-Gen",
    slide_badge_4: "Slide 4 / 4 • Let Us Pray Together",
    btn_prev_slide: "Previous Slide",
    btn_next_slide: "Next Slide",
    toast_prayer_guide_copied: "Prayer Guide copied to clipboard! Paste it into your Zoom chat. 📋"
  },
  th: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "เครือข่ายอธิษฐานเพื่อคนรุ่นหลังทั่วโลก",
    nav_meeting: "ข้อมูลการประชุม",
    nav_routine: "ขั้นตอน 30 นาที",
    nav_prayer_guide: "บทอธิษฐานร่วมกัน",
    nav_prayer_wall: "สวนแห่งการอธิษฐาน",
    nav_testimonies: "คำพยานพระคุณ",
    nav_worship: "ห้องนมัสการ",
    nav_worship_studio: "🎬 สตูดิโอเนื้อเพลง",
    hero_badge: "เดือนละ 1 ครั้ง • 30 นาที | ร่วมอธิษฐานเพื่อคนรุ่นหลังทั่วโลก",
    hero_title: "จงลุกขึ้น ส่องสว่าง!<br><span class=\"gradient-text\">โอบกอดคนรุ่นหลังแห่งประชาชาติด้วยการอธิษฐาน</span>",
    hero_subtitle: "ห้องชั้นบนอันศักดิ์สิทธิ์ที่ผู้ประกาศข่าวประเสริฐและผู้เชื่อจากทุกชาติมารวมกันเดือนละครั้ง เพื่ออธิษฐานเผื่อคนรุ่นหลังและผู้เหลือรอด",
    hero_scripture_text: "\"สิ่งซึ่งท่านได้ยินจากข้าพเจ้าต่อหน้าพยานหลายๆ คน จงมอบไว้แก่บรรดาคนที่สัตย์ซื่อ ผู้สามารถสอนคนอื่นได้ด้วย\"",
    hero_scripture_ref: "2 ทิโมธี 2:2",
    countdown_tag: "นับถอยหลังสู่การอธิษฐาน",
    time_days: "วัน",
    time_hours: "ชั่วโมง",
    time_mins: "นาที",
    time_secs: "วินาที",
    btn_join_room: "เข้าร่วมห้องอธิษฐาน (Zoom)",
    btn_copy_link: "คัดลอกลิงก์และรหัสเชิญ",
    routine_badge: "กระชับและเปี่ยมด้วยพระวิญญาณ",
    routine_title: "ขั้นตอนทองคำในการอธิษฐาน 30 นาที",
    routine_desc: "4 ขั้นตอนอันทรงพลังที่ก้าวข้ามเขตเวลาและรวมหัวใจของเราเป็นหนึ่งเดียวในพระวิญญาณบริสุทธิ์",
    routine_step1_title: "ต้อนรับและสรรเสริญระดับโลก",
    routine_step1_desc: "เปิดใจด้วยเพลงสรรเสริญระดับสากล 1 เพลงเพื่อแสวงหาการทรงสถิตของพระวิญญาณบริสุทธิ์",
    routine_step2_title: "พระวจนะข่าวประเสริฐเพื่อคนรุ่นหลัง",
    routine_step2_desc: "ข้อความสั้น 7 นาทีจากพระคัมภีร์หลัก (พร้อมสไลด์ประกอบสองภาษา)",
    routine_step3_title: "3 หัวข้ออธิษฐานวิงวอนอย่างจดจ่อ",
    routine_step3_desc: "① ความรอดของคนรุ่นหลัง ② พันธกิจในแต่ละประเทศ ③ ผู้ประกาศข่าวประเสริฐ ส่งเสียงร้องในภาษาของตนเอง!",
    routine_step4_title: "คำพยาน 1 นาทีและคำอธิษฐานอวยพร",
    routine_step4_desc: "ฟังคำพยานสั้นๆ เกี่ยวกับพระราชกิจของพระเจ้า จากนั้นอธิษฐานอวยพรและจบด้วยคำอธิษฐานขององค์พระผู้เป็นเจ้า",
    core_prayer_heading: "📌 3 หัวข้ออธิษฐานหลักประจำเดือนนี้",
    focus_1_title: "ขอให้ความสว่างของพระคริสต์ส่องไปยังคนรุ่นหลัง",
    focus_1_desc: "ขอให้เยาวชนที่ติดอยู่ในกระแสโลกและความสับสน ค้นพบตัวตนที่แท้จริงและสันติสุขในพระกิตติคุณ",
    focus_2_title: "ขอให้เกิดสาวกผู้นำในบ้านเกิดของผู้เชื่อแต่ละคน",
    focus_2_desc: "ขอให้ผู้เชื่อที่รับพระคริสต์ยืนหยัดเป็นผู้นำที่สัตย์ซื่อเพื่อดูแลคนรุ่นหลังในประเทศของตน",
    focus_3_title: "ขอพระวิญญาณบริสุทธิ์ทรงสถิตและเสริมกำลังผู้ประกาศข่าวประเสริฐ",
    focus_3_desc: "ขอพระวิญญาณบริสุทธิ์ประทานกำลัง สุขภาพ และสติปัญญาแก่ผู้ประกาศข่าวประเสริฐที่ทุ่มเทอย่างไม่เหน็ดเหนื่อย",
    prayer_badge: "เครือข่ายอธิษฐาน 24 ชั่วโมง",
    prayer_title: "สวนอธิษฐานเพื่อคนรุ่นหลัง (Prayer Wall)",
    prayer_desc: "หัวข้ออธิษฐานจากผู้เชื่อทั่วโลก กด [เอเมน 🙏] เพื่อร่วมอธิษฐานไปด้วยกัน",
    btn_post_prayer: "แบ่งปันหัวข้ออธิษฐาน",
    filter_all: "ทั้งหมด",
    filter_nextgen: "👶 คนรุ่นหลัง/เยาวชน",
    filter_missions: "🌍 พันธกิจโลก",
    filter_evangelism: "✝️ การประกาศและสาวก",
    testimony_badge: "สิ่งที่พระเจ้าทรงกระทำ",
    testimony_title: "คำพยานและผลแห่งพระคุณ (Grace Feed)",
    testimony_desc: "ผลอันอบอุ่นแห่งความเชื่อ การตอบคำอธิษฐาน และคำพยานจากพันธกิจระดับโลก",
    btn_post_testimony: "แบ่งปันคำพยาน",
    worship_badge: "สรรเสริญเป็นเสียงเดียวกัน",
    worship_title: "ห้องนมัสการระดับโลก (Worship Lounge)",
    worship_desc: "บทเพลงสรรเสริญที่คัดสรรมาเพื่อร้องในการประชุมรายเดือนหรือเพื่อการใคร่ครวญส่วนตัว",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\"",
    lyrics_snippet_2: "\"ขอพระเจ้าทรงอวยพระพรท่าน และพิทักษ์รักษาท่าน ขอพระพักตร์ของพระองค์ทอแสงเหนือท่าน\" (กันดารวิถี 6)",
    lyrics_snippet_3: "\"จงสรรเสริญพระเจ้าผู้ยิ่งใหญ่ ร้องเพลงร่วมกับข้าพเจ้าว่าพระเจ้าของเรายิ่งใหญ่เพียงใด\"",
    footer_desc: "ศูนย์รวมการอธิษฐานที่เชื่อมโยงผู้ประกาศข่าวประเสริฐและวิสุทธิชนทั่วโลกเพื่อคนรุ่นหลัง",
    footer_schedule_title: "ข้อมูลการประชุมอธิษฐาน",
    footer_schedule_text: "• เวลา: วันอังคารแรกของทุกเดือน 19:00 (เวลาไทย 30 นาที)<br>• รูปแบบ: ออนไลน์ (Zoom / Google Meet)<br>• ภาษา: สองภาษา (เกาหลีและอังกฤษ)",
    footer_action_title: "ลิงก์ด่วน",
    global_times_title: "🌍 เวลาท้องถิ่นของประเทศที่เข้าร่วม",
    nations_label: "ประเทศที่ร่วมอธิษฐาน :",
    btn_join_room_short: "เข้าห้องอธิษฐาน",
    btn_settings_short: "การตั้งค่า",
    modal_prayer_title: "🙏 ส่งหัวข้ออธิษฐานเพื่อคนรุ่นหลัง",
    modal_lbl_name: "ชื่อ / ชื่อเล่น",
    modal_lbl_flag: "ประเทศ",
    modal_lbl_category: "หมวดหมู่",
    modal_lbl_content: "เนื้อหาคำอธิษฐาน",
    btn_cancel: "ยกเลิก",
    btn_submit_prayer: "ส่งคำอธิษฐาน",
    modal_testimony_title: "🌟 แบ่งปันพระคุณและคำพยาน",
    modal_lbl_title: "หัวข้อคำพยาน",
    modal_lbl_testimony_content: "เนื้อหาคำพยาน",
    btn_submit_testimony: "ลงทะเบียนคำพยาน",
    modal_settings_title: "ตั้งค่ากำหนดการและลิงก์",
    settings_info_text: "ผู้ประกาศข่าวประเสริฐสามารถปรับปรุงเวลาการประชุมและลิงก์ Zoom ได้ที่นี่",
    lbl_next_meeting_date: "วันและเวลาการประชุมถัดไป",
    lbl_zoom_link: "ลิงก์การประชุม Zoom / Meet",
    lbl_meeting_id: "รหัสการประชุมและรหัสผ่าน",
    btn_save_settings: "บันทึกการตั้งค่า",
    amen_btn_label: "เอเมน 🙏",
    toast_prayer_added: "ลงทะเบียนคำอธิษฐานเรียบร้อยแล้ว เราอธิษฐานร่วมกับท่าน! 🙏",
    toast_testimony_added: "ลงทะเบียนคำพยานแห่งพระคุณเรียบร้อยแล้ว ฮาเลลูยา ✨",
    toast_copied: "คัดลอกลิงก์เชิญไปยังคลิปบอร์ดแล้ว! 📋",
    toast_settings_saved: "บันทึกข้อมูลการประชุมเรียบร้อยแล้ว! ⚙️",
    toast_amen_clicked: "ท่านได้เข้าร่วมการอธิษฐาน เอเมน! ❤️",
    local_time_prefix: "เวลาท้องถิ่นของคุณ: ",
    country_filter_title: "🌍 กรองตาม 8 ประเทศ",
    country_filter_all: "🌐 ทุกประชาชาติ",
    routine_step3_sub: "เพื่อตนเอง • เพื่อทุกชนชาติ • เพื่อคนรุ่นหลัง",
    routine_btn_text3: "ดูหัวข้อการอธิษฐานมุ่งเน้น",
    routine_detail_badge3: "🔥 คู่มือการอธิษฐาน 3 เสาหลัก",
    routine_form_badge_step3: "🔥 ขั้นตอนที่ 3: การอธิษฐานวิงวอน 3 ด้าน (15 นาที) - ตนเอง · ทุกชนชาติ · คนรุ่นหลัง",
    prayer_guide_tag: "บทอธิษฐานร่วมกัน • Official Prayer Guide",
    prayer_guide_heading: "มาร่วมอธิษฐานด้วยกัน (Let Us Pray Together)",
    prayer_guide_sub: "บทอธิษฐาน 3 เสาหลักอย่างเป็นทางการที่ธรรมิกชนและผู้ประกาศข่าวประเสริฐสารภาพด้วยใจเดียวกันในการประชุม Arise Next-Gen",
    btn_prayer_presentation: "โหมดนำเสนอบทอธิษฐาน",
    btn_copy_prayer_guide: "คัดลอกสำหรับแชท Zoom",
    btn_open_pdf: "เอกสาร PDF ต้นฉบับ",
    pillar_1_cat: "รากฐานภายในและความเชื่อ",
    pillar_1_title: "1. การอธิษฐานเพื่อตนเอง",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“ฉันสำคัญที่สุด (ต้องเริ่มต้นที่ตนเอง)”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "ขอให้ข้าพเจ้าเป็นข่าวประเสริฐ (ให้ข่าวประเสริฐเป็นจริงในชีวิต)",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "ไม่ใช่พระคริสต์ที่ดูไร้พลัง แต่ขอให้ได้ชื่นชมยินดีในพระคริสต์ผู้ทรงฤทธานุภาพตามพระคัมภีร์",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "ขอให้มีความเชื่อที่มั่นคงสม่ำเสมอเหมือนดาเนียล ไม่หวั่นไหวไปตามความขึ้นๆ ลงๆ ฝ่ายวิญญาณ",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "ทุ่งพันธกิจและประชาชาติ",
    pillar_2_title: "2. การอธิษฐานเพื่อทุกชนชาติ",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "ขอให้ทุกชนชาติคุกเข่าลงต่อพระพักตร์พระคริสต์",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "เพื่อประชาชาติทั้งหลายที่มารวมกันที่นี่และทุกประเทศทั่วโลก",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "เพื่อประเทศและผู้คนที่ทนทุกข์อยู่ท่ามกลางสงคราม",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "คนรุ่นหลังและอนาคต",
    pillar_3_title: "3. การอธิษฐานเพื่อคนรุ่นหลัง",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "ขอให้คนรุ่นหลังได้รู้จักข่าวประเสริฐ",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "ขอให้พวกเขารู้ว่าข่าวประเสริฐเป็นสิ่งที่ดีอย่างแท้จริง",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "ขอให้พวกเขารู้ว่า ไม่ว่าจะเกิดอะไรขึ้นในชีวิต หากอยู่ในพระคริสต์ก็ปลอดภัยและมั่นคง",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "ขอให้พวกเขารู้ว่าการเรียนและการงานทุกสิ่งคือการเตรียมพร้อมเพื่อช่วยกู้ทุกชนชาติ",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "มาร่วมอธิษฐานด้วยกัน",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "เป็นหนึ่งเดียวกันในพระวิญญาณบริสุทธิ์ ร้องทูลด้วยความเชื่อ",
    pill_myself: "เพื่อตนเอง",
    pill_myself_sub: "For myself",
    pill_nations: "เพื่อทุกชนชาติ",
    pill_nations_sub: "For all nations",
    pill_nextgen: "เพื่อคนรุ่นหลัง",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "บทอธิษฐานอย่างเป็นทางการ (Let Us Pray Together)",
    slide_badge_1: "สไลด์ 1 / 4 • การอธิษฐานเพื่อตนเอง",
    slide_badge_2: "สไลด์ 2 / 4 • การอธิษฐานเพื่อทุกชนชาติ",
    slide_badge_3: "สไลด์ 3 / 4 • การอธิษฐานเพื่อคนรุ่นหลัง",
    slide_badge_4: "สไลด์ 4 / 4 • มาร่วมอธิษฐานด้วยกัน",
    btn_prev_slide: "สไลด์ก่อนหน้า",
    btn_next_slide: "สไลด์ถัดไป",
    toast_prayer_guide_copied: "คัดลอกบทอธิษฐานไปยังคลิปบอร์ดแล้ว! วางในแชท Zoom ได้ทันที 📋"
  },
  ar: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "شبكة الصلاة العالمية للجيل القادم",
    nav_meeting: "معلومات الاجتماع",
    nav_routine: "برنامج 30 دقيقة",
    nav_prayer_guide: "دليل الصلاة",
    nav_prayer_wall: "حائط الصلاة",
    nav_testimonies: "شهادات النعمة",
    nav_worship: "صالة التسبيح",
    nav_worship_studio: "🎬 استوديو الترجمة",
    hero_badge: "مرة شهرياً • 30 دقيقة | صلاة شفاعية عالمية للجيل القادم",
    hero_title: "قُومِي اسْتَنِيرِي!<br><span class=\"gradient-text\">نحتضن الجيل القادم بالصلاة بين الأمم</span>",
    hero_subtitle: "علّيّة مقدسة يجتمع فيها المبشرون والمؤمنون من جميع الأمم مرة في الشهر للصلاة بحرارة من أجل الجيل القادم والبقية.",
    hero_scripture_text: "\"وَمَا سَمِعْتَهُ مِنِّي بِشُهُودٍ كَثِيرِينَ، أَوْدِعْهُ أُنَاسًا أُمَنَاءَ، يَكُونُونَ أَكْفَاءً أَنْ يُعَلِّمُوا آخَرِينَ أَيْضًا.\"",
    hero_scripture_ref: "2 تيموثاوس 2: 2",
    countdown_tag: "العد التنازلي للاجتماع القادم",
    time_days: "أيام",
    time_hours: "ساعات",
    time_mins: "دقائق",
    time_secs: "ثواني",
    btn_join_room: "الانضمام إلى غرفة الصلاة (Zoom)",
    btn_copy_link: "نسخ رابط الدعوة والمعرف",
    routine_badge: "موجز ومملوء بالروح القدس",
    routine_title: "البرنامج الذهبي للصلاة المركزة في 30 دقيقة",
    routine_desc: "تسلسل قوي من 4 خطوات يتجاوز المناطق الزمنية ويوحد قلوبنا في الروح القدس.",
    routine_step1_title: "ترحيب وتسبيح عالمي",
    routine_step1_desc: "نفتح قلوبنا بترنيمة تسبيح عالمية لطلب حضور الروح القدس معاً.",
    routine_step2_title: "كلمة الإنجيل للجيل القادم",
    routine_step2_desc: "رسالة أساسية موجزة لمدة 7 دقائق مبنية على آيات الكتاب المقدس (مع شرائح بلغتين).",
    routine_step3_title: "3 صلوات شفاعية مركزة",
    routine_step3_desc: "① خلاص الجيل القادم ② حقول الإرسالية الوطنية ③ المبشرون بالإنجيل. اصرخوا بلغاتكم الأصلية!",
    routine_step4_title: "شهادة لمدة دقيقة وصلاة البركة",
    routine_step4_desc: "الاستماع إلى شهادة سريعة عن عمل الله في الميدان، تليها البركات المتبادلة والصلاة الربانية.",
    core_prayer_heading: "📌 مواضيع الصلاة الثلاثة الرئيسية لهذا الشهر",
    focus_1_title: "أن يشرق نور المسيح على الجيل القادم",
    focus_1_desc: "ليت الشباب العالقين في الدنيوية والارتباك يجدون هويتهم الحقيقية وسلامهم في الإنجيل.",
    focus_2_title: "إقامة تلاميذ قادة في أوطان كل المؤمنين",
    focus_2_desc: "ليقف المؤمنون الذين قبلوا المسيح كقادة أمناء لتنشئة الجيل القادم في بلدانهم.",
    focus_3_title: "من أجل الصحة والامتلاء الروحي للمبشرين",
    focus_3_desc: "امنح القوة الروحية والجسدية والحكمة لأولئك الذين يكرزون بالإنجيل دون كلل في الميادين.",
    prayer_badge: "شبكة صلاة على مدار 24 ساعة",
    prayer_title: "حائط الصلاة العالمي للجيل القادم (Prayer Wall)",
    prayer_desc: "طلبات صلاة من مؤمنين حول العالم. انقر فوق [آمين 🙏] للمشاركة في الصلاة الشفاعية.",
    btn_post_prayer: "مشاركة طلب صلاة",
    filter_all: "عرض الكل",
    filter_nextgen: "👶 الجيل القادم/الشباب",
    filter_missions: "🌍 الإرساليات العالمية",
    filter_evangelism: "✝️ التبشير والتلمذة",
    testimony_badge: "ما صنعه الرب",
    testimony_title: "شهادات حية من الميدان (Grace Feed)",
    testimony_desc: "ثمار دافئة للإيمان وإجابات الإنجيل وشهادات من حقول الإرساليات العالمية.",
    btn_post_testimony: "مشاركة شهادة",
    worship_badge: "نسبح بصوت واحد",
    worship_title: "صالة التسبيح العالمية (Worship Lounge)",
    worship_desc: "ترانيم تسبيح مختارة للترنيم خلال لقائنا الشهري أو للتأمل اليومي الشخصي.",
    lyrics_snippet_1: "\"صانع الطريق، صانع العجائب، حافظ العهود، نور في الظلمة، هذا هو إلهي.\"",
    lyrics_snippet_2: "\"يُبَارِكُكَ الرَّبُّ وَيَحْرُسُكَ. يُضِيءُ الرَّبُّ بِوَجْهِهِ عَلَيْكَ وَيَرْحَمُكَ.\" (بركة العدد 6)",
    lyrics_snippet_3: "\"ملك الملوك ورب الأرباب، ما أعظم إلهنا، رنموا معي ما أعظم إلهنا.\"",
    footer_desc: "ملتقى صلاة موحد يربط مبشري الإنجيل وقديسي العالم من أجل الجيل القادم.",
    footer_schedule_title: "معلومات الصلاة الشهرية",
    footer_schedule_text: "• الموعد: الثلاثاء الأول من كل شهر، 14:00 بتوقيت القاهرة (30 دقيقة)<br>• المنصة: اجتماع عبر الإنترنت (Zoom / Google Meet)<br>• اللغة: جلسة ثنائية اللغة",
    footer_action_title: "روابط سريعة",
    global_times_title: "🌍 التوقيت المحلي للدول المشاركة",
    nations_label: "الدول المصلية معاً :",
    btn_join_room_short: "دخول الصلاة",
    btn_settings_short: "الإعدادات",
    modal_prayer_title: "🙏 تقديم طلب صلاة للجيل القادم",
    modal_lbl_name: "الاسم / اللقب",
    modal_lbl_flag: "الدولة",
    modal_lbl_category: "الفئة",
    modal_lbl_content: "طلب الصلاة",
    btn_cancel: "إلغاء",
    btn_submit_prayer: "إرسال الصلاة",
    modal_testimony_title: "🌟 شارك نعمتك وشهادتك",
    modal_lbl_title: "عنوان الشهادة",
    modal_lbl_testimony_content: "محتوى الشهادة",
    btn_submit_testimony: "تسجيل الشهادة",
    modal_settings_title: "إعدادات موعد ورابط الصلاة",
    settings_info_text: "يمكن للمبشر تحديث موعد الاجتماع ورابط الزوم هنا لجميع الأعضاء.",
    lbl_next_meeting_date: "موعد وتاريخ الاجتماع القادم",
    lbl_zoom_link: "رابط زوم أو جوجل ميت",
    lbl_meeting_id: "معرف الاجتماع ورمز المرور",
    btn_save_settings: "حفظ الإعدادات",
    amen_btn_label: "آمين 🙏",
    toast_prayer_added: "تم تسجيل طلب الصلاة بنجاح. نصلي معك! 🙏",
    toast_testimony_added: "تمت إضافة الشهادة المباركة! هللويا ✨",
    toast_copied: "تم نسخ رابط ومعلومات الدعوة إلى الحافظة! 📋",
    toast_settings_saved: "تم حفظ معلومات الاجتماع بنجاح! ⚙️",
    toast_amen_clicked: "لقد شاركت في الصلاة الشفاعية. آمين! ❤️",
    local_time_prefix: "توقيتك المحلي: ",
    country_filter_title: "🌍 تصفية حسب الدول الثماني",
    country_filter_all: "🌐 كل الأمم",
    routine_step3_sub: "من أجل نفسي • من أجل جميع الأمم • من أجل الجيل القادم",
    routine_btn_text3: "عرض موضوعات الصلاة المركزة",
    routine_detail_badge3: "🔥 دليل الصلاة المركزة لثلاثة محاور",
    routine_form_badge_step3: "🔥 الخطوة 3: الصلاة الشفاعية المركزة (15 دقيقة) - نفسي · جميع الأمم · الجيل القادم",
    prayer_guide_tag: "دليل الصلاة المشتركة • Official Prayer Guide",
    prayer_guide_heading: "لِنُصَلِّ معاً (Let Us Pray Together)",
    prayer_guide_sub: "الصلاة الرسمية ذات المحاور الثلاثة التي يعترف بها القديسون والمبشرون بقلب واحد في اجتماعات Arise Next-Gen.",
    btn_prayer_presentation: "وضع عرض الشرائح للصلاة",
    btn_copy_prayer_guide: "نسخ لدردشة Zoom",
    btn_open_pdf: "ملف PDF الأصلي",
    pillar_1_cat: "العمق الروحي وأساس الإيمان",
    pillar_1_title: "1. الصلاة من أجل نفسي",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“أنا الأهم (يجب أن أبدأ بنفسي)”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "أن يصبح الإنجيل حياً وواقعاً متجلياً في حياتي",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "ألا أختبر مسيحاً عاجزاً، بل أتمتع بالمسيح القوي المُعلن في الكتاب المقدس",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "أن يظل إيماني ثابتاً دائماً كدانيال، غير متزعزع بتقلبات الحياة الروحية",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "حقول الخدمة وجميع الأمم",
    pillar_2_title: "2. الصلاة من أجل جميع الأمم",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "أن تجثو كل أمة أمام المسيح مخلّصاً",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "من أجل الأمم المجتمعة هنا وجميع دول العالم",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "من أجل البلدان والشعوب التي تعاني في وسط الحروب",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "الجيل القادم والمستقبل",
    pillar_3_title: "3. الصلاة من أجل الجيل القادم",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "أن يعرف الجيل القادم الإنجيل بالحق",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "أن يدركوا أن الإنجيل هو حقاً بشرى سارة عظيمة لحياتهم",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "أن يعلموا أنه مهما حدث في الحياة، فهم في أمان وسلام طالما هم في المسيح",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "أن يدركوا أن دراستهم وكل شؤونهم هي إعداد لخدمة وخلاص جميع الأمم",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "لِنُصَلِّ معاً",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "متحدين في الروح القدس، نصرخ بإيمان وثقة",
    pill_myself: "من أجل نفسي",
    pill_myself_sub: "For myself",
    pill_nations: "من أجل جميع الأمم",
    pill_nations_sub: "For all nations",
    pill_nextgen: "من أجل الجيل القادم",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "دليل الصلاة الرسمي (Let Us Pray Together)",
    slide_badge_1: "شريحة 1 / 4 • الصلاة من أجل نفسي",
    slide_badge_2: "شريحة 2 / 4 • الصلاة من أجل جميع الأمم",
    slide_badge_3: "شريحة 3 / 4 • الصلاة من أجل الجيل القادم",
    slide_badge_4: "شريحة 4 / 4 • لِنُصَلِّ معاً",
    btn_prev_slide: "الشريحة السابقة",
    btn_next_slide: "الشريحة التالية",
    toast_prayer_guide_copied: "تم نسخ دليل الصلاة إلى الحافظة! يمكنك لصقه في دردشة Zoom. 📋"
  },
  fr: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Réseau Mondial de Prière pour la Prochaine Génération",
    nav_meeting: "Infos Réunion",
    nav_routine: "Routine 30 Min",
    nav_prayer_guide: "Guide de Prière",
    nav_prayer_wall: "Mur de Prière",
    nav_testimonies: "Témoignages",
    nav_worship: "Salon de Louange",
    nav_worship_studio: "🎬 Studio Sous-titres",
    hero_badge: "1 fois par mois • 30 mins | Intercession Mondiale pour la Prochaine Génération",
    hero_title: "Lève-toi, Sois Éclairée!<br><span class=\"gradient-text\">Porter la Prochaine Génération des Nations dans la Prière</span>",
    hero_subtitle: "Une chambre haute sacrée où évangélistes et croyants de toutes nations s'unissent pour prier pour la prochaine génération et les restants.",
    hero_scripture_text: "\"Et ce que tu as entendu de moi en présence de beaucoup de témoins, confie-le à des hommes fidèles, qui soient capables de l'enseigner aussi à d'autres.\"",
    hero_scripture_ref: "2 Timothée 2:2",
    countdown_tag: "Compte à rebours de la prochaine réunion",
    time_days: "Jours",
    time_hours: "Heures",
    time_mins: "Mins",
    time_secs: "Secs",
    btn_join_room: "Rejoindre la salle de prière (Zoom)",
    btn_copy_link: "Copier le lien d'invitation & ID",
    routine_badge: "Concis & Rempli de l'Esprit",
    routine_title: "La Routine Dorée de Prière en 30 Minutes",
    routine_desc: "Une séquence puissante en 4 étapes qui transcende les fuseaux horaires et unit nos cœurs dans le Saint-Esprit.",
    routine_step1_title: "Accueil & Louange Mondiale",
    routine_step1_desc: "Ouvrir nos cœurs avec 1 chant de louange mondialement connu pour rechercher ensemble la présence du Saint-Esprit.",
    routine_step2_title: "Parole de l'Évangile pour la Prochaine Génération",
    routine_step2_desc: "Un message fondamental concis de 7 minutes enraciné dans les Écritures (avec diapositives bilingues).",
    routine_step3_title: "3 Prières d'Intercession Ciblées",
    routine_step3_desc: "① Salut de la Prochaine Génération ② Champs de Mission Nationaux ③ Évangélisateurs. Priez dans votre propre langue maternelle !",
    routine_step4_title: "Témoignage d'1 Min & Bénédiction",
    routine_step4_desc: "Écouter un court témoignage de l'action de Dieu sur le terrain, suivi de bénédictions mutuelles et du Notre Père.",
    core_prayer_heading: "📌 3 Sujets Principaux de Prière pour ce Mois",
    focus_1_title: "Que la Lumière du Christ Brille sur la Prochaine Génération",
    focus_1_desc: "Que les jeunes piégés dans la sécularisation et la confusion découvrent leur véritable identité et la paix dans l'Évangile.",
    focus_2_title: "Que des Disciples Soient Établis dans la Patrie de Chaque Croyant",
    focus_2_desc: "Que les croyants qui ont reçu le Christ se lèvent comme des leaders fidèles pour élever la prochaine génération.",
    focus_3_title: "Pour la Santé et la Plénitude Spirituelle des Évangélisateurs",
    focus_3_desc: "Accorde force spirituelle, santé et sagesse à ceux qui prêchent sans relâche sur les champs de mission.",
    prayer_badge: "Réseau d'Intercession 24h/24",
    prayer_title: "Mur Mondial de Prière (Next-Gen)",
    prayer_desc: "Demandes de prière des croyants internationaux. Cliquez sur [Amen 🙏] pour vous joindre à l'intercession.",
    btn_post_prayer: "Partager une Demande de Prière",
    filter_all: "Tout afficher",
    filter_nextgen: "👶 Next-Gen / Jeunesse",
    filter_missions: "🌍 Missions Mondiales",
    filter_evangelism: "✝️ Évangélisation & Disciples",
    testimony_badge: "Ce que Dieu a Fait",
    testimony_title: "Témoignages de Grâce sur le Terrain (Grace Feed)",
    testimony_desc: "Fruits chaleureux de la foi, réponses à l'Évangile et témoignages des champs de mission internationaux.",
    btn_post_testimony: "Partager un Témoignage",
    worship_badge: "Louer d'Une Seule Voix",
    worship_title: "Salon Mondial de Louange (Worship Lounge)",
    worship_desc: "Chants de louange sélectionnés pour notre réunion mensuelle ou pour la méditation quotidienne.",
    lyrics_snippet_1: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\"",
    lyrics_snippet_2: "\"Que l'Éternel te bénisse et te garde, qu'Il fasse luire Sa face sur toi et t'accorde Sa grâce.\" (Nombres 6)",
    lyrics_snippet_3: "\"Le Roi des rois et Seigneur des seigneurs, que notre Dieu est grand, chantez avec moi combien notre Dieu est grand.\"",
    footer_desc: "Un centre de prière uni reliant les évangélistes et les saints du monde entier pour la prochaine génération.",
    footer_schedule_title: "Infos Prière Mensuelle",
    footer_schedule_text: "• Quand: 1er mardi de chaque mois, 14:00 (Heure de Paris, 30 mins)<br>• Plateforme: Visioconférence (Zoom / Google Meet)<br>• Langue: Session bilingue",
    footer_action_title: "Liens Rapides",
    global_times_title: "🌍 Heure Locale des Nations Participantes",
    nations_label: "Nations en Prière :",
    btn_join_room_short: "Rejoindre la Prière",
    btn_settings_short: "Paramètres",
    modal_prayer_title: "🙏 Soumettre une Prière pour la Prochaine Génération",
    modal_lbl_name: "Nom / Pseudonyme",
    modal_lbl_flag: "Pays",
    modal_lbl_category: "Catégorie",
    modal_lbl_content: "Demande de Prière",
    btn_cancel: "Annuler",
    btn_submit_prayer: "Publier la Prière",
    modal_testimony_title: "🌟 Partagez votre Grâce & Témoignage",
    modal_lbl_title: "Titre du Témoignage",
    modal_lbl_testimony_content: "Contenu du Témoignage",
    btn_submit_testimony: "Publier le Témoignage",
    modal_settings_title: "Paramètres de la Réunion",
    settings_info_text: "L'évangéliste/hôte peut mettre à jour ici l'heure de la réunion et le lien Zoom pour tous.",
    lbl_next_meeting_date: "Date et Heure de la Prochaine Réunion",
    lbl_zoom_link: "Lien de la Réunion Zoom / Meet",
    lbl_meeting_id: "ID de Réunion & Code d'Accès",
    btn_save_settings: "Enregistrer les Paramètres",
    amen_btn_label: "Amen 🙏",
    toast_prayer_added: "Votre prière a été publiée avec succès. Nous prions avec vous ! 🙏",
    toast_testimony_added: "Votre témoignage a été enregistré ! Alléluia ✨",
    toast_copied: "L'invitation et le lien ont été copiés dans le presse-papiers ! 📋",
    toast_settings_saved: "Informations de réunion enregistrées ! ⚙️",
    toast_amen_clicked: "Vous avez rejoint l'intercession. Amen ! ❤️",
    local_time_prefix: "Votre Heure Locale : ",
    country_filter_title: "🌍 Filtrer par 8 nations",
    country_filter_all: "🌐 Toutes les nations",
    routine_step3_sub: "Moi-même • Toutes les nations • Prochaine génération",
    routine_btn_text3: "Voir les sujets de prière ciblés",
    routine_detail_badge3: "🔥 Guide de prière ciblée en 3 piliers",
    routine_form_badge_step3: "🔥 Étape 3: Intercession ciblée (15 min) - Moi-même · Toutes les nations · Prochaine génération",
    prayer_guide_tag: "Guide officiel de prière • Official Prayer Guide",
    prayer_guide_heading: "Prions ensemble (Let Us Pray Together)",
    prayer_guide_sub: "La prière officielle en 3 piliers confessée d'un commun accord lors des rassemblements Arise Next-Gen.",
    btn_prayer_presentation: "Mode Présentation",
    btn_copy_prayer_guide: "Copier pour Zoom Chat",
    btn_open_pdf: "Document PDF Original",
    pillar_1_cat: "Fondation intérieure & foi",
    pillar_1_title: "1. Prière pour moi-même",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "« Je suis le plus important (Je dois commencer par moi-même) »",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "Que l'Évangile devienne réel et évident dans ma vie",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "Que j'expérimente non pas un Christ impuissant, mais le Christ puissant révélé dans les Écritures",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "Que ma foi demeure inébranlable comme celle de Daniel, sans être dominée par les hauts et les bas spirituels",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "Champs missionnaires & nations",
    pillar_2_title: "2. Prière pour toutes les nations",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "Que toutes les nations fléchissent le genou devant Christ",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "Pour les nations rassemblées ici et pour chaque nation du monde",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "Pour les pays et les populations qui souffrent au milieu des guerres",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "Prochaine génération & avenir",
    pillar_3_title: "3. Prière pour la prochaine génération",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "Que la prochaine génération connaisse l'Évangile",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "Qu'ils découvrent que l'Évangile est véritablement une bonne nouvelle",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "Qu'ils sachent que quoi qu'il arrive dans la vie, ils sont en sécurité totale lorsqu'ils sont en Christ",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "Qu'ils comprennent que leurs études et toutes leurs activités sont une préparation pour sauver toutes les nations",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "Prions ensemble",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "Unis dans le Saint-Esprit, crions avec foi",
    pill_myself: "Pour moi-même",
    pill_myself_sub: "For myself",
    pill_nations: "Pour toutes les nations",
    pill_nations_sub: "For all nations",
    pill_nextgen: "Pour la prochaine génération",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "Guide officiel de prière (Let Us Pray Together)",
    slide_badge_1: "Diapositive 1 / 4 • Prière pour moi-même",
    slide_badge_2: "Diapositive 2 / 4 • Prière pour toutes les nations",
    slide_badge_3: "Diapositive 3 / 4 • Prière pour la prochaine génération",
    slide_badge_4: "Diapositive 4 / 4 • Prions ensemble",
    btn_prev_slide: "Diapositive précédente",
    btn_next_slide: "Diapositive suivante",
    toast_prayer_guide_copied: "Le guide de prière a été copié dans le presse-papiers ! Collez-le dans le chat Zoom. 📋"
  },
  zh: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "全球后代祷告网络",
    nav_meeting: "聚会指南",
    nav_routine: "30分钟流程",
    nav_prayer_guide: "共同祷告文",
    nav_prayer_wall: "祷告花园",
    nav_testimonies: "恩典见证",
    nav_worship: "赞美休息室",
    nav_worship_studio: "🎬 赞美字幕工坊",
    hero_badge: "每月一次 • 30分钟 | 全球同心为下一代代祷",
    hero_title: "兴起发光！<br><span class=\"gradient-text\">在祷告中怀抱万国的后代与下一代</span>",
    hero_subtitle: "传道者与万国信徒每月一次齐聚一堂，为下一代和后代迫切祷告的神圣马可楼。",
    hero_scripture_text: "\"你在许多见证人面前听见我所教训的，也要交托那忠心能教导别人的人。\"",
    hero_scripture_ref: "提摩太后书 2:2",
    countdown_tag: "下次祷告会倒计时",
    time_days: "天",
    time_hours: "时",
    time_mins: "分",
    time_secs: "秒",
    btn_join_room: "进入在线祷告室 (Zoom)",
    btn_copy_link: "复制邀请链接与ID",
    routine_badge: "紧凑而充满圣灵",
    routine_title: "30分钟专注祷告黄金流程",
    routine_desc: "超越时区与国界、在圣灵里深度合一的4步强有力顺序。",
    routine_step1_title: "欢迎与全球赞美",
    routine_step1_desc: "用一首全球广为人知的赞美诗敞开心扉，同心渴慕圣灵的同在。",
    routine_step2_title: "后代应许的短信息",
    routine_step2_desc: "以1-2节核心经文为中心的7分钟核心信息（提供双语字幕幻灯片）。",
    routine_step3_title: "三大集中中保祷告",
    routine_step3_desc: "① 全球后代福音化 ② 各国宣教现场 ③ 传道者与教会。用各自的母语呼求！",
    routine_step4_title: "1分钟见证与祝祷",
    routine_step4_desc: "聆听现场宣教的小见证，随后互致祝福并以主祷文结束。",
    core_prayer_heading: "📌 本月三大核心祷告题目",
    focus_1_title: "愿基督的救恩之光照耀万国后代",
    focus_1_desc: "愿陷入世俗化和属灵混乱的青少年前来在福音里发现真正的身份与平安。",
    focus_2_title: "在每位信徒的祖国兴起后代门徒领袖",
    focus_2_desc: "愿接受福音的信徒坚立为忠心的门徒，在自己的国家和家庭中养育下一代。",
    focus_3_title: "为传道者的健康与圣灵充满代祷",
    focus_3_desc: "赐予不知疲倦在现场传扬福音的传道者身心强健、圣灵充满与属天的智慧。",
    prayer_badge: "24小时代祷网络",
    prayer_title: "全球后代祷告花园 (Prayer Wall)",
    prayer_desc: "来自世界各地信徒的祷告题目。点击 [阿们 🙏] 一同代祷。",
    btn_post_prayer: "发布后代祷告题目",
    filter_all: "查看全部",
    filter_nextgen: "👶 后代/青少年",
    filter_missions: "🌍 万国宣教",
    filter_evangelism: "✝️ 传道与门徒",
    testimony_badge: "神所行的奇事",
    testimony_title: "宣教现场恩典见证 (Grace Feed)",
    testimony_desc: "分享与万国信徒在现场经历的感恩果实和福音应允。",
    btn_post_testimony: "分享见证",
    worship_badge: "同声合一赞美",
    worship_title: "全球赞美休息室 (Worship Lounge)",
    worship_desc: "适合在月度祷告会上齐唱或日常默想的全球赞美精选。",
    lyrics_snippet_1: "\"旷野开道路，沙漠开江河，成就应许，黑暗中的光，我的神就是这样一位神。\"",
    lyrics_snippet_2: "\"愿耶和华赐福给你，保护你；愿耶和华使祂的脸光照你，赐恩给你。\" (民数记 6章)",
    lyrics_snippet_3: "\"万王之王，万主之主，我们的神何等伟大，同来歌唱我们的神何等伟大。\"",
    footer_desc: "为万国后代与下一代，福音传道者与全球信徒以祷告合一的殿堂。",
    footer_schedule_title: "定期祷告会指南",
    footer_schedule_text: "• 时间: 每月第一个星期二 20:00 (北京时间，30分钟)<br>• 方式: 在线视频会议 (Zoom / Google Meet)<br>• 语言: 双语会议 (韩语与英语)",
    footer_action_title: "快速链接",
    global_times_title: "🌍 参会各国当地时间",
    nations_label: "同心祷告万国 :",
    btn_join_room_short: "进入祷告会",
    btn_settings_short: "管理与设置",
    modal_prayer_title: "🙏 为后代填写祷告题目",
    modal_lbl_name: "姓名或昵称",
    modal_lbl_flag: "国家 / 国旗",
    modal_lbl_category: "祷告领域",
    modal_lbl_content: "祷告题目",
    btn_cancel: "取消",
    btn_submit_prayer: "发布祷告",
    modal_testimony_title: "🌟 分享恩典与见证",
    modal_lbl_title: "见证题目",
    modal_lbl_testimony_content: "见证内容",
    btn_submit_testimony: "发布见证",
    modal_settings_title: "祷告会日程与链接设置",
    settings_info_text: "传道者可在此更新下次聚会时间和Zoom链接，向所有成员发布。",
    lbl_next_meeting_date: "下次聚会日期与时间",
    lbl_zoom_link: "Zoom / Meet 会议链接",
    lbl_meeting_id: "会议ID与密码信息",
    btn_save_settings: "保存设置",
    amen_btn_label: "阿们 🙏",
    toast_prayer_added: "祷告题目已成功发布，我们同心为您代祷！🙏",
    toast_testimony_added: "恩典见证已成功发布！哈利路亚 ✨",
    toast_copied: "邀请链接与说明已复制到剪贴板！📋",
    toast_settings_saved: "聚会设置已成功保存！⚙️",
    toast_amen_clicked: "您已加入同心中保祷告。阿们！❤️",
    local_time_prefix: "您的当地时间: ",
    country_filter_title: "🌍 8国列国代祷筛选",
    country_filter_all: "🌐 全球列国",
    routine_step3_sub: "我自己 • 万国万民 • 下一代后代",
    routine_btn_text3: "查看本次聚会重点祷告题目",
    routine_detail_badge3: "🔥 3大重点祷告指南",
    routine_form_badge_step3: "🔥 第3步：3大重点代祷 (15分钟) - 我自己 · 万国万民 · 下一代后代",
    prayer_guide_tag: "共同祷告文 • Official Prayer Guide",
    prayer_guide_heading: "让我们同心祷告 (Let Us Pray Together)",
    prayer_guide_sub: "Arise Next-Gen 国际聚会时，圣徒与传道者同心合意宣告的三大官方祷告文。",
    btn_prayer_presentation: "祷告文幻灯片演示模式",
    btn_copy_prayer_guide: "复制用于Zoom聊天室",
    btn_open_pdf: "PDF 原文",
    pillar_1_cat: "内在与信仰的根基",
    pillar_1_title: "1. 为自己的祷告",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“我是最重要的（必须从我开始）”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "愿我成为福音（愿福音在我的生命中成为真实可见的见证）",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "不是经历感到无力的基督，而是享受圣经中所启示的有能力的基督",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "不随灵性起伏（Up & Down）动摇，拥有如但以理般始终如一的坚定信心",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "万民与世界宣教现场",
    pillar_2_title: "2. 为万民的祷告",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "愿万国万民都在基督面前屈膝下拜",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "为在此聚集的各国以及全世界所有国家祷告",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "为在战争苦难中的国家与人民祷告",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "后代与未来",
    pillar_3_title: "3. 为后代的祷告",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "愿下一代后代明白并认识福音",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "愿他们明白福音是何等美好宝贵的大喜信息",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "愿他们知道无论人生遭遇何事，只要在基督里就安全无虞、安然无恙",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "愿他们明白学业与一切事情都是拯救万民的预备",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "让我们同心祷告",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "在圣灵里合而为一，凭信心同声呼求",
    pill_myself: "为我自己",
    pill_myself_sub: "For myself",
    pill_nations: "为万国万民",
    pill_nations_sub: "For all nations",
    pill_nextgen: "为下一代后代",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "官方祷告文 (Let Us Pray Together)",
    slide_badge_1: "幻灯片 1 / 4 • 为自己的祷告",
    slide_badge_2: "幻灯片 2 / 4 • 为万民的祷告",
    slide_badge_3: "幻灯片 3 / 4 • 为后代的祷告",
    slide_badge_4: "幻灯片 4 / 4 • 让我们同心祷告",
    btn_prev_slide: "上一张幻灯片",
    btn_next_slide: "下一张幻灯片",
    toast_prayer_guide_copied: "共同祷告文已复制到剪贴板！可直接粘贴至 Zoom 聊天室。📋"
  },
  id: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Jaringan Doa Global Generasi Penerus",
    nav_meeting: "Info Doa",
    nav_routine: "Rutin 30 Mnt",
    nav_prayer_guide: "Panduan Doa",
    nav_prayer_wall: "Taman Doa",
    nav_testimonies: "Kesaksian",
    nav_worship: "Ruang Pujian",
    nav_worship_studio: "🎬 Studio Lirik",
    hero_badge: "1 Kali Sebulan • 30 Menit | Doa Syafaat Global untuk Generasi Penerus",
    hero_title: "Bangkitlah, Menjadi Terang!<br><span class=\"gradient-text\">Merangkul Generasi Penerus Bangsa-Bangsa dalam Doa</span>",
    hero_subtitle: "Kamar atas yang kudus tempat para penginjil dan orang percaya dari segala bangsa bersatu untuk berdoa bagi generasi penerus.",
    hero_scripture_text: "\"Apa yang telah engkau dengar dari padaku di depan banyak saksi, serahkanlah itu kepada orang-orang yang dapat dipercayai, yang juga cakap mengajar orang lain.\"",
    hero_scripture_ref: "2 Timotius 2:2",
    countdown_tag: "Hitung Mundur Pertemuan Doa",
    time_days: "Hari",
    time_hours: "Jam",
    time_mins: "Menit",
    time_secs: "Detik",
    btn_join_room: "Masuk Ruang Doa (Zoom)",
    btn_copy_link: "Salin Tautan Undangan & ID",
    routine_badge: "Padat & Dipenuhi Roh Kudus",
    routine_title: "Rutin Emas Doa Fokus 30 Menit",
    routine_desc: "4 langkah berkuasa yang melampaui zona waktu dan menyatukan hati kita dalam Roh Kudus.",
    routine_step1_title: "Penyambutan & Pujian Global",
    routine_step1_desc: "Membuka hati dengan 1 lagu pujian yang dikenal secara global untuk mencari hadirat Roh Kudus bersama.",
    routine_step2_title: "Pesan Injil untuk Generasi Penerus",
    routine_step2_desc: "Pesan inti 7 menit yang berakar pada ayat firman Tuhan (dengan slide dwibahasa).",
    routine_step3_title: "3 Pokok Doa Syafaat Terfokus",
    routine_step3_desc: "① Keselamatan Generasi Penerus ② Ladang Misi Nasional ③ Para Penginjil. Berserulah dalam bahasa ibu masing-masing!",
    routine_step4_title: "Kesaksian 1 Menit & Doa Berkat",
    routine_step4_desc: "Mendengarkan kesaksian singkat karya Tuhan di ladang misi, diakhiri dengan doa berkat dan Doa Bapa Kami.",
    core_prayer_heading: "📌 3 Pokok Doa Utama Bulan Ini",
    focus_1_title: "Biarlah Terang Kristus Bersinar atas Generasi Penerus",
    focus_1_desc: "Kiranya kaum muda yang terjebak dalam sekularisme menemukan identitas sejati dan damai sejahtera dalam Injil.",
    focus_2_title: "Bangkitnya Murid Pemimpin di Tanah Air Setiap Orang Percaya",
    focus_2_desc: "Kiranya orang percaya yang menerima Kristus berdiri sebagai pemimpin setia untuk membimbing generasi penerus di bangsa mereka.",
    focus_3_title: "Untuk Kesehatan dan Kepenuhan Roh Kudus bagi Para Penginjil",
    focus_3_desc: "Berikan kekuatan rohani, kesehatan jasmani, dan hikmat kepada mereka yang memberitakan Injil tanpa kenal lelah di ladang pelayanan.",
    prayer_badge: "Jaringan Syafaat 24 Jam",
    prayer_title: "Taman Doa Global (Prayer Wall)",
    prayer_desc: "Pokok doa dari orang percaya di seluruh dunia. Klik [Amin 🙏] untuk bergabung dalam doa syafaat.",
    btn_post_prayer: "Bagikan Pokok Doa",
    filter_all: "Semua",
    filter_nextgen: "👶 Next-Gen / Remaja",
    filter_missions: "🌍 Misi Dunia",
    filter_evangelism: "✝️ Penginjilan & Murid",
    testimony_badge: "Karya Tuhan yang Ajaib",
    testimony_title: "Kesaksian Kasih Karunia (Grace Feed)",
    testimony_desc: "Buah iman yang menghangatkan hati, jawaban doa, dan kesaksian dari ladang misi global.",
    btn_post_testimony: "Bagikan Kesaksian",
    worship_badge: "Memuji dengan Satu Suara",
    worship_title: "Ruang Pujian Global (Worship Lounge)",
    worship_desc: "Lagu pujian pilihan untuk dinyanyikan dalam pertemuan bulanan atau saat teduh pribadi.",
    lyrics_snippet_1: "\"Engkau pembuat jalan, pembuat mukjizat, penjaga janji, terang dalam kegelapan, itulah Engkau Allahku.\"",
    lyrics_snippet_2: "\"Tuhan memberkati engkau dan melindungi engkau; Tuhan menyinari engkau dengan wajah-Nya dan memberi engkau kasih karunia.\" (Bilangan 6)",
    lyrics_snippet_3: "\"Raja segala raja, Tuhan segala tuhan, betapa hebatnya Allah kita, nyanyikan betapa hebatnya Allah kita.\"",
    footer_desc: "Pusat doa bersatu yang menghubungkan para penginjil dan orang kudus di seluruh dunia demi generasi penerus.",
    footer_schedule_title: "Info Doa Bulanan",
    footer_schedule_text: "• Waktu: Selasa pertama setiap bulan, 19:00 WIB (30 menit)<br>• Platform: Pertemuan Online (Zoom / Google Meet)<br>• Bahasa: Sesi Dwibahasa",
    footer_action_title: "Tautan Cepat",
    global_times_title: "🌍 Waktu Lokal Negara Peserta",
    nations_label: "Bangsa yang Berdoa Bersama :",
    btn_join_room_short: "Masuk Doa",
    btn_settings_short: "Pengaturan",
    modal_prayer_title: "🙏 Ajukan Doa untuk Generasi Penerus",
    modal_lbl_name: "Nama / Nama Panggilan",
    modal_lbl_flag: "Negara",
    modal_lbl_category: "Kategori",
    modal_lbl_content: "Pokok Doa",
    btn_cancel: "Batal",
    btn_submit_prayer: "Kirim Doa",
    modal_testimony_title: "🌟 Bagikan Kasih Karunia & Kesaksian",
    modal_lbl_title: "Judul Kesaksian",
    modal_lbl_testimony_content: "Isi Kesaksian",
    btn_submit_testimony: "Kirim Kesaksian",
    modal_settings_title: "Pengaturan Jadwal & Tautan Doa",
    settings_info_text: "Penginjil dapat memperbarui jadwal pertemuan dan tautan Zoom di sini untuk semua anggota.",
    lbl_next_meeting_date: "Waktu & Tanggal Pertemuan Berikutnya",
    lbl_zoom_link: "Tautan Zoom / Meet",
    lbl_meeting_id: "ID Pertemuan & Kata Sandi",
    btn_save_settings: "Simpan Pengaturan",
    amen_btn_label: "Amin 🙏",
    toast_prayer_added: "Pokok doa Anda telah terdaftar. Kami berdoa bersama Anda! 🙏",
    toast_testimony_added: "Kesaksian kasih karunia telah terdaftar! Haleluya ✨",
    toast_copied: "Tautan undangan dan detail telah disalin ke papan klip! 📋",
    toast_settings_saved: "Pengaturan pertemuan berhasil disimpan! ⚙️",
    toast_amen_clicked: "Anda telah bergabung dalam doa syafaat. Amin! ❤️",
    local_time_prefix: "Waktu Lokal Anda: ",
    country_filter_title: "🌍 Filter Menurut 8 Negara",
    country_filter_all: "🌐 Semua Bangsa",
    routine_step3_sub: "Diri Sendiri • Semua Bangsa • Generasi Penerus",
    routine_btn_text3: "Lihat Pokok Doa Fokus",
    routine_detail_badge3: "🔥 Panduan Doa Fokus 3 Pilar",
    routine_form_badge_step3: "🔥 Langkah 3: Doa Syafaat Fokus 3 Pilar (15 menit) - Diri Sendiri · Semua Bangsa · Generasi Penerus",
    prayer_guide_tag: "Panduan Doa Bersama • Official Prayer Guide",
    prayer_guide_heading: "Mari Berdoa Bersama (Let Us Pray Together)",
    prayer_guide_sub: "Doa resmi 3 pilar yang diakui dengan satu hati oleh jemaat dan penginjil dalam persekutuan Arise Next-Gen.",
    btn_prayer_presentation: "Mode Presentasi Doa",
    btn_copy_prayer_guide: "Salin untuk Obrolan Zoom",
    btn_open_pdf: "PDF Asli",
    pillar_1_cat: "Batin & Fondasi Iman",
    pillar_1_title: "1. Doa untuk Diri Sendiri",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“Aku adalah yang terpenting (Aku harus mulai dari diriku sendiri)”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "Kiranya Injil menjadi nyata dan terbukti dalam hidupku",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "Kiranya aku mengalami Kristus yang penuh kuasa seperti dalam Kitab Suci, bukan Kristus yang tak berdaya",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "Kiranya imanku tetap teguh seperti Daniel, tidak terombang-ambing oleh pasang surut rohani",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "Ladang Misi & Bangsa-Bangsa",
    pillar_2_title: "2. Doa untuk Semua Bangsa",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "Kiranya semua bangsa bertekuk lutut di hadapan Kristus",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "Untuk bangsa-bangsa yang berhimpun di sini dan seluruh bangsa di dunia",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "Untuk negara-negara dan orang-orang yang menderita di tengah peperangan",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "Generasi Penerus & Masa Depan",
    pillar_3_title: "3. Doa untuk Generasi Penerus",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "Kiranya generasi penerus mengenal Injil",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "Kiranya mereka menemukan bahwa Injil sungguh-sungguh adalah kabar baik",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "Kiranya mereka tahu bahwa apa pun yang terjadi dalam hidup, mereka aman di dalam Kristus",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "Kiranya mereka melihat studi dan setiap segi hidup sebagai persiapan untuk menyelamatkan semua bangsa",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "Mari Berdoa Bersama",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "Bersatu dalam Roh Kudus, berseru dengan iman yang teguh",
    pill_myself: "Untuk diri sendiri",
    pill_myself_sub: "For myself",
    pill_nations: "Untuk semua bangsa",
    pill_nations_sub: "For all nations",
    pill_nextgen: "Untuk generasi penerus",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "Panduan Doa Resmi (Let Us Pray Together)",
    slide_badge_1: "Slide 1 / 4 • Doa untuk Diri Sendiri",
    slide_badge_2: "Slide 2 / 4 • Doa untuk Semua Bangsa",
    slide_badge_3: "Slide 3 / 4 • Doa untuk Generasi Penerus",
    slide_badge_4: "Slide 4 / 4 • Mari Berdoa Bersama",
    btn_prev_slide: "Slide Sebelumnya",
    btn_next_slide: "Slide Berikutnya",
    toast_prayer_guide_copied: "Panduan doa telah disalin ke papan klip! Tempelkan di obrolan Zoom. 📋"
  },
  my: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "မျိုးဆက်သစ် ကမ္ဘာလုံးဆိုင်ရာ ဆုတောင်းကွန်ရက်",
    nav_meeting: "ဆုတောင်းအစည်းအဝေး",
    nav_routine: "၃၀ မိနစ် အစီအစဉ်",
    nav_prayer_guide: "စုပေါင်းဆုတောင်းချက်",
    nav_prayer_wall: "ဆုတောင်းဥယျာဉ်",
    nav_testimonies: "သက်သေခံချက်များ",
    nav_worship: "ချီးမွမ်းခြင်း",
    nav_worship_studio: "🎬 ချီးမွမ်းစာတန်းထိုးစတူဒီယို",
    hero_badge: "တစ်လတစ်ကြိမ် • ၃၀ မိနစ် | မျိုးဆက်သစ်များအတွက် ကမ္ဘာလုံးဆိုင်ရာ ကြားဝင်ဆုတောင်းခြင်း",
    hero_title: "ထလော့၊ လင်းလော့!<br><span class=\"gradient-text\">လူမျိုးတကာတို့၏ မျိုးဆက်သစ်များကို ဆုတောင်းခြင်းဖြင့် ပွေ့ဖက်ခြင်း</span>",
    hero_subtitle: "သာသနာပြုများနှင့် နိုင်ငံတကာယုံကြည်သူများ မျိုးဆက်သစ်များနှင့် ကျန်ကြွင်းသောသူများအတွက် တစ်လတစ်ကြိမ် အတူတကွ စုဝေးဆုတောင်းသောအထက်ခန်း။",
    hero_scripture_text: "\"သက်သေအများရှေ့မှာ ငါ့ထံမှ သင်ကြားရသောအရာများကို အခြားသူတို့အား သွန်သင်နိုင်စွမ်းရှိသော သစ္စာရှိသူတို့အား အပ်နှံလော့။\"",
    hero_scripture_ref: "၂ တိမောသေ ၂:၂",
    countdown_tag: "နောက်တစ်ကြိမ်ဆုတောင်းပွဲသို့ လက်ကျန်အချိန်",
    time_days: "ရက်",
    time_hours: "နာရီ",
    time_mins: "မိနစ်",
    time_secs: "စက္ကန့်",
    btn_join_room: "ဆုတောင်းခန်းသို့ ဝင်ပါ (Zoom)",
    btn_copy_link: "ဖိတ်ကြားချက်လင့်ခ်နှင့် ID ကို ကူးယူပါ",
    routine_badge: "ထိရောက်ပြီး ဝိညာဉ်တော်နှင့် ပြည့်ဝသော",
    routine_title: "မိနစ် ၃၀ အာရုံစိုက်ဆုတောင်းခြင်း ရွှေရောင်အစီအစဉ်",
    routine_desc: "အချိန်ဇုန်များကို ကျော်လွန်၍ ကျွန်ုပ်တို့၏နှလုံးသားများကို သန့်ရှင်းသောဝိညာဉ်တော်၌ ပေါင်းစည်းစေသော အဆင့် ၄ ဆင့်။",
    routine_step1_title: "ကြိုဆိုခြင်းနှင့် ကမ္ဘာလုံးဆိုင်ရာ ချီးမွမ်းခြင်း",
    routine_step1_desc: "သန့်ရှင်းသောဝိညာဉ်တော်၏ မျက်မှောက်တော်ကို အတူတကွရှာဖွေရန် နာမည်ကြီး ချီးမွမ်းခြင်း ၁ ပုဒ်ဖြင့် စတင်ခြင်း။",
    routine_step2_title: "မျိုးဆက်သစ်များအတွက် ဧဝံဂေလိနှုတ်ကပတ်တော်",
    routine_step2_desc: "အဓိကကျမ်းချက်များအပေါ် အခြေခံထားသော ၇ မိနစ် တိုတောင်းသော သတင်းစကား။",
    routine_step3_title: "အဓိက ကြားဝင်ဆုတောင်းချက် ၃ ခု",
    routine_step3_desc: "① မျိုးဆက်သစ် ဧဝံဂေလိတရားရရှိရေး ② နိုင်ငံအသီးသီးမှ သာသနာ့လုပ်ငန်း ③ ဧဝံဂေလိဆရာများ။ မိခင်ဘာသာစကားဖြင့် အော်ဟစ်ဆုတောင်းပါ!",
    routine_step4_title: "၁ မိနစ် သက်သေခံချက်နှင့် ကောင်းချီးဆုတောင်းခြင်း",
    routine_step4_desc: "ဘုရားသခင်၏ အမှုတော်သက်သေခံချက်ကို နားထောင်ပြီး ကောင်းချီးပေးခြင်း၊ သခင်ဘုရားသင်ပေးသော ဆုတောင်းချက်ဖြင့် ပြီးဆုံးခြင်း။",
    core_prayer_heading: "📌 ဤလအတွက် အဓိက ဆုတောင်းချက် ၃ ချက်",
    focus_1_title: "ခရစ်တော်၏ ကယ်တင်ခြင်းအလင်းသည် မျိုးဆက်သစ်များအပေါ် ထွန်းလင်းပါစေ",
    focus_1_desc: "လောကီအရာများနှင့် စိတ်ရှုပ်ထွေးမှုများထဲတွင် ရှိနေသော လူငယ်များသည် ဧဝံဂေလိတရား၌ စစ်မှန်သော ငြိမ်သက်ခြင်းကို တွေ့ရှိပါစေ။",
    focus_2_title: "ယုံကြည်သူတိုင်း၏ မိခင်နိုင်ငံတွင် တပည့်တော်ခေါင်းဆောင်များ ပေါ်ထွက်လာပါစေ",
    focus_2_desc: "ခရစ်တော်ကို လက်ခံယုံကြည်သူများသည် မိမိတို့နိုင်ငံရှိ မျိုးဆက်သစ်များကို ပြုစုပျိုးထောင်မည့် ခေါင်းဆောင်များအဖြစ် ရပ်တည်နိုင်ပါစေ။",
    focus_3_title: "ဧဝံဂေလိဆရာများ၏ ကျန်းမာရေးနှင့် ဝိညာဉ်တော်ပြည့်ဝမှုအတွက်",
    focus_3_desc: "မမောမပန်း ဧဝံဂေလိတရားဟောပြောနေကြသော သာသနာပြုများအား ဝိညာဉ်ရေးနှင့် ရုပ်ပိုင်းဆိုင်ရာခွန်အား၊ ဉာဏ်ပညာ ပေးသနားတော်မူပါ။",
    prayer_badge: "၂၄ နာရီ ကြားဝင်ဆုတောင်းခြင်း ကွန်ရက်",
    prayer_title: "ကမ္ဘာလုံးဆိုင်ရာ ဆုတောင်းဥယျာဉ် (Prayer Wall)",
    prayer_desc: "ကမ္ဘာတစ်ဝှမ်းရှိ ယုံကြည်သူများထံမှ ဆုတောင်းချက်များ။ [အာမင် 🙏] ကိုနှိပ်၍ အတူတကွ ဆုတောင်းပါ။",
    btn_post_prayer: "ဆုတောင်းချက် တင်ရန်",
    filter_all: "အားလုံးကြည့်ရန်",
    filter_nextgen: "👶 မျိုးဆက်သစ်/လူငယ်",
    filter_missions: "🌍 ကမ္ဘာ့သာသနာ",
    filter_evangelism: "✝️ ဧဝံဂေလိနှင့် တပည့်တော်",
    testimony_badge: "ဘုရားသခင် ပြုတော်မူသောအမှု",
    testimony_title: "ကျေးဇူးတော် သက်သေခံချက်များ (Grace Feed)",
    testimony_desc: "နိုင်ငံတကာ ယုံကြည်သူများနှင့်အတူ ကြုံတွေ့ခဲ့ရသော ယုံကြည်ခြင်းအသီးအပွင့်များနှင့် သက်သေခံချက်များ။",
    btn_post_testimony: "သက်သေခံချက် မျှဝေရန်",
    worship_badge: "တစ်သံတည်းဖြင့် ချီးမွမ်းခြင်း",
    worship_title: "ကမ္ဘာလုံးဆိုင်ရာ ကိုးကွယ်ချီးမွမ်းခြင်း (Worship Lounge)",
    worship_desc: "လစဉ်ဆုတောင်းပွဲတွင် အတူတကွ သီဆိုရန် သို့မဟုတ် ကိုယ်တိုင်ဆင်ခြင်ရန် ရွေးချယ်ထားသော ချီးမွမ်းခြင်းများ။",
    lyrics_snippet_1: "\"လမ်းဖွင့်ပေးတော်မူသောဘုရား၊ အံ့ဩဖွယ်ရာများကို ပြုတော်မူသောအရှင်၊ မှောင်မိုက်ထဲတွင် အလင်းဖြစ်သောအကျွန်ုပ်၏ဘုရား။\"",
    lyrics_snippet_2: "\"ထာဝရဘုရားသည် သင့်ကို ကောင်းချီးပေး၍ စောင့်မတော်မူပါစေသော။ သင့်အပေါ်သို့ မျက်နှာတော်ကို လင်းစေတော်မူပါစေသော။\" (တောလည်ရာ ၆)",
    lyrics_snippet_3: "\"ဘုရင်တကာတို့၏ဘုရင်၊ သခင်တကာတို့၏သခင်၊ ငါတို့ဘုရားသည် မည်မျှကြီးမြတ်တော်မူသည်ကို ငါနှင့်အတူ သီဆိုကြလော့။\"",
    footer_desc: "မျိုးဆက်သစ်များအတွက် ဧဝံဂေလိဆရာများနှင့် ကမ္ဘာ့သန့်ရှင်းသူများကို ဆုတောင်းခြင်းဖြင့် ဆက်သွယ်ပေးသော ကွန်ရက်။",
    footer_schedule_title: "လစဉ်ဆုတောင်းပွဲ အချက်အလက်",
    footer_schedule_text: "• အချိန်: လစဉ် ပထမဆုံး အင်္ဂါနေ့ ၁၈:၃၀ (မြန်မာစံတော်ချိန်၊ မိနစ် ၃၀)<br>• ပုံစံ: အွန်လိုင်း (Zoom / Google Meet)<br>• ဘာသာစကား: နှစ်ဘာသာ (ကိုရီးယားနှင့် အင်္ဂလိပ်)",
    footer_action_title: "အမြန်လင့်ခ်များ",
    global_times_title: "🌍 ပါဝင်သောနိုင်ငံများ၏ ဒေသစံတော်ချိန်",
    nations_label: "အတူတကွ ဆုတောင်းနေသော နိုင်ငံများ :",
    btn_join_room_short: "ဆုတောင်းခန်းသို့ ဝင်ပါ",
    btn_settings_short: "ဆက်တင်များ",
    modal_prayer_title: "🙏 မျိုးဆက်သစ်များအတွက် ဆုတောင်းချက် တင်သွင်းရန်",
    modal_lbl_name: "အမည် / အမည်ပြောင်",
    modal_lbl_flag: "နိုင်ငံ",
    modal_lbl_category: "ကဏ္ဍ",
    modal_lbl_content: "ဆုတောင်းချက်",
    btn_cancel: "ပယ်ဖျက်မည်",
    btn_submit_prayer: "ဆုတောင်းချက် တင်မည်",
    modal_testimony_title: "🌟 ကျေးဇူးတော်နှင့် သက်သေခံချက်ကို မျှဝေပါ",
    modal_lbl_title: "သက်သေခံချက် ခေါင်းစဉ်",
    modal_lbl_testimony_content: "သက်သေခံချက် အကြောင်းအရာ",
    btn_submit_testimony: "သက်သေခံချက် တင်မည်",
    modal_settings_title: "အစည်းအဝေး အချိန်ဇယားနှင့် လင့်ခ် ဆက်တင်များ",
    settings_info_text: "သာသနာပြု/အစီအစဉ်မှူးသည် အသင်းသားများအတွက် အစည်းအဝေးအချိန်နှင့် Zoom လင့်ခ်ကို ဤနေရာတွင် အသစ်ပြင်ဆင်နိုင်ပါသည်။",
    lbl_next_meeting_date: "နောက်တစ်ကြိမ် အစည်းအဝေး နေ့ရက်နှင့် အချိန်",
    lbl_zoom_link: "Zoom / Meet အစည်းအဝေးလင့်ခ်",
    lbl_meeting_id: "အစည်းအဝေး ID နှင့် လျှို့ဝှက်ကုဒ်",
    btn_save_settings: "ဆက်တင်များကို သိမ်းဆည်းမည်",
    amen_btn_label: "အာမင် 🙏",
    toast_prayer_added: "ဆုတောင်းချက်ကို အောင်မြင်စွာ တင်သွင်းပြီးပါပြီ။ သင်နှင့်အတူ ဆုတောင်းပေးနေပါသည်! 🙏",
    toast_testimony_added: "ကျေးဇူးတော် သက်သေခံချက်ကို မှတ်တမ်းတင်ပြီးပါပြီ! ဟာလေလုယာ ✨",
    toast_copied: "ဖိတ်ကြားချက်လင့်ခ်ကို ကူးယူပြီးပါပြီ! 📋",
    toast_settings_saved: "အစည်းအဝေး အချက်အလက်များကို သိမ်းဆည်းပြီးပါပြီ! ⚙️",
    toast_amen_clicked: "သင်သည် ကြားဝင်ဆုတောင်းခြင်း၌ ပါဝင်ခဲ့ပါသည်။ အာမင်! ❤️",
    local_time_prefix: "သင့်ဒေသ စံတော်ချိန်: ",
    country_filter_title: "🌍 8 နိုင်ငံအလိုက် ဆုတောင်းချက်",
    country_filter_all: "🌐 နိုင်ငံအားလုံး",
    routine_step3_sub: "မိမိကိုယ်တိုင် • လူမျိုးအပေါင်းတို့ • မျိုးဆက်သစ်",
    routine_btn_text3: "အဓိက ဆုတောင်းချက် ခေါင်းစဉ်များ ကြည့်ရှုရန်",
    routine_detail_badge3: "🔥 မဏ္ဍိုင် ၃ ရပ် အဓိက ဆုတောင်းလမ်းညွှန်",
    routine_form_badge_step3: "🔥 အဆင့် ၃: မဏ္ဍိုင် ၃ ရပ် အဓိက ကြားဝင်ဆုတောင်းခြင်း (၁၅ မိနစ်) - မိမိကိုယ်တိုင် · လူမျိုးအပေါင်း · မျိုးဆက်သစ်",
    prayer_guide_tag: "တရားဝင် ဆုတောင်းချက် လမ်းညွှန် • Official Prayer Guide",
    prayer_guide_heading: "အတူတကွ ဆုတောင်းကြပါစို့ (Let Us Pray Together)",
    prayer_guide_sub: "Arise Next-Gen စုဝေးမှု၌ သန့်ရှင်းသူများနှင့် သာသနာပြုများ စိတ်နှလုံးတစ်လုံးတည်းဖြင့် ဝန်ခံသော တရားဝင် မဏ္ဍိုင် ၃ ရပ် ဆုတောင်းချက်ဖြစ်သည်။",
    btn_prayer_presentation: "ဆုတောင်းချက် စလိုက်ရှိုး တင်ဆက်မှု မုဒ်",
    btn_copy_prayer_guide: "Zoom စကားပြောခန်းအတွက် ကူးယူရန်",
    btn_open_pdf: "မူရင်း PDF ဖိုင်",
    pillar_1_cat: "အတွင်းစိတ်နှင့် ယုံကြည်ခြင်း အခြေခံ",
    pillar_1_title: "၁။ မိမိကိုယ်တိုင်အတွက် ဆုတောင်းချက်",
    pillar_1_sub: "1. Prayer for Myself",
    pillar_1_quote: "“ငါသည် အရေးကြီးဆုံးဖြစ်သည် (ငါ့ကိုယ်တိုင်မှ စတင်ရမည်)”",
    pillar_1_quote_sub: "“I must begin with myself.”",
    p1_b1_title: "ဧဝံဂေလိတရားသည် ကျွန်ုပ်၏အသက်တာတွင် လက်တွေ့ထင်ရှားသော သက်သေဖြစ်လာစေရန်",
    p1_b1_sub: "May the Gospel become real and evident in my life.",
    p1_b2_title: "အားနည်းသော ခရစ်တော်မဟုတ်ဘဲ၊ ကျမ်းစာ၌ ဖော်ပြထားသော တန်ခိုးကြီးသော ခရစ်တော်ကို ခံစားစံစားနိုင်စေရန်",
    p1_b2_sub: "May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.",
    p1_b3_title: "ဒံယေလကဲ့သို့ ဝိညာဉ်ရေးရာ အတက်အကျများကြား မယိမ်းယိုင်ဘဲ အစဉ်တည်ကြည်သော ယုံကြည်ခြင်းဖြစ်စေရန်",
    p1_b3_sub: "May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.",
    pillar_2_cat: "သာသနာ့ကွင်းပြင်နှင့် တိုင်းနိုင်ငံများ",
    pillar_2_title: "၂။ လူမျိုးအပေါင်းတို့အတွက် ဆုတောင်းချက်",
    pillar_2_sub: "2. Prayer for All Nations",
    p2_b1_title: "လူမျိုးအပေါင်းတို့သည် ခရစ်တော်၏ရှေ့တော်၌ ဒူးထောက်ပြပ်ဝပ်ကြစေရန်",
    p2_b1_sub: "May all nations bow before Christ.",
    p2_b2_title: "ဤနေရာ၌ စုဝေးသောနိုင်ငံများနှင့် ကမ္ဘာတစ်ဝန်းရှိ တိုင်းနိုင်ငံအပေါင်းတို့အတွက်",
    p2_b2_sub: "For the nations represented here and for every nation of the world.",
    p2_b3_title: "စစ်ပွဲအတွင်း ဒုက္ခဆင်းရဲခံစားနေရသော တိုင်းပြည်များနှင့် လူသားများအတွက်",
    p2_b3_sub: "For countries and people suffering in the midst of war.",
    pillar_3_cat: "မျိုးဆက်သစ်များနှင့် အနာဂတ်",
    pillar_3_title: "၃။ မျိုးဆက်သစ်များအတွက် ဆုတောင်းချက်",
    pillar_3_sub: "3. Prayer for the Next Generation",
    p3_b1_title: "မျိုးဆက်သစ်များသည် ဧဝံဂေလိတရားကို မှန်ကန်စွာ သိရှိနားလည်စေရန်",
    p3_b1_sub: "May the next generation know the Gospel.",
    p3_b2_title: "ဧဝံဂေလိတရားသည် အမှန်တကယ် ကောင်းမြတ်သော ဝမ်းမြောက်စရာသတင်းဖြစ်ကြောင်း သိမြင်စေရန်",
    p3_b2_sub: "May they discover that the Gospel is truly good news.",
    p3_b3_title: "အသက်တာ၌ မည်သို့ပင်ဖြစ်ပျက်ပါစေ ခရစ်တော်၌ရှိလျှင် လုံခြုံစိတ်ချရကြောင်း သဘောပေါက်စေရန်",
    p3_b3_sub: "May they know that whatever happens in life, they are secure when they are in Christ.",
    p3_b4_title: "ပညာသင်ကြားမှုနှင့် အမှုအရာအားလုံးသည် လူမျိုးအပေါင်းကို ကယ်တင်ရန် ပြင်ဆင်မှုဖြစ်ကြောင်း သိရှိစေရန်",
    p3_b4_sub: "May they see their studies and every part of life as preparation to serve and save all nations.",
    together_bar_title: "အတူတကွ ဆုတောင်းကြပါစို့",
    together_bar_sub: "Let Us Pray Together",
    together_bar_desc: "သန့်ရှင်းသောဝိညာဉ်တော်၌ တစ်လုံးတစ်ဝတည်းဖြစ်လျက်၊ ယုံကြည်ခြင်းဖြင့် ဟစ်ကြွေးဆုတောင်းကြပါစို့",
    pill_myself: "မိမိကိုယ်တိုင်အတွက်",
    pill_myself_sub: "For myself",
    pill_nations: "လူမျိုးအပေါင်းတို့အတွက်",
    pill_nations_sub: "For all nations",
    pill_nextgen: "မျိုးဆက်သစ်များအတွက်",
    pill_nextgen_sub: "For the next generation",
    modal_guide_title: "တရားဝင် ဆုတောင်းချက် လမ်းညွှန် (Let Us Pray Together)",
    slide_badge_1: "စလိုက် ၁ / ၄ • မိမိကိုယ်တိုင်အတွက် ဆုတောင်းချက်",
    slide_badge_2: "စလိုက် ၂ / ၄ • လူမျိုးအပေါင်းတို့အတွက် ဆုတောင်းချက်",
    slide_badge_3: "စလိုက် ၃ / 4 • မျိုးဆက်သစ်များအတွက် ဆုတောင်းချက်",
    slide_badge_4: "စလိုက် ၄ / ၄ • အတူတကွ ဆုတောင်းကြပါစို့",
    btn_prev_slide: "ယခင် စလိုက်",
    btn_next_slide: "နောက် စလိုက်",
    toast_prayer_guide_copied: "ဆုတောင်းချက်လမ်းညွှန်ကို ကလစ်ဘုတ်သို့ ကူးယူပြီးပါပြီ။ Zoom စကားပြောခန်းတွင် ကူးထည့်နိုင်ပါသည်။ 📋"
  }
};

// ==========================================
// 1.5 Real-Time On-Demand Auto Translate Engine
// ==========================================
const AriseTranslateEngine = {
  // Language mappings for translation API
  langMap: {
    ko: 'ko',
    en: 'en',
    th: 'th',
    ar: 'ar',
    fr: 'fr',
    zh: 'zh-CN',
    id: 'id',
    my: 'my'
  },

  // Glossary mappings to preserve Christian/Mission spiritual terminology accuracy
  glossaryReplacements: {
    en: [
      { regex: /\b(offspring|descendants)\b/gi, replacement: "Next Generation" },
      { regex: /\ball nations\b/gi, replacement: "All Nations" },
      { regex: /\bintercession\b/gi, replacement: "Intercessory Prayer" },
      { regex: /\bevangelization\b/gi, replacement: "Evangelization" }
    ]
  },

  // Persistent translation cache (v3)
  cache: (() => {
    try {
      const stored = localStorage.getItem('arise_translation_cache_v3');
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.warn("Could not load translation cache:", e);
      return {};
    }
  })(),

  saveCache() {
    try {
      localStorage.setItem('arise_translation_cache_v2', JSON.stringify(this.cache));
    } catch (e) {
      console.warn("Could not save translation cache:", e);
    }
  },

  getCacheKey(text, targetLang, sourceLang = 'auto') {
    const targetCode = this.langMap[targetLang] || targetLang;
    return `${sourceLang}__${targetCode}__${text.trim()}`;
  },

  // Check if translation is cached
  hasCached(text, targetLang, sourceLang = 'auto') {
    if (!text || targetLang === 'ko') return true;
    const key = this.getCacheKey(text, targetLang, sourceLang);
    return Boolean(this.cache[key]);
  },

  getCached(text, targetLang, sourceLang = 'auto') {
    if (!text) return '';
    if (targetLang === 'ko') return text;
    const key = this.getCacheKey(text, targetLang, sourceLang);
    return this.cache[key] || text;
  },

  // Translate a single string on-demand
  async translate(text, targetLang = 'en', sourceLang = 'auto') {
    if (!text || typeof text !== 'string') return text || '';
    const cleanText = text.trim();
    if (!cleanText) return '';

    // If target is Korean and source is Korean, no translation needed
    if (targetLang === 'ko' && (sourceLang === 'ko' || sourceLang === 'auto')) {
      return text;
    }

    const targetCode = this.langMap[targetLang] || targetLang;
    const cacheKey = this.getCacheKey(cleanText, targetLang, sourceLang);

    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    try {
      // Use high-availability Google gtx endpoint
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetCode}&dt=t&q=${encodeURIComponent(cleanText)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      const data = await response.json();

      let translated = '';
      if (Array.isArray(data) && Array.isArray(data[0])) {
        translated = data[0].map(item => item[0]).filter(Boolean).join('');
      }

      if (!translated) {
        translated = cleanText;
      }

      // Apply spiritual glossary replacements if target is English
      if (this.glossaryReplacements[targetLang]) {
        this.glossaryReplacements[targetLang].forEach(rule => {
          translated = translated.replace(rule.regex, rule.replacement);
        });
      }

      this.cache[cacheKey] = translated;
      this.saveCache();
      return translated;
    } catch (err) {
      console.warn(`[AriseTranslateEngine] Translation error for "${cleanText.slice(0, 20)}...":`, err);
      return text; // Graceful fallback to original text
    }
  },

  // Translate an entire routine content object
  async translateRoutine(routine, targetLang) {
    if (!routine || targetLang === 'ko') return routine;

    const translated = JSON.parse(JSON.stringify(routine));

    const tasks = [
      (async () => {
        if (routine.step1?.songTitle) {
          translated.step1.songTitle = await this.translate(routine.step1.songTitle, targetLang);
        }
        if (routine.step1?.content) {
          translated.step1.content = await this.translate(routine.step1.content, targetLang);
        }
      })(),
      (async () => {
        if (routine.step2?.title) {
          translated.step2.title = await this.translate(routine.step2.title, targetLang);
        }
        if (routine.step2?.content) {
          translated.step2.content = await this.translate(routine.step2.content, targetLang);
        }
      })(),
      (async () => {
        if (routine.step3?.title) {
          translated.step3.title = await this.translate(routine.step3.title, targetLang);
        }
        if (routine.step3?.content) {
          translated.step3.content = await this.translate(routine.step3.content, targetLang);
        }
      })(),
      (async () => {
        if (routine.step4?.speaker) {
          translated.step4.speaker = await this.translate(routine.step4.speaker, targetLang);
        }
        if (routine.step4?.content) {
          translated.step4.content = await this.translate(routine.step4.content, targetLang);
        }
      })()
    ];

    await Promise.all(tasks);
    return translated;
  }
};

// Current active language
let currentLang = localStorage.getItem('prayer_hub_lang') || 'ko';

// Track which items are toggled to original view by the user
const originalViewMap = {
  prayers: new Set(),
  testimonies: new Set(),
  routine: false
};

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
    content: "유럽과 파리의 극심한 세속화 속에서 방황하는 청소년들이 복음의 생명을 발견하고, 무너진 영적 성벽을 재건할 다음세대로 일어나길 기도합니다.",
    content_en: "Praying for wandering youth in Paris and Europe to discover the life of the gospel and rise as next-generation disciples to rebuild broken spiritual walls.",
    amenCount: 41,
    date: "2026-09-12"
  },
  {
    id: 6,
    author: "왕전도사 (Brother Wang)",
    country: "🇨🇳 China",
    category: "evangelism",
    content: "중국의 가정교회와 다음 세대들에게 참된 복음의 신앙이 끊어지지 않고 온전히 전수되며, 캠퍼스마다 그리스도의 신실한 제자들이 세워지게 하옵소서.",
    content_en: "May the true faith of the Gospel be faithfully passed on to the next generation across China, and faithful disciples of Christ be raised on campuses.",
    amenCount: 48,
    date: "2026-09-11"
  },
  {
    id: 7,
    author: "Budi Santoso",
    country: "🇮🇩 Indonesia",
    category: "missions",
    content: "수천 개의 섬으로 이루어진 인도네시아의 어린이와 청년들에게 복음의 빛이 전파되고, 참된 회복과 제자로 세워지는 역사가 일어나게 하소서.",
    content_en: "May the light of Christ shine across the thousands of islands in Indonesia, bringing true restoration in Christ and raising faithful disciples among the youth.",
    amenCount: 37,
    date: "2026-09-10"
  },
  {
    id: 8,
    author: "Aung San (아웅산)",
    country: "🇲🇲 Myanmar",
    category: "next-gen",
    content: "오랜 분쟁과 경제적 시련 속에 있는 미얀마의 후대들에게 하나님의 특별한 위로가 임하고, 어떤 환경도 뛰어넘는 다음세대의 믿음을 주옵소서.",
    content_en: "May God's tender comfort heal the children of Myanmar suffering from conflict, granting them steadfast faith to transcend all adversity.",
    amenCount: 44,
    date: "2026-09-09"
  },
  {
    id: 9,
    author: "김전도자 (Evangelist Kim)",
    country: "🇰🇷 Korea",
    category: "next-gen",
    content: "우리 후대들이 세상 미디어와 스마트폰의 유혹과 중독에서 벗어나, 하나님의 말씀 속에서 참된 평안과 하나님 자녀의 정체성을 굳건히 발견하게 하옵소서.",
    content_en: "May our next generation break free from media and smartphone addictions and worldly temptations, and firmly discover their true identity and peace as children of God.",
    amenCount: 65,
    date: "2026-09-08"
  },
  {
    id: 10,
    author: "Sarah & David (브리즈번/골드코스트)",
    country: "🇦🇺 Australia",
    category: "next-gen",
    content: "호주 퀸즈랜드와 다민족 캠퍼스의 다음세대들이 세속 문화 속에서 예수 그리스도의 참된 복음을 발견하고, 온 열방과 민족을 섬길 믿음의 주역으로 굳건히 서게 하옵소서.",
    content_en: "May the next generation on multi-ethnic campuses across Queensland, Australia discover the true Gospel of Jesus Christ and stand firmly as faithful leaders to bless all nations.",
    amenCount: 52,
    date: "2026-09-14"
  }
];

const defaultTestimonies = [
  {
    id: 1,
    author: "Kwame & Kofi",
    country: "🇬🇭 Ghana",
    title: "가나 청년 5명의 다음세대 성경공부 시작",
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

// Routine 4-Step Actual Program Content Seed Data
const defaultRoutineContent = {
  step1: {
    songTitle: "Way Maker (길을 만드시는 분)",
    link: "https://www.youtube.com/watch?v=iJCV_2H9xD0",
    content: "전 세계 성도들이 함께 고백하는 대표 찬양으로 마음의 문을 열고 주님의 임재를 구합니다.\n• 추천 찬양: Way Maker, The Blessing\n• 찬양 후 각국 지체들과의 따뜻한 환영과 다국어 인사 (샬롬, Grace to you)"
  },
  step2: {
    scripture: "디모데후서 2:1-2 (2 Tim 2:1-2)",
    title: "충성된 사람들에게 부탁하라",
    content: "1. 내 아들아 그러므로 너는 그리스도 예수 안에 있는 은혜 가운데서 강하라\n2. 또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라\n3. 그들이 또 다른 사람들을 가르칠 수 있으리라\n\n📌 5분 복음 메시지 요약:\n• 다음 세대를 살릴 복음의 신실한 제자 세우기\n• 한국어 & 영어 2개 국어 핵심 자막 슬라이드 제공"
  },
  step3: {
    title: "함께 기도합시다 (Let Us Pray Together)",
    content: "🕊️ [1. 나를 위한 기도 / Prayer for Myself]\n“내가 제일 중요하다” | “I must begin with myself.”\n• 내가 복음이 되기를 (May the Gospel become real and evident in my life.)\n• 무기력하게 느껴지는 그리스도가 아니라, 성경에 나타난 능력의 그리스도를 누리기를 (May I experience Christ not as powerless, but as the powerful Christ revealed in Scripture.)\n• Up & Down에 흔들리지 않고 다니엘처럼 항상 한결같은 믿음이 되기를 (May my faith remain steady like Daniel’s, not controlled by spiritual ups and downs.)\n\n🌍 [2. 모든 민족을 위한 기도 / Prayer for All Nations]\n• 모든 민족이 그리스도 앞에 무릎 꿇도록 (May all nations bow before Christ.)\n• 이곳에 모인 나라들과 세계 모든 나라를 위하여 (For the nations represented here and for every nation of the world.)\n• 전쟁 속에서 고통받는 나라들과 사람들을 위하여 (For countries and people suffering in the midst of war.)\n\n🌱 [3. 후대를 위한 기도 / Prayer for the Next Generation]\n• 후대가 복음을 알도록 (May the next generation know the Gospel.)\n• 복음이 정말 좋은 것임을 알도록 (May they discover that the Gospel is truly good news.)\n• 인생에 무슨 일이 생겨도 그리스도 안에 있으면 괜찮다는 것을 알도록 (May they know that whatever happens in life, they are secure when they are in Christ.)\n• 학업과 모든 일이 모든 민족을 살리는 준비임을 알도록 (May they see their studies and every part of life as preparation to serve and save all nations.)\n\n🔥 나 자신을 위하여 · 모든 민족을 위하여 · 후대를 위하여 각자의 모국어로 함께 기도합시다!"
  },
  step4: {
    speaker: "다민족 제자 1분 응답 간증 & 전도자 축도",
    content: "• 다민족 제자의 1분 현장 응답 및 은혜 간증 나눔\n• 전도자의 축도 및 열방 지체들을 향한 제사장적 축복 기도\n• 주기도문으로 은혜의 30분 기도모임 폐회"
  }
};

// Meeting Settings Seed Data (호주 퀸즈랜드 8:00 PM AEST 기준)
const defaultMeetingSettings = {
  // 2026년 10월 4일 (일) 호주 퀸즈랜드 8:00 PM (AEST, UTC+10) = 한국 19:00 KST (UTC+9)
  meetingDate: "2026-10-04T20:00:00+10:00",
  zoomUrl: "https://zoom.us/j/88812345678",
  meetingId: "Zoom ID: 888 1234 5678 | Passcode: 7777"
};

// Always sync newly added nations & routine content & meeting settings
const DATA_VERSION = 'v13_remove_artificial_testimony';
if (localStorage.getItem('prayer_hub_data_ver') !== DATA_VERSION) {
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(defaultPrayers));
  localStorage.setItem('prayer_hub_testimonies', JSON.stringify(defaultTestimonies));
  localStorage.setItem('prayer_hub_routine_content', JSON.stringify(defaultRoutineContent));
  localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(defaultMeetingSettings));
  localStorage.setItem('prayer_hub_data_ver', DATA_VERSION);
}

// App State
let prayers = JSON.parse(localStorage.getItem('prayer_hub_prayers')) || defaultPrayers;
let testimonies = (JSON.parse(localStorage.getItem('prayer_hub_testimonies')) || defaultTestimonies)
  .filter(t => t && t.id !== 4 && !t.title?.includes('찬양을 통한 청소년 회복'));
let routineContent = JSON.parse(localStorage.getItem('prayer_hub_routine_content')) || defaultRoutineContent;
let meetingSettings = JSON.parse(localStorage.getItem('prayer_hub_meeting_settings')) || defaultMeetingSettings;
let currentFilter = 'all';

// Google Sheets Integration State (3인 공동 관리)
const DEFAULT_GOOGLE_SHEET_ID = '';
let googleSheetId = localStorage.getItem('prayer_hub_google_sheet_id') || DEFAULT_GOOGLE_SHEET_ID;

// Compute default next first Tuesday in Queensland (AEST, UTC+10) time
function getNextMeetingDateString() {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  while (nextMonth.getDay() !== 2) {
    nextMonth.setDate(nextMonth.getDate() + 1);
  }
  const year = nextMonth.getFullYear();
  const month = String(nextMonth.getMonth() + 1).padStart(2, '0');
  const date = String(nextMonth.getDate()).padStart(2, '0');
  return `${year}-${month}-${date}T20:00:00+10:00`;
}

// ==========================================
// 3. Language Switcher (i18n Engine - 8 Languages)
// ==========================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('prayer_hub_lang', lang);
  document.body.dataset.lang = lang;
  document.documentElement.lang = lang;

  // RTL (Right-to-Left) support for Arabic (Egypt)
  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl');
  } else {
    document.body.removeAttribute('dir');
  }

  // Sync dropdown selector
  const select = document.getElementById('globalLangSelect');
  if (select && select.value !== lang) {
    select.value = lang;
  }

  // Update static translated elements with fallback to English
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    } else if (translations['en'] && translations['en'][key]) {
      el.innerHTML = translations['en'][key];
    }
  });

  // Re-render prayers, testimonies, routine, and worship display
  renderPrayers();
  renderTestimonies();
  renderRoutineDisplay();
  renderWorshipLounge();
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
  // 호주 퀸즈랜드 (AEST / UTC+10) - 인도자 기준 주 시간
  const optionsQLD = { month: 'long', day: 'numeric', weekday: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Australia/Brisbane' };
  // 한국 (KST / UTC+9)
  const optionsKST = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Seoul' };
  
  const qldString = targetDate.toLocaleDateString(currentLang === 'ko' ? 'ko-KR' : 'en-US', optionsQLD);
  const kstTime = targetDate.toLocaleTimeString(currentLang === 'ko' ? 'ko-KR' : 'en-US', optionsKST);

  if (currentLang === 'ko') {
    displayElem.innerHTML = `🇦🇺 <strong>${qldString}</strong> (호주 퀸즈랜드 기준) <span style="opacity:0.85; font-size:0.92em; font-weight:normal; margin-left:0.4rem;">/ 🇰🇷 한국 ${kstTime} (KST)</span>`;
  } else {
    displayElem.innerHTML = `🇦🇺 <strong>${qldString}</strong> (Queensland Base) <span style="opacity:0.85; font-size:0.92em; font-weight:normal; margin-left:0.4rem;">/ 🇰🇷 Korea ${kstTime} (KST)</span>`;
  }

  // Local user time display
  if (localTimeElem) {
    const userLocalStr = targetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
    localTimeElem.textContent = `${translations[currentLang].local_time_prefix}${userLocalStr}`;
  }
}

let countdownIntervalId = null;

function startCountdown() {
  const daysEl = document.getElementById('countDays');
  const hoursEl = document.getElementById('countHours');
  const minsEl = document.getElementById('countMinutes');
  const secsEl = document.getElementById('countSeconds');

  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
  }

  function tick() {
    const now = new Date().getTime();
    const target = new Date(meetingSettings.meetingDate).getTime();
    const diff = target - now;

    if (isNaN(diff)) {
      if (daysEl) daysEl.textContent = "00";
      if (hoursEl) hoursEl.textContent = "00";
      if (minsEl) minsEl.textContent = "00";
      if (secsEl) secsEl.textContent = "00";
      return;
    }

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
  countdownIntervalId = setInterval(tick, 1000);
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
  const qldStr = targetDate.toLocaleString('en-AU', { timeZone: 'Australia/Brisbane', dateStyle: 'medium', timeStyle: 'short' });
  const kstStr = targetDate.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul', dateStyle: 'medium', timeStyle: 'short' });
  const nyStr = targetDate.toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'medium', timeStyle: 'short' });

  const text = `🕊️ [어라이즈 넥스트젠 | Arise Next-Gen] 
Global Prayer Meeting for the Next Generation (호주 퀸즈랜드 인도)
🇦🇺 호주 퀸즈랜드 (AEST / 인도자 기준): ${qldStr}
🇰🇷 한국 서울 (KST): ${kstStr}
🇺🇸 미국 동부 (뉴욕 / 보스턴 / 플로리다 EDT): ${nyStr}
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
  document.querySelectorAll('.country-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-country') === 'all');
  });
  renderPrayers();
}

function filterByCountry(countryKey) {
  if (countryKey === 'all') {
    currentFilter = 'all';
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-filter') === 'all');
    });
  } else {
    currentFilter = 'country:' + countryKey;
    document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
  }
  document.querySelectorAll('.country-chip').forEach(chip => {
    chip.classList.toggle('active', chip.getAttribute('data-country') === countryKey);
  });
  renderPrayers();
  const prayerWall = document.getElementById('prayer-wall');
  if (prayerWall) {
    prayerWall.scrollIntoView({ behavior: 'smooth' });
  }
  if (countryKey !== 'all') {
    showToast(`${countryKey} ${translations[currentLang].prayer_badge}`, "🌍");
  }
}

// Toggle individual prayer between original and translated
function togglePrayerOriginal(id) {
  if (originalViewMap.prayers.has(id)) {
    originalViewMap.prayers.delete(id);
  } else {
    originalViewMap.prayers.add(id);
  }
  renderPrayers();
}

// Toggle individual testimony between original and translated
function toggleTestimonyOriginal(id) {
  if (originalViewMap.testimonies.has(id)) {
    originalViewMap.testimonies.delete(id);
  } else {
    originalViewMap.testimonies.add(id);
  }
  renderTestimonies();
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
    const isOriginalToggled = originalViewMap.prayers.has(item.id);
    const catLabel = getCategoryLabel(item.category);

    // Determine initial content
    let contentToDisplay = item.content;
    let isTranslated = false;

    if (currentLang !== 'ko' && !isOriginalToggled) {
      if (AriseTranslateEngine.hasCached(item.content, currentLang)) {
        contentToDisplay = AriseTranslateEngine.getCached(item.content, currentLang);
        isTranslated = true;
      } else if (item.content_en && currentLang === 'en') {
        contentToDisplay = item.content_en;
        isTranslated = true;
      }
    }

    const showToggleBtn = currentLang !== 'ko';
    const toggleBtnText = isOriginalToggled 
      ? (currentLang === 'ko' ? '번역 보기' : 'Translate') 
      : (currentLang === 'ko' ? '원문' : 'Original');

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
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span class="prayer-category-tag">${catLabel}</span>
          </div>
        </div>
        <p class="prayer-content ${isTranslated ? 'fade-in-content' : ''}" id="prayer-content-${item.id}">${escapeHtml(contentToDisplay)}</p>
        <div class="prayer-card-footer">
          <button type="button" class="btn-amen" onclick="handleAmenClick(event, ${item.id})">
            <span>🙏</span>
            <span>${translations[currentLang].amen_btn_label}</span>
            <strong id="amen-count-${item.id}">${item.amenCount}</strong>
          </button>
          ${showToggleBtn ? `
            <button type="button" class="btn-translate-toggle ${isOriginalToggled ? '' : 'active'}" onclick="togglePrayerOriginal(${item.id})" title="Toggle Original / Translation">
              <span>🌐</span>
              <span>${toggleBtnText}</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Asynchronously perform on-demand translation for items not yet translated
  if (currentLang !== 'ko') {
    filtered.forEach(item => {
      if (originalViewMap.prayers.has(item.id)) return;
      if (AriseTranslateEngine.hasCached(item.content, currentLang)) return;

      const contentElem = document.getElementById(`prayer-content-${item.id}`);
      if (!contentElem) return;

      AriseTranslateEngine.translate(item.content, currentLang).then(translatedText => {
        if (!originalViewMap.prayers.has(item.id) && contentElem) {
          contentElem.textContent = translatedText;
          contentElem.classList.add('fade-in-content');
        }
      });
    });
  }
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
    content_en: content, // stored initially
    amenCount: 1,
    date: new Date().toISOString().slice(0, 10)
  };

  prayers.unshift(newPrayer);
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(prayers));

  renderPrayers();
  closeModal('prayerModal');
  e.target.reset();
  showToast(translations[currentLang].toast_prayer_added, "🕊️");

  // On-demand translate to English in the background and cache
  AriseTranslateEngine.translate(content, 'en').then(enText => {
    newPrayer.content_en = enText;
    localStorage.setItem('prayer_hub_prayers', JSON.stringify(prayers));
  });
}

// ==========================================
// 6. Testimonies Feed Management
// ==========================================
function renderTestimonies() {
  const grid = document.getElementById('testimonyGrid');
  if (!grid) return;

  grid.innerHTML = testimonies.map(item => {
    const isOriginalToggled = originalViewMap.testimonies.has(item.id);

    let displayTitle = item.title;
    let displayContent = item.content;
    let isTranslated = false;

    if (currentLang !== 'ko' && !isOriginalToggled) {
      if (AriseTranslateEngine.hasCached(item.content, currentLang)) {
        displayContent = AriseTranslateEngine.getCached(item.content, currentLang);
        displayTitle = AriseTranslateEngine.getCached(item.title, currentLang);
        isTranslated = true;
      } else if (item.content_en && currentLang === 'en') {
        displayContent = item.content_en;
        displayTitle = item.title_en || item.title;
        isTranslated = true;
      }
    }

    const showToggleBtn = currentLang !== 'ko';
    const toggleBtnText = isOriginalToggled 
      ? (currentLang === 'ko' ? '번역 보기' : 'Translate') 
      : (currentLang === 'ko' ? '원문' : 'Original');

    return `
      <div class="testimony-card" id="testimony-${item.id}">
        <div class="testimony-top" style="justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="country-flag">${getCountryFlag(item.country)}</span>
            <span class="prayer-author-name">${escapeHtml(item.author)}</span>
            <span class="prayer-date">(${getCountryNameOnly(item.country)}) • ${item.date}</span>
          </div>
          ${showToggleBtn ? `
            <button type="button" class="btn-translate-toggle ${isOriginalToggled ? '' : 'active'}" onclick="toggleTestimonyOriginal(${item.id})" title="Toggle Original / Translation">
              <span>🌐</span>
              <span>${toggleBtnText}</span>
            </button>
          ` : ''}
        </div>
        <h4 class="testimony-title ${isTranslated ? 'fade-in-content' : ''}" id="testimony-title-${item.id}">${escapeHtml(displayTitle)}</h4>
        <p class="testimony-quote ${isTranslated ? 'fade-in-content' : ''}" id="testimony-content-${item.id}">“${escapeHtml(displayContent)}”</p>
      </div>
    `;
  }).join('');

  // Asynchronously translate un-cached testimonies
  if (currentLang !== 'ko') {
    testimonies.forEach(item => {
      if (originalViewMap.testimonies.has(item.id)) return;
      if (AriseTranslateEngine.hasCached(item.content, currentLang)) return;

      const titleElem = document.getElementById(`testimony-title-${item.id}`);
      const contentElem = document.getElementById(`testimony-content-${item.id}`);

      Promise.all([
        AriseTranslateEngine.translate(item.title, currentLang),
        AriseTranslateEngine.translate(item.content, currentLang)
      ]).then(([transTitle, transContent]) => {
        if (!originalViewMap.testimonies.has(item.id)) {
          if (titleElem) {
            titleElem.textContent = transTitle;
            titleElem.classList.add('fade-in-content');
          }
          if (contentElem) {
            contentElem.textContent = `“${transContent}”`;
            contentElem.classList.add('fade-in-content');
          }
        }
      });
    });
  }
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

  // On-demand translate in background
  Promise.all([
    AriseTranslateEngine.translate(title, 'en'),
    AriseTranslateEngine.translate(content, 'en')
  ]).then(([enTitle, enContent]) => {
    newTestimony.title_en = enTitle;
    newTestimony.content_en = enContent;
    localStorage.setItem('prayer_hub_testimonies', JSON.stringify(testimonies));
  });
}

// ==========================================
// 6.5. Weekly Auto-Rotating Worship Lounge System (12 Global Worship Pool)
// ==========================================
const worshipSongPool = [
  {
    id: 1,
    videoId: "iJCV_2H9xD0",
    title: "Way Maker (길을 만드시는 분)",
    title_en: "Way Maker",
    artist: "Sinach / Leeland • 전 세계 대표 찬양",
    artist_en: "Sinach / Leeland • Global Worship Anthem",
    lyrics: "\"Way maker, Miracle worker, Promise keeper, Light in the darkness, my God, that is who You are.\"",
    lyrics_ko: "\"길을 만드시고 기적을 행하시며 언약을 지키시는 주, 어둠 속의 빛이 되시는 주 하나님.\""
  },
  {
    id: 2,
    videoId: "Zp6aygmvzM4",
    title: "The Blessing (주의 축복이 네게 임하길)",
    title_en: "The Blessing",
    artist: "Kari Jobe, Cody Carnes, Elevation Worship",
    artist_en: "Kari Jobe, Cody Carnes, Elevation Worship",
    lyrics: "\"The Lord bless you and keep you, make His face shine upon you and be gracious to you.\"",
    lyrics_ko: "\"여호와는 네게 복을 주시고 너를 지키시기를 원하며 그 얼굴을 네게 비추사 은혜 베푸시기를 원하노라. (민수기 6장)\""
  },
  {
    id: 3,
    videoId: "vg5qDljEw7Q",
    title: "How Great Is Our God (위대하신 주 - World Edition)",
    title_en: "How Great Is Our God (World Edition)",
    artist: "Chris Tomlin • 전 세계 다국어 찬양",
    artist_en: "Chris Tomlin • Multi-Language Edition",
    lyrics: "\"The King of Kings and Lord of Lords, how great is our God, sing with me, how great is our God.\"",
    lyrics_ko: "\"만왕의 왕, 만유의 주재, 온 땅이여 다 함께 찬양하라 우리 위대하신 하나님을.\""
  },
  {
    id: 4,
    videoId: "9sE5kEnitqE",
    title: "Goodness of God (하나님의 선하심)",
    title_en: "Goodness of God",
    artist: "CeCe Winans / Bethel Music",
    artist_en: "CeCe Winans / Bethel Music",
    lyrics: "\"All my life You have been faithful, and all my life You have been so, so good.\"",
    lyrics_ko: "\"내 평생 살아온 모든 순간 주님은 신실하셨고, 내 모든 삶 속에 주님의 선하심이 가득했습니다.\""
  },
  {
    id: 5,
    videoId: "XtwIT8JjddM",
    title: "10,000 Reasons (Bless the Lord)",
    title_en: "10,000 Reasons (Bless the Lord)",
    artist: "Matt Redman • 그래미 어워드 수상 찬양",
    artist_en: "Matt Redman • Grammy Award Winning Worship",
    lyrics: "\"Bless the Lord, O my soul, O my soul, worship His holy name. Sing like never before.\"",
    lyrics_ko: "\"내 영혼아 여호와를 송축하라 내 속에 있는 것들아 다 그의 거룩한 이름을 송축하라. (시편 103편)\""
  },
  {
    id: 6,
    videoId: "1m_sWJQm2fs",
    title: "Oceans (Where Feet May Fail - 오션스)",
    title_en: "Oceans (Where Feet May Fail)",
    artist: "Hillsong UNITED",
    artist_en: "Hillsong UNITED",
    lyrics: "\"Spirit lead me where my trust is without borders, let me walk upon the waters wherever You would call me.\"",
    lyrics_ko: "\"성령이여 나를 이끄소서, 한계 없는 믿음으로 주님이 부르시는 깊은 바다 위를 걷게 하소서.\""
  },
  {
    id: 7,
    videoId: "6xx0d3R2LoU",
    title: "Reckless Love (끝없는 사랑)",
    title_en: "Reckless Love",
    artist: "Cory Asbury / Bethel Music",
    artist_en: "Cory Asbury / Bethel Music",
    lyrics: "\"Oh, the overwhelming, never-ending, reckless love of God. It chases me down, fights 'til I'm found.\"",
    lyrics_ko: "\"비교할 수 없고 끝이 없는 하나님의 놀라운 사랑, 아흔아홉 마리 양을 두고 날 찾으러 오신 주님.\""
  },
  {
    id: 8,
    videoId: "nQWFzMvCfLE",
    title: "What A Beautiful Name (아름다운 그 이름)",
    title_en: "What A Beautiful Name",
    artist: "Hillsong Worship",
    artist_en: "Hillsong Worship",
    lyrics: "\"What a beautiful Name it is, the Name of Jesus Christ my King. Nothing compares to this.\"",
    lyrics_ko: "\"얼마나 아름다운 이름인가, 나의 왕 예수 그리스도의 이름! 세상 그 어떤 것도 비할 수 없네.\""
  },
  {
    id: 9,
    videoId: "Of5IcFWiEpg",
    title: "King of Kings (만왕의 왕)",
    title_en: "King of Kings",
    artist: "Hillsong Worship",
    artist_en: "Hillsong Worship",
    lyrics: "\"Praise the Father, praise the Son, praise the Spirit, three in one. God of glory, majesty, praise forever to the King of Kings.\"",
    lyrics_ko: "\"성부 성자 성령 삼위일체 하나님께 찬양, 영광과 위엄의 하나님, 만왕의 왕께 영원한 찬양을 드리세.\""
  },
  {
    id: 10,
    videoId: "u-1fwZtKJSM",
    title: "Living Hope (산 소망 되신 주)",
    title_en: "Living Hope",
    artist: "Phil Wickham",
    artist_en: "Phil Wickham",
    lyrics: "\"Hallelujah, praise the One who set me free! Hallelujah, death has lost its grip on me! Jesus Christ, my living hope.\"",
    lyrics_ko: "\"할렐루야, 나를 자유케 하신 주를 찬양해! 사망 권세를 깨뜨리시고 산 소망 되신 예수 그리스도!\""
  },
  {
    id: 11,
    videoId: "QZW4_8_zCBE",
    title: "Build My Life (내 삶을 드리네)",
    title_en: "Build My Life",
    artist: "Pat Barrett / Housefires",
    artist_en: "Pat Barrett / Housefires",
    lyrics: "\"I will build my life upon Your love, it is a firm foundation. I will put my trust in You alone.\"",
    lyrics_ko: "\"견고한 반석 되신 주님의 사랑 위에 내 삶을 세우리니, 오직 주님만을 의지하리라.\""
  },
  {
    id: 12,
    videoId: "SlEEgMWwxhc",
    title: "Holy Forever (영원히 거룩하신 주)",
    title_en: "Holy Forever",
    artist: "Chris Tomlin / CeCe Winans",
    artist_en: "Chris Tomlin / CeCe Winans",
    lyrics: "\"A thousand generations falling down in worship to sing the song of ages to the Lamb. Holy, holy forever.\"",
    lyrics_ko: "\"천 대에 이르는 열방이 엎드려 어린양 예수께 영원의 찬양을 노래하네. 영원토록 거룩 거룩하신 주.\""
  }
];

// Calculate ISO week number of the year
function getCurrentWeekNumber() {
  const now = new Date();
  const date = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

// ==========================================
// 6.5. Worship Lounge System (Library & Weekly Selection)
// ==========================================
let currentWorshipFilter = 'weekly';

function filterWorshipLounge(category) {
  currentWorshipFilter = category;

  const btnWeekly = document.getElementById('filterBtnWeekly');
  const btnAll = document.getElementById('filterBtnAll');
  const btnHymn = document.getElementById('filterBtnHymn');
  const btnGlobal = document.getElementById('filterBtnGlobal');
  const btnConfession = document.getElementById('filterBtnConfession');

  [btnWeekly, btnAll, btnHymn, btnGlobal, btnConfession].forEach(b => {
    if (b) b.classList.remove('active');
  });

  if (category === 'weekly' && btnWeekly) btnWeekly.classList.add('active');
  else if (category === 'all' && btnAll) btnAll.classList.add('active');
  else if (category === 'hymn' && btnHymn) btnHymn.classList.add('active');
  else if (category === 'global' && btnGlobal) btnGlobal.classList.add('active');
  else if (category === 'confession' && btnConfession) btnConfession.classList.add('active');

  renderWorshipLounge();
}
window.filterWorshipLounge = filterWorshipLounge;

// Render weekly or filtered worship songs
function renderWorshipLounge() {
  const grid = document.getElementById('worshipGrid');
  const badgeText = document.getElementById('worshipWeekText');
  if (!grid) return;

  const isKorean = currentLang === 'ko';
  const currentYear = new Date().getFullYear();
  const weekNum = getCurrentWeekNumber();
  const currentMonth = new Date().getMonth() + 1;
  const monthWeek = Math.min(5, Math.ceil(new Date().getDate() / 7));

  // Determine pool of songs: from worshipStudioState or PRESET_PRAISE_SONGS
  let pool = [];
  if (typeof worshipStudioState !== 'undefined' && worshipStudioState.allSongs && worshipStudioState.allSongs.length > 0) {
    pool = worshipStudioState.allSongs;
  } else if (typeof PRESET_PRAISE_SONGS !== 'undefined' && PRESET_PRAISE_SONGS.length > 0) {
    pool = PRESET_PRAISE_SONGS;
  }

  // Update badge text based on filter
  if (badgeText) {
    if (currentWorshipFilter === 'weekly') {
      badgeText.innerHTML = isKorean
        ? `📅 이번 주 추천 찬양 (${currentYear}년 ${currentMonth}월 ${monthWeek}주차) • 매주 자동 순환`
        : `📅 Weekly Featured Worship (Week ${weekNum}, ${currentYear}) • Auto-Rotates`;
    } else if (currentWorshipFilter === 'all') {
      badgeText.innerHTML = isKorean
        ? `🎶 전체 찬양 보관함 (${pool.length}곡 라이브러리) • 자유 선곡 & 감상`
        : `🎶 Complete Praise Library (${pool.length} Songs) • Browse & Worship`;
    } else if (currentWorshipFilter === 'hymn') {
      badgeText.innerHTML = isKorean
        ? `✝️ 클래식 찬송가 컬렉션 • 세대를 넘어 전해진 은혜`
        : `✝️ Classic Hymns Collection • Timeless Grace`;
    } else if (currentWorshipFilter === 'global') {
      badgeText.innerHTML = isKorean
        ? `🌍 글로벌 다민족 찬양 • 온 열방이 함께 부르는 찬양`
        : `🌍 Global Multi-Language Worship • Sung Across Nations`;
    } else if (currentWorshipFilter === 'confession') {
      badgeText.innerHTML = isKorean
        ? `🕊️ 은혜와 믿음의 결단 찬양 • 깊은 묵상과 기도`
        : `🕊️ Grace & Surrender Worship • Deep Reflection`;
    }
  }

  // Filter songs
  let displaySongs = [];
  if (currentWorshipFilter === 'weekly') {
    const total = pool.length;
    if (total > 0) {
      const startIndex = (weekNum * 3) % total;
      displaySongs = [
        pool[startIndex % total],
        pool[(startIndex + 1) % total],
        pool[(startIndex + 2) % total]
      ];
      // Highlight amazing-grace in weekly if available
      if (!displaySongs.some(s => s.id === 'amazing-grace')) {
        const ag = pool.find(s => s.id === 'amazing-grace');
        if (ag) displaySongs[0] = ag;
      }
    }
  } else if (currentWorshipFilter === 'all') {
    displaySongs = [...pool];
  } else {
    displaySongs = pool.filter(s => s.category === currentWorshipFilter);
  }

  // Fallback if pool was empty
  if (displaySongs.length === 0 && typeof worshipSongPool !== 'undefined') {
    displaySongs = worshipSongPool.slice(0, 3).map(old => ({
      id: `legacy-${old.id}`,
      titleKo: old.title,
      titleEn: old.title_en,
      artist: old.artist,
      category: 'global',
      videoId: old.videoId,
      lines: [{ start: 0, end: 10, kr: old.lyrics_ko, en: old.lyrics }]
    }));
  }

  // Current meeting praise title check
  const currentMeetingSongTitle = (typeof routineContent !== 'undefined' && routineContent.step1?.songTitle) || '';

  grid.innerHTML = displaySongs.map((song, idx) => {
    const isCurrentMeeting = currentMeetingSongTitle && 
      (currentMeetingSongTitle.includes(song.titleKo) || 
       (song.titleEn && currentMeetingSongTitle.includes(song.titleEn)));

    let catLabel = isKorean ? '찬양' : 'Worship';
    if (song.category === 'hymn') catLabel = isKorean ? '✝️ 클래식 찬송가' : '✝️ Classic Hymn';
    else if (song.category === 'global') catLabel = isKorean ? '🌍 글로벌 찬양' : '🌍 Global Praise';
    else if (song.category === 'confession') catLabel = isKorean ? '🕊️ 은혜와 결단' : '🕊️ Grace & Faith';
    else if (currentWorshipFilter === 'weekly') catLabel = isKorean ? `⭐ 이번 주 추천 #${idx + 1}` : `⭐ Weekly #${idx + 1}`;

    // Snippet
    let snippetKr = '';
    let snippetEn = '';
    if (song.lines && song.lines.length > 1) {
      const chorusLine = song.lines.find(l => l.kr && l.kr.includes('[후렴]')) || song.lines[1];
      snippetKr = chorusLine.kr || '';
      snippetEn = chorusLine.en || '';
    } else {
      snippetKr = song.titleKo;
      snippetEn = song.titleEn;
    }

    // Video preview markup
    let previewHtml = '';
    if (song.videoUrl) {
      previewHtml = `
        <video 
          poster="${song.bgImage || 'assets/worship_bg.jpg'}" 
          controls 
          preload="metadata" 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
          <source src="${song.videoUrl}" type="video/mp4">
        </video>
      `;
    } else if (song.audioUrl) {
      previewHtml = `
        <div class="worship-card-audio-preview" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.75)), url('${song.bgImage || 'assets/worship_bg.jpg'}'); background-size: cover; background-position: center; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem;">
          <button type="button" class="btn btn-primary btn-sm" onclick="openWorshipStudio('${song.id}')" style="box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4); font-weight: 700; display: flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1rem; border-radius: 9999px; margin-bottom: 0.6rem;">
            <span>▶️</span> <span>한/영 자막 영상 재생</span>
          </button>
          <audio controls preload="none" style="width: 90%; height: 32px; opacity: 0.9;" src="${song.audioUrl}"></audio>
        </div>
      `;
    } else if (song.videoId) {
      previewHtml = `
        <iframe 
          src="https://www.youtube-nocookie.com/embed/${song.videoId}?enablejsapi=1" 
          title="${escapeHtml(song.titleKo)}" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen 
          loading="lazy">
        </iframe>
      `;
    } else {
      previewHtml = `
        <div style="position: absolute; top:0; left:0; width:100%; height:100%; background: #1e293b; display:flex; align-items:center; justify-content:center; color:#94a3b8; font-size: 0.9rem;">
          🎵 음원 전용 찬양
        </div>
      `;
    }

    const watchStudioBtnLabel = isKorean ? '🎬 한/영 자막 감상' : '🎬 Watch Subtitles';
    const assignMeetingBtnLabel = isKorean ? '📌 모임 찬양 지정' : '📌 Set as Meeting Song';
    const meetingSelectedBadge = isKorean ? '📌 이번 모임 찬양' : '📌 Current Meeting Praise';

    return `
      <div class="worship-card ${isCurrentMeeting ? 'is-meeting-selected' : ''}" id="worshipCard_${song.id}">
        <div class="worship-video-preview">
          ${previewHtml}
        </div>
        <div class="worship-info">
          <div class="worship-card-top-tags" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
            <span class="worship-tag">${catLabel}</span>
            ${isCurrentMeeting ? `<span class="badge-meeting-song">${meetingSelectedBadge}</span>` : ''}
          </div>
          <h4 class="worship-title">${escapeHtml(song.titleKo)}</h4>
          <p class="worship-meta" style="margin-bottom: 0.35rem; color: #38bdf8; font-weight: 600;">${escapeHtml(song.titleEn)}</p>
          <p class="worship-meta" style="margin-bottom: 0.7rem;">${escapeHtml(song.artist || '')}</p>
          <p class="worship-lyrics-snippet">
            "${escapeHtml(snippetKr)}"<br>
            <span style="font-size:0.78rem; opacity:0.85; font-style:normal; color:#93c5fd;">${escapeHtml(snippetEn)}</span>
          </p>

          <div class="worship-card-actions">
            <div class="worship-card-btns">
              <button type="button" class="btn btn-primary btn-sm" onclick="openWorshipStudio('${song.id}')" title="한/영 자막 플레이어 및 줌 화면 공유">
                ${watchStudioBtnLabel}
              </button>
              <button type="button" class="btn btn-outline btn-sm btn-assign-meeting" onclick="setCurrentMeetingSong('${song.id}')" title="이 찬양을 30분 기도모임의 1단계 찬양으로 설정합니다">
                ${assignMeetingBtnLabel}
              </button>
            </div>
            ${song.videoUrl ? `
              <a href="${song.videoUrl}" download class="btn-routine-link" style="margin-top: 0.3rem; text-align: center; font-size: 0.76rem; padding: 0.35rem; display: block;">
                📥 1080p MP4 자막 영상 다운로드
              </a>
            ` : (song.audioUrl ? `
              <a href="${song.audioUrl}" download class="btn-routine-link" style="margin-top: 0.3rem; text-align: center; font-size: 0.76rem; padding: 0.35rem; display: block;">
                📥 고음질 MP3 음원 다운로드
              </a>
            ` : '')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}
window.renderWorshipLounge = renderWorshipLounge;


// ==========================================
// 7. Settings Modal Handling
// ==========================================
function handleSettingsSubmit(e) {
  e.preventDefault();
  const dateVal = document.getElementById('settingsDateTime').value;
  const zoomVal = document.getElementById('settingsZoomUrl').value.trim();
  const idVal = document.getElementById('settingsMeetingId').value.trim();

  // 호주 퀸즈랜드(AEST / UTC+10) 기준 오프셋을 붙여 저장
  if (dateVal) {
    meetingSettings.meetingDate = (dateVal.includes('+') || dateVal.includes('Z'))
      ? dateVal
      : `${dateVal}:00+10:00`;
  }
  if (zoomVal) meetingSettings.zoomUrl = zoomVal;
  if (idVal) meetingSettings.meetingId = idVal;

  localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(meetingSettings));

  // 구글 스프레드시트 설정 저장 및 동기화 처리
  const sheetInputEl = document.getElementById('settingsGoogleSheetId');
  if (sheetInputEl) {
    const rawSheetVal = sheetInputEl.value.trim();
    const newSheetId = extractSheetId(rawSheetVal);
    const prevSheetId = googleSheetId;
    googleSheetId = newSheetId;
    localStorage.setItem('prayer_hub_google_sheet_id', googleSheetId);

    if (googleSheetId && googleSheetId !== prevSheetId) {
      syncRoutineFromGoogleSheet(googleSheetId, true);
    } else {
      updateSheetSyncUI();
    }
  }

  updateMeetingDisplay();
  startCountdown();
  closeModal('settingsModal');
  showToast(translations[currentLang].toast_settings_saved, "⚙️");
}

// ==========================================
// 7.2. Google Sheets 3-Admin Sync & Parser
// ==========================================
function extractSheetId(input) {
  if (!input) return '';
  const trimmed = input.trim();
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) return match[1];
  if (/^[a-zA-Z0-9_-]{15,}$/.test(trimmed)) return trimmed;
  return trimmed;
}

function parseRoutineFromRows(rows) {
  const parsed = {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    meetingSettings: {}
  };

  rows.forEach(([rawKey, rawVal]) => {
    if (!rawKey || !rawVal) return;
    const key = String(rawKey).trim().toLowerCase().replace(/\s+/g, '');
    const val = String(rawVal).trim();

    // Step 1: Praise
    if (key.includes('1단계') || key.includes('찬양') || key.includes('step1') || key.includes('praise')) {
      if (key.includes('링크') || key.includes('link') || key.includes('유튜브') || key.includes('youtube')) {
        parsed.step1.link = val;
      } else if (key.includes('제목') || key.includes('곡명') || key.includes('title') || key.includes('song')) {
        parsed.step1.songTitle = val;
      } else if (key.includes('안내') || key.includes('내용') || key.includes('가사') || key.includes('desc') || key.includes('content')) {
        parsed.step1.content = val;
      }
    }
    // Step 2: Gospel Message
    else if (key.includes('2단계') || key.includes('말씀') || key.includes('메시지') || key.includes('step2') || key.includes('message')) {
      if (key.includes('성경') || key.includes('본문') || key.includes('구절') || key.includes('scripture')) {
        parsed.step2.scripture = val;
      } else if (key.includes('제목') || key.includes('title')) {
        parsed.step2.title = val;
      } else if (key.includes('내용') || key.includes('요약') || key.includes('설교') || key.includes('content') || key.includes('desc')) {
        parsed.step2.content = val;
      }
    }
    // Step 3: Intercessory Prayer
    else if (key.includes('3단계') || key.includes('기도') || key.includes('step3') || key.includes('prayer')) {
      if (key.includes('제목') || key.includes('주제') || key.includes('title') || key.includes('topic')) {
        parsed.step3.title = val;
      } else if (key.includes('내용') || key.includes('기도제목') || key.includes('content') || key.includes('desc')) {
        parsed.step3.content = val;
      }
    }
    // Step 4: Closing & Blessing
    else if (key.includes('4단계') || key.includes('간증') || key.includes('축도') || key.includes('마무리') || key.includes('step4') || key.includes('closing')) {
      if (key.includes('담당') || key.includes('인도') || key.includes('제목') || key.includes('speaker') || key.includes('title')) {
        parsed.step4.speaker = val;
      } else if (key.includes('내용') || key.includes('축복') || key.includes('content') || key.includes('desc')) {
        parsed.step4.content = val;
      }
    }
    // Optional: Meeting Settings
    else if (key.includes('모임일시') || key.includes('일시') || key.includes('meetingdate')) {
      parsed.meetingSettings.meetingDate = val;
    } else if (key.includes('줌링크') || key.includes('zoomurl') || key.includes('회의링크')) {
      parsed.meetingSettings.zoomUrl = val;
    } else if (key.includes('줌id') || key.includes('회의id') || key.includes('meetingid') || key.includes('비밀번호')) {
      parsed.meetingSettings.meetingId = val;
    }
  });

  return parsed;
}

async function syncRoutineFromGoogleSheet(sheetInput, isUserAction = false) {
  const targetId = extractSheetId(sheetInput || googleSheetId);
  if (!targetId) return { success: false, count: 0 };

  const url = `https://docs.google.com/spreadsheets/d/${targetId}/gviz/tq?tqx=out:json&tq=&headers=0`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`구글 서버 응답 오류 (${response.status})`);
    }
    const text = await response.text();
    const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\s*\(([\s\S]+)\);?/);
    if (!jsonMatch || !jsonMatch[1]) {
      throw new Error("구글 시트 응답 형식이 올바르지 않습니다. '링크가 있는 모든 사용자에게 뷰어' 공유를 확인해 주세요.");
    }

    const data = JSON.parse(jsonMatch[1]);
    if (data.status !== 'ok') {
      throw new Error(data.errors?.[0]?.detailed_message || data.errors?.[0]?.message || "구글 시트 조회 실패");
    }

    const rows = [];
    if (data.table && Array.isArray(data.table.rows)) {
      for (const r of data.table.rows) {
        if (!r || !Array.isArray(r.c)) continue;
        const col0 = r.c[0] ? (r.c[0].f || r.c[0].v || '') : '';
        const col1 = r.c[1] ? (r.c[1].f || r.c[1].v || '') : '';
        if (col0 || col1) {
          rows.push([String(col0).trim(), String(col1).trim()]);
        }
      }
    }

    if (rows.length === 0) {
      throw new Error("구글 시트에 읽어올 수 있는 행 데이터가 없습니다.");
    }

    const parsed = parseRoutineFromRows(rows);

    // Merge Routine Content
    if (parsed.step1.songTitle || parsed.step1.content || parsed.step2.title || parsed.step3.title || parsed.step4.speaker) {
      routineContent = {
        step1: {
          songTitle: parsed.step1.songTitle || routineContent.step1?.songTitle || defaultRoutineContent.step1.songTitle,
          link: parsed.step1.link !== undefined ? parsed.step1.link : (routineContent.step1?.link || defaultRoutineContent.step1.link),
          content: parsed.step1.content !== undefined ? parsed.step1.content : (routineContent.step1?.content || defaultRoutineContent.step1.content)
        },
        step2: {
          scripture: parsed.step2.scripture || routineContent.step2?.scripture || defaultRoutineContent.step2.scripture,
          title: parsed.step2.title || routineContent.step2?.title || defaultRoutineContent.step2.title,
          content: parsed.step2.content !== undefined ? parsed.step2.content : (routineContent.step2?.content || defaultRoutineContent.step2.content)
        },
        step3: {
          title: parsed.step3.title || routineContent.step3?.title || defaultRoutineContent.step3.title,
          content: parsed.step3.content !== undefined ? parsed.step3.content : (routineContent.step3?.content || defaultRoutineContent.step3.content)
        },
        step4: {
          speaker: parsed.step4.speaker || routineContent.step4?.speaker || defaultRoutineContent.step4.speaker,
          content: parsed.step4.content !== undefined ? parsed.step4.content : (routineContent.step4?.content || defaultRoutineContent.step4.content)
        }
      };
      localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
      renderRoutineDisplay();
    }

    // Merge Meeting Settings if present
    if (parsed.meetingSettings && (parsed.meetingSettings.meetingDate || parsed.meetingSettings.zoomUrl || parsed.meetingSettings.meetingId)) {
      if (parsed.meetingSettings.meetingDate) meetingSettings.meetingDate = parsed.meetingSettings.meetingDate;
      if (parsed.meetingSettings.zoomUrl) meetingSettings.zoomUrl = parsed.meetingSettings.zoomUrl;
      if (parsed.meetingSettings.meetingId) meetingSettings.meetingId = parsed.meetingSettings.meetingId;
      localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(meetingSettings));
      updateMeetingDisplay();
      startCountdown();
    }

    googleSheetId = targetId;
    localStorage.setItem('prayer_hub_google_sheet_id', googleSheetId);
    updateSheetSyncUI();

    if (isUserAction) {
      showToast(translations[currentLang]?.toast_sheet_synced || "구글 스프레드시트의 최신 내용이 동기화되었습니다! 📊", "📊");
    }

    return { success: true, count: rows.length };
  } catch (err) {
    if (isUserAction) {
      showToast(translations[currentLang]?.toast_sheet_sync_failed || "구글 시트 동기화 실패: 공유 권한을 확인해 주세요.", "⚠️");
    }
    throw err;
  }
}

async function testGoogleSheetSync() {
  const inputEl = document.getElementById('settingsGoogleSheetId');
  const statusMsg = document.getElementById('sheetSyncStatusMsg');
  const testBtn = document.getElementById('btnTestSheetSync');

  const rawVal = inputEl ? inputEl.value.trim() : '';
  const parsedId = extractSheetId(rawVal);

  if (!parsedId) {
    if (statusMsg) {
      statusMsg.style.display = 'block';
      statusMsg.className = 'sheet-status-msg error';
      statusMsg.textContent = '⚠️ 구글 시트 링크(URL) 또는 시트 ID를 먼저 입력해 주세요.';
    }
    return;
  }

  if (testBtn) {
    testBtn.disabled = true;
    testBtn.textContent = '⏳ 동기화 테스트 중...';
  }
  if (statusMsg) {
    statusMsg.style.display = 'block';
    statusMsg.className = 'sheet-status-msg';
    statusMsg.textContent = '🔄 구글 스프레드시트와 통신하는 중...';
  }

  try {
    const result = await syncRoutineFromGoogleSheet(parsedId, false);
    if (statusMsg) {
      statusMsg.className = 'sheet-status-msg success';
      statusMsg.innerHTML = `✅ 성공! 구글 시트에서 <b>${result.count}개 행 데이터</b>를 정상적으로 읽어왔습니다. 아래 [설정 저장]을 누르시면 적용됩니다.`;
    }
    showToast("구글 시트 데이터가 정상적으로 확인되었습니다! ✨", "📊");
  } catch (err) {
    if (statusMsg) {
      statusMsg.className = 'sheet-status-msg error';
      statusMsg.innerHTML = `❌ 연결 실패: ${escapeHtml(err.message)}<br><small style="color: var(--text-muted); display: block; margin-top: 0.3rem;">💡 구글 시트 우측 상단 <b>[공유]</b>에서 일반 액세스를 <b>'링크가 있는 모든 사용자에게 뷰어'</b>로 설정해 주세요.</small>`;
    }
  } finally {
    if (testBtn) {
      testBtn.disabled = false;
      testBtn.textContent = '🔄 즉시 연결 테스트 & 동기화';
    }
  }
}

function updateSheetSyncUI() {
  const badge = document.getElementById('routineSheetSyncBadge');
  const directBtn = document.getElementById('btnRoutineSheetDirect');

  if (googleSheetId) {
    if (badge) badge.style.display = 'inline-flex';
    if (directBtn) {
      directBtn.style.display = 'inline-flex';
      directBtn.href = `https://docs.google.com/spreadsheets/d/${googleSheetId}/edit`;
    }
  } else {
    if (badge) badge.style.display = 'none';
    if (directBtn) directBtn.style.display = 'none';
  }
}

function openSheetTemplateGuide() {
  openModal('sheetTemplateModal');
}

function copySheetTemplateTsv() {
  const tsv = [
    "구분 항목\t입력 내용 (3명의 담당자가 작성하는 칸)",
    "1단계_찬양제목\tWay Maker (길을 만드시는 분)",
    "1단계_유튜브링크\thttps://www.youtube.com/watch?v=iJCV_2H9xD0",
    "1단계_찬양안내\t전 세계 성도들이 함께 고백하는 대표 찬양으로 마음의 문을 열고 주님의 임재를 구합니다.",
    "2단계_성경본문\t디모데후서 2:1-2 (2 Tim 2:1-2)",
    "2단계_말씀제목\t충성된 사람들에게 부탁하라",
    "2단계_말씀요약\t1. 내 아들아 그러므로 너는 그리스도 예수 안에 있는 은혜 가운데서 강하라\n2. 또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라\n3. 그들이 또 다른 사람들을 가르칠 수 있으리라",
    "3단계_기도제목\t함께 기도합시다 (Let Us Pray Together)",
    "3단계_기도내용\t🕊️ [1. 나를 위한 기도]\n“내가 제일 중요하다”\n• 내가 복음이 되기를\n• 무기력하게 느껴지는 그리스도가 아니라, 성경에 나타난 능력의 그리스도를 누리기를\n• Up & Down에 흔들리지 않고 다니엘처럼 항상 한결같은 믿음이 되기를\n\n🌍 [2. 모든 민족을 위한 기도]\n• 모든 민족이 그리스도 앞에 무릎 꿇도록\n• 이곳에 모인 나라들과 세계 모든 나라를 위하여\n• 전쟁 속에서 고통받는 나라들과 사람들을 위하여\n\n🌱 [3. 후대를 위한 기도]\n• 후대가 복음을 알도록\n• 복음이 정말 좋은 것임을 알도록\n• 인생에 무슨 일이 생겨도 그리스도 안에 있으면 괜찮다는 것을 알도록\n• 학업과 모든 일이 모든 민족을 살리는 준비임을 알도록",
    "4단계_담당자\t다민족 제자 1분 응답 간증 & 전도자 축도",
    "4단계_마무리내용\t• 다민족 제자의 1분 현장 응답 및 은혜 간증 나눔\n• 전도자의 축도 및 열방 지체들을 향한 제사장적 축복 기도\n• 주기도문으로 은혜의 30분 기도모임 폐회",
    "모임일시\t2026-10-04T20:00:00+10:00",
    "줌링크\thttps://zoom.us/j/88812345678",
    "줌ID_비번\tZoom ID: 888 1234 5678 | Passcode: 7777"
  ].join("\n");

  const successMsg = "구글 시트용 양식이 복사되었습니다! 새 구글 시트 A1 셀에 Ctrl+V 하세요. 📋";
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(tsv).then(() => {
      showToast(successMsg, "📋");
    }).catch(() => {
      fallbackCopy(tsv, successMsg);
    });
  } else {
    fallbackCopy(tsv, successMsg);
  }

  function fallbackCopy(text, msg) {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast(msg, "📋");
  }
}

// ==========================================
// 7.5. Routine 4-Step Interactive Display & Management
// ==========================================
function toggleRoutineOriginal() {
  originalViewMap.routine = !originalViewMap.routine;
  renderRoutineDisplay();
}

function renderRoutineDisplay() {
  if (!routineContent) return;

  const isOriginal = originalViewMap.routine;
  const targetLang = isOriginal ? 'ko' : currentLang;

  // Update header translation controls
  const badge = document.getElementById('routineTranslateBadge');
  const toggleBtn = document.getElementById('btnToggleRoutineOriginal');
  const toggleBtnText = document.getElementById('btnRoutineOriginalText');

  if (badge) {
    if (currentLang !== 'ko' && !isOriginal) {
      badge.style.display = 'inline-flex';
      badge.textContent = `🌐 실시간 번역됨 (${currentLang.toUpperCase()})`;
    } else {
      badge.style.display = 'none';
    }
  }

  if (toggleBtn) {
    if (currentLang !== 'ko') {
      toggleBtn.style.display = 'inline-flex';
      if (toggleBtnText) {
        toggleBtnText.textContent = isOriginal 
          ? (currentLang === 'ko' ? '번역 보기' : 'View Translation') 
          : (currentLang === 'ko' ? '원문 보기' : 'View Original');
      }
    } else {
      toggleBtn.style.display = 'none';
    }
  }

  // Render routine data to DOM
  const applyRoutineToDom = (data, isTranslated = false) => {
    // Step 1: Praise (~5 min)
    const routineSub1 = document.getElementById('routineSub1');
    const detailSongTitle = document.getElementById('detailSongTitle');
    const detailSongContent = document.getElementById('detailSongContent');
    const detailSongLinkArea = document.getElementById('detailSongLinkArea');
    const btnPlayMeetingSongStudio = document.getElementById('btnPlayMeetingSongStudio');

    const songTitleText = data.step1?.songTitle || 'Way Maker';
    if (routineSub1) routineSub1.textContent = songTitleText;
    if (detailSongTitle) detailSongTitle.textContent = songTitleText;
    if (btnPlayMeetingSongStudio) {
      btnPlayMeetingSongStudio.innerHTML = `▶️ ${escapeHtml(songTitleText)} (한/영 자막)`;
    }
    if (detailSongContent) {
      detailSongContent.innerHTML = escapeHtml(data.step1?.content || '').replace(/\n/g, '<br>');
      if (isTranslated) detailSongContent.classList.add('fade-in-content');
    }
    if (detailSongLinkArea) {
      const activeLink = data.step1?.link || routineContent.step1?.link;
      if (activeLink) {
        detailSongLinkArea.innerHTML = `
          <a href="${escapeHtml(activeLink)}" target="_blank" rel="noopener noreferrer" class="detail-yt-btn">
            ▶ 유튜브 찬양 영상 함께 듣기 (Watch on YouTube)
          </a>
        `;
      } else {
        detailSongLinkArea.innerHTML = '';
      }
    }

    // Step 2: Gospel Message (5 min)
    const routineSub2 = document.getElementById('routineSub2');
    const detailMessageTitle = document.getElementById('detailMessageTitle');
    const detailMessageContent = document.getElementById('detailMessageContent');

    if (routineSub2) {
      routineSub2.textContent = data.step2?.scripture || '디모데후서 2:1-2';
    }
    if (detailMessageTitle) {
      const scripturePart = data.step2?.scripture ? `[${escapeHtml(data.step2.scripture)}] ` : '';
      const titlePart = escapeHtml(data.step2?.title || '');
      detailMessageTitle.textContent = `${scripturePart}${titlePart}`;
    }
    if (detailMessageContent) {
      detailMessageContent.innerHTML = escapeHtml(data.step2?.content || '').replace(/\n/g, '<br>');
      if (isTranslated) detailMessageContent.classList.add('fade-in-content');
    }

    // Step 3: Intercessory Prayer (15 min)
    const routineSub3 = document.getElementById('routineSub3');
    const detailPrayerTitle = document.getElementById('detailPrayerTitle');
    const detailPrayerContent = document.getElementById('detailPrayerContent');

    if (routineSub3) {
      routineSub3.textContent = data.step3?.title || '나 자신 · 모든 민족 · 후대';
    }
    if (detailPrayerTitle) {
      detailPrayerTitle.textContent = data.step3?.title || '함께 기도합시다 (Let Us Pray Together)';
    }
    if (detailPrayerContent) {
      detailPrayerContent.innerHTML = escapeHtml(data.step3?.content || '').replace(/\n/g, '<br>');
      if (isTranslated) detailPrayerContent.classList.add('fade-in-content');
    }

    // Step 4: Closing & Blessing (5 min)
    const routineSub4 = document.getElementById('routineSub4');
    const detailClosingTitle = document.getElementById('detailClosingTitle');
    const detailClosingContent = document.getElementById('detailClosingContent');

    if (routineSub4) {
      routineSub4.textContent = data.step4?.speaker || '다민족 제자 간증 & 축도';
    }
    if (detailClosingTitle) {
      detailClosingTitle.textContent = data.step4?.speaker || '1분 간증 및 축복 기도';
    }
    if (detailClosingContent) {
      detailClosingContent.innerHTML = escapeHtml(data.step4?.content || '').replace(/\n/g, '<br>');
      if (isTranslated) detailClosingContent.classList.add('fade-in-content');
    }
  };

  // 1. Initial render (fast sync)
  applyRoutineToDom(routineContent, false);

  // 2. Asynchronous on-demand translation if foreign language
  if (targetLang !== 'ko') {
    if (badge) {
      badge.classList.add('loading');
      badge.textContent = `🌐 번역 중 (${targetLang.toUpperCase()})...`;
    }

    AriseTranslateEngine.translateRoutine(routineContent, targetLang).then(translatedData => {
      if (!originalViewMap.routine && currentLang === targetLang) {
        applyRoutineToDom(translatedData, true);
        if (badge) {
          badge.classList.remove('loading');
          badge.textContent = `🌐 실시간 번역됨 (${targetLang.toUpperCase()})`;
        }
      }
    });
  }
}

function toggleRoutineDetail(stepNum) {
  const detailBox = document.getElementById(`routineDetail${stepNum}`);
  const btn = detailBox ? detailBox.previousElementSibling : null;
  if (!detailBox) return;

  const isOpen = detailBox.classList.contains('open');
  if (isOpen) {
    detailBox.classList.remove('open');
    if (btn) btn.classList.remove('open');
  } else {
    detailBox.classList.add('open');
    if (btn) btn.classList.add('open');
  }
}

function openRoutineModal() {
  const pinInput = document.getElementById('routineAdminPin');
  if (pinInput) pinInput.value = '';

  const s1Song = document.getElementById('editStep1Song');
  const s1Link = document.getElementById('editStep1Link');
  const s1Desc = document.getElementById('editStep1Desc');

  const s2Scripture = document.getElementById('editStep2Scripture');
  const s2Title = document.getElementById('editStep2Title');
  const s2Content = document.getElementById('editStep2Content');

  const s3Title = document.getElementById('editStep3Title');
  const s3Content = document.getElementById('editStep3Content');

  const s4Speaker = document.getElementById('editStep4Speaker');
  const s4Content = document.getElementById('editStep4Content');

  if (s1Song) s1Song.value = routineContent.step1?.songTitle || '';
  if (s1Link) s1Link.value = routineContent.step1?.link || '';
  if (s1Desc) s1Desc.value = routineContent.step1?.content || '';

  if (s2Scripture) s2Scripture.value = routineContent.step2?.scripture || '';
  if (s2Title) s2Title.value = routineContent.step2?.title || '';
  if (s2Content) s2Content.value = routineContent.step2?.content || '';

  if (s3Title) s3Title.value = routineContent.step3?.title || '';
  if (s3Content) s3Content.value = routineContent.step3?.content || '';

  if (s4Speaker) s4Speaker.value = routineContent.step4?.speaker || '';
  if (s4Content) s4Content.value = routineContent.step4?.content || '';

  openModal('routineModal');
}

async function handleRoutineSubmit(e) {
  e.preventDefault();

  const pinInput = document.getElementById('routineAdminPin');
  const pin = pinInput ? pinInput.value.trim() : '';

  if (!pin) {
    showToast("3인 관리자 비밀번호를 입력해 주세요! 🔑", "⚠️");
    if (pinInput) pinInput.focus();
    return;
  }

  const newRoutineData = {
    step1: {
      songTitle: document.getElementById('editStep1Song')?.value.trim() || '',
      link: document.getElementById('editStep1Link')?.value.trim() || '',
      content: document.getElementById('editStep1Desc')?.value.trim() || ''
    },
    step2: {
      scripture: document.getElementById('editStep2Scripture')?.value.trim() || '',
      title: document.getElementById('editStep2Title')?.value.trim() || '',
      content: document.getElementById('editStep2Content')?.value.trim() || ''
    },
    step3: {
      title: document.getElementById('editStep3Title')?.value.trim() || '',
      content: document.getElementById('editStep3Content')?.value.trim() || ''
    },
    step4: {
      speaker: document.getElementById('editStep4Speaker')?.value.trim() || '',
      content: document.getElementById('editStep4Content')?.value.trim() || ''
    }
  };

  const submitBtn = document.getElementById('btnRoutineSubmit');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = '⏳ 전 세계 저장 중...';
  }

  try {
    const res = await fetch('/api/routine', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pin, routine: newRoutineData })
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      if (res.status === 401) {
        showToast("⚠️ 관리자 비밀번호가 일치하지 않습니다. 4자리 암호를 다시 확인해 주세요.", "❌");
        if (pinInput) {
          pinInput.focus();
          pinInput.select();
        }
        return;
      }
      throw new Error(data.error || `서버 오류 (${res.status})`);
    }

    // Success! Update local state and display
    routineContent = data.routine || newRoutineData;
    localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
    renderRoutineDisplay();
    closeModal('routineModal');
    showToast("30분 기도모임 순서가 전 세계 성도들에게 즉시 반영되었습니다! ✨", "🎉");

  } catch (err) {
    console.warn("Serverless API fallback to local/offline mode:", err.message);

    // Local / Offline fallback (기본 관리자 암호 7777 일치 시 허용)
    if (pin === '7777') {
      routineContent = newRoutineData;
      localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
      renderRoutineDisplay();
      closeModal('routineModal');
      showToast("30분 기도모임 순서가 저장되었습니다! ✨", "📋");
    } else {
      showToast("저장 실패: 올바른 4자리 관리자 암호를 입력해 주세요. ⚠️", "❌");
    }
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = '💾 전 세계 성도들에게 즉시 반영 및 저장';
    }
  }
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
      if (dtInput) {
        try {
          const d = new Date(meetingSettings.meetingDate);
          // 항상 호주 퀸즈랜드(Australia/Brisbane) 시간대 기준으로 YYYY-MM-DDTHH:mm 값을 추출하여 인풋에 세팅
          const formatter = new Intl.DateTimeFormat('en-CA', {
            timeZone: 'Australia/Brisbane',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          });
          const parts = formatter.formatToParts(d);
          const getPart = type => parts.find(p => p.type === type)?.value;
          const year = getPart('year');
          const month = getPart('month');
          const day = getPart('day');
          const hours = getPart('hour') === '24' ? '00' : getPart('hour');
          const mins = getPart('minute');
          dtInput.value = `${year}-${month}-${day}T${hours}:${mins}`;
        } catch (err) {
          dtInput.value = meetingSettings.meetingDate.slice(0, 16);
        }
      }
      if (zoomInput) zoomInput.value = meetingSettings.zoomUrl;
      if (idInput) idInput.value = meetingSettings.meetingId;

      const sheetInput = document.getElementById('settingsGoogleSheetId');
      if (sheetInput) {
        sheetInput.value = googleSheetId ? `https://docs.google.com/spreadsheets/d/${googleSheetId}/edit` : '';
      }
      const statusMsg = document.getElementById('sheetSyncStatusMsg');
      if (statusMsg) statusMsg.style.display = 'none';
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
// 8.5. Official Prayer Guide Slide Presentation & Clipboard Copy
// ==========================================
let currentPrayerSlide = 1;

function openPrayerGuideModal() {
  setPrayerSlide(1);
  openModal('prayerGuideModal');
}

function setPrayerSlide(slideNum) {
  currentPrayerSlide = Math.max(1, Math.min(4, slideNum));
  for (let i = 1; i <= 4; i++) {
    const slide = document.getElementById(`prayerSlide${i}`);
    if (slide) {
      if (i === currentPrayerSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    }
  }

  // Update dots
  const indicators = document.getElementById('slideIndicators');
  if (indicators) {
    const dots = indicators.querySelectorAll('.slide-dot');
    dots.forEach((dot, idx) => {
      if (idx + 1 === currentPrayerSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  const prevBtn = document.getElementById('btnPrevSlide');
  const nextBtn = document.getElementById('btnNextSlide');
  if (prevBtn) prevBtn.disabled = (currentPrayerSlide === 1);
  if (nextBtn) nextBtn.disabled = (currentPrayerSlide === 4);
}

function changePrayerSlide(direction) {
  setPrayerSlide(currentPrayerSlide + direction);
}

function copyPrayerGuideToClipboard() {
  const t = translations[currentLang] || translations['ko'];
  const en = translations['en'] || translations['ko'];
  const isEn = currentLang === 'en';

  const prayerText = `🕊️ [${t.prayer_guide_tag || 'Arise Next-Gen Prayer Guide'}]
${t.prayer_guide_heading || 'Let Us Pray Together'}

${t.pillar_1_title || '1. 나를 위한 기도'}${!isEn ? ' (' + (en.pillar_1_title || 'Prayer for Myself') + ')' : ''}
${t.pillar_1_quote || ''}${!isEn ? ' | ' + (en.pillar_1_quote || '') : ''}
• ${t.p1_b1_title || ''}
${!isEn ? '  (' + (en.p1_b1_title || '') + ')\n' : ''}• ${t.p1_b2_title || ''}
${!isEn ? '  (' + (en.p1_b2_title || '') + ')\n' : ''}• ${t.p1_b3_title || ''}
${!isEn ? '  (' + (en.p1_b3_title || '') + ')' : ''}

${t.pillar_2_title || '2. 모든 민족을 위한 기도'}${!isEn ? ' (' + (en.pillar_2_title || 'Prayer for All Nations') + ')' : ''}
• ${t.p2_b1_title || ''}
${!isEn ? '  (' + (en.p2_b1_title || '') + ')\n' : ''}• ${t.p2_b2_title || ''}
${!isEn ? '  (' + (en.p2_b2_title || '') + ')\n' : ''}• ${t.p2_b3_title || ''}
${!isEn ? '  (' + (en.p2_b3_title || '') + ')' : ''}

${t.pillar_3_title || '3. 후대를 위한 기도'}${!isEn ? ' (' + (en.pillar_3_title || 'Prayer for the Next Generation') + ')' : ''}
• ${t.p3_b1_title || ''}
${!isEn ? '  (' + (en.p3_b1_title || '') + ')\n' : ''}• ${t.p3_b2_title || ''}
${!isEn ? '  (' + (en.p3_b2_title || '') + ')\n' : ''}• ${t.p3_b3_title || ''}
${!isEn ? '  (' + (en.p3_b3_title || '') + ')\n' : ''}• ${t.p3_b4_title || ''}
${!isEn ? '  (' + (en.p3_b4_title || '') + ')' : ''}

[${t.together_bar_title || '함께 기도합시다'}${!isEn ? ' / ' + (en.together_bar_title || 'Let Us Pray Together') : ''}]
1) ${t.pill_myself || '나 자신을 위하여'}
2) ${t.pill_nations || '모든 민족을 위하여'}
3) ${t.pill_nextgen || '후대를 위하여'}

— Arise Next-Gen Global Prayer Hub (https://onestopoms-han.github.io/Arise-Next-Gen/)`;

  navigator.clipboard.writeText(prayerText).then(() => {
    showToast(translations[currentLang]?.toast_prayer_guide_copied || "공동 기도문이 복사되었습니다! 📋", "🕊️");
  }).catch(() => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = prayerText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    showToast(translations[currentLang]?.toast_prayer_guide_copied || "공동 기도문이 복사되었습니다! 📋", "🕊️");
  });
}

// Keyboard arrow controls for slide presentation
document.addEventListener('keydown', (e) => {
  const guideModal = document.getElementById('prayerGuideModal');
  if (guideModal && guideModal.classList.contains('active')) {
    if (e.key === 'ArrowLeft') changePrayerSlide(-1);
    if (e.key === 'ArrowRight') changePrayerSlide(1);
  }
});

// ==========================================
// 8.8. Global Routine Sync Loader
// ==========================================
async function loadGlobalRoutine() {
  try {
    const res = await fetch('/api/routine');
    if (res.ok) {
      const remoteData = await res.json();
      if (remoteData && remoteData.step1) {
        routineContent = remoteData;
        localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
        renderRoutineDisplay();
        return;
      }
    }
  } catch (err) {
    // API not reachable, try static routine.json
  }

  try {
    const staticRes = await fetch('/routine.json');
    if (staticRes.ok) {
      const staticData = await staticRes.json();
      if (staticData && staticData.step1) {
        routineContent = staticData;
        localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
        renderRoutineDisplay();
      }
    }
  } catch (err) {
    console.warn("Could not load remote routine.json:", err.message);
  }
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
  renderRoutineDisplay();
  renderWorshipLounge();

  // Load latest official routine from serverless API / routine.json
  loadGlobalRoutine();
});

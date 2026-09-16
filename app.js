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
    hero_subtitle: "복음으로 만난 다민족 제자들과 전도자가 한자리에 모여 하나님의 모든 관심인 모든 족속 복음화와 다음 세대에 이 복음을 전달하기 위해 간절히 기도하는 플랫폼입니다.",
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
    routine_step2_title: "후대 복음 말씀 (10~15분)",
    routine_step2_desc: "성경 본문 중심의 핵심 복음 메시지 나눔 (영어-한국어 자막 슬라이드 제공).",
    routine_step3_title: "3대 집중 중보기도 (5~10분)",
    routine_step3_desc: "① 전 세계 후대 복음화 ② 각 나라 현장 사역 ③ 전도자와 교회. 각자의 모국어로 부르짖습니다!",
    routine_step4_title: "현장 간증 & 마무리 축복 (2~3분)",
    routine_step4_desc: "다민족 제자의 짧은 현장 응답 간증을 듣고, 서로를 향한 축도와 주기도문으로 마칩니다.",
    core_prayer_heading: "📌 이달의 3대 핵심 기도제목 (This Month's Focus)",
    focus_1_title: "열방의 후대들에게 구원의 빛이 비추어지도록",
    focus_1_desc: "세속화와 영적 혼란 속에 있는 각 나라의 청소년, 청년들이 복음 안에서 참된 정체성을 발견하게 하옵소서.",
    focus_2_title: "다민족 제자들의 모국에 후대 사역자가 세워지도록",
    focus_2_desc: "복음을 받은 다민족 제자들이 자기 나라와 가문의 후대들을 양육할 사역자로 굳건히 서게 하옵소서.",
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
    routine_time_step1: "00 ~ 05 min (약 5분)",
    routine_time_step2: "05 ~ 18 min (10~15분)",
    routine_time_step3: "18 ~ 26 min (5~10분)",
    routine_time_step4: "26 ~ 30 min (2~3분)",
    modal_routine_title: "30분 기도모임 순서 & 세부 내용 작성",
    routine_modal_info: "매월 모임의 4단계 순서별 실제 프로그램(찬양곡, 10~15분 말씀 본문/요약, 5~10분 집중 기도제목, 2~3분 마무리 간증/축복)을 입력하여 성도들에게 안내합니다.",
    lbl_routine_step1_song: "지정 찬양 곡명 (Song Title)",
    lbl_routine_step1_link: "유튜브 찬양 영상 링크 (선택)",
    lbl_routine_step1_desc: "찬양 안내 및 묵상 가사",
    lbl_routine_step2_scripture: "본문 성경구절 (Scripture)",
    lbl_routine_step2_title: "설교 / 나눔 제목 (Title)",
    lbl_routine_step2_content: "핵심 말씀 요약 / 3포인트 나눔 (10~15분 내용)",
    lbl_routine_step3_title: "집중 기도 주제 (Focus Topic)",
    lbl_routine_step3_content: "3대 기도제목 상세 내용 (Prayer Topics)",
    lbl_routine_step4_speaker: "간증자 / 축도 안내 (Speaker / Blessing)",
    lbl_routine_step4_content: "마무리 순서 및 축복 기도문",
    btn_save_routine: "루틴 내용 저장하기",
    toast_routine_saved: "30분 기도모임 루틴 내용이 성공적으로 저장되었습니다! 📋"
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
    routine_step1_title: "Welcome & Global Praise (~5m)",
    routine_step1_desc: "Open our hearts with 1 globally known worship song to seek the Holy Spirit's presence together.",
    routine_step2_title: "Gospel Word for Next-Gen (10~15m)",
    routine_step2_desc: "Core Gospel message rooted in scripture (with Korean-English bilingual slides provided).",
    routine_step3_title: "3 Core Intercessory Prayers (5~10m)",
    routine_step3_desc: "① Next-Gen Salvation ② National Mission Fields ③ Gospel Preachers. Cry out in your own native tongue!",
    routine_step4_title: "1-Min Testimony & Blessing (2~3m)",
    routine_step4_desc: "Hear a quick testimony from a multi-ethnic disciple, followed by mutual blessings and benediction.",
    core_prayer_heading: "📌 This Month's 3 Core Prayer Topics",
    focus_1_title: "That the Light of Christ May Shine on the Next-Gen",
    focus_1_desc: "May youth and young adults trapped in secularism and confusion find their true identity in the Gospel.",
    focus_2_title: "Disciples to be Raised in Multi-Ethnic Believers' Homelands",
    focus_2_desc: "May multi-ethnic disciples who embraced Christ stand as faithful leaders to nurture the next generation in their nations.",
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
    routine_time_step1: "00 ~ 05 min (~5 mins)",
    routine_time_step2: "05 ~ 18 min (10~15 mins)",
    routine_time_step3: "18 ~ 26 min (5~10 mins)",
    routine_time_step4: "26 ~ 30 min (2~3 mins)",
    modal_routine_title: "Edit 30-Min Prayer Routine Program",
    routine_modal_info: "Post and update the actual program for each of the 4 steps (Praise, 10-15m Gospel Message, 5-10m Intercession, 2-3m Closing & Blessing) for all global attendees.",
    lbl_routine_step1_song: "Song Title",
    lbl_routine_step1_link: "YouTube Music Link (Optional)",
    lbl_routine_step1_desc: "Praise Guide & Lyrics Meditation",
    lbl_routine_step2_scripture: "Scripture Reference",
    lbl_routine_step2_title: "Sermon / Sharing Title",
    lbl_routine_step2_content: "Gospel Word Summary / 3 Core Points (10~15m)",
    lbl_routine_step3_title: "Intercessory Prayer Theme",
    lbl_routine_step3_content: "3 Core Prayer Topics & Details",
    lbl_routine_step4_speaker: "Testimony Speaker / Blessing Guide",
    lbl_routine_step4_content: "Closing Order & Blessing Prayer",
    btn_save_routine: "Save Routine Program",
    toast_routine_saved: "30-min prayer program successfully saved! 📋"
  },
  th: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "เครือข่ายอธิษฐานเพื่อคนรุ่นหลังทั่วโลก",
    nav_meeting: "ข้อมูลการประชุม",
    nav_routine: "ขั้นตอน 30 นาที",
    nav_prayer_wall: "สวนแห่งการอธิษฐาน",
    nav_testimonies: "คำพยานพระคุณ",
    nav_worship: "ห้องนมัสการ",
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
    focus_3_desc: "ขอประทานกำลังฝ่ายวิญญาณ ปัญญา กำลังกาย ทรัพย์สิน และผู้ร่วมงานแก่ผู้ประกาศที่ทุ่มเทอย่างไม่เหน็ดเหนื่อย",
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
    country_filter_all: "🌐 ทุกประชาชาติ"
  },
  ar: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "شبكة الصلاة العالمية للجيل القادم",
    nav_meeting: "معلومات الاجتماع",
    nav_routine: "برنامج 30 دقيقة",
    nav_prayer_wall: "حائط الصلاة",
    nav_testimonies: "شهادات النعمة",
    nav_worship: "صالة التسبيح",
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
    focus_3_desc: "امنح القوى الروحية الخمس لأولئك الذين يكرزون بالإنجيل دون كلل في الميادين.",
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
    country_filter_all: "🌐 كل الأمم"
  },
  fr: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Réseau Mondial de Prière pour la Prochaine Génération",
    nav_meeting: "Infos Réunion",
    nav_routine: "Routine 30 Min",
    nav_prayer_wall: "Mur de Prière",
    nav_testimonies: "Témoignages",
    nav_worship: "Salon de Louange",
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
    focus_3_desc: "Accorde les cinq forces spirituelles à ceux qui prêchent sans relâche sur les champs de mission.",
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
    country_filter_all: "🌐 Toutes les nations"
  },
  zh: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "全球后代祷告网络",
    nav_meeting: "聚会指南",
    nav_routine: "30分钟流程",
    nav_prayer_wall: "祷告花园",
    nav_testimonies: "恩典见证",
    nav_worship: "赞美休息室",
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
    focus_3_desc: "赐予不知疲倦在现场传扬福音的传道者五力（灵力、智力、体力、财力、人力）。",
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
    country_filter_all: "🌐 全球列国"
  },
  id: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "Jaringan Doa Global Generasi Penerus",
    nav_meeting: "Info Doa",
    nav_routine: "Rutin 30 Mnt",
    nav_prayer_wall: "Taman Doa",
    nav_testimonies: "Kesaksian",
    nav_worship: "Ruang Pujian",
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
    focus_3_desc: "Berikan lima kekuatan rohani kepada mereka yang memberitakan Injil tanpa kenal lelah di ladang pelayanan.",
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
    country_filter_all: "🌐 Semua Bangsa"
  },
  my: {
    brand_title: "Arise Next-Gen",
    brand_subtitle: "မျိုးဆက်သစ် ကမ္ဘာလုံးဆိုင်ရာ ဆုတောင်းကွန်ရက်",
    nav_meeting: "ဆုတောင်းအစည်းအဝေး",
    nav_routine: "၃၀ မိနစ် အစီအစဉ်",
    nav_prayer_wall: "ဆုတောင်းဥယျာဉ်",
    nav_testimonies: "သက်သေခံချက်များ",
    nav_worship: "ချီးမွမ်းခြင်း",
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
    focus_3_desc: "မမောမပန်း ဧဝံဂေလိတရားဟောပြောနေကြသော သာသနာပြုများအား ဝိညာဉ်ရေးခွန်အားငါးပါး ပေးသနားတော်မူပါ။",
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
    country_filter_all: "🌐 နိုင်ငံအားလုံး"
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
    content: "우리 후대들이 세상 미디어와 스마트폰의 흑암 문화에서 벗어나, 하나님의 말씀 속에서 참된 평안과 다음세대의 정체성을 굳건히 발견하게 하옵소서.",
    content_en: "May our next generation break free from dark media and smartphone addictions, and firmly discover their true identity and peace in God's Word.",
    amenCount: 65,
    date: "2026-09-08"
  },
  {
    id: 10,
    author: "Sarah & David (브리즈번/골드코스트)",
    country: "🇦🇺 Australia",
    category: "next-gen",
    content: "호주 퀸즈랜드와 다민족 캠퍼스의 다음세대들이 세속 문화 속에서 복음의 유일성을 발견하고, 237 치유와 서밋의 주역으로 굳건히 서게 하옵소서.",
    content_en: "May the next generation on multi-ethnic campuses across Queensland, Australia firmly discover the uniqueness of the Gospel and stand as healed leaders for the nations.",
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
  },
  {
    id: 4,
    author: "Sister Grace (그레이스)",
    country: "🇵🇭 Philippines",
    title: "찬양을 통한 청소년 치유의 응답",
    title_en: "Youth Healed Through Gospel Worship",
    content: "우울증으로 방황하던 현지 청소년이 우리 모임에서 배운 'Way Maker' 찬양을 함께 부르며 눈물로 회복되었습니다. 이제는 유초등부 찬양팀을 돕고 있습니다.",
    content_en: "A struggling teenager found peace and joy in Christ while singing 'Way Maker' together. He is now serving on the children's worship team!",
    date: "2026-09-02"
  }
];

// Routine 4-Step Actual Program Content Seed Data
const defaultRoutineContent = {
  step1: {
    songTitle: "Way Maker (길을 만드시는 분)",
    link: "https://www.youtube.com/watch?v=2Zars01D38E",
    content: "전 세계 성도들이 함께 고백하는 대표 찬양으로 마음의 문을 열고 주님의 임재를 구합니다.\n• 추천 찬양: Way Maker, The Blessing\n• 찬양 후 각국 지체들과의 따뜻한 환영과 다국어 인사 (샬롬, Grace to you)"
  },
  step2: {
    scripture: "디모데후서 2:1-2 (2 Tim 2:1-2)",
    title: "충성된 사람들에게 부탁하라",
    content: "1. 내 아들아 그러므로 너는 그리스도 예수 안에 있는 은혜 가운데서 강하라\n2. 또 네가 많은 증인 앞에서 내게 들은 바를 충성된 사람들에게 부탁하라\n3. 그들이 또 다른 사람들을 가르칠 수 있으리라\n\n📌 10~15분 복음 메시지 요약:\n• 다음 세대를 살릴 복음의 제자 망대 세우기\n• 한국어 & 영어 2개 국어 핵심 자막 슬라이드 제공"
  },
  step3: {
    title: "후대와 열방을 향한 3대 집중 부르짖음",
    content: "① 전 세계 다음세대·후대 복음화 (세속화와 영적 혼란 치유)\n② 8개국 각 나라 현장 사역과 현지 지도자 세우기\n③ 전 세계에서 복음 전하는 전도자들의 영력·지력·체력·경제력·인력 충만\n\n💡 5~10분간 각자의 모국어로 성령 안에서 하나 되어 뜨겁게 부르짖습니다!"
  },
  step4: {
    speaker: "다민족 제자 1분 응답 간증 & 전도자 축도",
    content: "• 다민족 제자의 1분 현장 응답 및 은혜 간증 나눔\n• 전도자의 축도 및 열방 지체들을 향한 제사장적 축복 기도\n• 주기도문으로 은혜의 30분 다락방 폐회"
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
const DATA_VERSION = 'v8_fix_tdz_countdown_clock';
if (localStorage.getItem('prayer_hub_data_ver') !== DATA_VERSION) {
  localStorage.setItem('prayer_hub_prayers', JSON.stringify(defaultPrayers));
  localStorage.setItem('prayer_hub_testimonies', JSON.stringify(defaultTestimonies));
  localStorage.setItem('prayer_hub_routine_content', JSON.stringify(defaultRoutineContent));
  localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(defaultMeetingSettings));
  localStorage.setItem('prayer_hub_data_ver', DATA_VERSION);
}

// App State
let prayers = JSON.parse(localStorage.getItem('prayer_hub_prayers')) || defaultPrayers;
let testimonies = JSON.parse(localStorage.getItem('prayer_hub_testimonies')) || defaultTestimonies;
let routineContent = JSON.parse(localStorage.getItem('prayer_hub_routine_content')) || defaultRoutineContent;
let meetingSettings = JSON.parse(localStorage.getItem('prayer_hub_meeting_settings')) || defaultMeetingSettings;
let currentFilter = 'all';

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

  // Re-render prayers, testimonies, and routine display
  renderPrayers();
  renderTestimonies();
  renderRoutineDisplay();
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

  const text = `🕊️ [아라이즈 넥스트젠 | Arise Next-Gen] 
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
    // Show English version if current language is not Korean and translation exists
    const content = (currentLang !== 'ko' && item.content_en) ? item.content_en : item.content;
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
    const title = (currentLang !== 'ko' && item.title_en) ? item.title_en : item.title;
    const content = (currentLang !== 'ko' && item.content_en) ? item.content_en : item.content;

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

  // 호주 퀸즈랜드(AEST / UTC+10) 기준 오프셋을 붙여 저장
  if (dateVal) {
    meetingSettings.meetingDate = (dateVal.includes('+') || dateVal.includes('Z'))
      ? dateVal
      : `${dateVal}:00+10:00`;
  }
  if (zoomVal) meetingSettings.zoomUrl = zoomVal;
  if (idVal) meetingSettings.meetingId = idVal;

  localStorage.setItem('prayer_hub_meeting_settings', JSON.stringify(meetingSettings));

  updateMeetingDisplay();
  startCountdown();
  closeModal('settingsModal');
  showToast(translations[currentLang].toast_settings_saved, "⚙️");
}

// ==========================================
// 7.5. Routine 4-Step Interactive Display & Management
// ==========================================
function renderRoutineDisplay() {
  if (!routineContent) return;

  // Step 1: Praise (~5 min)
  const routineSub1 = document.getElementById('routineSub1');
  const detailSongTitle = document.getElementById('detailSongTitle');
  const detailSongContent = document.getElementById('detailSongContent');
  const detailSongLinkArea = document.getElementById('detailSongLinkArea');

  if (routineSub1) routineSub1.textContent = routineContent.step1?.songTitle || 'Way Maker';
  if (detailSongTitle) detailSongTitle.textContent = routineContent.step1?.songTitle || 'Way Maker';
  if (detailSongContent) {
    detailSongContent.innerHTML = escapeHtml(routineContent.step1?.content || '').replace(/\n/g, '<br>');
  }
  if (detailSongLinkArea) {
    if (routineContent.step1?.link) {
      detailSongLinkArea.innerHTML = `
        <a href="${escapeHtml(routineContent.step1.link)}" target="_blank" rel="noopener noreferrer" class="detail-yt-btn">
          ▶ 유튜브 찬양 영상 함께 듣기 (Watch on YouTube)
        </a>
      `;
    } else {
      detailSongLinkArea.innerHTML = '';
    }
  }

  // Step 2: Gospel Message (10~15 min)
  const routineSub2 = document.getElementById('routineSub2');
  const detailMessageTitle = document.getElementById('detailMessageTitle');
  const detailMessageContent = document.getElementById('detailMessageContent');

  if (routineSub2) {
    routineSub2.textContent = routineContent.step2?.scripture || '디모데후서 2:1-2';
  }
  if (detailMessageTitle) {
    const scripturePart = routineContent.step2?.scripture ? `[${escapeHtml(routineContent.step2.scripture)}] ` : '';
    const titlePart = escapeHtml(routineContent.step2?.title || '');
    detailMessageTitle.textContent = `${scripturePart}${titlePart}`;
  }
  if (detailMessageContent) {
    detailMessageContent.innerHTML = escapeHtml(routineContent.step2?.content || '').replace(/\n/g, '<br>');
  }

  // Step 3: Intercessory Prayer (5~10 min)
  const routineSub3 = document.getElementById('routineSub3');
  const detailPrayerTitle = document.getElementById('detailPrayerTitle');
  const detailPrayerContent = document.getElementById('detailPrayerContent');

  if (routineSub3) {
    routineSub3.textContent = routineContent.step3?.title || '후대와 열방을 향한 집중 부르짖음';
  }
  if (detailPrayerTitle) {
    detailPrayerTitle.textContent = routineContent.step3?.title || '3대 집중 기도 가이드';
  }
  if (detailPrayerContent) {
    detailPrayerContent.innerHTML = escapeHtml(routineContent.step3?.content || '').replace(/\n/g, '<br>');
  }

  // Step 4: Closing & Blessing (2~3 min)
  const routineSub4 = document.getElementById('routineSub4');
  const detailClosingTitle = document.getElementById('detailClosingTitle');
  const detailClosingContent = document.getElementById('detailClosingContent');

  if (routineSub4) {
    routineSub4.textContent = routineContent.step4?.speaker || '다민족 제자 간증 & 축도';
  }
  if (detailClosingTitle) {
    detailClosingTitle.textContent = routineContent.step4?.speaker || '1분 간증 및 축복 기도';
  }
  if (detailClosingContent) {
    detailClosingContent.innerHTML = escapeHtml(routineContent.step4?.content || '').replace(/\n/g, '<br>');
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

function handleRoutineSubmit(e) {
  e.preventDefault();

  routineContent = {
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

  localStorage.setItem('prayer_hub_routine_content', JSON.stringify(routineContent));
  renderRoutineDisplay();
  closeModal('routineModal');
  showToast(translations[currentLang]?.toast_routine_saved || "30분 기도모임 루틴 내용이 저장되었습니다! ✨", "📋");
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
  renderRoutineDisplay();
});

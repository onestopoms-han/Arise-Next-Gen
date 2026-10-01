/**
 * Arise Next-Gen Worship Subtitle Studio & Player (찬양 자막 스튜디오 & 플레이어)
 * 한/영 찬양 자막 영상 재생, 줌(Zoom) 화면공유 최적화, 가사 싱크 및 커스텀 찬양 제작 도구
 */

// 1. Preset Worship Songs Data (Top 10 Authentic Studio Praise Library)
const PRESET_PRAISE_SONGS = [
  {
    "id": "jesus-we-enthrone-you",
    "titleKo": "예수 우리 왕이여 (Jesus, We Enthrone You)",
    "titleEn": "Jesus, We Enthrone You",
    "artist": "임성재 목사 (가스펠 은혜곡) / Paul Kyle • 감미롭고 은혜로운 경배 찬양 (보컬)",
    "category": "confession",
    "videoId": "2Z39oJh4EI8",
    "duration": 176,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 9.5, "kr": "🎵 예수 우리 왕이여 (Jesus, We Enthrone You) - 전주", "en": "Jesus, We Enthrone You - Intro" },
      { "start": 9.5, "end": 15.0, "kr": "예수 우리 왕이여", "en": "Jesus, we enthrone You" },
      { "start": 15.0, "end": 21.0, "kr": "이곳에 오셔서", "en": "We proclaim You are King" },
      { "start": 21.0, "end": 27.5, "kr": "보좌로 주여 임하사", "en": "Standing here, in the midst of all" },
      { "start": 27.5, "end": 35.0, "kr": "찬양을 받아 주소서", "en": "We raise You with our praise" },
      { "start": 35.0, "end": 42.0, "kr": "주님을 찬양하오니", "en": "And as we worship fill the throne" },
      { "start": 42.0, "end": 49.0, "kr": "주님을 경배하오니", "en": "And as we worship fill the throne" },
      { "start": 49.0, "end": 55.5, "kr": "왕이신 예수여 오셔서", "en": "And as we worship fill the throne" },
      { "start": 55.5, "end": 67.5, "kr": "좌정하사 다스리소서", "en": "Come Lord Jesus and take Your place" },
      { "start": 67.5, "end": 74.0, "kr": "예수 우리 왕이여", "en": "Jesus, we enthrone You" },
      { "start": 74.0, "end": 80.5, "kr": "이곳에 오셔서", "en": "We proclaim You are King" },
      { "start": 80.5, "end": 88.0, "kr": "보좌로 주여 임하사", "en": "Standing here, in the midst of all" },
      { "start": 88.0, "end": 95.0, "kr": "찬양을 받아 주소서", "en": "We raise You with our praise" },
      { "start": 95.0, "end": 102.0, "kr": "주님을 찬양하오니", "en": "And as we worship fill the throne" },
      { "start": 102.0, "end": 112.5, "kr": "주님을 경배하오니", "en": "And as we worship fill the throne" },
      { "start": 112.5, "end": 119.0, "kr": "왕이신 예수여 오셔서", "en": "And as we worship fill the throne" },
      { "start": 119.0, "end": 129.5, "kr": "좌정하사 다스리소서", "en": "Come Lord Jesus and take Your place" },
      { "start": 129.5, "end": 137.5, "kr": "[후렴] 주님을 찬양하오니", "en": "And as we worship fill the throne" },
      { "start": 137.5, "end": 144.5, "kr": "주님을 경배하오니", "en": "And as we worship fill the throne" },
      { "start": 144.5, "end": 152.0, "kr": "왕이신 예수여 오셔서", "en": "And as we worship fill the throne" },
      { "start": 152.0, "end": 159.5, "kr": "좌정하사 다스리소서", "en": "Come Lord Jesus and take Your place" },
      { "start": 159.5, "end": 170.0, "kr": "좌정하사 다스리소서", "en": "Come Lord Jesus and take Your place" },
      { "start": 170.0, "end": 176.0, "kr": "🕊️ 왕이신 예수여 오셔서 영원히 다스리소서 · 아멘", "en": "Come Lord Jesus, take Your place and rule over us forever · Amen" }
    ]
  },
  {
    "id": "lord-i-lift-your-name-on-high",
    "titleKo": "주의 이름 높이며 (Lord, I Lift Your Name on High)",
    "titleEn": "Lord, I Lift Your Name on High",
    "artist": "비컴퍼니 (옹기장이) / Rick Founds • 정규 앨범 원곡",
    "category": "global",
    "videoId": "9pNfyzi7O0I",
    "duration": 223,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 14.0, "kr": "🎵 주의 이름 높이며 - 옹기장이 찬양선교단 전주", "en": "Lord I Lift Your Name on High - Ongijangi (Intro)" },
      { "start": 14.0, "end": 32.0, "kr": "주의 이름 높이며 주를 찬양하나이다", "en": "Lord, I lift Your name on high; Lord, I love to sing Your praises" },
      { "start": 32.0, "end": 43.0, "kr": "나를 구하러오신 주를기뻐하나이다", "en": "I'm so glad You're in my life; I'm so glad You came to save us" },
      { "start": 43.0, "end": 54.0, "kr": "하늘 영광 버리고 이 땅 위에 십자가를 지시고 죄 사했네", "en": "You came from heaven to earth to show the way, From the earth to the cross my debt to pay" },
      { "start": 54.0, "end": 64.0, "kr": "무덤에서 일어나 하늘로 올리셨네, 주의 이름 높이리!", "en": "From the cross to the grave, from the grave to the sky; Lord, I lift Your name on high!" },
      { "start": 64.0, "end": 83.0, "kr": "간주~ 주의 이름 높이며 주를 찬양하나이다", "en": "Lord, I lift Your name on high; Lord, I love to sing Your praises" },
      { "start": 83.0, "end": 93.0, "kr": "나를 구하러오신 주를기뻐하나이다", "en": "I'm so glad You're in my life; I'm so glad You came to save us" },
      { "start": 93.0, "end": 105.0, "kr": "하늘 영광 버리고 이 땅 위에 십자가를 지시고 죄 사했네", "en": "You came from heaven to earth to show the way, From the earth to the cross my debt to pay" },
      { "start": 105.0, "end": 115.0, "kr": "무덤에서 일어나 하늘로 올리셨네, 주의 이름 높이리!", "en": "From the cross to the grave, from the grave to the sky; Lord, I lift Your name on high!" },
      { "start": 115.0, "end": 154.0, "kr": "간주~ 주의 이름 높이며 주를 찬양하나이다", "en": "You came from heaven to earth to show the way, From the earth to the cross my debt to pay" },
      { "start": 154.0, "end": 165.0, "kr": "나를 구하러오신 주를기뻐하나이다", "en": "From the cross to the grave, from the grave to the sky; Lord, I lift Your name on high!" },
      { "start": 165.0, "end": 176.0, "kr": "하늘 영광 버리고 이 땅 위에 십자가를 지시고 죄 사했네", "en": "Lord, I lift Your name on high! Lord, I lift Your name on high!" },
      { "start": 176.0, "end": 185.0, "kr": "무덤에서 일어나 하늘로 올리셨네, 주의 이름 높이리!", "en": "Exalting the Risen Savior and King Above All · Amen" },
      { "start": 185.0, "end": 195.0, "kr": "하늘 영광 버리고 이 땅 위에 십자가를 지시고 죄 사했네", "en": "You came from heaven to earth to show the way, From the earth to the cross my debt to pay" },
      { "start": 195.0, "end": 223.0, "kr": "무덤에서 일어나 하늘로 올리셨네, 주의 이름 높이리!", "en": "From the cross to the grave, from the grave to the sky; Lord, I lift Your name on high!" }
    ]
  },
  {
    "id": "still-hillsong",
    "titleKo": "주 품에 품으소서 (Still)",
    "titleEn": "Still",
    "artist": "비컴퍼니 (김대환) / Reuben Morgan • 정규 앨범 원곡 (ENG SUB)",
    "category": "global",
    "videoId": "-VHCGZg_HqQ",
    "duration": 356,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 30.0, "kr": "🎵 주 품에 품으소서 (Still) - 비컴퍼니 김대환 전주", "en": "Still (Hide Me Now) - Kim Dae Hwan (Intro)" },
      { "start": 30.0, "end": 55.0, "kr": "[1절] 주 품에 품으소서 능력의 팔로 덮으소서", "en": "Hide me now under Your wings; Cover me within Your mighty hand" },
      { "start": 55.0, "end": 68.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 68.0, "end": 84.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God" },
      { "start": 84.0, "end": 113.0, "kr": "주님 안에 나 거하리 주 능력 나 잠잠히 믿네", "en": "Find rest my soul in Christ alone; Know His power in quietness and trust" },
      { "start": 113.0, "end": 126.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 126.0, "end": 140.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God" },
      { "start": 140.0, "end": 154.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 154.0, "end": 170.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God" },
      { "start": 170.0, "end": 220.0, "kr": "🎵 간주 (Interlude)", "en": "Interlude - Peace and Rest in God" },
      { "start": 220.0, "end": 233.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 233.0, "end": 246.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God" },
      { "start": 246.0, "end": 260.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 260.0, "end": 277.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God" },
      { "start": 277.0, "end": 307.0, "kr": "주 품에 품으소서 능력의 팔로 덮으소서", "en": "Hide me now under Your wings; Cover me within Your mighty hand" },
      { "start": 307.0, "end": 320.0, "kr": "거친 파도 날 향해 와도 주와 함께 날아오르리", "en": "When the oceans rise and thunders roar, I will soar with You above the storm" },
      { "start": 320.0, "end": 356.0, "kr": "폭풍 가운데 나의 영혼 잠잠하게 주를 보리라", "en": "Father You are King over the flood; I will be still, know You are God · Amen" }
    ]
  },
  {
    "id": "as-the-deer",
    "titleKo": "목마른 사슴 (As the Deer)",
    "titleEn": "As the Deer",
    "artist": "비컴퍼니 (호산나싱어즈) / Martin Nystrom • 정규 앨범 원곡",
    "category": "global",
    "videoId": "JYv2A1lIJS0",
    "duration": 244,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 목마른 사슴 (As the Deer) - 호산나싱어즈 전주", "en": "As the Deer - Hosanna Singers (Intro)" },
      { "start": 15.0, "end": 32.0, "kr": "[1절] 목마른 사슴 시냇물을 찾아 헤매이듯이", "en": "As the deer panteth for the water, so my soul longeth after Thee" },
      { "start": 32.0, "end": 50.0, "kr": "내 영혼 주를 찾기에 갈급하나이다", "en": "You alone are my heart's desire, and I long to worship Thee" },
      { "start": 50.0, "end": 68.0, "kr": "[후렴] 주님만이 나의 힘 나의 방패 나의 참 소망", "en": "You alone are my strength, my shield; To You alone may my spirit yield" },
      { "start": 68.0, "end": 88.0, "kr": "나의 몸 정성 다 바쳐서 주님 경배합니다", "en": "You alone are my heart's desire, and I long to worship Thee" },
      { "start": 88.0, "end": 105.0, "kr": "[2절] 금보다 귀한 나의 주님 내게 만족 주시네", "en": "You're my friend and You are my brother, even though You are a King" },
      { "start": 105.0, "end": 124.0, "kr": "당신만이 나의 기쁨 참된 평화입니다", "en": "I love You more than any other, so much more than anything" },
      { "start": 124.0, "end": 142.0, "kr": "[후렴 반복] 주님만이 나의 힘 나의 방패 나의 참 소망", "en": "You alone are my strength, my shield; To You alone may my spirit yield" },
      { "start": 142.0, "end": 164.0, "kr": "나의 몸 정성 다 바쳐서 주님 경배합니다", "en": "You alone are my heart's desire, and I long to worship Thee" },
      { "start": 164.0, "end": 184.0, "kr": "[후렴 고조] 주님만이 나의 힘 나의 방패 나의 참 소망", "en": "You alone are my strength, my shield; To You alone may my spirit yield" },
      { "start": 184.0, "end": 210.0, "kr": "나의 모든 정성 다해 오직 주를 경배합니다!", "en": "You alone are my heart's desire, and I long to worship Thee!" },
      { "start": 210.0, "end": 244.0, "kr": "🕊️ 시냇물을 찾는 사슴처럼 주님만을 갈망하는 예배자가 되길 소망합니다 · 아멘", "en": "Seeking and Longing After God Alone Forever · Amen" }
    ]
  },
  {
    "id": "amazing-grace",
    "titleKo": "나 같은 죄인 살리신 (새찬송가 305장)",
    "titleEn": "Amazing Grace, How Sweet the Sound (Hymn 305)",
    "artist": "비컴퍼니 (새찬송가 305장) • 정통 4절 보컬 찬양 완곡",
    "category": "hymn",
    "videoId": "SfUoRQy-LH4",
    "duration": 204,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 나 같은 죄인 살리신 (새찬송가 305장) - 비컴퍼니 전주", "en": "Amazing Grace (Hymn 305) - Intro" },
      { "start": 15.0, "end": 36.5, "kr": "[1절] 나 같은 죄인 살리신 주 은혜 놀라워", "en": "Amazing grace! how sweet the sound That saved a wretch like me!" },
      { "start": 36.5, "end": 58.0, "kr": "잃었던 생명 찾았고 광명을 얻었네", "en": "I once was lost, but now am found, Was blind, but now I see." },
      { "start": 58.0, "end": 79.5, "kr": "[2절] 큰 죄악에서 건지신 주 은혜 고마워", "en": "'Twas grace that taught my heart to fear, And grace my fears relieved;" },
      { "start": 79.5, "end": 101.0, "kr": "나 처음 믿은 그 시간 귀하고 귀하다", "en": "How precious did that grace appear The hour I first believed!" },
      { "start": 101.0, "end": 122.5, "kr": "[3절] 이제껏 내가 산 것도 주님의 은혜라", "en": "Through many dangers, toils and snares, I have already come;" },
      { "start": 122.5, "end": 144.0, "kr": "또 나를 장차 본향에 인도해 주시리", "en": "'Tis grace hath brought me safe thus far, And grace will lead me home." },
      { "start": 144.0, "end": 166.5, "kr": "[4절] 거기서 우리 영원히 주님의 은혜로", "en": "When we've been there ten thousand years, Bright shining as the sun," },
      { "start": 166.5, "end": 190.0, "kr": "해처럼 밝게 살면서 주 찬양 하리라", "en": "We've no less days to sing God's praise Than when we'd first begun." },
      { "start": 190.0, "end": 204.0, "kr": "🕊️ 나 같은 죄인 살리신 주님의 크신 은혜를 영원히 찬양합니다 · 아멘", "en": "Praising God's Boundless Grace Forever and Ever · Amen" }
    ]
  },
  {
    "id": "only-by-grace",
    "titleKo": "하나님의 은혜 (나를 지으신 이가 하나님)",
    "titleEn": "Grace of God (Only By Grace)",
    "artist": "박종호 vol.9 / 조은아 / 신상우 • 오리지널 정규 앨범 원곡",
    "category": "confession",
    "videoUrl": "assets/only_by_grace.mp4",
    "audioUrl": "assets/only_by_grace.mp3",
    "srtUrl": "assets/only_by_grace.srt",
    "lrcUrl": "assets/only_by_grace.lrc",
    "videoId": "K0Tf0U4fe6E",
    "duration": 312,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 17.5, "kr": "🎵 하나님의 은혜 (나를 지으신 이가 하나님) - 전주", "en": "Grace of God - Park Jong-ho (Intro)" },
      { "start": 17.5, "end": 30.0, "kr": "[1절] 나를 지으신 이가 하나님, 나를 부르신 이가 하나님", "en": "The One who made me is God, The One who called me is God" },
      { "start": 30.0, "end": 42.0, "kr": "나를 보내신 이도 하나님, 나의 달려갈 길 다 가도록", "en": "The One who sent me is also God, That I may run my entire race" },
      { "start": 42.0, "end": 54.5, "kr": "나의 마지막 호흡 다하도록, 나로 그 십자가 품게 하시니", "en": "Until my very last breath, Letting me embrace that cross" },
      { "start": 54.5, "end": 67.0, "kr": "나의 달려갈 길 다 가도록, 나의 마지막 호흡 다하도록", "en": "That I may run my entire race, until my very last breath" },
      { "start": 67.0, "end": 80.5, "kr": "[후렴] 한량없는 은혜, 갚을 길 없는 은혜", "en": "Boundless grace, grace that cannot be repaid" },
      { "start": 80.5, "end": 94.0, "kr": "내 삶을 에워싸는 하나님의 은혜", "en": "God's grace that surrounds my life" },
      { "start": 94.0, "end": 107.0, "kr": "나 주저함 없이 그 땅을 밟음도", "en": "That I walk upon that land without hesitation" },
      { "start": 107.0, "end": 124.0, "kr": "나를 붙드시는 하나님의 은혜", "en": "Is the grace of God that holds me fast" },
      { "start": 124.0, "end": 143.0, "kr": "(간주)", "en": "(Interlude)" },
      { "start": 143.0, "end": 155.5, "kr": "[2절] 나를 지으신 이가 하나님, 나를 부르신 이가 하나님", "en": "The One who made me is God, The One who called me is God" },
      { "start": 155.5, "end": 168.0, "kr": "나를 보내신 이도 하나님, 나의 달려갈 길 다 가도록", "en": "The One who sent me is also God, That I may run my entire race" },
      { "start": 168.0, "end": 180.5, "kr": "나의 마지막 호흡 다하도록, 나로 그 십자가 품게 하시니", "en": "Until my very last breath, Letting me embrace that cross" },
      { "start": 180.5, "end": 193.0, "kr": "나의 달려갈 길 다 가도록, 나의 마지막 호흡 다하도록", "en": "That I may run my entire race, until my very last breath" },
      { "start": 193.0, "end": 207.0, "kr": "[후렴] 한량없는 은혜, 갚을 길 없는 은혜", "en": "Boundless grace, grace that cannot be repaid" },
      { "start": 207.0, "end": 220.5, "kr": "내 삶을 에워싸는 하나님의 은혜", "en": "God's grace that surrounds my life" },
      { "start": 220.5, "end": 235.0, "kr": "나 주저함 없이 그 땅을 밟음도", "en": "That I walk upon that land without hesitation" },
      { "start": 235.0, "end": 258.0, "kr": "나를 붙드시는 하나님의 은혜!", "en": "Is the grace of God that holds me fast!" },
      { "start": 258.0, "end": 290.0, "kr": "[후렴 절정] 내 삶을 에워싸는 크신 은혜, 오직 하나님의 은혜라", "en": "Surrounded by God's abundant grace, only by God's grace" },
      { "start": 290.0, "end": 312.1, "kr": "🕊️ 나의 모든 삶을 붙드시는 하나님의 은혜에 감사드립니다 · 아멘", "en": "Praising God's Unfailing Grace in My Entire Life · Amen" }
    ]
  },
  {
    "id": "hope-desire-pray",
    "titleKo": "원하고 바라고 기도합니다",
    "titleEn": "I Hope, Desire, and Pray",
    "artist": "민호기 목사 (찬미워십) • 오리지널 정규 앨범 공식 원곡 M/V",
    "category": "confession",
    "videoId": "eoDsJr7LF-0",
    "duration": 445,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 18.0, "kr": "🎵 원하고 바라고 기도합니다 - 찬양 전주", "en": "I Hope, Desire, and Pray - Praise Intro" },
      { "start": 18.0, "end": 32.5, "kr": "[1절] 이 세상을 살아가는 동안에 나의 힘을 의지할 수 없으니", "en": "While living in this world, I cannot lean upon my own strength" },
      { "start": 32.5, "end": 48.0, "kr": "기도하고 낙심하지 말 것은 주께서 참 소망이 되심이라", "en": "I will pray and not lose heart, for the Lord is my living hope" },
      { "start": 48.0, "end": 62.0, "kr": "하나님의 꿈이 나의 비전이 되고", "en": "May the dream of God become my vision" },
      { "start": 62.0, "end": 78.0, "kr": "예수님의 성품이 나의 인격이 되고", "en": "May the character of Jesus become my personality" },
      { "start": 78.0, "end": 92.0, "kr": "성령님의 권능이 나의 능력이 되길", "en": "May the power of the Holy Spirit become my strength" },
      { "start": 92.0, "end": 105.0, "kr": "원하고 바라고 기도합니다", "en": "This I hope, I desire, and I pray" },
      { "start": 105.0, "end": 119.0, "kr": "이 세상을 살아가는 동안에 나의 힘을 의지할 수 없으니", "en": "While living in this world, I cannot lean upon my own strength" },
      { "start": 119.0, "end": 136.0, "kr": "기도하고 낙심하지 말 것은 주께서 참 소망이 되심이라", "en": "I will pray and not lose heart, for the Lord is my living hope" },
      { "start": 136.0, "end": 160.0, "kr": "주의 길을 걸어가는 동안에 세상의 것 의지할 수 없으니", "en": "While walking on the way of the Lord, I cannot trust worldly things" },
      { "start": 160.0, "end": 175.0, "kr": "감사하고 낙심하지 말 것은 주께서 참 기쁨이 되심이라", "en": "I will give thanks and not lose heart, for the Lord is my true joy" },
      { "start": 175.0, "end": 190.0, "kr": "하나님의 꿈이 나의 비전이 되고!", "en": "May the dream of God become my vision!" },
      { "start": 190.0, "end": 204.0, "kr": "예수님의 성품이 나의 인격이 되고!", "en": "May the character of Jesus become my personality!" },
      { "start": 204.0, "end": 218.0, "kr": "성령님의 권능이 나의 능력이 되길!", "en": "May the power of the Holy Spirit become my strength!" },
      { "start": 218.0, "end": 232.0, "kr": "원하고 바라고 기도합니다!", "en": "This I hope, I desire, and I pray!" },
      { "start": 232.0, "end": 255.0, "kr": "간주중~하나님의 꿈이 나의 비전이 되고!", "en": "(Interlude) May the dream of God become my vision!" },
      { "start": 255.0, "end": 260.0, "kr": "예수님의 성품이 나의 인격이 되고!", "en": "May the character of Jesus become my personality!" },
      { "start": 260.0, "end": 270.0, "kr": "성령님의 권능이 나의 능력이 되길!", "en": "May the power of the Holy Spirit become my strength!" },
      { "start": 270.0, "end": 285.0, "kr": "원하고 바라고 기도합니다!", "en": "This I hope, I desire, and I pray!" },
      { "start": 285.0, "end": 300.0, "kr": "하나님의 꿈이 나의 비전이 되고!", "en": "May the dream of God become my vision!" },
      { "start": 300.0, "end": 315.0, "kr": "예수님의 성품이 나의 인격이 되고!", "en": "May the character of Jesus become my personality!" },
      { "start": 315.0, "end": 330.0, "kr": "성령님의 권능이 나의 능력이 되길!", "en": "May the power of the Holy Spirit become my strength!" },
      { "start": 330.0, "end": 345.0, "kr": "원하고 바라고 기도합니다!", "en": "This I hope, I desire, and I pray!" },
      { "start": 345.0, "end": 360.0, "kr": "하나님의 꿈이 나의 비전이 되고!", "en": "May the dream of God become my vision!" },
      { "start": 360.0, "end": 375.0, "kr": "예수님의 성품이 나의 인격이 되고!", "en": "May the character of Jesus become my personality!" },
      { "start": 375.0, "end": 390.0, "kr": "성령님의 권능이 나의 능력이 되길!", "en": "May the power of the Holy Spirit become my strength!" },
      { "start": 390.0, "end": 405.0, "kr": "원하고 바라고 기도합니다!", "en": "This I earnestly hope, desire, and pray!" },
      { "start": 405.0, "end": 420.0, "kr": "원하고 바라고 기도합니다!", "en": "This I earnestly hope, desire, and pray!" },
      { "start": 420.0, "end": 445.0, "kr": "원하고 바라고 기도합니다! · 아멘", "en": "This I earnestly hope, desire, and pray · Amen!" }
    ]
  },
  {
    "id": "wilderness-hiswill",
    "titleKo": "광야를 지나며 (왜 나를 깊은 어둠속에)",
    "titleEn": "Passing Through the Wilderness",
    "artist": "히즈윌 (HisWill) / 장진숙 (feat. 김동욱) • 정규 앨범 원곡",
    "category": "confession",
    "videoId": "qaIqilD7QTI",
    "duration": 330,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 20.0, "kr": "🎵 광야를 지나며 - 히즈윌 전주", "en": "Passing Through the Wilderness - HisWill (Intro)" },
      { "start": 20.0, "end": 37.0, "kr": "[1절] 왜 나를 깊은 어둠속에 홀로 두시는지, 어두운 밤은 왜 그리 길었는지", "en": "Why You left me alone in deep darkness, why the night was so long" },
      { "start": 37.0, "end": 56.0, "kr": "나를 고독하게 나를 낮추시며, 세상 어디도 기댈 곳이 없게 하셨네", "en": "Making me solitary and humble, leaving me nowhere in this world to lean" },
      { "start": 56.0, "end": 74.0, "kr": "[후렴] 광야 광야에 서 있네, 주님만 내 도움이 되시고", "en": "I stand in the wilderness, where the Lord alone is my help" },
      { "start": 74.0, "end": 92.0, "kr": "주님만 내 빛이 되시는 광야, 주님만 내 친구 되시는 광야에 서 있네", "en": "In the wilderness where the Lord alone is my light and my friend" },
      { "start": 92.0, "end": 110.0, "kr": "[2절] 주님 손 놓고는 단 하루도 살 수 없는 곳, 광야 광야에 서 있네", "en": "A place where I cannot live a single day without holding Your hand" },
      { "start": 110.0, "end": 132.0, "kr": "내 자아가 산산이 깨어지고, 오직 주님만 내 삶의 주인 되시는 곳", "en": "Where my self is completely shattered, and the Lord alone becomes master of my life" },
      { "start": 132.0, "end": 155.0, "kr": "[후렴 반복] 광야 광야에 서 있네, 주님만 내 도움이 되시고", "en": "Standing in the wilderness, where only the Lord is my refuge and strength" },
      { "start": 155.0, "end": 190.0, "kr": "주님만 내 빛이 되시는 광야, 오직 주님만을 예배하네!", "en": "In the wilderness where the Lord is my light, I worship You alone!" },
      { "start": 190.0, "end": 330.0, "kr": "🕊️ 광야의 시간을 통해 참된 예배자로 세우시는 하나님의 신실하심을 찬양합니다 · 아멘", "en": "Praising God Who Refines Us Into True Worshipers Through the Wilderness · Amen" }
    ]
  },
  {
    "id": "flowers",
    "titleKo": "꽃들도 (Even If The Flowers - 花も)",
    "titleEn": "Even If The Flowers (花も)",
    "artist": "제이워십 (JWorship) / Mew Haesup • 오리지널 정규 앨범 원곡 (feat. 한재호)",
    "category": "global",
    "videoUrl": "assets/flowers.mp4",
    "audioUrl": "assets/flowers.mp3",
    "srtUrl": "assets/flowers.srt",
    "lrcUrl": "assets/flowers.lrc",
    "videoId": "t0CYXeqYdnE",
    "duration": 300,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 17.5, "kr": "🎵 꽃들도 (Even If The Flowers) - 전주", "en": "Even If The Flowers - JWorship (Intro)" },
      { "start": 17.5, "end": 29.0, "kr": "[1절] 이곳에 생명 샘 솟아나, 눈물 골짝 지나갈 때에", "en": "Here the spring of life gushes forth, As we pass through the valley of tears" },
      { "start": 29.0, "end": 40.5, "kr": "머잖아 열매 맺히고, 웃음 소리 넘쳐나리라", "en": "Soon the fruit will bear, And laughter will overflow" },
      { "start": 40.5, "end": 52.0, "kr": "[1절 반복] 이곳에 생명 샘 솟아나, 눈물 골짝 지나갈 때에", "en": "Here the spring of life gushes forth, As we pass through the valley of tears" },
      { "start": 52.0, "end": 63.5, "kr": "머잖아 열매 맺히고, 웃음 소리 넘쳐나리라", "en": "Soon the fruit will bear, And laughter will overflow" },
      { "start": 63.5, "end": 76.0, "kr": "[후렴] 꽃들도 구름도 바람도 넓은 바다도", "en": "Even if the flowers, the clouds, the wind, and the wide sea" },
      { "start": 76.0, "end": 88.0, "kr": "찬양하라 찬양하라 예수를!", "en": "Praise, praise Jesus!" },
      { "start": 88.0, "end": 99.5, "kr": "하늘을 울리며 노래해, 나의 영혼아", "en": "Sing resounding to the heavens, O my soul" },
      { "start": 99.5, "end": 115.0, "kr": "은혜의 주, 은혜의 주, 은혜의 주", "en": "Lord of grace, Lord of grace, Lord of grace" },
      { "start": 115.0, "end": 133.0, "kr": "(간주)", "en": "(Interlude)" },
      { "start": 133.0, "end": 144.5, "kr": "[2절] 그 날에 하늘이 열리고, 모든 이가 보게 되리라", "en": "On that day heaven will open, And all shall see" },
      { "start": 144.5, "end": 156.5, "kr": "마침내 꽃들이 피고, 영광의 주가 오시리라", "en": "At last the flowers will bloom, And the Lord of glory will come" },
      { "start": 156.5, "end": 169.0, "kr": "[후렴] 꽃들도 구름도 바람도 넓은 바다도", "en": "Even if the flowers, the clouds, the wind, and the wide sea" },
      { "start": 169.0, "end": 181.0, "kr": "찬양하라 찬양하라 예수를!", "en": "Praise, praise Jesus!" },
      { "start": 181.0, "end": 193.0, "kr": "하늘을 울리며 노래해, 나의 영혼아", "en": "Sing resounding to the heavens, O my soul" },
      { "start": 193.0, "end": 210.0, "kr": "은혜의 주, 은혜의 주, 은혜의 주!", "en": "Lord of grace, Lord of grace, Lord of grace!" },
      { "start": 210.0, "end": 260.0, "kr": "[후렴 절정] 찬양하라 예수를! 하늘을 울리며 노래해, 나의 영혼아!", "en": "Praise Jesus! Sing resounding to the heavens, O my soul!" },
      { "start": 260.0, "end": 300.0, "kr": "🕊️ 온 열방과 만물이 주 예수 그리스도를 영원히 찬양합니다 · 아멘", "en": "All Creation Praises Jesus Christ Our Lord · Amen" }
    ]
  },
  {
    "id": "shout-to-the-lord",
    "titleKo": "내 구주 예수님 (Shout to the Lord)",
    "titleEn": "Shout to the Lord",
    "artist": "Hillsong Worship / Darlene Zschech • 오리지널 스튜디오 정규 앨범 원곡",
    "category": "global",
    "videoId": "5_aIauL2xKA",
    "duration": 320,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 20.0, "kr": "🎵 내 구주 예수님 (Shout to the Lord) - 찬양 전주", "en": "Shout to the Lord - Hillsong Worship (Intro)" },
      { "start": 20.0, "end": 35.0, "kr": "[1절] 내 구주 예수님 주 같은 분 없네", "en": "My Jesus, my Savior, Lord there is none like You" },
      { "start": 35.0, "end": 50.0, "kr": "내 평생에 찬양하리라 놀라운 주의 사랑을", "en": "All of my days I want to praise the wonders of Your mighty love" },
      { "start": 50.0, "end": 68.0, "kr": "나의 위로자 내 피난처 나의 모든 힘과 호흡", "en": "My comfort, my shelter, tower of refuge and strength" },
      { "start": 68.0, "end": 85.0, "kr": "[후렴] 온 땅이여 주님을 찬양하라 능력과 권세의 주를 노래해", "en": "Shout to the Lord, all the earth, let us sing! Power and majesty, praise to the King!" },
      { "start": 85.0, "end": 102.0, "kr": "산들이 떨고 바다 솟구쳐도 주의 이름을 부를 때", "en": "Mountains bow down and the seas will roar at the sound of Your name" },
      { "start": 102.0, "end": 120.0, "kr": "주 행하신 일 찬양하며 주를 영원히 사랑하리", "en": "I sing for joy at the work of Your hands, forever I'll love You, forever I'll stand" },
      { "start": 120.0, "end": 140.0, "kr": "변함없는 주의 약속 내게 주셨네!", "en": "Nothing compares to the promise I have in You!" },
      { "start": 140.0, "end": 180.0, "kr": "[후렴 환호] 온 땅이여 큰 소리로 주를 찬양하라!", "en": "Shout to the Lord, all the earth, let us sing!" },
      { "start": 180.0, "end": 320.0, "kr": "🕊️ 천지와 온 열방을 다스리시는 존귀하신 왕 예수님을 영원히 찬양합니다 · 아멘", "en": "Glory and Honor to the Lord of All the Earth · Amen" }
    ]
  }
];

// App Studio State
let worshipStudioState = {
  currentSong: PRESET_PRAISE_SONGS[0],
  allSongs: [],
  activeTab: 'player', // 'player' | 'creator'
  mediaMode: 'local', // 'local' (고음질 수록 음원/영상 & 100% 실시간 자막) | 'youtube' (공식 영상)
  subtitleMode: 'auto', // 'auto' (시간 기반 자동 실시간 싱크 - 기본값) | 'manual' (수동 클릭 넘김)
  isSubtitleHidden: false, // 전주/간주 중 자막 일시 숨김
  currentLineIndex: 0,
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
  setupStageClickHandler();
  updateSubtitleControlBar();
  
  // Initialize praise dropdown and pre-select target song
  const select = document.getElementById('studioSongSelect');
  if (select) {
    const urlParams = new URLSearchParams(window.location.search);
    const targetSongId = urlParams.get('song') || 'amazing-grace';
    populateSongSelector(targetSongId);
    selectWorshipSong(targetSongId, null, false);
  }
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

  // 전 세계 어디서나 최신 정밀 싱크 자막 적용을 위한 공식 라이브러리 자동 정격 동기화
  const CURRENT_LIBRARY_VER = '20261001_v10_hope_desire_pray_en';
  const savedVer = localStorage.getItem('arise_praise_library_ver');
  if (savedVer !== CURRENT_LIBRARY_VER) {
    try {
      const savedOverrides = localStorage.getItem('arise_preset_lyrics_overrides');
      if (savedOverrides) {
        let overridesObj = JSON.parse(savedOverrides);
        // 공식 보관함의 프리셋 곡들에 대해 구버전 오버라이드를 완전 초기화하여 전 세계 동기화
        PRESET_PRAISE_SONGS.forEach(p => {
          delete overridesObj[p.id];
        });
        localStorage.setItem('arise_preset_lyrics_overrides', JSON.stringify(overridesObj));
      }
    } catch(e) {}
    localStorage.setItem('arise_praise_library_ver', CURRENT_LIBRARY_VER);
  }

  // 기존 공식 찬양에 대해 사용자가 수정한 맞춤 자막 오버라이드 적용
  let overrides = {};
  try {
    const savedOverrides = localStorage.getItem('arise_preset_lyrics_overrides');
    if (savedOverrides) overrides = JSON.parse(savedOverrides);
  } catch (e) {
    console.error('Failed to parse preset lyric overrides:', e);
  }

  const presets = PRESET_PRAISE_SONGS.map(p => {
    let pLines = p.lines;
    let pDur = p.duration;
    let hasCustom = false;

    if (overrides[p.id] && overrides[p.id].lines && overrides[p.id].lines.length > 0) {
      pLines = overrides[p.id].lines;
      pDur = overrides[p.id].duration || p.duration;
      hasCustom = true;
    }

    // Contiguous time cleanup: ensure line[i].end matches line[i+1].start perfectly
    if (pLines && pLines.length > 0) {
      for (let i = 0; i < pLines.length - 1; i++) {
        if (pLines[i + 1].start > pLines[i].start) {
          // If end overlaps past next start, or if there is a gap, align end to next start
          if (pLines[i].end > pLines[i + 1].start || (pLines[i + 1].start - pLines[i].end <= 3)) {
            pLines[i].end = pLines[i + 1].start;
          }
        }
      }
      // Ensure the very last line extends to the end of the song
      const lastLine = pLines[pLines.length - 1];
      if (lastLine && pDur) {
        lastLine.end = Math.max(lastLine.end || 0, pDur);
      }
    }

    return {
      ...p,
      lines: pLines,
      duration: pDur,
      hasCustomSubtitles: hasCustom
    };
  });

  worshipStudioState.allSongs = [...presets, ...customList];
}

// ========================================================
// 🛑 UNIVERSAL SINGLE-PLAY MEDIA COORDINATOR
// (사이트 전체에서 오직 1개의 찬양/미디어만 재생되도록 철저히 통제)
// ========================================================
function stopAllMediaExcept(exceptEl = null) {
  // 1. 모든 HTML5 비디오 일시정지
  document.querySelectorAll('video').forEach(vid => {
    if (vid !== exceptEl && !vid.paused) {
      try { vid.pause(); } catch(e) {}
    }
  });

  // 2. 모든 HTML5 오디오 일시정지
  document.querySelectorAll('audio').forEach(aud => {
    if (aud !== exceptEl && !aud.paused) {
      try { aud.pause(); } catch(e) {}
    }
  });

  // 3. 외부 YouTube iframe들에 pauseVideo postMessage 전송 (스튜디오 플레이어 제외)
  document.querySelectorAll('iframe').forEach(ifr => {
    const isStudioIfr = ifr.id === 'studioYouTubePlayer' || (ifr.closest && ifr.closest('#studioYouTubePlayerWrapper') !== null);
    if (exceptEl === 'studioYouTube' && isStudioIfr) {
      return; // 스튜디오 iframe은 일시정지 대상에서 안전하게 제외
    }
    if (ifr !== exceptEl && !isStudioIfr) {
      try {
        ifr.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } catch(e) {}
    }
  });

  // 4. 스튜디오 YouTube API 플레이어가 실행 중이고 대상이 아니면 일시정지
  if (exceptEl !== 'studioYouTube' && ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
    try { ytStudioPlayer.pauseVideo(); } catch(e) {}
  }
}
window.stopAllMediaExcept = stopAllMediaExcept;

// 스튜디오 YouTube 플레이어 & iframe 잔여 음원 완벽 소멸 (배경 재생/중복 완벽 방지)
function cleanupStudioYouTubePlayer() {
  stopYtProgressTracker();
  if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
    try { ytStudioPlayer.pauseVideo(); } catch(e) {}
  }
  const ytWrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (ytWrapper) {
    ytWrapper.style.display = 'none';
    const iframes = ytWrapper.querySelectorAll('iframe');
    iframes.forEach(f => {
      try { f.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'); } catch(e) {}
    });
    ytWrapper.innerHTML = '<div id="studioYouTubePlayer"></div>';
  }
  ytStudioPlayer = null;
  updatePlayPauseBtnState(false);
}
window.cleanupStudioYouTubePlayer = cleanupStudioYouTubePlayer;

// YouTube iframe 상태 변경 감지: 어떤 iframe에서든 재생 시작되면 다른 모든 미디어 일시정지 및 스튜디오 실시간 싱크 연동
if (!window._ytGlobalMessageCoordinatorBound) {
  window.addEventListener('message', (event) => {
    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
      if (!data) return;

      // 스튜디오 YouTube 플레이어의 실시간 시간 및 재생 상태 즉시 연동
      const studioIfr = document.getElementById('studioYouTubePlayer');
      const isFromStudio = studioIfr && (studioIfr.contentWindow === event.source || studioIfr === event.source);
      if (isFromStudio && data.info) {
        if (typeof data.info.currentTime === 'number' && !isNaN(data.info.currentTime)) {
          updateActiveSubtitleLine(data.info.currentTime);
          if (typeof ytTrackerBaseSec !== 'undefined') ytTrackerBaseSec = data.info.currentTime;
          if (typeof ytTrackerStartTime !== 'undefined') ytTrackerStartTime = Date.now();
        }
        if (data.event === 'onStateChange') {
          if (data.info === 1) { // playing
            updatePlayPauseBtnState(true);
            startYtProgressTracker();
          } else if (data.info === 2 || data.info === 0) { // paused / ended
            updatePlayPauseBtnState(false);
            stopYtProgressTracker();
          }
        }
      }

      const isPlaying = (data.event === 'onStateChange' && data.info === 1) || 
                        (data.event === 'infoDelivery' && data.info && data.info.playerState === 1);
      if (isPlaying) {
        // 모든 HTML5 미디어 즉시 정지
        document.querySelectorAll('video, audio').forEach(el => {
          try { if (!el.paused) el.pause(); } catch(e) {}
        });
        // 재생을 시작한 출처 외 다른 모든 외부 iframe 정지 (스튜디오 플레이어는 자기 자신 정지 방지)
        document.querySelectorAll('iframe').forEach(ifr => {
          const isStudioIfr = ifr.id === 'studioYouTubePlayer' || (ifr.closest && ifr.closest('#studioYouTubePlayerWrapper') !== null);
          if (!isStudioIfr && ifr.contentWindow !== event.source) {
            try {
              ifr.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } catch(e) {}
          }
        });
      }
    } catch(e) {}
  });
  window._ytGlobalMessageCoordinatorBound = true;
}

// Open / Close Studio Modal
function openWorshipStudio(targetSongId = 'amazing-grace', autoPlay = false) {
  // 모달 열 때 메인 화면/라운지 카드 등 재생 중이던 모든 미디어 즉시 정지
  stopAllMediaExcept(null);

  // 1. 모달을 먼저 표시하여 내부 비디오 및 iframe 컨테이너가 정상 렌더링 크기를 갖도록 보장
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  loadCustomSongs();
  populateSongSelector(targetSongId);
  selectWorshipSong(targetSongId, null, autoPlay);
  switchStudioTab('player');
}

let ytStudioPlayer = null;
let ytProgressInterval = null;

// Global YouTube API Ready hook - do NOT autoplay on page load
window.onYouTubeIframeAPIReady = function() {
  const isStudioOpen = document.getElementById('worshipStudioModal')?.classList.contains('active') 
                    || window.location.pathname.includes('worship-studio');
  if (isStudioOpen && worshipStudioState.mediaMode === 'youtube' && worshipStudioState.currentSong && worshipStudioState.currentSong.videoId) {
    mountYouTubePlayer(worshipStudioState.currentSong.videoId, false);
  }
};

function mountYouTubePlayer(videoId, autoPlay = false) {
  // 스튜디오 내 기존 video/audio 정지
  const video = document.getElementById('studioVideoPlayer');
  if (video) { try { video.pause(); video.currentTime = 0; } catch(e) {} video.style.display = 'none'; }
  const audio = document.getElementById('studioAudioPlayer');
  if (audio) { try { audio.pause(); audio.currentTime = 0; } catch(e) {} audio.style.display = 'none'; }

  const wrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (wrapper) wrapper.style.display = 'block';

  // 외부 다른 모든 미디어 일시정지 (스튜디오 YouTube는 제외)
  stopAllMediaExcept('studioYouTube');

  if (ytStudioPlayer && typeof ytStudioPlayer.loadVideoById === 'function') {
    try {
      if (autoPlay) {
        ytStudioPlayer.loadVideoById({ videoId: videoId, startSeconds: 0 });
        updatePlayPauseBtnState(true);
      } else if (typeof ytStudioPlayer.cueVideoById === 'function') {
        ytStudioPlayer.cueVideoById({ videoId: videoId, startSeconds: 0 });
        updatePlayPauseBtnState(false);
      }
      return;
    } catch (e) {
      console.warn('loadVideoById failed, re-creating player:', e);
      ytStudioPlayer = null;
    }
  }

  let targetDiv = document.getElementById('studioYouTubePlayer');
  if ((!targetDiv || targetDiv.tagName === 'IFRAME') && wrapper) {
    wrapper.innerHTML = '<div id="studioYouTubePlayer"></div>';
    targetDiv = document.getElementById('studioYouTubePlayer');
  }

  if (window.YT && window.YT.Player && targetDiv) {
    try {
      const playerVars = {
        autoplay: autoPlay ? 1 : 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        enablejsapi: 1
      };
      const safeOrigin = (window.location.origin && window.location.origin !== 'null' && !window.location.origin.startsWith('file:')) ? window.location.origin : undefined;
      if (safeOrigin) {
        playerVars.origin = safeOrigin;
      }

      ytStudioPlayer = new YT.Player('studioYouTubePlayer', {
        width: '100%',
        height: '100%',
        videoId: videoId,
        playerVars: playerVars,
        events: {
          onReady: (event) => {
            if (autoPlay) {
              try { event.target.playVideo(); } catch(e) {}
            }
            startYtProgressTracker();
            updatePlayPauseBtnState(autoPlay);
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
            if (event.data === 1) {
              startYtProgressTracker();
              stopAllMediaExcept('studioYouTube');
              updatePlayPauseBtnState(true);
            } else if (event.data === 2 || event.data === 0) {
              stopYtProgressTracker();
              updatePlayPauseBtnState(false);
            }
          },
          onError: (event) => {
            console.warn('YouTube Player API error code:', event.data, 'falling back to direct iframe');
            mountFallbackIframe(videoId, autoPlay);
          }
        }
      });
    } catch (err) {
      mountFallbackIframe(videoId, autoPlay);
    }
  } else {
    mountFallbackIframe(videoId, autoPlay);
  }
}

function mountFallbackIframe(videoId, autoPlay = false) {
  const wrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (!wrapper) return;
  wrapper.innerHTML = `
    <iframe 
      id="studioYouTubePlayer"
      class="studio-video" 
      src="https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&enablejsapi=1&rel=0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="no-referrer-when-downgrade" 
      allowfullscreen>
    </iframe>
  `;
  startYtProgressTracker();
  updatePlayPauseBtnState(autoPlay);
}

// Universal Studio Play / Pause Controller (찬양 재생 / 일시정지 통합 제어)
function toggleStudioPlayPause() {
  const song = worshipStudioState.currentSong;
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');

  // 1. Zoom Safe Audio Mode
  if (worshipStudioState.mediaMode === 'safe-audio' && audio && audio.src) {
    if (audio.paused) {
      stopAllMediaExcept(audio);
      audio.play().then(() => updatePlayPauseBtnState(true)).catch(e => console.log('Audio play error:', e));
    } else {
      audio.pause();
      updatePlayPauseBtnState(false);
    }
    return;
  }

  // 2. High-Definition MP4 Video Mode
  if (video && video.style.display !== 'none' && video.src) {
    if (video.paused) {
      stopAllMediaExcept(video);
      video.play().then(() => updatePlayPauseBtnState(true)).catch(e => console.log('Video play error:', e));
    } else {
      video.pause();
      updatePlayPauseBtnState(false);
    }
    return;
  }

  // 3. YouTube Mode (or songs 11-40 without local mp4)
  if (worshipStudioState.mediaMode === 'youtube' || (song && song.videoId)) {
    if (ytStudioPlayer && typeof ytStudioPlayer.getPlayerState === 'function') {
      try {
        const state = ytStudioPlayer.getPlayerState();
        if (state === 1) { // playing -> pause
          ytStudioPlayer.pauseVideo();
          updatePlayPauseBtnState(false);
          stopYtProgressTracker();
        } else { // paused / unstarted -> play
          stopAllMediaExcept('studioYouTube');
          ytStudioPlayer.playVideo();
          updatePlayPauseBtnState(true);
          startYtProgressTracker();
        }
        return;
      } catch (err) {
        console.warn('ytStudioPlayer control failed, trying fallback postMessage:', err);
      }
    }

    // Direct postMessage to studio iframe if ytStudioPlayer not available
    const ifr = document.getElementById('studioYouTubePlayer');
    if (ifr && ifr.tagName === 'IFRAME' && ifr.contentWindow) {
      const isCurrentlyPlaying = (worshipStudioState.isYtPlaying === true);
      const cmd = isCurrentlyPlaying ? 'pauseVideo' : 'playVideo';
      if (!isCurrentlyPlaying) stopAllMediaExcept('studioYouTube');
      ifr.contentWindow.postMessage(`{"event":"command","func":"${cmd}","args":""}`, '*');
      worshipStudioState.isYtPlaying = !isCurrentlyPlaying;
      updatePlayPauseBtnState(!isCurrentlyPlaying);
      if (!isCurrentlyPlaying) startYtProgressTracker();
      else stopYtProgressTracker();
    }
  }
}
window.toggleStudioPlayPause = toggleStudioPlayPause;

// Update UI Play/Pause button labels and icons across studio
function updatePlayPauseBtnState(isPlaying) {
  worshipStudioState.isPlaying = isPlaying;
  if (worshipStudioState.mediaMode === 'youtube') {
    worshipStudioState.isYtPlaying = isPlaying;
  }

  // 1. On-stage controller button
  const stageBtn = document.getElementById('btnStudioPlayPause');
  const stageIcon = document.getElementById('studioPlayPauseIcon');
  const stageText = document.getElementById('studioPlayPauseText');
  if (stageBtn) {
    if (isPlaying) {
      stageBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
      stageBtn.style.boxShadow = '0 4px 14px rgba(245, 158, 11, 0.4)';
      if (stageIcon) stageIcon.textContent = '⏸️';
      if (stageText) stageText.textContent = '일시정지';
    } else {
      stageBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      stageBtn.style.boxShadow = '0 4px 14px rgba(16, 185, 129, 0.4)';
      if (stageIcon) stageIcon.textContent = '▶️';
      if (stageText) stageText.textContent = '찬양 재생';
    }
  }

  // 2. Toolbar button
  const toolbarBtn = document.getElementById('btnToolbarPlayPause');
  const tbIcon = document.getElementById('toolbarPlayPauseIcon');
  const tbText = document.getElementById('toolbarPlayPauseText');
  if (toolbarBtn) {
    if (isPlaying) {
      toolbarBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
      if (tbIcon) tbIcon.textContent = '⏸️';
      if (tbText) tbText.textContent = '일시정지 (Space)';
    } else {
      toolbarBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      if (tbIcon) tbIcon.textContent = '▶️';
      if (tbText) tbText.textContent = '찬양 재생 (Space)';
    }
  }
}
window.updatePlayPauseBtnState = updatePlayPauseBtnState;

let ytTrackerStartTime = null;
let ytTrackerBaseSec = 0;

function startYtProgressTracker(baseSeconds = null) {
  stopYtProgressTracker();
  if (baseSeconds !== null && !isNaN(baseSeconds)) {
    ytTrackerBaseSec = baseSeconds;
  }
  ytTrackerStartTime = Date.now();

  ytProgressInterval = setInterval(() => {
    let cur = null;
    if (ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
      try {
        const t = ytStudioPlayer.getCurrentTime();
        if (typeof t === 'number' && !isNaN(t) && t >= 0) {
          cur = t;
          ytTrackerBaseSec = cur;
          ytTrackerStartTime = Date.now();
        }
      } catch (e) {}
    }
    // 글로벌 안정성: YouTube API 시간 응답이 지연되거나 제한적인 브라우저에서도 경과 시간을 보정하여 자막 자동 싱크 지속
    if (cur === null && (worshipStudioState.isYtPlaying || worshipStudioState.isPlaying) && ytTrackerStartTime) {
      cur = ytTrackerBaseSec + (Date.now() - ytTrackerStartTime) / 1000;
    }
    if (cur !== null && typeof cur === 'number' && !isNaN(cur)) {
      updateActiveSubtitleLine(cur);
    }
  }, 200);
}

function stopYtProgressTracker() {
  if (ytProgressInterval) {
    clearInterval(ytProgressInterval);
    ytProgressInterval = null;
  }
  ytTrackerStartTime = null;
}

function closeWorshipStudio() {
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  // 모달 닫을 때 스튜디오 및 외부 모든 미디어 100% 완전 정지
  const video = document.getElementById('studioVideoPlayer');
  if (video) {
    try { video.pause(); video.currentTime = 0; } catch(e) {}
  }
  const audio = document.getElementById('studioAudioPlayer');
  if (audio) {
    try { audio.pause(); audio.currentTime = 0; } catch(e) {}
  }
  cleanupStudioYouTubePlayer();
  stopAllMediaExcept(null);
}

// Populate Song Dropdown
function populateSongSelector(selectedId) {
  const select = document.getElementById('studioSongSelect');
  if (!select) return;
  select.innerHTML = '';

  const presetGroup = document.createElement('optgroup');
  presetGroup.label = `⭐ 공식 찬양 보관함 (${PRESET_PRAISE_SONGS.length}곡 원곡 라이브러리)`;
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
  if (selectedId) {
    select.value = selectedId;
  }
}

// Select Song
function toggleMediaSource() {
  const song = worshipStudioState.currentSong;
  if (!song) return;
  if (!song.videoId) {
    showStudioToast("이 찬양은 수록 전용 음원입니다.");
    return;
  }
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  const wasPlaying = (ytStudioPlayer && typeof ytStudioPlayer.getPlayerState === 'function' && ytStudioPlayer.getPlayerState() === 1) ||
                     (video && !video.paused) || (audio && !audio.paused);
  const newMode = (worshipStudioState.mediaMode === 'youtube') ? 'local' : 'youtube';
  selectWorshipSong(song.id, newMode, wasPlaying);
  showStudioToast(newMode === 'youtube' ? "📺 YouTube 공식 영상 모드로 전환되었습니다." : "🎵 고음질 수록 음원 & 정밀 자막 모드로 전환되었습니다.");
}
window.toggleMediaSource = toggleMediaSource;

// 줌(Zoom) 전용 초경량 오디오+실시간 자막 모드 토글
function toggleZoomSafeMode() {
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  const wasPlaying = (ytStudioPlayer && typeof ytStudioPlayer.getPlayerState === 'function' && ytStudioPlayer.getPlayerState() === 1) ||
                     (video && !video.paused) || (audio && !audio.paused);

  const isSafe = worshipStudioState.mediaMode === 'safe-audio';
  const newMode = isSafe ? 'local' : 'safe-audio';
  worshipStudioState.mediaMode = newMode;

  const btn = document.getElementById('btnToggleZoomSafeMode');
  if (btn) {
    if (newMode === 'safe-audio') {
      btn.innerHTML = '🛡️ 줌 끊김방지 (ON)';
      btn.classList.add('active-safe-mode');
      btn.style.borderColor = '#38bdf8';
      btn.style.color = '#38bdf8';
      btn.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.4)';
      showStudioToast("🛡️ [줌 끊김방지 모드 ON] 초경량 오디오 + 실시간 자막 모드로 전환되었습니다.");
    } else {
      btn.innerHTML = '🛡️ 줌 끊김방지 모드';
      btn.classList.remove('active-safe-mode');
      btn.style.borderColor = '';
      btn.style.color = '';
      btn.style.boxShadow = '';
      showStudioToast("🎬 일반 고화질 영상 모드로 복귀했습니다.");
    }
  }

  if (worshipStudioState.currentSong) {
    selectWorshipSong(worshipStudioState.currentSong.id, newMode, wasPlaying);
  }
}
window.toggleZoomSafeMode = toggleZoomSafeMode;

// 줌(Zoom) 찬양 끊김 완벽 해결 가이드 모달 제어
function openZoomGuideModal() {
  const modal = document.getElementById('zoomGuideModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}
window.openZoomGuideModal = openZoomGuideModal;

function closeZoomGuideModal() {
  const modal = document.getElementById('zoomGuideModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
window.closeZoomGuideModal = closeZoomGuideModal;

function updateSourceToggleBtn(song) {
  const btn = document.getElementById('btnToggleMediaSource');
  if (btn) {
    if (song && song.videoId && (song.audioUrl || song.videoUrl)) {
      btn.style.display = 'inline-flex';
      if (worshipStudioState.mediaMode === 'youtube') {
        btn.innerHTML = '🎵 수록 음원 & 자막 모드';
        btn.classList.add('btn-primary');
        btn.classList.remove('btn-ghost');
      } else {
        btn.innerHTML = '📺 YouTube 공식 영상';
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-ghost');
      }
    } else {
      btn.style.display = 'none';
    }
  }

  const safeBtn = document.getElementById('btnToggleZoomSafeMode');
  if (safeBtn) {
    if (worshipStudioState.mediaMode === 'safe-audio') {
      safeBtn.innerHTML = '🛡️ 줌 끊김방지 (ON)';
      safeBtn.classList.add('active-safe-mode');
      safeBtn.style.borderColor = '#38bdf8';
      safeBtn.style.color = '#38bdf8';
      safeBtn.style.boxShadow = '0 0 12px rgba(56, 189, 248, 0.4)';
    } else {
      safeBtn.innerHTML = '🛡️ 줌 끊김방지 모드';
      safeBtn.classList.remove('active-safe-mode');
      safeBtn.style.borderColor = '';
      safeBtn.style.color = '';
      safeBtn.style.boxShadow = '';
    }
  }
}

function selectWorshipSong(songId, requestedMode = null, autoPlay = false) {
  const song = worshipStudioState.allSongs.find(s => s.id === songId) || PRESET_PRAISE_SONGS[0];
  worshipStudioState.currentSong = song;
  worshipStudioState.currentLineIndex = -1;
  worshipStudioState.subtitleMode = 'auto'; // 전 세계 모든 사용자 기본: 자동 시간 정밀 싱크 모드 활성화

  if (requestedMode) {
    worshipStudioState.mediaMode = requestedMode;
  } else if (!song.videoUrl && !song.audioUrl && song.videoId) {
    worshipStudioState.mediaMode = 'youtube';
  } else if (worshipStudioState.mediaMode === 'safe-audio' && !song.audioUrl && song.videoId) {
    worshipStudioState.mediaMode = 'youtube';
  } else if (!worshipStudioState.mediaMode) {
    worshipStudioState.mediaMode = 'local';
  }

  // 유튜브 모드 및 로컬/세이프 모드 간 자막 싱크와 재생 길이 자동 최적화
  if (worshipStudioState.mediaMode === 'youtube' && song.ytLines) {
    if (!song._localLines) song._localLines = song.lines;
    song.lines = song.ytLines;
    song.duration = song.ytDuration || 278;
  } else if (worshipStudioState.mediaMode !== 'youtube' && song._localLines) {
    song.lines = song._localLines;
    song.duration = song.localDuration || 170;
  }

  // 1. 메인 화면 및 라운지 카드 등 기존 재생 중이던 모든 미디어 100% 즉시 정지
  stopAllMediaExcept(null);

  // 2. 스튜디오 내부 기존 영상 및 음원 완전 정지 및 숨김
  const video = document.getElementById('studioVideoPlayer');
  if (video) {
    try { video.pause(); video.currentTime = 0; } catch(e) {}
    video.style.display = 'none';
  }
  const audio = document.getElementById('studioAudioPlayer');
  if (audio) {
    try { audio.pause(); audio.currentTime = 0; } catch(e) {}
    audio.style.display = 'none';
  }

  const ytWrapper = document.getElementById('studioYouTubePlayerWrapper');
  const mediaWrapper = document.getElementById('studioVideoWrapper');

  stopYtProgressTracker();

  // YouTube 모드가 아닐 경우 기존 iframe을 완전 제거하여 백그라운드 좀비 소리 재생 방지
  const willUseYouTube = (worshipStudioState.mediaMode === 'youtube' && song.videoId) || 
                         (!song.videoUrl && !song.audioUrl && song.videoId);

  if (!willUseYouTube) {
    cleanupStudioYouTubePlayer();
  }

  // Update Display
  const titleDisplay = document.getElementById('studioActiveSongTitle');
  if (titleDisplay) {
    titleDisplay.innerHTML = `<span class="title-kr">${escapeHtml(song.titleKo)}</span> <span class="title-en">${escapeHtml(song.titleEn)}</span>`;
  }
  const songSelectEl = document.getElementById('studioSongSelect');
  if (songSelectEl && songSelectEl.value !== song.id) {
    songSelectEl.value = song.id;
  }
  displayOverlaySubtitle(null);

  updateSourceToggleBtn(song);

  // 1. Zoom Safe Mode (Ultra-lightweight MP3 + High-contrast live subtitles, 0% stuttering)
  if (worshipStudioState.mediaMode === 'safe-audio' && song.audioUrl) {
    cleanupStudioYouTubePlayer();
    if (video) {
      try { video.pause(); video.currentTime = 0; } catch(e) {}
      video.style.display = 'none';
    }
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.65)), url("${song.bgImage || 'assets/worship_bg.jpg'}")`;
      mediaWrapper.style.backgroundSize = 'cover';
      mediaWrapper.style.backgroundPosition = 'center';
    }
    if (audio) {
      audio.style.display = 'block';
      const curSrc = audio.getAttribute('src') || '';
      if (!curSrc.endsWith(song.audioUrl)) {
        audio.src = song.audioUrl;
      }
      audio.currentTime = 0;
      audio.load();
      setupMediaTimeUpdate(audio);
      if (autoPlay) {
        audio.play().catch(e => console.log('Audio autoplay:', e));
      } else {
        audio.pause();
      }
    }
  } else if (worshipStudioState.mediaMode === 'youtube' && song.videoId) {
    // 2. User opted for YouTube mode
    if (video) { try { video.pause(); video.currentTime = 0; } catch(e) {} video.style.display = 'none'; }
    if (audio) { try { audio.pause(); audio.currentTime = 0; } catch(e) {} audio.style.display = 'none'; }
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = 'none';
    }
    mountYouTubePlayer(song.videoId, autoPlay);
  } else if (song.videoUrl) {
    // 3. High-Definition 1080p MP4 Video
    cleanupStudioYouTubePlayer();
    if (audio) {
      try { audio.pause(); audio.currentTime = 0; } catch(e) {}
      audio.style.display = 'none';
    }
    if (mediaWrapper) mediaWrapper.style.backgroundImage = 'none';
    if (video) {
      video.style.display = 'block';
      try { video.pause(); } catch(e) {}
      
      const curSrc = video.getAttribute('src') || '';
      if (!curSrc.endsWith(song.videoUrl)) {
        video.src = song.videoUrl;
      }
      video.preload = "auto";
      video.currentTime = 0;
      video.load();
      video.onerror = () => {
        console.warn('Local video load failed or buffered out, switching fallback:', song.videoUrl);
        if (song.videoId) {
          showStudioToast('💡 끊김 없는 고화질 스트림(YouTube)으로 자동 전환합니다.');
          worshipStudioState.mediaMode = 'youtube';
          updateSourceToggleBtn(song);
          mountYouTubePlayer(song.videoId, autoPlay);
        } else if (song.audioUrl) {
          showStudioToast('💡 음원 모드로 전환합니다.');
          worshipStudioState.mediaMode = 'safe-audio';
          selectWorshipSong(song.id, 'safe-audio', autoPlay);
        }
      };
      setupMediaTimeUpdate(video);
      
      if (autoPlay) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log('Browser deferred autoplay:', err);
          });
        }
      } else {
        video.pause();
      }
    }
  } else if (song.audioUrl) {
    // 4. Local High-Quality Audio with Worship Background Visual & Subtitles
    cleanupStudioYouTubePlayer();
    if (video) {
      try { video.pause(); video.currentTime = 0; } catch(e) {}
      video.style.display = 'none';
    }
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.65)), url("${song.bgImage || 'assets/worship_bg.jpg'}")`;
      mediaWrapper.style.backgroundSize = 'cover';
      mediaWrapper.style.backgroundPosition = 'center';
    }
    if (audio) {
      audio.style.display = 'block';
      audio.src = song.audioUrl;
      audio.load();
      audio.onerror = () => {
        console.warn('Audio load failed:', song.audioUrl);
        if (song.videoId) {
          worshipStudioState.mediaMode = 'youtube';
          updateSourceToggleBtn(song);
          mountYouTubePlayer(song.videoId, autoPlay);
        }
      };
      setupMediaTimeUpdate(audio);
      if (autoPlay) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }
  } else if (song.videoId) {
    // Fallback: YouTube Video
    if (video) { try { video.pause(); video.currentTime = 0; } catch(e) {} video.style.display = 'none'; }
    if (audio) { try { audio.pause(); audio.currentTime = 0; } catch(e) {} audio.style.display = 'none'; }
    if (mediaWrapper) mediaWrapper.style.backgroundImage = 'none';
    mountYouTubePlayer(song.videoId, autoPlay);
  } else {
    cleanupStudioYouTubePlayer();
    if (video) { try { video.pause(); video.currentTime = 0; } catch(e) {} video.style.display = 'none'; }
    if (audio) { try { audio.pause(); audio.currentTime = 0; } catch(e) {} audio.style.display = 'none'; }
  }

  // Render Lyric Stream Table
  renderLyricStream(song);

  // Initialize Subtitle for selected mode (항상 첫 소절/전주를 기본 송출하여 빈 화면 방지)
  worshipStudioState.isSubtitleHidden = false;
  worshipStudioState.currentLineIndex = 0;
  if (song.lines && song.lines.length > 0) {
    displayOverlaySubtitle(song.lines[0]);
    highlightLyricStreamRow(0);
  } else {
    displayOverlaySubtitle(null);
  }
  updateSubtitleControlBar();
}

// Media Timeupdate & Buffer Stall Handler for real-time Subtitle Sync
function setupMediaTimeUpdate(mediaEl) {
  mediaEl.onplay = () => {
    stopAllMediaExcept(mediaEl);
    updatePlayPauseBtnState(true);
  };
  mediaEl.onpause = () => {
    updatePlayPauseBtnState(false);
  };
  mediaEl.ontimeupdate = () => {
    const curTime = mediaEl.currentTime;
    updateActiveSubtitleLine(curTime);
  };

  // Stalled detection for Zoom users
  let stallTimeout = null;
  mediaEl.onwaiting = () => {
    if (!stallTimeout && worshipStudioState.mediaMode !== 'safe-audio') {
      stallTimeout = setTimeout(() => {
        if (mediaEl.readyState < 3 && worshipStudioState.mediaMode !== 'safe-audio') {
          showStudioToast("⚠️ 영상 버퍼링 감지됨: 상단의 [🛡️ 줌 끊김방지 모드]를 누르시면 끊김 없이 즉시 재생됩니다.");
        }
        stallTimeout = null;
      }, 4000);
    }
  };

  mediaEl.onplaying = () => {
    if (stallTimeout) {
      clearTimeout(stallTimeout);
      stallTimeout = null;
    }
  };
}

// ========================================================
// 🎤 Subtitle Navigation & Real-time Live Control
// ========================================================

// Next Lyric Line (수동 다음 가사 넘김)
function nextSubtitleLine() {
  const song = worshipStudioState.currentSong;
  if (!song || !song.lines || song.lines.length === 0) return;

  worshipStudioState.isSubtitleHidden = false;
  let nextIdx = worshipStudioState.currentLineIndex + 1;
  if (nextIdx >= song.lines.length) {
    nextIdx = song.lines.length - 1;
    showStudioToast("마지막 소절입니다 (Last lyric line reached)");
  }
  setSubtitleLine(nextIdx, false);
}

// Previous Lyric Line (수동 이전 가사 넘김)
function prevSubtitleLine() {
  const song = worshipStudioState.currentSong;
  if (!song || !song.lines || song.lines.length === 0) return;

  worshipStudioState.isSubtitleHidden = false;
  let prevIdx = worshipStudioState.currentLineIndex - 1;
  if (prevIdx < 0) {
    prevIdx = 0;
  }
  setSubtitleLine(prevIdx, false);
}

// Set Specific Subtitle Line (가사 직접 지정)
function setSubtitleLine(index, seekAudio = false) {
  const song = worshipStudioState.currentSong;
  if (!song || !song.lines || index < 0 || index >= song.lines.length) return;

  worshipStudioState.currentLineIndex = index;
  worshipStudioState.isSubtitleHidden = false;
  displayOverlaySubtitle(song.lines[index]);
  highlightLyricStreamRow(index);
  updateSubtitleControlBar();

  if (seekAudio) {
    jumpToLyricTime(song.lines[index].start);
  }
}

// Toggle Subtitle Hide/Show (전주/간주/기도 시 자막 숨김)
function toggleHideSubtitle() {
  worshipStudioState.isSubtitleHidden = !worshipStudioState.isSubtitleHidden;
  const song = worshipStudioState.currentSong;
  const curLine = (song && song.lines && worshipStudioState.currentLineIndex >= 0) 
    ? song.lines[worshipStudioState.currentLineIndex] 
    : null;

  displayOverlaySubtitle(curLine);
  updateSubtitleControlBar();
  showStudioToast(worshipStudioState.isSubtitleHidden ? "👁️ 자막이 숨겨졌습니다 (간주/기도 중)" : "👁️ 자막이 다시 표시됩니다");
}

// Toggle Manual vs Auto Subtitle Mode (수동 클릭 ↔ 자동 싱크 전환)
function toggleSubtitleMode(targetMode = null) {
  if (targetMode) {
    worshipStudioState.subtitleMode = targetMode;
  } else {
    worshipStudioState.subtitleMode = (worshipStudioState.subtitleMode === 'manual') ? 'auto' : 'manual';
  }

  const isManual = worshipStudioState.subtitleMode === 'manual';
  updateSubtitleControlBar();

  const song = worshipStudioState.currentSong;
  if (isManual && song && song.lines && song.lines.length > 0) {
    if (worshipStudioState.currentLineIndex < 0) {
      setSubtitleLine(0, false);
    } else {
      displayOverlaySubtitle(song.lines[worshipStudioState.currentLineIndex]);
    }
  }

  showStudioToast(isManual 
    ? "👆 [수동 클릭 모드] 활성화: 클릭 또는 [→] 키로 가사를 넘깁니다." 
    : "🔄 [자동 싱크 모드] 활성화: 음악 시간에 맞춰 자막이 자동으로 넘어갑니다."
  );
}

// Update On-Screen Subtitle Control Bar UI
function updateSubtitleControlBar() {
  const song = worshipStudioState.currentSong;
  const total = (song && song.lines) ? song.lines.length : 0;
  const cur = worshipStudioState.currentLineIndex;
  const isManual = worshipStudioState.subtitleMode === 'manual';
  const isHidden = worshipStudioState.isSubtitleHidden;

  // Indicators
  const curEl = document.getElementById('subCurLineNum');
  const totalEl = document.getElementById('subTotalLinesNum');
  if (curEl) curEl.textContent = (cur >= 0 && total > 0) ? (cur + 1) : '-';
  if (totalEl) totalEl.textContent = total;

  // Prev / Next buttons
  const prevBtn = document.querySelector('.btn-sub-prev');
  const nextBtn = document.querySelector('.btn-sub-next');
  if (prevBtn) prevBtn.disabled = (cur <= 0);
  if (nextBtn) nextBtn.disabled = (cur >= total - 1);

  // Mode Toggle Buttons
  const barModeBtn = document.getElementById('btnToggleSubtitleMode');
  const toolbarModeBtn = document.getElementById('btnToolbarSubMode');
  const modeText = isManual ? '수동 클릭' : '자동 싱크';

  if (barModeBtn) {
    barModeBtn.innerHTML = `<span>${isManual ? '👆' : '🔄'}</span> <span>${modeText}</span>`;
    barModeBtn.className = isManual ? 'btn-sub-mode manual-active' : 'btn-sub-mode auto-active';
  }
  if (toolbarModeBtn) {
    toolbarModeBtn.innerHTML = `${isManual ? '👆' : '🔄'} ${isManual ? '수동 모드 (ON)' : '자동 싱크 (ON)'}`;
    toolbarModeBtn.className = isManual ? 'btn btn-sm btn-sub-mode-toggle active-manual' : 'btn btn-sm btn-sub-mode-toggle active-auto';
  }

  // Hide / Show Subtitle Button
  const hideBtn = document.getElementById('btnToggleHideSub');
  if (hideBtn) {
    hideBtn.innerHTML = `<span>${isHidden ? '👁️‍🗨️' : '👁️'}</span> <span>${isHidden ? '자막 보이기' : '자막 숨김'}</span>`;
    hideBtn.style.opacity = isHidden ? '0.7' : '1';
  }
}

// Setup Stage Click Handler (화면 클릭 시 다음 가사 넘김)
function setupStageClickHandler() {
  const stage = document.getElementById('studioVideoWrapper');
  if (!stage || stage.dataset.hasClickHandler) return;
  stage.dataset.hasClickHandler = 'true';

  stage.addEventListener('click', (e) => {
    // If clicked on controls, inputs, buttons, audio native elements, ignore
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select') || e.target.closest('a') || e.target.tagName === 'AUDIO') {
      return;
    }
    // In manual mode, click advances to next lyric
    if (worshipStudioState.subtitleMode === 'manual') {
      nextSubtitleLine();
    }
  });
}

function updateActiveSubtitleLine(currentTime) {
  // If in manual mode, DO NOT automatically advance lyrics based on currentTime!
  if (worshipStudioState.subtitleMode === 'manual') {
    return;
  }

  const song = worshipStudioState.currentSong;
  if (!song || !song.lines || song.lines.length === 0) return;

  // Resilient reverse-order search: Find the latest line whose start time has arrived!
  // This guarantees that if a line starts at 1m52s (112s) or 2m16s (136s), it transitions IMMEDIATELY,
  // without being blocked or suppressed by previous lines' end times.
  let activeIndex = -1;
  for (let i = song.lines.length - 1; i >= 0; i--) {
    const curLine = song.lines[i];
    if (currentTime >= curLine.start) {
      const isLast = (i === song.lines.length - 1);
      const nextStart = isLast ? (song.duration || 9999) : song.lines[i + 1].start;
      const lineEnd = Math.max(curLine.end || 0, nextStart);

      if (currentTime < lineEnd) {
        activeIndex = i;
      }
      break;
    }
  }

  // If in early intro or before line 0 end, default to line 0 so subtitle is always visible
  if (activeIndex < 0 && song.lines && song.lines.length > 0 && currentTime < (song.lines[0].end || 5.0)) {
    activeIndex = 0;
  }

  if (activeIndex !== worshipStudioState.currentLineIndex) {
    worshipStudioState.currentLineIndex = activeIndex;
    displayOverlaySubtitle(activeIndex >= 0 ? song.lines[activeIndex] : null);
    highlightLyricStreamRow(activeIndex);
    updateSubtitleControlBar();
  }
}

// Display Subtitle on Stage / Zoom Screen Overlay
function displayOverlaySubtitle(lineObj) {
  const overlay = document.getElementById('studioLiveSubtitle');
  if (!overlay) return;

  if (worshipStudioState.isSubtitleHidden || !lineObj) {
    overlay.innerHTML = '';
    overlay.classList.remove('visible');
    return;
  }

  overlay.innerHTML = `
    <div class="sub-line-kr">${escapeHtml(lineObj.kr)}</div>
    <div class="sub-line-en">${escapeHtml(lineObj.en || '')}</div>
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
    <div class="lyric-row" id="lyricRow_${idx}" onclick="onLyricRowClick(${idx})" title="클릭하여 대형 자막에 즉시 송출">
      <div class="lyric-time-badge">${formatTime(line.start)}</div>
      <div class="lyric-text-block">
        <div class="lyric-kr-text">${escapeHtml(line.kr)}</div>
        <div class="lyric-en-text">${escapeHtml(line.en)}</div>
      </div>
      <button type="button" class="lyric-play-btn" onclick="event.stopPropagation(); jumpToLyricTime(${line.start});" title="이 소절 시간으로 음원 이동">▶ 이동</button>
    </div>
  `).join('');
}

function onLyricRowClick(idx) {
  // In manual mode, clicking the line sets the overlay subtitle immediately without interrupting audio!
  if (worshipStudioState.subtitleMode === 'manual') {
    setSubtitleLine(idx, false);
  } else {
    // In auto mode, also jump audio
    setSubtitleLine(idx, true);
  }
}

function highlightLyricStreamRow(idx) {
  document.querySelectorAll('.lyric-row').forEach(row => row.classList.remove('active-row'));
  if (idx >= 0) {
    const row = document.getElementById(`lyricRow_${idx}`);
    const listEl = document.getElementById('studioLyricStreamList');
    if (row) {
      row.classList.add('active-row');
      // Scroll ONLY the inner lyrics stream list, NEVER the page or modal
      if (listEl) {
        const listRect = listEl.getBoundingClientRect();
        const rowRect = row.getBoundingClientRect();
        if (rowRect.top < listRect.top) {
          listEl.scrollTop -= (listRect.top - rowRect.top);
        } else if (rowRect.bottom > listRect.bottom) {
          listEl.scrollTop += (rowRect.bottom - listRect.bottom);
        }
      }
    }
  }
}

function jumpToLyricTime(seconds) {
  const song = worshipStudioState.currentSong;
  if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId) {
    if (ytStudioPlayer && typeof ytStudioPlayer.seekTo === 'function') {
      try {
        ytStudioPlayer.seekTo(seconds, true);
        ytStudioPlayer.playVideo();
      } catch(e) {}
    }
    const ifr = document.getElementById('studioYouTubePlayer');
    if (ifr && ifr.tagName === 'IFRAME' && ifr.contentWindow) {
      try {
        ifr.contentWindow.postMessage(`{"event":"command","func":"seekTo","args":[${seconds}, true]}`, '*');
        ifr.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      } catch(e) {}
    }
    startYtProgressTracker(seconds);
  } else {
    const video = document.getElementById('studioVideoPlayer');
    const audio = document.getElementById('studioAudioPlayer');
    const media = (video && video.style.display !== 'none') ? video : audio;
    if (media) {
      media.currentTime = seconds;
      media.play();
    }
  }
  updateActiveSubtitleLine(seconds);
}

// Expose subtitle navigation to global window
window.nextSubtitleLine = nextSubtitleLine;
window.prevSubtitleLine = prevSubtitleLine;
window.setSubtitleLine = setSubtitleLine;
window.toggleHideSubtitle = toggleHideSubtitle;
window.toggleSubtitleMode = toggleSubtitleMode;
window.updateSubtitleControlBar = updateSubtitleControlBar;
window.onLyricRowClick = onLyricRowClick;

// ========================================================
// 📌 ONE-CLICK: Set as Current Meeting Song for Step 1
// ========================================================
function setCurrentMeetingSong(songId) {
  stopAllMediaExcept(null);
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
  const btnPlayMeetingSongStudio = document.getElementById('btnPlayMeetingSongStudio');

  if (routineSub1) routineSub1.textContent = `${song.titleKo} (${song.titleEn})`;
  if (detailSongTitle) detailSongTitle.textContent = `${song.titleKo} (${song.titleEn})`;
  if (btnPlayMeetingSongStudio) btnPlayMeetingSongStudio.innerHTML = `▶️ ${song.titleKo} (자막 플레이어)`;
  if (detailSongContent && typeof routineContent !== 'undefined') {
    detailSongContent.innerHTML = routineContent.step1.content.replace(/\n/g, '<br>');
  }
  if (detailSongLinkArea) {
    const linkUrl = song.videoUrl || (song.videoId ? `https://www.youtube.com/watch?v=${song.videoId}` : (song.audioUrl || ''));
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

function openCurrentMeetingPraiseStudio() {
  let targetId = 'amazing-grace';
  if (typeof routineContent !== 'undefined' && routineContent.step1?.songTitle) {
    const title = routineContent.step1.songTitle;
    const pool = (worshipStudioState.allSongs && worshipStudioState.allSongs.length > 0) ? worshipStudioState.allSongs : PRESET_PRAISE_SONGS;
    const matched = pool.find(s => 
      title.includes(s.titleKo) || (s.titleEn && title.includes(s.titleEn))
    );
    if (matched) targetId = matched.id;
  }
  openWorshipStudio(targetId);
}
window.openCurrentMeetingPraiseStudio = openCurrentMeetingPraiseStudio;

// Tab Switching
function switchStudioTab(tab) {
  worshipStudioState.activeTab = tab;
  const playerTab = document.getElementById('studioTabPlayer');
  const creatorTab = document.getElementById('studioTabCreator');
  const playerSec = document.getElementById('studioSectionPlayer');
  const creatorSec = document.getElementById('studioSectionCreator');
  const syncAudio = document.getElementById('creatorSyncAudio');

  if (tab === 'player') {
    playerTab?.classList.add('active');
    creatorTab?.classList.remove('active');
    if (playerSec) {
      playerSec.style.display = 'block';
      playerSec.style.position = '';
      playerSec.style.left = '';
      playerSec.style.top = '';
      playerSec.style.opacity = '';
      playerSec.style.pointerEvents = '';
      playerSec.style.height = '';
      playerSec.style.overflow = '';
    }
    if (creatorSec) creatorSec.style.display = 'none';
    if (syncAudio) {
      try { syncAudio.pause(); } catch(e) {}
    }
    pauseSyncAudio();
  } else {
    creatorTab?.classList.add('active');
    playerTab?.classList.remove('active');
    if (playerSec) {
      // Keep playerSec in DOM offscreen so YouTube player audio continues without being killed by display:none
      playerSec.style.display = 'block';
      playerSec.style.position = 'absolute';
      playerSec.style.left = '-9999px';
      playerSec.style.top = '-9999px';
      playerSec.style.opacity = '0';
      playerSec.style.pointerEvents = 'none';
      playerSec.style.height = '1px';
      playerSec.style.overflow = 'hidden';
    }
    if (creatorSec) creatorSec.style.display = 'block';
    
    stopAllMediaExcept(null);

    // Auto load current song into editor if empty or song changed
    const curSong = worshipStudioState.currentSong;
    if (!worshipStudioState.editingSongId || (curSong && worshipStudioState.editingSongId !== curSong.id)) {
      loadCurrentSongIntoEditor();
    } else if (curSong) {
      setupCreatorSyncAudio(curSong);
    }
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
    const isStandalone = !modal;
    const isModalActive = modal && modal.classList.contains('active');
    if (!isStandalone && !isModalActive) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const song = worshipStudioState.currentSong;
    const video = document.getElementById('studioVideoPlayer');
    const audio = document.getElementById('studioAudioPlayer');
    const media = (video && video.style.display !== 'none') ? video : audio;

    // 1. Fullscreen
    if (e.code === 'KeyF') {
      e.preventDefault();
      toggleStudioFullscreen();
      return;
    }

    // 2. Hide / Show Subtitles (Interlude/Intro/Prayer)
    if (e.code === 'KeyC') {
      e.preventDefault();
      toggleHideSubtitle();
      return;
    }

    // 3. Subtitle Mode Toggle (Manual <-> Auto)
    if (e.code === 'KeyM') {
      e.preventDefault();
      toggleSubtitleMode();
      return;
    }

    // 4. Subtitle Navigation / Slide Advance
    // Right Arrow, PageDown, Enter advance lyrics
    if ((e.code === 'ArrowRight' && !e.shiftKey) || e.code === 'PageDown' || (e.code === 'Enter' && !e.shiftKey && !e.ctrlKey)) {
      e.preventDefault();
      nextSubtitleLine();
      return;
    }
    // Left Arrow, PageUp go to previous lyric
    if ((e.code === 'ArrowLeft' && !e.shiftKey) || e.code === 'PageUp') {
      e.preventDefault();
      prevSubtitleLine();
      return;
    }

    // 5. Shift + Arrow: Media Seek 5s
    if (e.code === 'ArrowRight' && e.shiftKey) {
      e.preventDefault();
      if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
        try {
          ytStudioPlayer.seekTo(ytStudioPlayer.getCurrentTime() + 5, true);
        } catch(err) {}
      } else if (media) {
        media.currentTime = Math.min(media.duration || 9999, media.currentTime + 5);
      }
      return;
    }
    if (e.code === 'ArrowLeft' && e.shiftKey) {
      e.preventDefault();
      if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
        try {
          ytStudioPlayer.seekTo(Math.max(0, ytStudioPlayer.getCurrentTime() - 5), true);
        } catch(err) {}
      } else if (media) {
        media.currentTime = Math.max(0, media.currentTime - 5);
      }
      return;
    }

    // 6. Live Tap Sync: [T] key
    if (e.code === 'KeyT') {
      e.preventDefault();
      if (worshipStudioState.activeTab === 'creator') {
        recordCurrentLineSync();
      } else {
        stageQuickSyncCurrentLine();
      }
      return;
    }

    // 7. Space: Play / Pause Music (or Tap Sync if in Creator tab)
    if (e.code === 'Space') {
      e.preventDefault();
      if (worshipStudioState.activeTab === 'creator') {
        recordCurrentLineSync();
      } else {
        toggleStudioPlayPause();
      }
      return;
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
  } else if (song.audioUrl) {
    const a = document.createElement('a');
    a.href = song.audioUrl;
    a.download = `${song.titleKo.replace(/[^a-zA-Z0-9가-힣]/g, '_')}_고음질음원.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showStudioToast(`📥 '${song.titleKo}' 고음질 MP3 음원 다운로드를 시작합니다.`);
  } else {
    showStudioToast(`💡 이 찬양의 미디어 파일이 준비 중입니다.`);
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

// ========================================================
// ⚡ LIVE TAP SYNC & SUBTITLE TIMING ENGINE
// ========================================================
worshipStudioState.syncTargetIndex = 0;
worshipStudioState.previewingRowIdx = -1;
worshipStudioState.syncAudioMode = 'local'; // 'local' | 'youtube'

function setupCreatorSyncAudio(song) {
  const audio = document.getElementById('creatorSyncAudio');
  if (!audio) return;
  if (!song) song = worshipStudioState.currentSong || PRESET_PRAISE_SONGS[0];

  let audioSrc = song.audioUrl || song.videoUrl || '';
  const badge = document.getElementById('syncAudioSourceBadge');

  if (audioSrc) {
    worshipStudioState.syncAudioMode = 'local';
    if (badge) {
      badge.innerHTML = `🎵 수록 음원 연동 <span style="opacity: 0.8; font-weight: normal;">(${song.titleKo || '찬양'})</span>`;
      badge.style.color = '#38bdf8';
      badge.style.background = 'rgba(56, 189, 248, 0.15)';
    }

    audio.muted = false;
    audio.volume = 1.0;

    const curSrc = audio.getAttribute('src') || '';
    if (!curSrc || (!audio.src.includes(audioSrc) && !audio.src.endsWith(audioSrc))) {
      audio.src = audioSrc;
      audio.load();
    }

    audio.onerror = (e) => {
      console.warn('creatorSyncAudio load error:', e, 'trying fallback paths');
      if (audio.src.includes('assets/')) {
        const rootPath = audioSrc.replace('assets/', '');
        audio.src = rootPath;
        audio.load();
      } else if (song.videoId) {
        worshipStudioState.syncAudioMode = 'youtube';
        if (badge) {
          badge.innerHTML = `📺 YouTube 공식 영상 음원 연동 <span style="opacity: 0.8; font-weight: normal;">(${song.titleKo || '찬양'})</span>`;
          badge.style.color = '#f59e0b';
          badge.style.background = 'rgba(245, 158, 11, 0.15)';
        }
        showStudioToast('💡 오디오 파일 대신 YouTube 공식 영상 음원으로 자동 전환되었습니다.');
      }
    };
  } else if (song.videoId) {
    worshipStudioState.syncAudioMode = 'youtube';
    if (audio) {
      try { audio.pause(); audio.src = ''; } catch(e) {}
    }
    if (badge) {
      badge.innerHTML = `📺 YouTube 공식 영상 음원 연동 <span style="opacity: 0.8; font-weight: normal;">(${song.titleKo || '찬양'})</span>`;
      badge.style.color = '#f59e0b';
      badge.style.background = 'rgba(245, 158, 11, 0.15)';
    }
    if (!ytStudioPlayer) {
      mountYouTubePlayer(song.videoId, false);
    }
  }

  worshipStudioState.syncTargetIndex = 0;
  worshipStudioState.previewingRowIdx = -1;
  updateSyncTargetDisplay();
  updateRowListenButtons(-1, false);

  audio.ontimeupdate = () => {
    if (worshipStudioState.syncAudioMode === 'youtube') return;
    const cur = audio.currentTime;
    const dur = audio.duration || song.duration || 180;
    const curEl = document.getElementById('syncCurTime');
    const totEl = document.getElementById('syncTotalTime');
    const seekEl = document.getElementById('syncSeekBar');

    if (curEl) curEl.textContent = formatTime(cur) + '.' + Math.floor((cur % 1) * 10);
    if (totEl) totEl.textContent = formatTime(dur);
    if (seekEl && dur > 0) {
      seekEl.value = (cur / dur) * 100;
    }
  };

  audio.onplay = () => {
    updateSyncPlayBtnState(true);
  };
  audio.onpause = () => {
    updateSyncPlayBtnState(false);
    updateRowListenButtons(-1, false);
  };
  audio.onended = () => {
    updateSyncPlayBtnState(false);
    updateRowListenButtons(-1, false);
    worshipStudioState.previewingRowIdx = -1;
  };
}

function updateSyncPlayBtnState(isPlaying) {
  const icon = document.getElementById('syncPlayPauseIcon');
  const text = document.getElementById('syncPlayPauseText');
  const btn = document.getElementById('btnSyncPlayPause');
  if (icon) icon.textContent = isPlaying ? '⏸️' : '▶️';
  if (text) text.textContent = isPlaying ? '일시정지' : '음악 재생';
  if (btn) {
    btn.style.background = isPlaying ? 'linear-gradient(135deg, #f59e0b, #d97706)' : '';
  }
}

function updateRowListenButtons(activeIdx, isPlaying) {
  const rows = document.querySelectorAll('.creator-line-row');
  rows.forEach((r, idx) => {
    const btn = r.querySelector('.btn-row-listen');
    if (!btn) return;
    if (idx === activeIdx && isPlaying) {
      btn.innerHTML = '⏹ 멈춤';
      btn.classList.add('playing');
      btn.title = '재생 멈추기 (클릭 시 일시정지)';
    } else {
      btn.innerHTML = '▶ 듣기';
      btn.classList.remove('playing');
      btn.title = '이 소절부터 음악 재생';
    }
  });
}

function isSyncAudioPlaying() {
  const audio = document.getElementById('creatorSyncAudio');
  if (worshipStudioState.syncAudioMode === 'youtube') {
    if (ytStudioPlayer && typeof ytStudioPlayer.getPlayerState === 'function') {
      return ytStudioPlayer.getPlayerState() === 1;
    }
    return worshipStudioState.isYtPlaying === true;
  }
  return audio && !audio.paused && !audio.ended && audio.currentTime > 0;
}

function pauseSyncAudio() {
  const audio = document.getElementById('creatorSyncAudio');
  if (audio && !audio.paused) {
    try { audio.pause(); } catch(e) {}
  }
  if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
    try { ytStudioPlayer.pauseVideo(); } catch(e) {}
  }
  const ifr = document.getElementById('studioYouTubePlayer');
  if (ifr && ifr.tagName === 'IFRAME' && ifr.contentWindow) {
    try { ifr.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'); } catch(e) {}
  }
  worshipStudioState.previewingRowIdx = -1;
  updateSyncPlayBtnState(false);
  updateRowListenButtons(-1, false);
}

function playSyncAudioAt(targetSec, targetIdx = -1) {
  const audio = document.getElementById('creatorSyncAudio');
  const song = worshipStudioState.currentSong;
  if (!audio) return;

  targetSec = Math.max(0, Math.round(targetSec * 10) / 10);
  worshipStudioState.previewingRowIdx = targetIdx;

  let localSrc = song?.audioUrl || song?.videoUrl || '';

  // 1. Local HTML5 Audio Playback
  if (localSrc && worshipStudioState.syncAudioMode !== 'youtube') {
    stopAllMediaExcept(audio);
    audio.muted = false;
    audio.volume = 1.0;

    const curSrc = audio.getAttribute('src') || '';
    if (!curSrc || (!audio.src.includes(localSrc) && !audio.src.endsWith(localSrc))) {
      audio.src = localSrc;
      audio.load();
    }

    const doPlay = () => {
      try {
        if (audio.readyState >= 1) {
          audio.currentTime = targetSec;
        }
      } catch (err) {
        console.warn('currentTime seek error:', err);
      }

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          try { audio.currentTime = targetSec; } catch (e) {}
          updateSyncPlayBtnState(true);
          if (targetIdx >= 0) {
            worshipStudioState.syncTargetIndex = targetIdx;
            updateSyncTargetDisplay();
            updateRowListenButtons(targetIdx, true);
            showStudioToast(`🔊 [#${targetIdx + 1}] 소절 (${formatTime(targetSec)}) 재생 중...`);
          }
        }).catch(err => {
          console.warn('Local audio play failed, trying YouTube fallback:', err);
          if (song && song.videoId) {
            worshipStudioState.syncAudioMode = 'youtube';
            playYouTubeSyncAudio(song.videoId, targetSec, targetIdx);
          } else {
            showStudioToast('⚠️ 음원을 재생할 수 없습니다. 화면을 한 번 클릭한 뒤 다시 눌러주세요.');
          }
        });
      }
    };

    if (audio.readyState >= 1) {
      doPlay();
    } else {
      showStudioToast('⏳ 음원 로딩 중... 잠시만 기다려주세요.');
      const onReady = () => {
        audio.removeEventListener('loadedmetadata', onReady);
        audio.removeEventListener('canplay', onReady);
        doPlay();
      };
      audio.addEventListener('loadedmetadata', onReady, { once: true });
      audio.addEventListener('canplay', onReady, { once: true });
      setTimeout(() => {
        if (audio.paused && worshipStudioState.previewingRowIdx === targetIdx) {
          doPlay();
        }
      }, 500);
    }
    return;
  }

  // 2. YouTube Audio Playback (for YouTube-only songs or when local audio is absent)
  if (song && song.videoId) {
    worshipStudioState.syncAudioMode = 'youtube';
    playYouTubeSyncAudio(song.videoId, targetSec, targetIdx);
    return;
  }

  showStudioToast('⚠️ 재생할 수 있는 음원 또는 영상이 없습니다.');
}

function playYouTubeSyncAudio(videoId, targetSec, targetIdx = -1) {
  stopAllMediaExcept('studioYouTube');
  targetSec = Math.max(0, targetSec);

  const doYtPlay = () => {
    if (ytStudioPlayer && typeof ytStudioPlayer.seekTo === 'function') {
      try {
        const curUrl = (typeof ytStudioPlayer.getVideoUrl === 'function') ? (ytStudioPlayer.getVideoUrl() || '') : '';
        if (videoId && !curUrl.includes(videoId)) {
          if (typeof ytStudioPlayer.loadVideoById === 'function') {
            ytStudioPlayer.loadVideoById({ videoId: videoId, startSeconds: targetSec });
          } else {
            mountYouTubePlayer(videoId, true);
            return false;
          }
        } else {
          ytStudioPlayer.seekTo(targetSec, true);
          ytStudioPlayer.playVideo();
        }
        updateSyncPlayBtnState(true);
        if (targetIdx >= 0) {
          worshipStudioState.syncTargetIndex = targetIdx;
          updateSyncTargetDisplay();
          updateRowListenButtons(targetIdx, true);
          showStudioToast(`📺 [#${targetIdx + 1}] YouTube 찬양 (${formatTime(targetSec)}) 듣기 재생 중...`);
        }
        startYtSyncProgressTracker();
        return true;
      } catch (e) {
        console.warn('ytStudioPlayer control error:', e);
      }
    }
    return false;
  };

  if (!doYtPlay()) {
    mountYouTubePlayer(videoId, true);
    setTimeout(() => {
      doYtPlay();
    }, 1200);
  }
}

function startYtSyncProgressTracker() {
  if (worshipStudioState.ytSyncStudioTimer) clearInterval(worshipStudioState.ytSyncStudioTimer);
  worshipStudioState.ytSyncStudioTimer = setInterval(() => {
    if (worshipStudioState.activeTab !== 'creator') return;
    let cur = 0;
    if (ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
      cur = ytStudioPlayer.getCurrentTime() || 0;
    }
    const song = worshipStudioState.currentSong;
    const dur = (ytStudioPlayer && typeof ytStudioPlayer.getDuration === 'function' && ytStudioPlayer.getDuration()) || song?.duration || 180;
    
    const curEl = document.getElementById('syncCurTime');
    const totEl = document.getElementById('syncTotalTime');
    const seekEl = document.getElementById('syncSeekBar');
    if (curEl) curEl.textContent = formatTime(cur) + '.' + Math.floor((cur % 1) * 10);
    if (totEl) totEl.textContent = formatTime(dur);
    if (seekEl && dur > 0) {
      seekEl.value = (cur / dur) * 100;
    }
  }, 100);
}

function toggleSyncAudioPlayPause() {
  if (isSyncAudioPlaying()) {
    pauseSyncAudio();
    showStudioToast('⏸️ 음악이 일시정지되었습니다.');
  } else {
    const audio = document.getElementById('creatorSyncAudio');
    const isYt = (worshipStudioState.syncAudioMode === 'youtube');
    let curTime = 0;
    if (isYt && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
      curTime = ytStudioPlayer.getCurrentTime() || 0;
    } else if (audio) {
      curTime = audio.currentTime || 0;
    }
    playSyncAudioAt(curTime, worshipStudioState.syncTargetIndex);
  }
}
window.toggleSyncAudioPlayPause = toggleSyncAudioPlayPause;

function seekSyncAudio(deltaSec, isAbsolute = false) {
  const audio = document.getElementById('creatorSyncAudio');
  const isYt = (worshipStudioState.syncAudioMode === 'youtube');
  const song = worshipStudioState.currentSong;

  let targetTime = 0;
  if (isYt && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
    const cur = ytStudioPlayer.getCurrentTime() || 0;
    const dur = ytStudioPlayer.getDuration() || song?.duration || 180;
    targetTime = isAbsolute ? deltaSec : Math.max(0, Math.min(dur, cur + deltaSec));
    try { ytStudioPlayer.seekTo(targetTime, true); } catch(e) {}
  } else if (audio) {
    const dur = audio.duration || song?.duration || 180;
    targetTime = isAbsolute ? deltaSec : Math.max(0, Math.min(dur, audio.currentTime + deltaSec));
    try {
      if (audio.readyState >= 1) {
        audio.currentTime = targetTime;
      }
    } catch (e) {}
  }

  const curEl = document.getElementById('syncCurTime');
  if (curEl) curEl.textContent = formatTime(targetTime) + '.' + Math.floor((targetTime % 1) * 10);
  
  if (isAbsolute && deltaSec === 0) {
    showStudioToast('⏮️ 처음부터 재생 준비');
  } else if (!isAbsolute) {
    showStudioToast(`⏩ ${deltaSec > 0 ? '+' : ''}${deltaSec}초 이동`);
  }
}
window.seekSyncAudio = seekSyncAudio;

function onSyncSeekChange(percent) {
  const audio = document.getElementById('creatorSyncAudio');
  const isYt = (worshipStudioState.syncAudioMode === 'youtube');
  const song = worshipStudioState.currentSong;
  const dur = (isYt && ytStudioPlayer && typeof ytStudioPlayer.getDuration === 'function' && ytStudioPlayer.getDuration()) 
              || (audio && audio.duration) 
              || song?.duration 
              || 180;
  const target = (percent / 100) * dur;
  seekSyncAudio(target, true);
}
window.onSyncSeekChange = onSyncSeekChange;

function updateSyncTargetDisplay() {
  const rows = document.querySelectorAll('.creator-line-row');
  const container = document.getElementById('creatorLinesList') || document.querySelector('.creator-lines-wrapper');
  rows.forEach((r, idx) => {
    if (idx === worshipStudioState.syncTargetIndex) {
      r.classList.add('active-sync-target');
      if (container) {
        const cRect = container.getBoundingClientRect();
        const rRect = r.getBoundingClientRect();
        if (rRect.top < cRect.top) {
          container.scrollTop -= (cRect.top - rRect.top);
        } else if (rRect.bottom > cRect.bottom) {
          container.scrollTop += (rRect.bottom - cRect.bottom);
        }
      }
    } else {
      r.classList.remove('active-sync-target');
    }
  });

  const targetTitle = document.getElementById('syncTargetTitle');
  if (!targetTitle) return;

  if (worshipStudioState.syncTargetIndex >= rows.length) {
    targetTitle.textContent = '🎉 모든 소절 싱크 완료! 하단 [자막 저장]을 눌러주세요.';
    targetTitle.style.color = '#34d399';
  } else {
    const activeRow = rows[worshipStudioState.syncTargetIndex];
    const krVal = activeRow ? activeRow.querySelector('.kr-input')?.value : '';
    const enVal = activeRow ? activeRow.querySelector('.en-input')?.value : '';
    targetTitle.textContent = `#${worshipStudioState.syncTargetIndex + 1} ${krVal || enVal || '소절'}`;
    targetTitle.style.color = '#f8fafc';
  }
}

// Record current audio time as the start of the targeted line
function recordCurrentLineSync() {
  const audio = document.getElementById('creatorSyncAudio');
  const isYt = (worshipStudioState.syncAudioMode === 'youtube');
  let curTime = 0;
  if (isYt && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
    curTime = ytStudioPlayer.getCurrentTime() || 0;
  } else if (audio) {
    curTime = audio.currentTime || 0;
  }
  curTime = Math.round(curTime * 10) / 10;
  const rows = document.querySelectorAll('.creator-line-row');
  const idx = worshipStudioState.syncTargetIndex;

  if (idx >= rows.length) {
    showStudioToast('🎉 모든 소절 싱크가 입력되었습니다! [자막 저장]을 눌러 적용하세요.');
    return;
  }

  const curRow = rows[idx];
  const startInput = curRow.querySelector('.start-time');
  const endInput = curRow.querySelector('.end-time');
  const song = worshipStudioState.currentSong;
  if (startInput) startInput.value = curTime;
  
  const isLast = (idx === rows.length - 1);
  const defEnd = isLast ? Math.max(curTime + 20, Math.round((song?.duration || curTime + 30) * 10) / 10) : Math.round((curTime + 15) * 10) / 10;
  if (endInput) endInput.value = defEnd;

  // Set previous line end time
  if (idx > 0) {
    const prevRow = rows[idx - 1];
    const prevEndInput = prevRow.querySelector('.end-time');
    if (prevEndInput) prevEndInput.value = curTime;
  }

  showStudioToast(`⏱️ [소절 #${idx + 1}] 시작: ${formatTime(curTime)} 확정!`);

  worshipStudioState.syncTargetIndex = idx + 1;
  updateSyncTargetDisplay();
}
window.recordCurrentLineSync = recordCurrentLineSync;

function rewindSyncToPrevLine() {
  if (worshipStudioState.syncTargetIndex > 0) {
    worshipStudioState.syncTargetIndex--;
    updateSyncTargetDisplay();
    const rows = document.querySelectorAll('.creator-line-row');
    const row = rows[worshipStudioState.syncTargetIndex];
    if (row) {
      const st = parseFloat(row.querySelector('.start-time')?.value) || 0;
      seekSyncAudio(Math.max(0, st - 2), true);
    }
    showStudioToast(`↩️ [#${worshipStudioState.syncTargetIndex + 1}] 소절로 돌아갔습니다.`);
  }
}
window.rewindSyncToPrevLine = rewindSyncToPrevLine;

function previewLineAudio(idx) {
  const rows = document.querySelectorAll('.creator-line-row');
  const row = rows[idx];
  if (!row) return;

  const st = parseFloat(row.querySelector('.start-time')?.value) || 0;

  // Toggle behavior: If this exact row is currently playing, clicking it pauses!
  if (worshipStudioState.previewingRowIdx === idx && isSyncAudioPlaying()) {
    pauseSyncAudio();
    showStudioToast(`⏸️ [#${idx + 1}] 소절 듣기 일시정지`);
    return;
  }

  // Otherwise, start playing from this line's start time!
  playSyncAudioAt(st, idx);
}
window.previewLineAudio = previewLineAudio;

function stampRowCurrentTime(idx) {
  const audio = document.getElementById('creatorSyncAudio');
  if (!audio) return;
  const curTime = Math.round(audio.currentTime * 10) / 10;
  const rows = document.querySelectorAll('.creator-line-row');
  const row = rows[idx];
  if (!row) return;

  const startInput = row.querySelector('.start-time');
  if (startInput) startInput.value = curTime;

  if (idx > 0) {
    const prevRow = rows[idx - 1];
    const prevEnd = prevRow.querySelector('.end-time');
    if (prevEnd && parseFloat(prevEnd.value) > curTime) {
      prevEnd.value = curTime;
    }
  }
  showStudioToast(`⏱️ [#${idx + 1}] 시작 시간을 ${formatTime(curTime)}로 설정했습니다.`);
}
window.stampRowCurrentTime = stampRowCurrentTime;

function nudgeRowTime(idx, delta) {
  const rows = document.querySelectorAll('.creator-line-row');
  const row = rows[idx];
  if (!row) return;
  const startInput = row.querySelector('.start-time');
  const endInput = row.querySelector('.end-time');
  if (startInput) {
    const newVal = Math.max(0, Math.round((parseFloat(startInput.value || 0) + delta) * 10) / 10);
    startInput.value = newVal;
    if (endInput) {
      endInput.value = Math.max(newVal + 1, Math.round((parseFloat(endInput.value || 0) + delta) * 10) / 10);
    }
    showStudioToast(`[#${idx + 1}] 시작: ${newVal}초 (${delta > 0 ? '+' : ''}${delta}s)`);
  }
}
window.nudgeRowTime = nudgeRowTime;

// Stage Quick Sync during live playback on Tab 1
function stageQuickSyncCurrentLine() {
  const song = worshipStudioState.currentSong;
  if (!song || !song.lines || song.lines.length === 0) return;

  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  let curTime = 0;
  if (worshipStudioState.mediaMode === 'youtube' && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
    curTime = ytStudioPlayer.getCurrentTime() || 0;
  } else if (video && video.style.display !== 'none' && !video.paused) {
    curTime = video.currentTime || 0;
  } else if (audio && audio.style.display !== 'none' && !audio.paused) {
    curTime = audio.currentTime || 0;
  } else {
    curTime = (video && video.currentTime) || (audio && audio.currentTime) || 0;
  }

  curTime = Math.round(curTime * 10) / 10;
  const curIdx = Math.max(0, worshipStudioState.currentLineIndex);

  if (curIdx < song.lines.length) {
    song.lines[curIdx].start = curTime;
    if (curIdx > 0) {
      song.lines[curIdx - 1].end = curTime;
    }
    const isLast = (curIdx === song.lines.length - 1);
    song.lines[curIdx].end = isLast 
      ? Math.max(curTime + 20, song.duration || curTime + 30)
      : Math.max(curTime + 5, song.lines[curIdx].end || curTime + 15);

    // Save override to localStorage
    const overrides = JSON.parse(localStorage.getItem('arise_preset_lyrics_overrides') || '{}');
    overrides[song.id] = {
      lines: song.lines,
      duration: song.duration,
      titleKo: song.titleKo,
      titleEn: song.titleEn,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('arise_preset_lyrics_overrides', JSON.stringify(overrides));

    renderLyricStream(song);
    highlightLyricStreamRow(curIdx);
    showStudioToast(`⏱️ [소절 #${curIdx + 1}] 시작: ${formatTime(curTime)} 확정 & 자동 저장!`);

    // Advance to next line for the user
    if (curIdx < song.lines.length - 1) {
      worshipStudioState.currentLineIndex = curIdx + 1;
      displayOverlaySubtitle(song.lines[curIdx + 1]);
      updateSubtitleControlBar();
    }
  }
}
window.stageQuickSyncCurrentLine = stageQuickSyncCurrentLine;

function renderCreatorLineEditor(lines) {
  const container = document.getElementById('creatorLinesContainer');
  if (!container) return;

  container.innerHTML = lines.map((line, idx) => `
    <div class="creator-line-row" data-idx="${idx}" id="creatorLineRow_${idx}">
      <span class="line-num">#${idx + 1}</span>
      <div class="time-inputs" style="display: flex; flex-direction: column; gap: 0.25rem;">
        <div style="display: flex; align-items: center; gap: 0.25rem;">
          <input type="number" class="time-in start-time" value="${line.start}" step="0.5" title="시작 시간(초)">
          <span>~</span>
          <input type="number" class="time-in end-time" value="${line.end}" step="0.5" title="종료 시간(초)">
          <span class="unit">초</span>
        </div>
        <div class="row-actions-group">
          <button type="button" class="btn-row-action btn-row-listen" id="btnPreviewLine_${idx}" onclick="previewLineAudio(${idx})" title="이 소절부터 음악 재생">▶ 듣기</button>
          <button type="button" class="btn-row-action" onclick="stampRowCurrentTime(${idx})" title="현재 재생시간으로 설정">⏱️ 찍기</button>
          <button type="button" class="btn-row-action" onclick="nudgeRowTime(${idx}, -0.5)" title="0.5초 당기기">-0.5s</button>
          <button type="button" class="btn-row-action" onclick="nudgeRowTime(${idx}, 0.5)" title="0.5초 늦추기">+0.5s</button>
        </div>
      </div>
      <div class="lyric-inputs">
        <input type="text" class="lyric-in kr-input" value="${escapeHtml(line.kr)}" placeholder="한글 가사 (수정 가능)">
      </div>
      <div class="lyric-inputs">
        <input type="text" class="lyric-in en-input" value="${escapeHtml(line.en)}" placeholder="영어 가사 (English)">
      </div>
      <button type="button" class="btn-del-line" onclick="deleteCreatorLine(${idx})" title="이 소절 삭제">✕</button>
    </div>
  `).join('');

  updateSyncTargetDisplay();
}

function deleteCreatorLine(idx) {
  const row = document.querySelector(`.creator-line-row[data-idx="${idx}"]`) || document.getElementById(`creatorLineRow_${idx}`);
  if (!row) return;
  const kr = row.querySelector('.kr-input')?.value.trim() || '';
  if (kr) {
    if (!confirm(`소절 #${idx + 1} ("${kr}") 자막을 삭제하시겠습니까?`)) {
      return;
    }
  }
  row.remove();
  updateSyncTargetDisplay();
}

function addCreatorLine() {
  const container = document.getElementById('creatorLinesContainer');
  if (!container) return;
  const count = container.querySelectorAll('.creator-line-row').length;
  const newRow = document.createElement('div');
  newRow.className = 'creator-line-row';
  newRow.id = `creatorLineRow_${count}`;
  newRow.dataset.idx = count;
  newRow.innerHTML = `
    <span class="line-num">#${count + 1}</span>
    <div class="time-inputs" style="display: flex; flex-direction: column; gap: 0.25rem;">
      <div style="display: flex; align-items: center; gap: 0.25rem;">
        <input type="number" class="time-in start-time" value="${count * 15}" step="0.5">
        <span>~</span>
        <input type="number" class="time-in end-time" value="${(count + 1) * 15}" step="0.5">
        <span class="unit">초</span>
      </div>
      <div class="row-actions-group">
        <button type="button" class="btn-row-action btn-row-listen" id="btnPreviewLine_${count}" onclick="previewLineAudio(${count})" title="이 소절부터 음악 재생">▶ 듣기</button>
        <button type="button" class="btn-row-action" onclick="stampRowCurrentTime(${count})" title="현재 재생시간으로 설정">⏱️ 찍기</button>
        <button type="button" class="btn-row-action" onclick="nudgeRowTime(${count}, -0.5)" title="0.5초 당기기">-0.5s</button>
        <button type="button" class="btn-row-action" onclick="nudgeRowTime(${count}, 0.5)" title="0.5초 늦추기">+0.5s</button>
      </div>
    </div>
    <div class="lyric-inputs">
      <input type="text" class="lyric-in kr-input" placeholder="새 한글 가사">
    </div>
    <div class="lyric-inputs">
      <input type="text" class="lyric-in en-input" placeholder="New English Lyric">
    </div>
    <button type="button" class="btn-del-line" onclick="deleteCreatorLine(${count})" title="이 소절 삭제">✕</button>
  `;
  container.appendChild(newRow);
  updateSyncTargetDisplay();
}

// ========================================================
// Subtitle Editing & Custom Praise Song Storage
// ========================================================
function loadCurrentSongIntoEditor() {
  const song = worshipStudioState.currentSong;
  if (!song) return;

  worshipStudioState.editingSongId = song.id;

  const titleKrInput = document.getElementById('newSongTitleKr');
  const titleEnInput = document.getElementById('newSongTitleEn');
  const durationInput = document.getElementById('newSongDuration');
  const lyricsKrText = document.getElementById('newSongLyricsKr');
  const lyricsEnText = document.getElementById('newSongLyricsEn');
  const resetBtn = document.getElementById('btnResetPresetLyrics');
  const restoreBtn = document.getElementById('btnRestoreBackupLyrics');
  const saveBtn = document.getElementById('btnSaveCreatorSong');

  if (titleKrInput) titleKrInput.value = song.titleKo;
  if (titleEnInput) titleEnInput.value = song.titleEn;
  if (durationInput) durationInput.value = song.duration || 180;

  if (song.lines && song.lines.length > 0) {
    if (lyricsKrText) lyricsKrText.value = song.lines.map(l => l.kr).join('\n');
    if (lyricsEnText) lyricsEnText.value = song.lines.map(l => l.en).join('\n');
    renderCreatorLineEditor(song.lines);
  }

  const isPreset = PRESET_PRAISE_SONGS.some(p => p.id === song.id);
  let hasOverride = false;
  try {
    const overrides = JSON.parse(localStorage.getItem('arise_preset_lyrics_overrides') || '{}');
    if (overrides[song.id]) hasOverride = true;
  } catch (e) {}

  let hasBackup = false;
  try {
    if (localStorage.getItem(`arise_preset_lyrics_backup_${song.id}`)) {
      hasBackup = true;
    }
  } catch (e) {}

  if (resetBtn) {
    resetBtn.style.display = (isPreset && hasOverride) ? 'inline-flex' : 'none';
  }
  if (restoreBtn) {
    restoreBtn.style.display = (isPreset && hasBackup) ? 'inline-flex' : 'none';
  }
  if (saveBtn) {
    saveBtn.textContent = isPreset ? '💾 수정된 자막 저장 및 즉시 적용' : '💾 찬양 저장 및 즉시 재생';
  }

  setupCreatorSyncAudio(song);
  switchStudioTab('creator');
  showStudioToast(`⚡ '${song.titleKo}' 실시간 싱크 스튜디오가 준비되었습니다.`);
}
window.loadCurrentSongIntoEditor = loadCurrentSongIntoEditor;

function resetCurrentSongToDefaultLyrics() {
  const editingId = worshipStudioState.editingSongId || worshipStudioState.currentSong?.id;
  if (!editingId) return;

  const currentSong = worshipStudioState.currentSong;
  const songTitle = currentSong ? currentSong.titleKo : '현재 찬양';

  // 1. 실수 방지를 위한 안전 확인창 (더블 체크 안내)
  const confirmMsg = 
    `⚠️ [주의] 정말 '${songTitle}'의 자막을 기본값으로 초기화하시겠습니까?\n\n` +
    `• 그동안 시간 들여 정성껏 수정하신 모든 가사와 싱크 시간 데이터가 삭제되고 원래 기본값으로 되돌아갑니다.\n` +
    `• 실수로 초기화하더라도 언제든 [↩️ 이전 수정본 복구] 버튼으로 다시 되돌릴 수 있도록 안전 백업본이 자동 보관됩니다.\n\n` +
    `정말 초기화를 진행하시겠습니까? (취소하려면 [취소]를 누르세요)`;

  if (!confirm(confirmMsg)) {
    return;
  }

  // 2. 소중한 수정본 유실 방지를 위한 자동 안전 백업
  try {
    const overrides = JSON.parse(localStorage.getItem('arise_preset_lyrics_overrides') || '{}');
    if (overrides[editingId]) {
      localStorage.setItem(`arise_preset_lyrics_backup_${editingId}`, JSON.stringify({
        data: overrides[editingId],
        backedUpAt: new Date().toISOString()
      }));
      delete overrides[editingId];
      localStorage.setItem('arise_preset_lyrics_overrides', JSON.stringify(overrides));
    }
  } catch (e) {
    console.error("Backup failed:", e);
  }

  loadCustomSongs();
  selectWorshipSong(editingId, null, false);
  loadCurrentSongIntoEditor();
  showStudioToast("🔄 원래 기본 찬양 자막으로 복원되었습니다. (필요 시 [↩️ 이전 수정본 복구] 버튼으로 되돌릴 수 있습니다)");
}
window.resetCurrentSongToDefaultLyrics = resetCurrentSongToDefaultLyrics;

function restoreBackupLyrics() {
  const editingId = worshipStudioState.editingSongId || worshipStudioState.currentSong?.id;
  if (!editingId) return;

  try {
    const raw = localStorage.getItem(`arise_preset_lyrics_backup_${editingId}`);
    if (!raw) {
      alert("복구할 수 있는 이전 수정 백업 데이터가 없습니다.");
      return;
    }
    const backupObj = JSON.parse(raw);
    const backupData = backupObj.data || backupObj;
    const currentSong = worshipStudioState.currentSong;
    const songTitle = currentSong ? currentSong.titleKo : '현재 찬양';
    const timeStr = backupObj.backedUpAt ? new Date(backupObj.backedUpAt).toLocaleTimeString() : '최근';

    const confirmRestore = confirm(
      `↩️ '${songTitle}'의 이전 수정본을 복구하시겠습니까?\n\n` +
      `• 백업 시각: ${timeStr}\n` +
      `• 복구 소절 수: ${backupData.lines?.length || 0}개 소절\n\n` +
      `[확인]을 누르시면 이전에 직접 수정하셨던 가사와 싱크 시간이 즉시 복원됩니다.`
    );
    if (!confirmRestore) return;

    let overrides = JSON.parse(localStorage.getItem('arise_preset_lyrics_overrides') || '{}');
    overrides[editingId] = backupData;
    localStorage.setItem('arise_preset_lyrics_overrides', JSON.stringify(overrides));

    loadCustomSongs();
    selectWorshipSong(editingId, null, false);
    loadCurrentSongIntoEditor();
    showStudioToast(`✨ '${songTitle}' 이전 수정 자막이 성공적으로 복구되었습니다!`);
  } catch (e) {
    console.error("Failed to restore backup:", e);
    alert("백업 데이터를 복구하는 중 오류가 발생했습니다.");
  }
}
window.restoreBackupLyrics = restoreBackupLyrics;

// Save Custom Praise Song or Preset Subtitle Overrides
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

  // Sort lines chronologically by start time
  lines.sort((a, b) => a.start - b.start);

  // Normalize contiguous boundaries: every line ends when the next line begins
  for (let i = 0; i < lines.length - 1; i++) {
    if (lines[i + 1].start > lines[i].start) {
      lines[i].end = lines[i + 1].start;
    }
  }

  const inputDur = parseFloat(document.getElementById('newSongDuration')?.value) || 0;
  const songDur = worshipStudioState.currentSong?.duration || 164;
  const targetDur = Math.max(inputDur, songDur, lines.length > 0 ? (lines[lines.length - 1].start + 25) : 180);
  if (lines.length > 0) {
    lines[lines.length - 1].end = targetDur;
  }

  const editingId = worshipStudioState.editingSongId;
  const isPreset = editingId && PRESET_PRAISE_SONGS.some(p => p.id === editingId);

  if (isPreset) {
    // 1. 공식 찬양(기존 찬양)의 자막 수정 오버라이드 저장
    let overrides = {};
    try {
      overrides = JSON.parse(localStorage.getItem('arise_preset_lyrics_overrides') || '{}');
    } catch (e) {}

    overrides[editingId] = {
      lines: lines,
      duration: targetDur,
      titleKo: titleKr,
      titleEn: titleEn,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem('arise_preset_lyrics_overrides', JSON.stringify(overrides));

    loadCustomSongs();
    selectWorshipSong(editingId, null, false);
    // Switch to auto sync mode so subtitles follow the newly synced timestamps!
    worshipStudioState.subtitleMode = 'auto';
    updateSubtitleControlBar();
    switchStudioTab('player');
    showStudioToast(`✨ '${titleKr}' 자막이 성공적으로 수정되어 [자동 싱크 모드]로 즉시 적용되었습니다!`);
    worshipStudioState.editingSongId = null;
    return;
  }

  // 2. 신규 찬양 또는 기존 커스텀 찬양 저장
  const songId = (editingId && editingId.startsWith('custom_')) ? editingId : `custom_${Date.now()}`;
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
  const existingIdx = list.findIndex(s => s.id === songId);
  if (existingIdx >= 0) {
    list[existingIdx] = newSong;
  } else {
    list.unshift(newSong);
  }
  localStorage.setItem('arise_custom_praise_songs', JSON.stringify(list));

  loadCustomSongs();
  populateSongSelector(songId);
  selectWorshipSong(songId);
  switchStudioTab('player');
  showStudioToast(`🎉 찬양 '${titleKr}'이 저장되었습니다! 줌 플레이어에서 바로 확인하실 수 있습니다.`);
  worshipStudioState.editingSongId = null;
}
window.saveCustomPraiseSong = saveCustomPraiseSong;

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
window.populateSongSelector = populateSongSelector;
window.loadCustomSongs = loadCustomSongs;


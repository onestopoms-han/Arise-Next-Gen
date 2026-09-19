/**
 * Arise Next-Gen Worship Subtitle Studio & Player (찬양 자막 스튜디오 & 플레이어)
 * 한/영 찬양 자막 영상 재생, 줌(Zoom) 화면공유 최적화, 가사 싱크 및 커스텀 찬양 제작 도구
 */

// 1. Preset Worship Songs Data (10곡 대표 라이브러리 - 전곡 풀타임 싱크 완비)
const PRESET_PRAISE_SONGS = [
  {
    "id": "amazing-grace",
    "titleKo": "나 같은 죄인 살리신 (찬송가 305장)",
    "titleEn": "Amazing Grace (Hymn 305)",
    "artist": "John Newton • 전통 찬송가",
    "category": "hymn",
    "videoUrl": "assets/amazing_grace_bilingual.mp4",
    "audioUrl": "assets/amazing_grace.mp3",
    "srtUrl": "assets/amazing_grace.srt",
    "lrcUrl": "assets/amazing_grace.lrc",
    "videoId": "",
    "duration": 170,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.5, "end": 5.0, "kr": "🎵 나 같은 죄인 살리신 (찬송가 305장)", "en": "Amazing Grace (Hymn 305) - Arise Next Gen" },
      { "start": 5.0, "end": 25.0, "kr": "[1절] 나 같은 죄인 살리신 주 은혜 놀라워", "en": "Amazing grace! how sweet the sound That saved a wretch like me!" },
      { "start": 25.0, "end": 45.0, "kr": "잃었던 생명 찾았고 광명을 얻었네", "en": "I once was lost, but now am found, Was blind, but now I see." },
      { "start": 45.0, "end": 65.0, "kr": "[2절] 큰 죄악에서 건지신 주 은혜 고마워", "en": "'Twas grace that taught my heart to fear, And grace my fears relieved;" },
      { "start": 65.0, "end": 85.0, "kr": "나 처음 믿은 그 시간 귀하고 귀하다", "en": "How precious did that grace appear The hour I first believed!" },
      { "start": 85.0, "end": 105.0, "kr": "[3절] 이제껏 내가 산 것도 주님의 은혜라", "en": "Through many dangers, toils and snares, I have already come;" },
      { "start": 105.0, "end": 125.0, "kr": "또 나를 장차 본향에 인도해 주시리", "en": "'Tis grace hath brought me safe thus far, And grace will lead me home." },
      { "start": 125.0, "end": 145.0, "kr": "[4절] 거기서 우리 영원히 주님의 은혜로", "en": "When we've been there ten thousand years, Bright shining as the sun," },
      { "start": 145.0, "end": 165.0, "kr": "해처럼 밝게 살면서 주 찬양 하리라", "en": "We've no less days to sing God's praise Than when we'd first begun." },
      { "start": 165.0, "end": 170.0, "kr": "🕊️ 주님의 은혜에 감사드립니다 · 아멘", "en": "Giving Thanks to God's Abundant Grace · Amen" }
    ]
  },
  {
    "id": "way-maker",
    "titleKo": "Way Maker (길을 만드시는 분)",
    "titleEn": "Way Maker",
    "artist": "Sinach / Leeland • 전 세계 대표 찬양",
    "category": "global",
    "videoUrl": "assets/way_maker.mp4",
    "audioUrl": "assets/way_maker.mp3",
    "srtUrl": "assets/way_maker.srt",
    "lrcUrl": "assets/way_maker.lrc",
    "videoId": "iJCV_2H9xD0",
    "duration": 503,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 37.4, "kr": "🎵 Way Maker (길을 만드시는 분) - 찬양 전주", "en": "Way Maker - Leeland (Intro)" },
      { "start": 37.4, "end": 48.0, "kr": "[1절] 이곳에 운행하시는 주님, 주를 예배합니다", "en": "You are here, moving in our midst; I worship You" },
      { "start": 48.0, "end": 51.5, "kr": "주를 예배합니다", "en": "I worship You" },
      { "start": 51.5, "end": 62.0, "kr": "이곳에 역사하시는 주님, 주를 찬양합니다", "en": "You are here, working in this place; I worship You" },
      { "start": 62.0, "end": 65.6, "kr": "주를 찬양합니다", "en": "I worship You" },
      { "start": 65.6, "end": 76.0, "kr": "[1절 반복] 이곳에 임재하시는 주님, 주를 경배합니다", "en": "You are here, moving in our midst; I worship You" },
      { "start": 76.0, "end": 79.7, "kr": "주를 예배합니다", "en": "I worship You" },
      { "start": 79.7, "end": 90.0, "kr": "이곳에 일하시는 하나님, 주를 찬양합니다", "en": "You are here, working in this place; I worship You" },
      { "start": 90.0, "end": 94.0, "kr": "주를 찬양합니다", "en": "I worship You" },
      { "start": 94.0, "end": 100.3, "kr": "[후렴] 길을 만드시는 분, 기적의 주, 약속을 지키시는 분", "en": "You are Way maker, miracle worker, promise keeper" },
      { "start": 100.3, "end": 108.4, "kr": "어둠 속의 빛, 나의 하나님, 그분은 나의 주님", "en": "Light in the darkness, my God, that is who You are" },
      { "start": 108.4, "end": 114.6, "kr": "[후렴 반복] 길을 만드시는 분, 기적의 주, 언약의 하나님", "en": "Way maker, miracle worker, promise keeper" },
      { "start": 114.6, "end": 122.5, "kr": "어둠 속의 빛, 나의 하나님, 그분은 나의 주님", "en": "Light in the darkness, my God, that is who You are" },
      { "start": 122.5, "end": 133.0, "kr": "[2절] 상한 마음 만지시는 주님, 주를 예배합니다", "en": "You are here, touching every heart; I worship You" },
      { "start": 133.0, "end": 136.6, "kr": "주를 예배합니다", "en": "I worship You" },
      { "start": 136.6, "end": 147.0, "kr": "모든 아픔 고치시는 주님, 주를 찬양합니다", "en": "You are here, healing every heart; I worship You" },
      { "start": 147.0, "end": 150.8, "kr": "주를 예배합니다", "en": "I worship You" },
      { "start": 150.8, "end": 161.0, "kr": "모든 삶을 변화시키는 주님, 주를 예배합니다", "en": "You are here, turning lives around; I worship You" },
      { "start": 161.0, "end": 164.7, "kr": "주를 찬양합니다", "en": "I worship You" },
      { "start": 164.7, "end": 175.0, "kr": "부서진 맘 싸매시는 주님, 주를 경배합니다", "en": "You are here, mending every heart; I worship You" },
      { "start": 175.0, "end": 178.9, "kr": "주를 예배합니다", "en": "I worship You" },
      { "start": 178.9, "end": 194.0, "kr": "[후렴] 길을 만드시는 분, 기적의 하나님, 약속을 지키시는 분", "en": "Way maker, miracle worker, promise keeper" },
      { "start": 194.0, "end": 207.0, "kr": "어둠 속의 빛, 나의 하나님, 그분은 나의 주님", "en": "Light in the darkness, my God, that is who You are" },
      { "start": 207.0, "end": 223.0, "kr": "[후렴 반복] 길을 만드시는 주, 기적의 하나님, 나의 구원자", "en": "Way maker, miracle worker, promise keeper" },
      { "start": 223.0, "end": 234.0, "kr": "어둠 속의 빛, 나의 하나님, 신실하신 나의 주", "en": "Light in the darkness, my God, that is who You are" },
      { "start": 234.0, "end": 264.0, "kr": "[선포] 그분은 나의 하나님, 신실하신 나의 주!", "en": "That is who You are! That is who You are!" },
      { "start": 264.0, "end": 293.3, "kr": "길을 만드시는 주, 나의 하나님, 살아계신 나의 주님", "en": "That is who You are, Jesus, that is who You are" },
      { "start": 293.3, "end": 300.0, "kr": "[브릿지] 보이지 않아도 주 일하시네", "en": "Even when I don't see it, You're working" },
      { "start": 300.0, "end": 303.7, "kr": "느껴지지 않아도 역사하시네", "en": "Even when I don't feel it, You're working" },
      { "start": 303.7, "end": 307.4, "kr": "결코 멈추지 않으시네", "en": "You never stop, You never stop working" },
      { "start": 307.4, "end": 314.0, "kr": "주님은 결코 멈추지 않으시네", "en": "You never stop, You never stop working" },
      { "start": 314.0, "end": 321.0, "kr": "보이지 않아도 주 일하시며, 느껴지지 않아도 역사하시네", "en": "Even when I don't see it, You're working; Even when I don't feel it, You're working" },
      { "start": 321.0, "end": 335.0, "kr": "결코 멈추지 않으시네, 주님은 결코 멈추지 않으시네!", "en": "You never stop, You never stop working! You never stop!" },
      { "start": 335.0, "end": 370.0, "kr": "[브릿지 절정] 결코 멈추지 않으시는 나의 하나님! 길을 만드시는 분!", "en": "You never stop working! Way maker, miracle worker!" },
      { "start": 370.0, "end": 410.0, "kr": "[후렴 절정] 길을 만드시는 분, 기적의 하나님, 어둠 속의 빛!", "en": "Way maker, miracle worker, promise keeper, Light in the darkness!" },
      { "start": 410.0, "end": 450.0, "kr": "모든 이름 위에 뛰어난 주 예수 그리스도!", "en": "His Name is above every name, Jesus Christ!" },
      { "start": 450.0, "end": 485.0, "kr": "살아계신 나의 주, 영원한 나의 하나님을 찬양합니다", "en": "That is who You are, that is who You are!" },
      { "start": 485.0, "end": 503.2, "kr": "🕊️ 길을 만드시는 신실하신 주님을 영원히 찬양합니다 · 아멘", "en": "Giving Praise to the Way Maker, Our Faithful God · Amen" }
    ]
  },
  {
    "id": "the-blessing",
    "titleKo": "The Blessing (주의 축복이 네게 임하길)",
    "titleEn": "The Blessing",
    "artist": "Kari Jobe / Cody Carnes • 민수기 6장 축복",
    "category": "global",
    "videoUrl": "assets/the_blessing.mp4",
    "audioUrl": "assets/the_blessing.mp3",
    "srtUrl": "assets/the_blessing.srt",
    "lrcUrl": "assets/the_blessing.lrc",
    "videoId": "Zp6aygmvzM4",
    "duration": 730,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 31.0, "kr": "🎵 The Blessing (주의 축복이 네게 임하길) - 찬양 전주", "en": "The Blessing - Live (Intro)" },
      { "start": 31.0, "end": 38.2, "kr": "[1절] 여호와는 네게 복을 주시고 너를 지키시기를 원하며", "en": "The Lord bless you and keep you" },
      { "start": 38.2, "end": 44.8, "kr": "그 얼굴을 네게 비추사 은혜 베푸시기를 원하며", "en": "Make His face shine upon you and be gracious to you" },
      { "start": 44.8, "end": 55.0, "kr": "여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", "en": "The Lord turn His face toward you and give you peace" },
      { "start": 55.0, "end": 92.5, "kr": "(악기 연주 및 기도 · 후렴 준비)", "en": "(Worship Interlude · Preparing for Amen)" },
      { "start": 92.5, "end": 106.0, "kr": "[후렴] 아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 106.0, "end": 120.0, "kr": "아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 120.0, "end": 132.5, "kr": "주님의 은혜와 평강이 넘치기를 기도합니다", "en": "May His grace and peace be upon you" },
      { "start": 132.5, "end": 146.0, "kr": "[후렴 반복] 아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 146.0, "end": 160.0, "kr": "아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 160.0, "end": 200.2, "kr": "(간주 · 2절 준비)", "en": "(Interlude)" },
      { "start": 200.2, "end": 207.3, "kr": "[1절 반복 - 화답] 여호와는 네게 복을 주시고 너를 지키시기를 원하며", "en": "The Lord bless you and keep you" },
      { "start": 207.3, "end": 214.1, "kr": "그 얼굴을 네게 비추사 은혜 베푸시기를 원하며", "en": "Make His face shine upon you and be gracious to you" },
      { "start": 214.1, "end": 230.3, "kr": "여호와는 그 얼굴을 네게로 향하여 드사 평강 주시기를 원하노라", "en": "The Lord turn His face toward you and give you peace" },
      { "start": 230.3, "end": 243.8, "kr": "[후렴] 아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 243.8, "end": 260.0, "kr": "아멘, 아멘, 아멘", "en": "Amen, amen, amen" },
      { "start": 260.0, "end": 339.0, "kr": "(간주 · 천 대의 축복 브릿지 준비)", "en": "(Interlude · Preparing Generational Blessing)" },
      { "start": 339.0, "end": 345.2, "kr": "[브릿지 1] 주의 은혜가 네게 임하고 천 대에 이르기까지", "en": "May His favor be upon you and a thousand generations" },
      { "start": 345.2, "end": 352.1, "kr": "네 가족과 자녀와 그 자녀의 자녀들에게 임하길", "en": "And your family and your children, and their children, and their children" },
      { "start": 352.1, "end": 359.0, "kr": "주의 은혜가 네게 임하고 천 대에 이르기까지", "en": "May His favor be upon you and a thousand generations" },
      { "start": 359.0, "end": 370.0, "kr": "네 가족과 자녀와 그 자녀의 자녀들에게 임하길!", "en": "And your family and your children, and their children!" },
      { "start": 370.0, "end": 434.0, "kr": "(주의 은혜의 선포와 찬양의 빌드업)", "en": "(Building up Praise and Declaration)" },
      { "start": 434.0, "end": 440.3, "kr": "[브릿지 2] 주의 임재가 네 앞서 행하시며 네 뒤에서 너를 지키시네", "en": "May His presence go before you, and behind you, and beside you" },
      { "start": 440.3, "end": 447.5, "kr": "네 주위를 둘러싸고 네 안에 거하시며 주 너와 함께하시네", "en": "All around you, and within you, He is with you, He is with you" },
      { "start": 447.5, "end": 454.1, "kr": "아침에도 저녁에도 네가 들어올 때나 나갈 때나", "en": "In the morning, in the evening, in your coming, and your going" },
      { "start": 454.1, "end": 461.0, "kr": "네가 울 때에도 기뻐할 때에도 주님은 너를 위하시네!", "en": "In your weeping, and rejoicing, He is for you, He is for you!" },
      { "start": 461.0, "end": 515.2, "kr": "주님은 너를 위하시네! 주님은 너를 위하시네!", "en": "He is for you, He is for you, He is for you!" },
      { "start": 515.2, "end": 528.8, "kr": "[후렴 절정] 아멘! 아멘! 아멘!", "en": "Amen, amen, amen!" },
      { "start": 528.8, "end": 550.0, "kr": "아멘! 아멘! 아멘!", "en": "Amen, amen, amen!" },
      { "start": 550.0, "end": 620.0, "kr": "주의 임재가 함께하시네! 주님은 너를 위하시네!", "en": "His presence goes before you! He is for you!" },
      { "start": 620.0, "end": 729.9, "kr": "🕊️ 여호와의 크신 축복이 모든 세대에 영원하길 기도합니다 · 아멘", "en": "Declaring God's Generational Blessing Forever · Amen" }
    ]
  },
  {
    "id": "goodness-of-god",
    "titleKo": "Goodness of God (선하신 주)",
    "titleEn": "Goodness of God",
    "artist": "Bethel Music / Jenn Johnson • 시편 23편",
    "category": "global",
    "videoUrl": "assets/goodness_of_god.mp4",
    "audioUrl": "assets/goodness_of_god.mp3",
    "srtUrl": "assets/goodness_of_god.srt",
    "lrcUrl": "assets/goodness_of_god.lrc",
    "videoId": "9sE5kEnitqE",
    "duration": 296,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 16.1, "kr": "🎵 Goodness of God (선하신 주) - 찬양 전주", "en": "Goodness of God - Bethel Music (Intro)" },
      { "start": 16.1, "end": 26.5, "kr": "[1절] 사랑합니다 주님, 주의 자비는 결코 날 떠나지 않네", "en": "I love You, Lord, Oh, Your mercy never failed me" },
      { "start": 26.5, "end": 34.8, "kr": "내 모든 날 동안 주의 손에 붙들렸네", "en": "All my days, I've been held in Your hands" },
      { "start": 34.8, "end": 52.9, "kr": "내가 눈뜰 때부터 잠자리에 들 때까지, 주의 선하심을 노래하리라", "en": "From the moment that I wake up until I lay my head, Oh, I will sing of the goodness of God" },
      { "start": 52.9, "end": 61.8, "kr": "[후렴] 내 평생 주님은 언제나 신실하셨고", "en": "And all my life You have been faithful" },
      { "start": 61.8, "end": 70.3, "kr": "내 평생 주님은 참으로 선하셨네", "en": "And all my life You have been so, so good" },
      { "start": 70.3, "end": 89.3, "kr": "내 호흡이 다하는 그 순간까지, 주의 선하심을 노래하리라", "en": "With every breath that I am able, Oh, I will sing of the goodness of God" },
      { "start": 89.3, "end": 100.8, "kr": "[2절] 주님의 음성을 사랑합니다, 불 가운데로 날 인도하셨네", "en": "I love Your voice, You have led me through the fire" },
      { "start": 100.8, "end": 108.8, "kr": "가장 어두운 밤에도 누구보다 가까이 계셨네", "en": "And in darkest night You are close like no other" },
      { "start": 108.8, "end": 127.6, "kr": "나의 아버지, 나의 친구 되신 주, 나 주의 선하심 안에 살아가리", "en": "I've known You as a Father, I've known You as a Friend, and I have lived in the goodness of God" },
      { "start": 127.6, "end": 142.0, "kr": "[후렴] 내 평생 주님은 신실하셨고", "en": "And all my life You have been faithful" },
      { "start": 142.0, "end": 155.0, "kr": "내 평생 주님은 참으로 선하셨네", "en": "And all my life You have been so, so good" },
      { "start": 155.0, "end": 183.5, "kr": "내 호흡이 다하도록 주의 선하심을 노래하리라", "en": "With every breath that I am able, Oh, I will sing of the goodness of God" },
      { "start": 183.5, "end": 208.1, "kr": "[브릿지] 주의 선하심이 나를 따르네, 날마다 나를 따르네", "en": "'Cause Your goodness is running after, it's running after me" },
      { "start": 208.1, "end": 225.0, "kr": "내 삶을 주께 드리며 온전히 순종하오니 주께 모든 것 드립니다", "en": "With my life laid down, I'm surrendered now, I give You everything" },
      { "start": 225.0, "end": 249.0, "kr": "[브릿지 절정] 주의 선하심이 나를 따르네, 끊임없이 나를 따르네!", "en": "'Cause Your goodness is running after, it keeps running after me!" },
      { "start": 249.0, "end": 275.0, "kr": "[후렴 절정] 내 평생 주님은 신실하셨네, 주의 선하심을 영원히 찬양하리라", "en": "All my life You have been faithful, I will sing of the goodness of God" },
      { "start": 275.0, "end": 295.7, "kr": "🕊️ 평생토록 신실하신 주님의 선하심에 감사드립니다 · 아멘", "en": "Forever Thankful for the Goodness of God · Amen" }
    ]
  },
  {
    "id": "10000-reasons",
    "titleKo": "10,000 Reasons (송축해 내 영혼)",
    "titleEn": "10,000 Reasons (Bless the Lord)",
    "artist": "Matt Redman • 시편 103편",
    "category": "hymn",
    "videoUrl": "assets/10000_reasons.mp4",
    "audioUrl": "assets/10000_reasons.mp3",
    "srtUrl": "assets/10000_reasons.srt",
    "lrcUrl": "assets/10000_reasons.lrc",
    "videoId": "XtwIT8JjddM",
    "duration": 261,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 12.5, "kr": "🎵 10,000 Reasons (송축해 내 영혼) - 찬양 전주", "en": "10,000 Reasons - Matt Redman (Intro)" },
      { "start": 12.5, "end": 25.7, "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 주의 이름", "en": "Bless the Lord, O my soul, O my soul, Worship His holy name" },
      { "start": 25.7, "end": 36.7, "kr": "이전에 없던 노래로, 주님을 찬양해", "en": "Sing like never before, O my soul, I'll worship Your holy name" },
      { "start": 36.7, "end": 49.0, "kr": "[1절] 해가 뜨는 새 아침 밝았네, 이제 다시 주를 노래할 시간", "en": "The sun comes up, it's a new day dawning, It's time to sing Your song again" },
      { "start": 49.0, "end": 65.0, "kr": "무슨 일이 내게 닥쳐와도, 저녁이 올 때까지 찬양하리라", "en": "Whatever may pass and whatever lies before me, Let me be singing when the evening comes" },
      { "start": 65.0, "end": 78.5, "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 주의 이름", "en": "Bless the Lord, O my soul, O my soul, Worship His holy name" },
      { "start": 78.5, "end": 95.0, "kr": "이전에 없던 노래로, 주님을 찬양해", "en": "Sing like never before, O my soul, I'll worship Your holy name" },
      { "start": 95.0, "end": 107.0, "kr": "[2절] 주는 자비롭고 노하기를 더디하시며, 주는 위대하고 온유하시네", "en": "You're rich in love and You're slow to anger, Your name is great and Your heart is kind" },
      { "start": 107.0, "end": 124.0, "kr": "주의 모든 선하심을 노래하리, 내 마음이 발견한 만 가지 이유로", "en": "For all Your goodness I will keep on singing, Ten thousand reasons for my heart to find" },
      { "start": 124.0, "end": 138.5, "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 주의 이름", "en": "Bless the Lord, O my soul, O my soul, Worship His holy name" },
      { "start": 138.5, "end": 155.0, "kr": "이전에 없던 노래로, 주님을 찬양해", "en": "Sing like never before, O my soul, I'll worship Your holy name" },
      { "start": 155.0, "end": 168.0, "kr": "[3절] 내 힘이 다하고 그 날이 이를 때, 주를 찬양하는 내 영혼의 노래는 끝나지 않으리", "en": "And on that day when my strength is failing, The end draws near and my time has come, Still my soul will sing Your praise unending" },
      { "start": 168.0, "end": 185.0, "kr": "영원토록, 만 년이 지나도 영원토록 찬양하리라", "en": "Ten thousand years and then forevermore, Forevermore" },
      { "start": 185.0, "end": 215.0, "kr": "[후렴 절정] 송축해 내 영혼, 내 영혼아, 거룩하신 주의 이름을 경배해!", "en": "Bless the Lord, O my soul, worship His holy name! Sing like never before!" },
      { "start": 215.0, "end": 245.0, "kr": "거룩하신 주의 이름을 영원히 경배하리라", "en": "Yes, I will worship Your holy name, Lord, I'll worship Your holy name" },
      { "start": 245.0, "end": 261.1, "kr": "🕊️ 만 가지 이유로 주님을 영원히 송축합니다 · 아멘", "en": "Praising the Lord with 10,000 Reasons Forever · Amen" }
    ]
  },
  {
    "id": "what-a-beautiful-name",
    "titleKo": "What a Beautiful Name (아름다우신 이름)",
    "titleEn": "What a Beautiful Name",
    "artist": "Hillsong Worship • 부활과 영광의 찬양",
    "category": "global",
    "videoUrl": "assets/what_a_beautiful_name.mp4",
    "audioUrl": "assets/what_a_beautiful_name.mp3",
    "srtUrl": "assets/what_a_beautiful_name.srt",
    "lrcUrl": "assets/what_a_beautiful_name.lrc",
    "videoId": "nQWFzMvCfLE",
    "duration": 343,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 8.2, "kr": "🎵 What a Beautiful Name (아름다우신 이름) - 찬양 전주", "en": "What a Beautiful Name - Hillsong Worship (Intro)" },
      { "start": 8.2, "end": 22.0, "kr": "[1절] 태초에 말씀으로 계셨던 주, 지극히 높으신 하나님과 하나이셨네", "en": "You were the Word at the beginning, One with God the Lord Most High" },
      { "start": 22.0, "end": 32.9, "kr": "창조물 속에 감추어졌던 주의 영광, 이제 그리스도 안에서 나타나셨네", "en": "Your hidden glory in creation, Now revealed in You our Christ" },
      { "start": 32.9, "end": 47.1, "kr": "[후렴 1] 얼마나 아름다운 이름인가, 예수 그리스도 나의 왕의 이름!", "en": "What a beautiful Name it is, What a beautiful Name it is, The Name of Jesus Christ my King" },
      { "start": 47.1, "end": 63.9, "kr": "그 무엇도 비교할 수 없는 아름다운 이름, 예수의 이름!", "en": "What a beautiful Name it is, nothing compares to this, What a beautiful Name it is, the Name of Jesus" },
      { "start": 63.9, "end": 78.2, "kr": "[2절] 우리를 잃고 홀로 하늘에 머물길 원치 않으셔서, 예수님 하늘을 이 땅에 가져오셨네", "en": "You didn't want heaven without us, So Jesus You brought heaven down" },
      { "start": 78.2, "end": 89.5, "kr": "나의 죄는 컸으나 주의 사랑은 더 크시니, 무엇이 이제 우리를 끊으리요", "en": "My sin was great Your love was greater, What could separate us now?" },
      { "start": 89.5, "end": 103.4, "kr": "[후렴 2] 얼마나 놀라운 이름인가, 예수 그리스도 나의 왕의 이름!", "en": "What a wonderful Name it is, What a wonderful Name it is, The Name of Jesus Christ my King" },
      { "start": 103.4, "end": 135.0, "kr": "그 무엇도 비교할 수 없는 놀라운 이름, 예수의 이름!", "en": "What a wonderful Name it is, nothing compares to this, What a wonderful Name it is, the Name of Jesus" },
      { "start": 135.0, "end": 155.0, "kr": "(간주 · 브릿지 준비)", "en": "(Interlude)" },
      { "start": 155.0, "end": 172.0, "kr": "[브릿지] 사망도 주를 가둘 수 없었고 휘장은 찢어졌네, 죄와 사망의 권세를 잠잠케 하셨네!", "en": "Death could not hold You, the veil tore before You, You silenced the boast of sin and grave" },
      { "start": 172.0, "end": 188.0, "kr": "하늘은 주의 영광을 찬양하며 외치네, 주께서 다시 살아나셨음이라!", "en": "The Heavens are roaring the praise of Your glory, For You are raised to life again" },
      { "start": 188.0, "end": 205.0, "kr": "주께는 경쟁자도 대적할 자도 없으니, 지금도 영원히 주 하나님 다스리시네!", "en": "You have no rival, You have no equal, Now and forever God You reign" },
      { "start": 205.0, "end": 225.0, "kr": "주의 나라이며 주의 영광이며, 모든 이름 위에 뛰어난 주의 이름이라!", "en": "Yours is the Kingdom, Yours is the Glory, Yours is the Name above all names" },
      { "start": 225.0, "end": 255.0, "kr": "[후렴 절정] 얼마나 능력 있는 이름인가, 예수 그리스도 나의 왕의 이름!", "en": "What a powerful Name it is, What a powerful Name it is, The Name of Jesus Christ my King" },
      { "start": 255.0, "end": 308.0, "kr": "그 무엇도 대적할 수 없는 능력의 이름, 예수의 이름!", "en": "What a powerful Name it is, nothing can stand against, What a powerful Name it is, the Name of Jesus" },
      { "start": 308.0, "end": 342.6, "kr": "🕊️ 사망을 이기신 예수 그리스도의 거룩한 이름을 찬양합니다 · 아멘", "en": "All Praise to the Powerful Name of Jesus Christ · Amen" }
    ]
  },
  {
    "id": "oceans",
    "titleKo": "Oceans (주 품에 품으소서)",
    "titleEn": "Oceans (Where Feet May Fail)",
    "artist": "Hillsong UNITED • 믿음의 결단과 신뢰",
    "category": "global",
    "videoUrl": "assets/oceans.mp4",
    "audioUrl": "assets/oceans.mp3",
    "srtUrl": "assets/oceans.srt",
    "lrcUrl": "assets/oceans.lrc",
    "videoId": "1m_sWJQm2fs",
    "duration": 351,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 36.2, "kr": "🎵 Oceans (주 품에 품으소서) - 찬양 전주", "en": "Oceans - Hillsong UNITED (Intro)" },
      { "start": 36.2, "end": 50.2, "kr": "[1절] 주 날 깊은 바다 위로 부르시네, 발 딛기 두려운 깊은 곳으로", "en": "You call me out upon the waters, The great unknown where feet may fail" },
      { "start": 50.2, "end": 64.5, "kr": "그 신비 속에 주를 만나며, 깊은 바다에서도 내 믿음 굳게 서리라", "en": "And there I find You in the mystery, In oceans deep my faith will stand" },
      { "start": 64.5, "end": 77.0, "kr": "[후렴] 주의 이름을 부르며 파도 위를 바라보리라", "en": "And I will call upon Your name, And keep my eyes above the waves" },
      { "start": 77.0, "end": 95.0, "kr": "바다 솟구쳐도 내 영혼 주 품에 안기리, 난 주의 것 주는 내 것", "en": "When oceans rise my soul will rest in Your embrace, For I am Yours and You are mine" },
      { "start": 95.0, "end": 113.0, "kr": "[2절] 깊은 바다 속에도 주의 은혜 넘치며, 주의 전능하신 손이 날 인도하시네", "en": "Your grace abounds in deepest waters, Your sovereign hand will be my guide" },
      { "start": 113.0, "end": 133.4, "kr": "발 헛디디고 두려움 둘러싸도, 주는 결코 실패하지 않으시네", "en": "Where feet may fail and fear surrounds me, You've never failed and You won't start now" },
      { "start": 133.4, "end": 155.0, "kr": "[후렴] 주의 이름을 부르며 파도 위를 바라보리라, 난 주의 것 주는 내 것", "en": "So I will call upon Your name, And keep my eyes above the waves, For I am Yours and You are mine" },
      { "start": 155.0, "end": 219.0, "kr": "(간주 · 브릿지 준비)", "en": "(Interlude)" },
      { "start": 219.0, "end": 235.0, "kr": "[브릿지] 성령이여 내 믿음 경계 없게 하사, 바다 위를 걷게 하소서", "en": "Spirit lead me where my trust is without borders, Let me walk upon the waters" },
      { "start": 235.0, "end": 255.0, "kr": "주 나를 부르시는 곳 어디든지, 내 발 닿을 수 없는 깊은 곳으로 날 이끄소서", "en": "Wherever You would call me, Take me deeper than my feet could ever wander" },
      { "start": 255.0, "end": 285.0, "kr": "구주 예수의 임재 안에서 내 믿음 더욱 견고해지리라!", "en": "And my faith will be made stronger in the presence of my Savior" },
      { "start": 285.0, "end": 320.0, "kr": "[브릿지 절정] 바다 위를 걷게 하소서! 주의 이름을 부르리라!", "en": "Spirit lead me where my trust is without borders! I will call upon Your name!" },
      { "start": 320.0, "end": 350.6, "kr": "🕊️ 깊은 바다에서도 우리를 굳게 붙드시는 주님을 신뢰합니다 · 아멘", "en": "Resting in the Savior's Sovereign Embrace · Amen" }
    ]
  },
  {
    "id": "flowers",
    "titleKo": "꽃들도 (Even If The Flowers - 花も)",
    "titleEn": "Even If The Flowers (花も)",
    "artist": "제이워십 (JWorship) • 열방의 회복",
    "category": "confession",
    "videoUrl": "assets/flowers.mp4",
    "audioUrl": "assets/flowers.mp3",
    "srtUrl": "assets/flowers.srt",
    "lrcUrl": "assets/flowers.lrc",
    "videoId": "t0CYXeqYdnE",
    "duration": 359,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 17.5, "kr": "🎵 꽃들도 (Even If The Flowers) - 찬양 전주", "en": "Even If The Flowers - JWorship (Intro)" },
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
      { "start": 260.0, "end": 310.0, "kr": "은혜의 주 예수 그리스도, 영광의 주님을 영원히 찬양하라!", "en": "Lord of grace, Jesus Christ, Praise the Lord of glory forever!" },
      { "start": 310.0, "end": 359.2, "kr": "🕊️ 온 열방과 만물이 주 예수 그리스도를 영원히 찬양합니다 · 아멘", "en": "All Creation Praises Jesus Christ Our Lord · Amen" }
    ]
  },
  {
    "id": "only-by-grace",
    "titleKo": "하나님의 은혜 (나를 지으신 이가 하나님)",
    "titleEn": "Grace of God (Only By Grace)",
    "artist": "박종호 / 조은아 / 신상우 • 복음의 고백",
    "category": "confession",
    "videoUrl": "assets/only_by_grace.mp4",
    "audioUrl": "assets/only_by_grace.mp3",
    "srtUrl": "assets/only_by_grace.srt",
    "lrcUrl": "assets/only_by_grace.lrc",
    "videoId": "K0Tf0U4fe6E",
    "duration": 312,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 17.5, "kr": "🎵 하나님의 은혜 (나를 지으신 이가 하나님) - 찬양 전주", "en": "Grace of God - Park Jong-ho (Intro)" },
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
    "id": "living-hope",
    "titleKo": "살아계신 주 나의 참된 소망 (Living Hope)",
    "titleEn": "Living Hope",
    "artist": "Phil Wickham • 부활과 영생의 복음",
    "category": "global",
    "videoUrl": "assets/living_hope.mp4",
    "audioUrl": "assets/living_hope.mp3",
    "srtUrl": "assets/living_hope.srt",
    "lrcUrl": "assets/living_hope.lrc",
    "videoId": "u-1fwZtKJSM",
    "duration": 331,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 8.9, "kr": "🎵 살아계신 주 나의 참된 소망 (Living Hope) - 찬양 전주", "en": "Living Hope - Phil Wickham (Intro)" },
      { "start": 8.9, "end": 27.8, "kr": "[1절] 우리와 하나님 사이의 깊은 죄의 심연, 넘을 수 없던 높은 산", "en": "How great the chasm that lay between us, How high the mountain I could not climb" },
      { "start": 27.8, "end": 43.8, "kr": "절망 속에서 하늘을 바라보며, 어두운 밤 주의 이름을 불렀네", "en": "In desperation I turned to heaven, and spoke Your name into the night" },
      { "start": 43.8, "end": 56.5, "kr": "어둠을 뚫고 주의 인자하심이 내 영혼의 그림자를 찢으셨네", "en": "Then through the darkness Your loving kindness, tore through the shadows of my soul" },
      { "start": 56.5, "end": 67.8, "kr": "모든 사역 다 이루시고 승리의 결말 기록하셨네, 예수 그리스도 나의 참된 소망!", "en": "The work is finished the end is written, Jesus Christ my living hope" },
      { "start": 67.8, "end": 85.2, "kr": "[2절] 그 크신 자비를 누가 상상이나 할 수 있으며, 한량없는 은혜를 어떤 마음이 헤아리랴", "en": "Who could imagine so great a mercy? What heart could fathom such boundless grace?" },
      { "start": 85.2, "end": 105.5, "kr": "영원하신 하나님 영광 버리고 내려오사, 내 죄와 수치를 대신 짊어지셨네", "en": "The God of ages stepped down from glory, to wear my sin and bear my shame" },
      { "start": 105.5, "end": 118.0, "kr": "십자가가 말씀하시네 '너는 용서받았노라', 만왕의 왕이 날 주의 자녀라 부르시네", "en": "The cross has spoken I am forgiven, the King of kings calls me His own" },
      { "start": 118.0, "end": 125.0, "kr": "아름다우신 구주여 난 영원히 주의 것, 예수 그리스도 나의 참된 소망!", "en": "Beautiful Savior I'm Yours forever, Jesus Christ my living hope!" },
      { "start": 125.0, "end": 138.0, "kr": "[후렴] 할렐루야! 나를 자유케 하신 주를 찬양해!", "en": "Hallelujah, praise the One who set me free!" },
      { "start": 138.0, "end": 150.0, "kr": "할렐루야! 사망 권세 내게서 힘을 잃었네!", "en": "Hallelujah, death has lost its grip on me!" },
      { "start": 150.0, "end": 168.0, "kr": "주 모든 사슬 끊으셨고, 주의 이름에 구원이 있네, 예수 그리스도 나의 참된 소망!", "en": "You have broken every chain, there's salvation in Your name, Jesus Christ my living hope!" },
      { "start": 168.0, "end": 195.4, "kr": "[3절] 약속을 인치시는 그 부활의 아침이 밝았네, 무덤에 묻히셨던 주의 몸이 숨쉬기 시작하셨네!", "en": "Then came the morning that sealed the promise, Your buried body began to breathe!" },
      { "start": 195.4, "end": 215.0, "kr": "침묵을 깨고 포효하는 유다의 사자, '무덤은 더 이상 그에게 권세 없노라' 선포하셨네!", "en": "Out of the silence the roaring Lion declared the grave has no claim on me!" },
      { "start": 215.0, "end": 235.0, "kr": "예수님 주께서 승리하셨습니다!", "en": "Jesus, Yours is the victory!" },
      { "start": 235.0, "end": 258.0, "kr": "[후렴 절정] 할렐루야! 나를 자유케 하신 주를 찬양해! 사망 권세 무너졌네!", "en": "Hallelujah, praise the One who set me free! Death has lost its grip on me!" },
      { "start": 258.0, "end": 285.0, "kr": "주 모든 사슬 끊으셨고 주의 이름에 구원이 있네, 예수 그리스도 나의 참된 소망!", "en": "You have broken every chain, there's salvation in Your name, Jesus Christ my living hope!" },
      { "start": 285.0, "end": 331.3, "kr": "🕊️ 부활이요 생명 되신 예수 그리스도, 나의 영원한 소망을 찬양합니다 · 아멘", "en": "Jesus Christ, You Are My Living Hope Forever · Amen" }
    ]
  }
];

// App Studio State
let worshipStudioState = {
  currentSong: PRESET_PRAISE_SONGS[0],
  allSongs: [],
  activeTab: 'player', // 'player' | 'creator'
  mediaMode: 'local', // 'local' (고음질 수록 음원/영상 & 100% 실시간 자막) | 'youtube' (공식 영상)
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
  worshipStudioState.allSongs = [...PRESET_PRAISE_SONGS, ...customList];
}

// Open / Close Studio Modal
function openWorshipStudio(targetSongId = 'amazing-grace') {
  loadCustomSongs();
  populateSongSelector(targetSongId);
  selectWorshipSong(targetSongId, null, true);
  switchStudioTab('player');
  
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

let ytStudioPlayer = null;
let ytProgressInterval = null;

// Global YouTube API Ready hook
window.onYouTubeIframeAPIReady = function() {
  if (worshipStudioState.currentSong && worshipStudioState.currentSong.videoId) {
    mountYouTubePlayer(worshipStudioState.currentSong.videoId);
  }
};

function mountYouTubePlayer(videoId) {
  const wrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (wrapper) wrapper.style.display = 'block';

  if (ytStudioPlayer && typeof ytStudioPlayer.loadVideoById === 'function') {
    try {
      ytStudioPlayer.loadVideoById({ videoId: videoId, startSeconds: 0 });
      return;
    } catch (e) {
      console.warn('loadVideoById failed, re-creating player:', e);
    }
  }

  let targetDiv = document.getElementById('studioYouTubePlayer');
  if (!targetDiv && wrapper) {
    wrapper.innerHTML = '<div id="studioYouTubePlayer"></div>';
    targetDiv = document.getElementById('studioYouTubePlayer');
  }

  if (window.YT && window.YT.Player && targetDiv) {
    try {
      ytStudioPlayer = new YT.Player('studioYouTubePlayer', {
        width: '100%',
        height: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            try { event.target.playVideo(); } catch(e) {}
            startYtProgressTracker();
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
            if (event.data === 1) {
              startYtProgressTracker();
            } else if (event.data === 2 || event.data === 0) {
              stopYtProgressTracker();
            }
          }
        }
      });
    } catch (err) {
      mountFallbackIframe(videoId);
    }
  } else {
    mountFallbackIframe(videoId);
  }
}

function mountFallbackIframe(videoId) {
  const wrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (!wrapper) return;
  wrapper.innerHTML = `
    <iframe 
      id="studioYouTubePlayer"
      class="studio-video" 
      src="https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen>
    </iframe>
  `;
}

function startYtProgressTracker() {
  stopYtProgressTracker();
  ytProgressInterval = setInterval(() => {
    if (ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
      try {
        const cur = ytStudioPlayer.getCurrentTime();
        if (typeof cur === 'number' && !isNaN(cur)) {
          updateActiveSubtitleLine(cur);
        }
      } catch (e) {}
    }
  }, 200);
}

function stopYtProgressTracker() {
  if (ytProgressInterval) {
    clearInterval(ytProgressInterval);
    ytProgressInterval = null;
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
  stopYtProgressTracker();
  if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
    try { ytStudioPlayer.pauseVideo(); } catch(e) {}
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
  const newMode = (worshipStudioState.mediaMode === 'youtube') ? 'local' : 'youtube';
  selectWorshipSong(song.id, newMode);
  showStudioToast(newMode === 'youtube' ? "📺 YouTube 공식 영상 모드로 전환되었습니다." : "🎵 고음질 수록 음원 & 정밀 자막 모드로 전환되었습니다.");
}
window.toggleMediaSource = toggleMediaSource;

function updateSourceToggleBtn(song) {
  const btn = document.getElementById('btnToggleMediaSource');
  if (!btn) return;
  if (song && song.videoId && song.audioUrl) {
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

function selectWorshipSong(songId, requestedMode = null, autoPlay = true) {
  const song = worshipStudioState.allSongs.find(s => s.id === songId) || PRESET_PRAISE_SONGS[0];
  worshipStudioState.currentSong = song;
  worshipStudioState.currentLineIndex = -1;

  if (requestedMode) {
    worshipStudioState.mediaMode = requestedMode;
  } else if (!worshipStudioState.mediaMode) {
    worshipStudioState.mediaMode = 'local';
  }

  stopYtProgressTracker();

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

  // Update Media Elements
  const video = document.getElementById('studioVideoPlayer');
  const audio = document.getElementById('studioAudioPlayer');
  const ytWrapper = document.getElementById('studioYouTubePlayerWrapper');
  const mediaWrapper = document.getElementById('studioVideoWrapper');

  updateSourceToggleBtn(song);

  if (worshipStudioState.mediaMode === 'youtube' && song.videoId) {
    // 1. User opted for YouTube mode
    if (video) { video.pause(); video.style.display = 'none'; }
    if (audio) { audio.pause(); audio.style.display = 'none'; }
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = 'none';
    }
    mountYouTubePlayer(song.videoId);
  } else if (song.videoUrl) {
    // 2. High-Definition 1080p MP4 Video (All 10 Songs)
    if (ytWrapper) ytWrapper.style.display = 'none';
    if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
      try { ytStudioPlayer.pauseVideo(); } catch(e) {}
    }
    if (audio) {
      audio.pause();
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
      video.currentTime = 0;
      video.load();
      setupMediaTimeUpdate(video);
      
      if (autoPlay) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log('Browser deferred autoplay:', err);
          });
        }
      }
    }
  } else if (song.audioUrl) {
    // 3. Local High-Quality Audio with Worship Background Visual & Subtitles
    if (ytWrapper) ytWrapper.style.display = 'none';
    if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
      try { ytStudioPlayer.pauseVideo(); } catch(e) {}
    }
    if (video) video.style.display = 'none';
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = `linear-gradient(rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.65)), url("${song.bgImage || 'assets/worship_bg.jpg'}")`;
      mediaWrapper.style.backgroundSize = 'cover';
      mediaWrapper.style.backgroundPosition = 'center';
    }
    if (audio) {
      audio.style.display = 'block';
      audio.src = song.audioUrl;
      audio.load();
      setupMediaTimeUpdate(audio);
      audio.play().catch(() => {});
    }
  } else if (song.videoId) {
    // Fallback: YouTube Video
    if (video) { video.pause(); video.style.display = 'none'; }
    if (audio) { audio.pause(); audio.style.display = 'none'; }
    if (mediaWrapper) mediaWrapper.style.backgroundImage = 'none';
    mountYouTubePlayer(song.videoId);
  } else {
    if (ytWrapper) ytWrapper.style.display = 'none';
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

  const song = worshipStudioState.currentSong;
  // Amazing Grace MP4 already has beautiful burned-in subtitles
  if (song && song.id === 'amazing-grace' && song.videoUrl) {
    overlay.innerHTML = '';
    overlay.classList.remove('visible');
    return;
  }

  if (!lineObj) {
    overlay.innerHTML = '';
    overlay.classList.remove('visible');
    return;
  }

  overlay.innerHTML = `
    <div class="sub-line-kr">${escapeHtml(lineObj.kr)}</div>
    <div class="sub-line-en">${escapeHtml(lineObj.en)}</div>
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
  const song = worshipStudioState.currentSong;
  if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.seekTo === 'function') {
    try {
      ytStudioPlayer.seekTo(seconds, true);
      ytStudioPlayer.playVideo();
      startYtProgressTracker();
    } catch(e) {}
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
    const isStandalone = !modal;
    const isModalActive = modal && modal.classList.contains('active');
    if (!isStandalone && !isModalActive) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const song = worshipStudioState.currentSong;
    const video = document.getElementById('studioVideoPlayer');
    const audio = document.getElementById('studioAudioPlayer');
    const media = (video && video.style.display !== 'none') ? video : audio;

    if (e.code === 'Space') {
      e.preventDefault();
      if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.getPlayerState === 'function') {
        try {
          const st = ytStudioPlayer.getPlayerState();
          if (st === 1) ytStudioPlayer.pauseVideo();
          else ytStudioPlayer.playVideo();
        } catch(err) {}
      } else if (media) {
        if (media.paused) media.play();
        else media.pause();
      }
    } else if (e.code === 'KeyF') {
      e.preventDefault();
      toggleStudioFullscreen();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
        try {
          ytStudioPlayer.seekTo(ytStudioPlayer.getCurrentTime() + 5, true);
        } catch(err) {}
      } else if (media) {
        media.currentTime = Math.min(media.duration || 9999, media.currentTime + 5);
      }
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      if (worshipStudioState.mediaMode === 'youtube' && song && song.videoId && ytStudioPlayer && typeof ytStudioPlayer.getCurrentTime === 'function') {
        try {
          ytStudioPlayer.seekTo(Math.max(0, ytStudioPlayer.getCurrentTime() - 5), true);
        } catch(err) {}
      } else if (media) {
        media.currentTime = Math.max(0, media.currentTime - 5);
      }
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
window.populateSongSelector = populateSongSelector;
window.loadCustomSongs = loadCustomSongs;


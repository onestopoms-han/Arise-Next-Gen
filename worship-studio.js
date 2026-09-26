/**
 * Arise Next-Gen Worship Subtitle Studio & Player (찬양 자막 스튜디오 & 플레이어)
 * 한/영 찬양 자막 영상 재생, 줌(Zoom) 화면공유 최적화, 가사 싱크 및 커스텀 찬양 제작 도구
 */

// 1. Preset Worship Songs Data (30곡 대표 라이브러리 - 전곡 풀타임 싱크 완비)
const PRESET_PRAISE_SONGS = [
  {
    "id": "amazing-grace",
    "titleKo": "나 같은 죄인 살리신 (찬송가 305장 / 피아버전)",
    "titleEn": "Amazing Grace, How Sweet the Sound (Hymn 305 / FIA)",
    "artist": "피아워십 (F.I.A WORSHIP) • 찬송가 305장 완곡 풀버전 (끊김 없음)",
    "category": "hymn",
    "videoUrl": "assets/amazing_grace_bilingual.mp4",
    "audioUrl": "assets/amazing_grace.mp3",
    "srtUrl": "assets/amazing_grace.srt",
    "lrcUrl": "assets/amazing_grace.lrc",
    "videoId": "4-IlkTVvqKk",
    "duration": 278,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.5, "end": 14.0, "kr": "🎵 나 같은 죄인 살리신 (찬송가 305장) - 피아워십 전주", "en": "Amazing Grace, How Sweet The Sound - F.I.A Worship (Intro)" },
      { "start": 14.0, "end": 42.0, "kr": "[1절] 나 같은 죄인 살리신 주 은혜 놀라워", "en": "Amazing grace! how sweet the sound That saved a wretch like me!" },
      { "start": 42.0, "end": 72.0, "kr": "잃었던 생명 찾았고 광명을 얻었네", "en": "I once was lost, but now am found, Was blind, but now I see." },
      { "start": 72.0, "end": 102.0, "kr": "[2절] 큰 죄악에서 건지신 주 은혜 고마워", "en": "'Twas grace that taught my heart to fear, And grace my fears relieved;" },
      { "start": 102.0, "end": 133.0, "kr": "나 처음 믿은 그 시간 귀하고 귀하다", "en": "How precious did that grace appear The hour I first believed!" },
      { "start": 133.0, "end": 164.0, "kr": "[3절] 이제껏 내가 산 것도 주님의 은혜라", "en": "Through many dangers, toils and snares, I have already come;" },
      { "start": 164.0, "end": 196.0, "kr": "또 나를 장차 본향에 인도해 주시리", "en": "'Tis grace hath brought me safe thus far, And grace will lead me home." },
      { "start": 196.0, "end": 228.0, "kr": "[4절] 거기서 우리 영원히 주님의 은혜로", "en": "When we've been there ten thousand years, Bright shining as the sun," },
      { "start": 228.0, "end": 260.0, "kr": "해처럼 밝게 살면서 주 찬양 하리라", "en": "We've no less days to sing God's praise Than when we'd first begun." },
      { "start": 260.0, "end": 278.0, "kr": "🕊️ 주 예수 그리스도의 은혜에 감사드립니다 · 아멘", "en": "Giving Thanks to God's Abundant Grace Forever · Amen" }
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
  },
  {
    "id": "grace-son-kyung-min",
    "titleKo": "은혜 (내가 누려왔던 모든 것들이)",
    "titleEn": "Grace (By the Grace of God)",
    "artist": "손경민 (Son Kyung-min) • 은혜와 감사",
    "category": "confession",
    "videoId": "fWYcujNh4mI",
    "duration": 320,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 16.0, "kr": "🎵 은혜 (내가 누려왔던 모든 것들이) - 찬양 전주", "en": "Grace - Son Kyung-min (Intro)" },
      { "start": 16.0, "end": 28.5, "kr": "[1절] 내가 누려왔던 모든 것들이, 내가 지나왔던 모든 시간이", "en": "Everything I have enjoyed, all the times I have passed through" },
      { "start": 28.5, "end": 42.0, "kr": "내가 걸어왔던 모든 순간이, 당연한 것 아니라 은혜였소", "en": "Every moment I have walked was not taken for granted, but was grace" },
      { "start": 42.0, "end": 54.0, "kr": "아침 해가 뜨고 저녁의 노을, 봄의 꽃향기와 가을의 열매", "en": "The morning sunrise, the evening glow, fragrance of spring, fruit of autumn" },
      { "start": 54.0, "end": 69.0, "kr": "변하는 계절의 모든 순간이, 당연한 것 아니라 은혜였소", "en": "Every passing moment of seasons was not taken for granted, but was grace" },
      { "start": 69.0, "end": 84.0, "kr": "[후렴] 모든 것이 은혜 은혜 은혜 한없는 은혜", "en": "Everything was grace, grace, boundless grace" },
      { "start": 84.0, "end": 98.0, "kr": "내 삶에 당연한 건 하나도 없었던 것을", "en": "There was nothing in my life that could be taken for granted" },
      { "start": 98.0, "end": 115.0, "kr": "모든 것이 은혜 은혜였소", "en": "Everything was grace, all was by His grace" },
      { "start": 115.0, "end": 133.0, "kr": "(간주 · 2절 묵상)", "en": "(Interlude)" },
      { "start": 133.0, "end": 145.5, "kr": "[2절] 내가 이 땅에 태어나 사는 것, 어린아이 시절과 지금까지", "en": "Being born on this earth, from my childhood until now" },
      { "start": 145.5, "end": 158.0, "kr": "숨을 쉬며 꿈을 꾸는 삶, 당연한 것 아니라 은혜였소", "en": "Breathing and dreaming every day was not taken for granted, but was grace" },
      { "start": 158.0, "end": 171.0, "kr": "하나님의 자녀로 살아가며, 오늘까지 이 길을 걷는 것도", "en": "Living as a child of God, walking along this path until today" },
      { "start": 171.0, "end": 185.0, "kr": "주의 복음 전할 수 있는 삶도, 당연한 것 아니라 은혜였소", "en": "Sharing the Gospel of Christ was not taken for granted, but was grace" },
      { "start": 185.0, "end": 200.0, "kr": "[후렴] 모든 것이 은혜 은혜 은혜 한없는 은혜", "en": "Everything was grace, grace, boundless grace" },
      { "start": 200.0, "end": 215.0, "kr": "내 삶에 당연한 건 하나도 없었던 것을", "en": "There was nothing in my life that could be taken for granted" },
      { "start": 215.0, "end": 240.0, "kr": "모든 것이 은혜 은혜였소!", "en": "Everything was grace, all was by His grace!" },
      { "start": 240.0, "end": 275.0, "kr": "[후렴 절정] 모든 것이 하나님의 크신 은혜 은혜였소", "en": "All was the boundless and everlasting grace of Almighty God" },
      { "start": 275.0, "end": 320.0, "kr": "🕊️ 내 삶의 모든 순간을 채우신 하나님의 은혜를 영원히 찬양합니다 · 아멘", "en": "Praising God's Boundless Grace Surrounding All My Life · Amen" }
    ]
  },
  {
    "id": "hope-desire-pray",
    "titleKo": "원하고 바라고 기도합니다",
    "titleEn": "I Hope, Desire, and Pray",
    "artist": "민호기 (찬미워십) / 마커스워십 • 신앙의 고백",
    "category": "confession",
    "videoId": "O1aL1g8S5Bw",
    "duration": 325,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 18.0, "kr": "🎵 원하고 바라고 기도합니다 - 찬양 전주", "en": "I Hope, Desire, and Pray (Intro)" },
      { "start": 18.0, "end": 32.5, "kr": "[1절] 이 세상을 살아가는 동안에 나의 힘을 의지할 수 없으니", "en": "While living in this world, I cannot lean on my own strength" },
      { "start": 32.5, "end": 48.0, "kr": "기도하고 낙심하지 말 것은 주께서 참 소망이 되심이라", "en": "I pray and will not despair, for the Lord is my true living hope" },
      { "start": 48.0, "end": 62.0, "kr": "[후렴] 주의 길을 걸어가는 동안에 세상의 것 의지할 수 없으니", "en": "While walking on the way of the Lord, I cannot trust worldly things" },
      { "start": 62.0, "end": 78.0, "kr": "감사하고 낙심하지 말 것은 주께서 참 기쁨이 되심이라", "en": "I give thanks and will not despair, for the Lord is my true joy" },
      { "start": 78.0, "end": 92.0, "kr": "[선포] 하나님의 꿈이 나의 비전이 되고", "en": "May the dream of God become my vision" },
      { "start": 92.0, "end": 105.0, "kr": "예수님의 성품이 나의 인격이 되고", "en": "May the character of Jesus become my personality" },
      { "start": 105.0, "end": 119.0, "kr": "성령님의 권능이 나의 능력이 되길", "en": "May the power of the Holy Spirit become my strength" },
      { "start": 119.0, "end": 136.0, "kr": "원하고 바라고 기도합니다", "en": "I earnestly hope, desire, and pray" },
      { "start": 136.0, "end": 160.0, "kr": "(간주 · 묵상과 기도)", "en": "(Interlude)" },
      { "start": 160.0, "end": 175.0, "kr": "[1절 반복] 이 세상을 살아가는 동안에 나의 힘을 의지할 수 없으니", "en": "While living in this world, I cannot lean on my own strength" },
      { "start": 175.0, "end": 190.0, "kr": "기도하고 낙심하지 말 것은 주께서 참 소망이 되심이라", "en": "I pray and will not despair, for the Lord is my true living hope" },
      { "start": 190.0, "end": 204.0, "kr": "[선포 절정] 하나님의 꿈이 나의 비전이 되고!", "en": "May the dream of God become my vision!" },
      { "start": 204.0, "end": 218.0, "kr": "예수님의 성품이 나의 인격이 되고!", "en": "May the character of Jesus become my personality!" },
      { "start": 218.0, "end": 232.0, "kr": "성령님의 권능이 나의 능력이 되길!", "en": "May the power of the Holy Spirit become my strength!" },
      { "start": 232.0, "end": 260.0, "kr": "원하고 바라고 기도합니다!", "en": "I earnestly hope, desire, and pray!" },
      { "start": 260.0, "end": 325.0, "kr": "🕊️ 하나님의 온전하신 뜻이 우리의 모든 삶에 이루어지길 기도합니다 · 아멘", "en": "May God's Perfect Will Be Accomplished in Our Lives · Amen" }
    ]
  },
  {
    "id": "where-you-call-me",
    "titleKo": "부르신 곳에서 (따스한 성령님)",
    "titleEn": "Where You Call Me (Wherever He Leads)",
    "artist": "마커스워십 (Markers Worship) • 소명과 헌신",
    "category": "confession",
    "videoId": "6vtdjpmIkn0",
    "duration": 360,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 19.5, "kr": "🎵 부르신 곳에서 (따스한 성령님) - 찬양 전주", "en": "Where You Call Me - Markers Worship (Intro)" },
      { "start": 19.5, "end": 32.0, "kr": "[1절] 따스한 성령님 마음으로 보네", "en": "The warm Holy Spirit, I perceive with my heart" },
      { "start": 32.0, "end": 44.0, "kr": "내 몸을 감싸며 주어지는 평안함", "en": "The heavenly peace that wraps around my soul" },
      { "start": 44.0, "end": 56.5, "kr": "빛으로 부르신 생명의 길을", "en": "The path of life called forth by the Light" },
      { "start": 56.5, "end": 70.0, "kr": "인도하시는 하나님 바라보네", "en": "I gaze upon God who guides my way" },
      { "start": 70.0, "end": 84.0, "kr": "[후렴] 내가 걸어갈 때 길이 되고 살아갈 때 삶이 되는 그곳에서", "en": "Where He becomes the way as I walk, and becomes my life as I live" },
      { "start": 84.0, "end": 96.0, "kr": "부르신 곳에서 나는 예배하네", "en": "Wherever You call me, I will worship You" },
      { "start": 96.0, "end": 110.0, "kr": "어떤 상황에도 나는 예배하네", "en": "In every circumstance, I will worship You" },
      { "start": 110.0, "end": 130.0, "kr": "(간주 · 2절 준비)", "en": "(Interlude)" },
      { "start": 130.0, "end": 143.0, "kr": "[2절] 내가 서 있는 곳 어디서나 하나님을 예배합니다", "en": "Wherever I stand, I will worship Almighty God" },
      { "start": 143.0, "end": 156.0, "kr": "내가 여호와를 항상 송축하며", "en": "I will bless the Lord at all times" },
      { "start": 156.0, "end": 170.0, "kr": "내 입술로 항상 주를 찬양하리라", "en": "My lips will continually sing His praise" },
      { "start": 170.0, "end": 184.0, "kr": "[후렴] 내가 걸어갈 때 길이 되고 살아갈 때 삶이 되는 그곳에서", "en": "Where He becomes the way as I walk, and becomes my life as I live" },
      { "start": 184.0, "end": 196.0, "kr": "부르신 곳에서 나는 예배하네", "en": "Wherever You call me, I will worship You" },
      { "start": 196.0, "end": 215.0, "kr": "어떤 상황에도 나는 예배하네!", "en": "In every circumstance, I will worship You!" },
      { "start": 215.0, "end": 260.0, "kr": "[선포 절정] 부르신 곳에서 나는 예배하네! 온 맘 다해 주를 예배하네!", "en": "Where You call me, I will worship! Worship with all my heart!" },
      { "start": 260.0, "end": 360.0, "kr": "🕊️ 주께서 세우신 자리에서 참된 예배자로 서기를 결단합니다 · 아멘", "en": "Standing as True Worshipers Wherever the Lord Calls Us · Amen" }
    ]
  },
  {
    "id": "this-is-grace",
    "titleKo": "주 은혜임을 (주 나의 모습 보시네)",
    "titleEn": "This is the Grace of the Lord (By His Grace)",
    "artist": "마커스워십 (소진영 인도) • 긍휼과 위로",
    "category": "confession",
    "videoId": "kY31W-9q56Q",
    "duration": 345,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 20.0, "kr": "🎵 주 은혜임을 (주 나의 모습 보시네) - 찬양 전주", "en": "This is the Grace of the Lord - Markers Worship (Intro)" },
      { "start": 20.0, "end": 33.5, "kr": "[1절] 주 나의 모습 보시네 상한 나의 맘 만지시네", "en": "The Lord sees my heart and touches my wounded soul" },
      { "start": 33.5, "end": 49.0, "kr": "주 나의 눈물 아시네 홀로 울던 맘 아시네", "en": "The Lord knows my tears and understands my lonely weeping" },
      { "start": 49.0, "end": 64.0, "kr": "[후렴] 주 은혜임을 날 둘러싼 하나님의 은혜", "en": "This is the grace of God that surrounds all my life" },
      { "start": 64.0, "end": 79.0, "kr": "그 사랑이 날 붙드시네", "en": "His everlasting love holds me fast" },
      { "start": 79.0, "end": 94.0, "kr": "주 은혜임을 갚을 길 없는 크신 은혜", "en": "This is the grace of the Lord, boundless grace beyond measure" },
      { "start": 94.0, "end": 110.0, "kr": "내 모든 삶 주님의 은혜라", "en": "All of my life is by the grace of God" },
      { "start": 110.0, "end": 130.0, "kr": "(간주)", "en": "(Interlude)" },
      { "start": 130.0, "end": 144.0, "kr": "[2절] 세상 소망 다 사라져 가도 주의 사랑은 끝이 없으니", "en": "Even when earthly hopes fade away, the love of the Lord never ends" },
      { "start": 144.0, "end": 160.0, "kr": "살아가는 이 모든 순간이 주 은혜임을 나는 믿네", "en": "I believe that every living moment is the grace of God" },
      { "start": 160.0, "end": 175.0, "kr": "[후렴] 주 은혜임을 날 둘러싼 하나님의 은혜", "en": "This is the grace of God that surrounds all my life" },
      { "start": 175.0, "end": 190.0, "kr": "그 사랑이 날 붙드시네", "en": "His everlasting love holds me fast" },
      { "start": 190.0, "end": 210.0, "kr": "주 은혜임을 갚을 길 없는 크신 은혜, 내 모든 삶 주님의 은혜라!", "en": "This is grace beyond measure, all my life is by the grace of God!" },
      { "start": 210.0, "end": 260.0, "kr": "[후렴 절정] 내 모든 삶 하나님의 은혜라! 주 은혜임을 고백합니다!", "en": "All of my life is by His grace! Declaring the grace of the Lord!" },
      { "start": 260.0, "end": 345.0, "kr": "🕊️ 우리를 품으시고 붙드시는 하나님의 무한하신 은혜에 감사드립니다 · 아멘", "en": "Forever Thankful for the Unfailing Grace of God · Amen" }
    ]
  },
  {
    "id": "eyes-upon-you",
    "titleKo": "시선 (내게로부터 눈을 들어)",
    "titleEn": "My Eyes Upon Jesus (Eyes Upon You)",
    "artist": "예수전도단 (YWAM) • 영적 시선과 부흥",
    "category": "confession",
    "videoId": "FNQhG27uzt8",
    "duration": 330,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 18.0, "kr": "🎵 시선 (내게로부터 눈을 들어) - 찬양 전주", "en": "My Eyes Upon Jesus - YWAM (Intro)" },
      { "start": 18.0, "end": 31.0, "kr": "[1절] 내게로부터 눈을 들어 주를 보기 시작할 때, 주의 일을 보겠네", "en": "When I lift my eyes from myself to gaze upon the Lord, I will see His work" },
      { "start": 31.0, "end": 46.0, "kr": "내 작은 마음 돌이키사 하늘의 꿈 꾸게 하네, 주님을 볼 때", "en": "Turning my small heart to dream heaven's dreams, when I look to Him" },
      { "start": 46.0, "end": 57.0, "kr": "[후렴] 모든 시선을 주님께 드리고, 살아계신 하나님을 느낄 때", "en": "When I turn all my eyes to the Lord, and feel the living God" },
      { "start": 57.0, "end": 72.0, "kr": "내 삶은 주의 역사가 되고, 하나님이 일하기 시작하네", "en": "My life becomes His miracle, and God begins to work" },
      { "start": 72.0, "end": 85.0, "kr": "[2절] 성령이 나를 변화시켜 모든 두렴 사라질 때, 주의 일을 보겠네", "en": "When the Spirit transforms me and all fears fade, I will see His work" },
      { "start": 85.0, "end": 100.0, "kr": "황폐한 땅 한가운데서 주님 마음 알게 되리, 주님을 볼 때", "en": "In the midst of barren land I will know His heart, when I look to Him" },
      { "start": 100.0, "end": 112.0, "kr": "[후렴] 모든 시선을 주님께 드리고, 살아계신 하나님을 느낄 때", "en": "When I turn all my eyes to the Lord, and feel the living God" },
      { "start": 112.0, "end": 126.0, "kr": "내 삶은 주의 역사가 되고, 하나님이 일하기 시작하네", "en": "My life becomes His miracle, and God begins to work" },
      { "start": 126.0, "end": 140.0, "kr": "모든 시선을 주님께 드리고, 전능하신 하나님을 느낄 때", "en": "When I turn all my eyes to the Lord, and feel the Almighty God" },
      { "start": 140.0, "end": 160.0, "kr": "세상은 주의 나라가 되고, 하나님이 일하기 시작하네!", "en": "The world becomes His Kingdom, and God begins to work!" },
      { "start": 160.0, "end": 195.0, "kr": "[브릿지] 주님의 영광 임하네 주 볼 때! 주님의 영광 임하네 주 볼 때!", "en": "The glory of the Lord descends when we look to Him!" },
      { "start": 195.0, "end": 240.0, "kr": "[선포 절정] 세상은 주의 나라가 되고 하나님이 일하시네!", "en": "The world becomes His Kingdom and God is working!" },
      { "start": 240.0, "end": 330.0, "kr": "🕊️ 모든 시선을 주께 고정하며 주님의 일하심을 찬양합니다 · 아멘", "en": "Fixing Our Eyes on Jesus and Witnessing God's Kingdom · Amen" }
    ]
  },
  {
    "id": "jesus-always-with-me",
    "titleKo": "예수 늘 함께 하시네 (고단한 인생길)",
    "titleEn": "Jesus, Always With Me",
    "artist": "마커스워십 (소진영 인도) • 동행과 평안",
    "category": "confession",
    "videoId": "4v0oHeJ8-2k",
    "duration": 335,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 20.0, "kr": "🎵 예수 늘 함께 하시네 - 찬양 전주", "en": "Jesus, Always With Me - Markers Worship (Intro)" },
      { "start": 20.0, "end": 34.0, "kr": "[1절] 고단한 인생길 힘겨운 오늘도, 예수 내 마음을 아시네", "en": "On this weary road of life, even in today's struggles, Jesus knows my heart" },
      { "start": 34.0, "end": 49.0, "kr": "지나간 아픔도 마주할 두려움도, 예수 내 마음을 아시네", "en": "Past sorrows and future fears alike, Jesus understands my heart" },
      { "start": 49.0, "end": 64.0, "kr": "[후렴] 하루를 살아도 기쁨으로 살리, 예수 늘 함께 하시네", "en": "Even if I live one day, I will live with joy: Jesus is always with me" },
      { "start": 64.0, "end": 80.0, "kr": "후회도 염려도 온전히 맡기리, 예수 늘 함께 하시네", "en": "Entrusting all regrets and worries completely: Jesus is always with me" },
      { "start": 80.0, "end": 100.0, "kr": "(간주 · 2절 묵상)", "en": "(Interlude)" },
      { "start": 100.0, "end": 114.0, "kr": "[2절] 믿음의 눈 들어 주를 바라봅니다, 영원한 자비로 날 붙드시는 주", "en": "Lifting eyes of faith I look to the Lord, who holds me with everlasting mercy" },
      { "start": 114.0, "end": 130.0, "kr": "나의 가는 길 오직 그가 아시나니, 나를 단련하신 후에 정금같이 나오리", "en": "He knows the way that I take, when He has tested me I shall come forth as gold" },
      { "start": 130.0, "end": 145.0, "kr": "[후렴] 하루를 살아도 기쁨으로 살리, 예수 늘 함께 하시네", "en": "Even if I live one day, I will live with joy: Jesus is always with me" },
      { "start": 145.0, "end": 165.0, "kr": "후회도 염려도 온전히 맡기리, 예수 늘 함께 하시네!", "en": "Entrusting all regrets and worries: Jesus is always with me!" },
      { "start": 165.0, "end": 210.0, "kr": "[후렴 절정] 예수 늘 함께 하시네! 영원토록 나와 동행하시네!", "en": "Jesus is always with me! Walking beside me forever and ever!" },
      { "start": 210.0, "end": 335.0, "kr": "🕊️ 어떤 상황 속에서도 결코 날 떠나지 않으시는 예수님을 찬양합니다 · 아멘", "en": "Praising Jesus Who Never Leaves Nor Forsakes Us · Amen" }
    ]
  },
  {
    "id": "he-empathizes",
    "titleKo": "공감하시네 (혼자서만 앓고 있던)",
    "titleEn": "He Empathizes (He Understands)",
    "artist": "WELOVE (위러브) • 치유와 공감",
    "category": "confession",
    "videoId": "4jH3MqokNMw",
    "duration": 310,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 17.0, "kr": "🎵 공감하시네 (혼자서만 앓고 있던) - 찬양 전주", "en": "He Empathizes - WELOVE (Intro)" },
      { "start": 17.0, "end": 32.0, "kr": "[1절] 혼자서만 앓고 있던 깊은 슬픔과 누구에게도 말할 수 없던 눈물", "en": "The deep sorrow kept only to myself, the tears I could tell to no one" },
      { "start": 32.0, "end": 48.0, "kr": "주님은 이미 다 알고 계시네, 내 상한 영혼을 안아주시네", "en": "The Lord already knows it all, embracing my broken spirit" },
      { "start": 48.0, "end": 63.0, "kr": "[후렴] 우리의 모든 순간을 공감하시네", "en": "He empathizes with every moment of our lives" },
      { "start": 63.0, "end": 78.0, "kr": "아파하는 자와 함께 우시며, 슬픔 속에서도 소망을 주시네", "en": "Weeping with those who weep, giving living hope in sorrow" },
      { "start": 78.0, "end": 95.0, "kr": "온전한 사랑으로 품으시네", "en": "Embracing us with His perfect, unconditional love" },
      { "start": 95.0, "end": 115.0, "kr": "(간주)", "en": "(Interlude)" },
      { "start": 115.0, "end": 130.0, "kr": "[2절] 캄캄한 어둠 속에서도 빛을 비추사, 길 잃은 영혼을 인도하시네", "en": "Shining light in deepest darkness, guiding every wandering soul" },
      { "start": 130.0, "end": 145.0, "kr": "주의 신실하신 손이 날 붙드사, 다시 일어설 용기 주시네", "en": "His faithful hand holds me fast, giving courage to rise again" },
      { "start": 145.0, "end": 160.0, "kr": "[후렴] 우리의 모든 순간을 공감하시네", "en": "He empathizes with every moment of our lives" },
      { "start": 160.0, "end": 180.0, "kr": "아파하는 자와 함께 우시며 온전한 사랑으로 품으시네!", "en": "Weeping with the brokenhearted, holding us with perfect love!" },
      { "start": 180.0, "end": 230.0, "kr": "[브릿지 절정] 결코 우리를 홀로 두지 않으시는 주님의 따뜻한 위로!", "en": "His comforting embrace that never leaves us alone!" },
      { "start": 230.0, "end": 310.0, "kr": "🕊️ 우리의 아픔을 온전히 공감하시고 치유하시는 주님을 찬양합니다 · 아멘", "en": "Giving Glory to the Lord Who Heals and Empathizes · Amen" }
    ]
  },
  {
    "id": "heart-of-worship",
    "titleKo": "마음의 예배 (The Heart of Worship)",
    "titleEn": "The Heart of Worship",
    "artist": "Matt Redman (매트 레드맨) • 참된 예배",
    "category": "global",
    "videoId": "k0u461C0hsc",
    "duration": 320,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 16.0, "kr": "🎵 마음의 예배 (The Heart of Worship) - 찬양 전주", "en": "The Heart of Worship - Matt Redman (Intro)" },
      { "start": 16.0, "end": 32.0, "kr": "[1절] 찬양의 열기 모두 끝나고 주 앞에 나아갈 때", "en": "When the music fades, all is stripped away, and I simply come" },
      { "start": 32.0, "end": 48.0, "kr": "내 마음 깊은 곳 고백하기 원하네, 주 기뻐하실 참된 것을", "en": "Longing just to bring something that's of worth that will bless Your heart" },
      { "start": 48.0, "end": 64.0, "kr": "[프리코러스] 노래 그 이상의 것을 주께 드리기 원해, 주께서 원하시는 것", "en": "I'll bring You more than a song, for a song in itself is not what You have required" },
      { "start": 64.0, "end": 78.0, "kr": "주님은 겉모습 보지 않으시고 마음 중심을 보시네", "en": "You search much deeper within through the way things appear, You're looking into my heart" },
      { "start": 78.0, "end": 92.0, "kr": "[후렴] 난 돌아가네 마음의 예배로", "en": "I'm coming back to the heart of worship" },
      { "start": 92.0, "end": 106.0, "kr": "오직 주님만을 예배하기 원하네, 예수님", "en": "And it's all about You, all about You, Jesus" },
      { "start": 106.0, "end": 120.0, "kr": "주님께 용서를 구합니다, 내가 만든 그릇된 것들을", "en": "I'm sorry, Lord, for the thing I've made it" },
      { "start": 120.0, "end": 138.0, "kr": "모든 것이 주님께 속해 있습니다, 예수님", "en": "When it's all about You, all about You, Jesus" },
      { "start": 138.0, "end": 160.0, "kr": "(간주)", "en": "(Interlude)" },
      { "start": 160.0, "end": 176.0, "kr": "[2절] 영원하신 왕, 그 어떤 말로도 주를 다 표현할 수 없네", "en": "King of endless worth, no one could express how much You deserve" },
      { "start": 176.0, "end": 192.0, "kr": "비록 연약하고 부족할지라도 내 모든 호흡 주께 드리네", "en": "Though I'm weak and poor, all I have is Yours, every single breath" },
      { "start": 192.0, "end": 220.0, "kr": "[후렴 절정] 난 돌아가네 마음의 예배로! 오직 예수 그리스도만을!", "en": "I'm coming back to the heart of worship! It's all about You, Jesus!" },
      { "start": 220.0, "end": 320.0, "kr": "🕊️ 형식과 노래를 넘어 마음 중심의 참된 예배로 주께 나아갑니다 · 아멘", "en": "Returning to the Heart of True Worship in Christ Jesus · Amen" }
    ]
  },
  {
    "id": "here-i-am-to-worship",
    "titleKo": "빛 되신 주 (Here I Am to Worship)",
    "titleEn": "Here I Am to Worship (Light of the World)",
    "artist": "Tim Hughes (팀 휴즈) / 마커스워십 • 경배",
    "category": "global",
    "videoId": "kYJjT7N-8Qo",
    "duration": 305,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 16.0, "kr": "🎵 빛 되신 주 (Here I Am to Worship) - 찬양 전주", "en": "Here I Am to Worship - Tim Hughes (Intro)" },
      { "start": 16.0, "end": 31.0, "kr": "[1절] 빛 되신 주 어둠 가운데 비추사 내 눈을 열어 보게 하셨네", "en": "Light of the world, You stepped down into darkness, opened my eyes, let me see" },
      { "start": 31.0, "end": 46.0, "kr": "내 맘 다해 주를 사모하게 하사 영원한 생명의 소망 주셨네", "en": "Beauty that made this heart adore You, hope of a life spent with You" },
      { "start": 46.0, "end": 57.0, "kr": "[후렴] 여기 와서 경배해 엎드려 절하며", "en": "Here I am to worship, here I am to bow down" },
      { "start": 57.0, "end": 68.0, "kr": "주 나의 하나님이라 고백해", "en": "Here I am to say that You're my God" },
      { "start": 68.0, "end": 79.0, "kr": "주는 온전히 사랑스럽고 지극히 존귀하시며", "en": "You're altogether lovely, altogether worthy" },
      { "start": 79.0, "end": 92.0, "kr": "내게 너무나 놀라우신 주", "en": "Altogether wonderful to me" },
      { "start": 92.0, "end": 107.0, "kr": "[2절] 만왕의 왕, 높이 들리신 주 영광 중에 좌정하셨네", "en": "King of all days, oh so highly exalted, glorious in heaven above" },
      { "start": 107.0, "end": 124.0, "kr": "낮아지사 이 땅에 오신 주, 그 크신 사랑 베푸셨네", "en": "Humbly You came to the earth You created, all for love's sake became poor" },
      { "start": 124.0, "end": 145.0, "kr": "[후렴] 여기 와서 경배해 엎드려 절하며, 주 나의 하나님이라 고백해", "en": "Here I am to worship, here I am to bow down, here I am to say You're my God" },
      { "start": 145.0, "end": 175.0, "kr": "[브릿지] 십자가에 달리신 주의 사랑, 내 죄를 담당하신 그 은혜 다 알 수 없네", "en": "And I'll never know how much it cost to see my sin upon that cross" },
      { "start": 175.0, "end": 220.0, "kr": "[후렴 절정] 내게 너무나 놀라우신 구주 예수 그리스도를 영원히 경배합니다!", "en": "Altogether wonderful to me! Worshiping Jesus Christ forever!" },
      { "start": 220.0, "end": 305.0, "kr": "🕊️ 가장 낮아지셔서 우리를 살리신 예수 그리스도의 이름을 높입니다 · 아멘", "en": "Exalting the Precious Name of Jesus Christ Our Lord · Amen" }
    ]
  },
  {
    "id": "this-is-amazing-grace",
    "titleKo": "놀라운 주의 은혜 (This Is Amazing Grace)",
    "titleEn": "This Is Amazing Grace",
    "artist": "Phil Wickham (필 윅햄) • 십자가와 부활",
    "category": "global",
    "videoId": "X0Pr0jP4F8k",
    "duration": 280,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 놀라운 주의 은혜 (This Is Amazing Grace) - 찬양 전주", "en": "This Is Amazing Grace - Phil Wickham (Intro)" },
      { "start": 15.0, "end": 28.0, "kr": "[1절] 어둠을 뚫고 빛을 비추시며 죄의 권세를 깨뜨리시는 분", "en": "Who breaks the power of sin and darkness, whose love is mighty and so much stronger" },
      { "start": 28.0, "end": 43.0, "kr": "영광의 왕, 만왕의 왕이시라", "en": "The King of Glory, the King above all kings" },
      { "start": 43.0, "end": 57.0, "kr": "천지를 흔드시는 거룩한 음성, 세상을 구원하시는 놀라운 주", "en": "Who shakes the whole earth with holy thunder, who leaves us breathless in awe and wonder" },
      { "start": 57.0, "end": 70.0, "kr": "[후렴] 놀라운 주의 은혜, 영원한 주의 사랑", "en": "This is amazing grace, this is unfailing love" },
      { "start": 70.0, "end": 84.0, "kr": "날 대신하여 십자가 지셨네", "en": "That You would take my place, that You would bear my cross" },
      { "start": 84.0, "end": 98.0, "kr": "내 영혼 구원하사 자유케 하셨네", "en": "You laid down Your life that I would be set free" },
      { "start": 98.0, "end": 115.0, "kr": "예수 나의 왕, 행하신 모든 일 찬양하리", "en": "Oh, Jesus, I sing for all that You've done for me" },
      { "start": 115.0, "end": 130.0, "kr": "[2절] 혼돈 속에 질서를 세우시며, 고아와 과부를 품으시는 주", "en": "Who brings our chaos back into order, who makes the orphan a son and daughter" },
      { "start": 130.0, "end": 145.0, "kr": "진리와 공의로 열방을 다스리시네", "en": "The King of Glory, the King of all the earth" },
      { "start": 145.0, "end": 175.0, "kr": "[후렴] 놀라운 주의 은혜, 영원한 주의 사랑, 날 대신하여 십자가 지셨네!", "en": "This is amazing grace, this is unfailing love, You took my place!" },
      { "start": 175.0, "end": 210.0, "kr": "[선포 브릿지] 죽임 당하신 어린양 존귀하도다! 무덤을 이기신 승리의 왕!", "en": "Worthy is the Lamb who was slain! Worthy is the King who conquered the grave!" },
      { "start": 210.0, "end": 280.0, "kr": "🕊️ 사망 권세 이기시고 구원을 베푸신 예수 그리스도를 영원히 찬양합니다 · 아멘", "en": "All Glory and Honor to Jesus Christ Who Conquered the Grave · Amen" }
    ]
  },
  {
    "id": "who-am-i",
    "titleKo": "온 땅의 주인 (Who Am I - 나는 누구이기에)",
    "titleEn": "Who Am I (Lord of All the Earth)",
    "artist": "Casting Crowns (캐스팅 크라운스) • 은혜와 정체성",
    "category": "global",
    "videoId": "0h5HjLd15pI",
    "duration": 335,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 20.0, "kr": "🎵 온 땅의 주인 (Who Am I) - 찬양 전주", "en": "Who Am I - Casting Crowns (Intro)" },
      { "start": 20.0, "end": 35.0, "kr": "[1절] 온 땅의 주인 되신 주님이 내 이름을 아시고 기억하시네", "en": "Who am I, that the Lord of all the earth would care to know my name?" },
      { "start": 35.0, "end": 50.0, "kr": "내 슬픔과 아픔을 함께 느끼시네", "en": "Would care to feel my hurt?" },
      { "start": 50.0, "end": 65.0, "kr": "어둠 속 방황하던 내 영혼을 밝은 새벽 별처럼 인도하시네", "en": "Who am I, that the Bright and Morning Star would choose to light the way for my wandering heart?" },
      { "start": 65.0, "end": 80.0, "kr": "[후렴] 내가 누구이기에 날 사랑하시며", "en": "Not because of who I am, but because of what You've done" },
      { "start": 80.0, "end": 95.0, "kr": "내 모든 기도를 들으시는가", "en": "Not because of what I've done, but because of who You are" },
      { "start": 95.0, "end": 110.0, "kr": "나는 아침 안개처럼 피었다 지는 꽃이나", "en": "I am a flower quickly fading, here today and gone tomorrow" },
      { "start": 110.0, "end": 125.0, "kr": "주님은 부르짖을 때 들으시며 날 붙드시네", "en": "A wave tossed in the ocean, a vapor in the wind, still You hear me when I call" },
      { "start": 125.0, "end": 140.0, "kr": "날 주의 자녀라 부르시네, 난 주의 것", "en": "You've told me who I am: I am Yours" },
      { "start": 140.0, "end": 160.0, "kr": "(간주 · 2절 묵상)", "en": "(Interlude)" },
      { "start": 160.0, "end": 175.0, "kr": "[2절] 내가 누구이기에 내 모든 죄악을 보시면서도 사랑의 눈으로 날 보시는가", "en": "Who am I, that the eyes that see my sin would look on me with love and watch me rise again?" },
      { "start": 175.0, "end": 190.0, "kr": "실패와 낙심 중에도 주님은 내 이름을 부르시네", "en": "Who am I, that the voice that calmed the sea would call out through the rain and calm the storm in me?" },
      { "start": 190.0, "end": 210.0, "kr": "[후렴] 내가 누구이기에 날 사랑하시며, 내 모든 기도를 들으시는가", "en": "Not because of who I am, but because of what You've done! Who You are!" },
      { "start": 210.0, "end": 240.0, "kr": "날 주의 자녀라 부르시네! 난 주의 것!", "en": "You've told me who I am: I am Yours! I am Yours!" },
      { "start": 240.0, "end": 285.0, "kr": "[선포] 구원의 주, 영원하신 나의 하나님 안에 내가 온전히 거합니다", "en": "Whom shall I fear? Whom shall I fear? 'Cause I am Yours!" },
      { "start": 285.0, "end": 335.0, "kr": "🕊️ 우리를 보배롭고 존귀하게 여기시는 하나님의 사랑을 영원히 찬양합니다 · 아멘", "en": "Resting Securely as God's Beloved Children Forever · Amen" }
    ]
  },
  {
    "id": "amazing-grace-chains-gone",
    "titleKo": "Amazing Grace (My Chains Are Gone - 나 자유 얻었네)",
    "titleEn": "Amazing Grace (My Chains Are Gone)",
    "artist": "Chris Tomlin (크리스 탐린) • 대속과 해방",
    "category": "hymn",
    "videoId": "Jbe7OruLk8I",
    "duration": 300,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 Amazing Grace (My Chains Are Gone) - 찬양 전주", "en": "Amazing Grace (My Chains Are Gone) - Chris Tomlin (Intro)" },
      { "start": 15.0, "end": 30.0, "kr": "[1절] 나 같은 죄인 살리신 주 은혜 놀라워", "en": "Amazing grace! How sweet the sound that saved a wretch like me!" },
      { "start": 30.0, "end": 45.0, "kr": "잃었던 생명 찾았고 광명을 얻었네", "en": "I once was lost, but now am found, was blind, but now I see" },
      { "start": 45.0, "end": 60.0, "kr": "[2절] 큰 죄악에서 건지신 주 은혜 고마워", "en": "'Twas grace that taught my heart to fear, and grace my fears relieved" },
      { "start": 60.0, "end": 75.0, "kr": "나 처음 믿은 그 시간 귀하고 귀하다", "en": "How precious did that grace appear the hour I first believed!" },
      { "start": 75.0, "end": 88.0, "kr": "[후렴] 내 모든 사슬 끊기었고 나 자유 얻었네", "en": "My chains are gone, I've been set free!" },
      { "start": 88.0, "end": 100.0, "kr": "나의 구주 하나님 날 대속하셨네", "en": "My God, my Savior has ransomed me!" },
      { "start": 100.0, "end": 112.0, "kr": "주의 자비 바다처럼 넘쳐흐르네", "en": "And like a flood His mercy reigns" },
      { "start": 112.0, "end": 128.0, "kr": "영원한 사랑, 한없는 은혜", "en": "Unending love, amazing grace" },
      { "start": 128.0, "end": 145.0, "kr": "[3절] 주 말씀 내게 약속하사 소망을 주시네", "en": "The Lord has promised good to me, His word my hope secures" },
      { "start": 145.0, "end": 160.0, "kr": "주 나의 방패 되시니 영원히 살리라", "en": "He will my shield and portion be as long as life endures" },
      { "start": 160.0, "end": 175.0, "kr": "[후렴] 내 모든 사슬 끊기었고 나 자유 얻었네!", "en": "My chains are gone, I've been set free!" },
      { "start": 175.0, "end": 190.0, "kr": "나의 구주 하나님 날 대속하셨네!", "en": "My God, my Savior has ransomed me!" },
      { "start": 190.0, "end": 205.0, "kr": "주의 자비 바다처럼 넘쳐흐르네, 영원한 사랑 한없는 은혜!", "en": "And like a flood His mercy reigns, unending love, amazing grace!" },
      { "start": 205.0, "end": 240.0, "kr": "[4절] 이 세상 모든 만물 다 사라질지라도 날 부르신 주 하나님 영원히 나의 것", "en": "The earth shall soon dissolve like snow, the sun forbear to shine; But God, who called me here below, will be forever mine" },
      { "start": 240.0, "end": 300.0, "kr": "🕊️ 십자가의 보혈로 모든 결박을 푸시고 자유를 주신 주님을 찬양합니다 · 아멘", "en": "Rejoicing in the Eternal Freedom Purchased by the Blood of Christ · Amen" }
    ]
  },
  {
    "id": "how-great-thou-art",
    "titleKo": "주 하나님 지으신 모든 세계 (찬송가 79장)",
    "titleEn": "How Great Thou Art (Hymn 79)",
    "artist": "새찬송가 79장 • 창조와 구속의 대서사시",
    "category": "hymn",
    "videoId": "dFANxD0",
    "duration": 290,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 주 하나님 지으신 모든 세계 (찬송가 79장) - 찬양 전주", "en": "How Great Thou Art (Hymn 79) - Intro" },
      { "start": 15.0, "end": 32.0, "kr": "[1절] 주 하나님 지으신 모든 세계 내 마음속에 그리어 볼 때", "en": "O Lord my God, when I in awesome wonder consider all the worlds Thy hands have made" },
      { "start": 32.0, "end": 48.0, "kr": "하늘의 별과 뇌성 소리 들으며 주님의 권능 온 세계 보네", "en": "I see the stars, I hear the rolling thunder, Thy power throughout the universe displayed" },
      { "start": 48.0, "end": 62.0, "kr": "[후렴] 주님의 높고 위대하심을 내 영혼이 찬양하네", "en": "Then sings my soul, my Savior God, to Thee: How great Thou art! How great Thou art!" },
      { "start": 62.0, "end": 80.0, "kr": "주님의 높고 위대하심을 내 영혼이 찬양하네", "en": "Then sings my soul, my Savior God, to Thee: How great Thou art! How great Thou art!" },
      { "start": 80.0, "end": 96.0, "kr": "[2절] 숲속이나 거친 들판을 걸을 때 새들의 아름다운 노래 듣네", "en": "When through the woods and forest glades I wander and hear the birds sing sweetly in the trees" },
      { "start": 96.0, "end": 114.0, "kr": "높은 산 위에서 바라보는 풍경, 시원한 바람 속삭이네", "en": "When I look down from lofty mountain grandeur and hear the brook and feel the gentle breeze" },
      { "start": 114.0, "end": 130.0, "kr": "[3절] 주 하나님 독생자 아낌없이 우리를 위해 보내주셨네", "en": "And when I think that God, His Son not sparing, sent Him to die, I scarce can take it in" },
      { "start": 130.0, "end": 148.0, "kr": "십자가에서 내 모든 죄 씻으신 주님의 사랑 측량 못 하네", "en": "That on the cross, my burden gladly bearing, He bled and died to take away my sin" },
      { "start": 148.0, "end": 170.0, "kr": "[후렴 절정] 주님의 높고 위대하심을 내 영혼이 찬양하네!", "en": "Then sings my soul, my Savior God, to Thee: How great Thou art! How great Thou art!" },
      { "start": 170.0, "end": 210.0, "kr": "주 다시 오실 그 영광의 날에 기쁨으로 주 앞에 엎드려 경배하리!", "en": "When Christ shall come with shout of acclamation and take me home, what joy shall fill my heart!" },
      { "start": 210.0, "end": 290.0, "kr": "🕊️ 온 우주 만물을 창조하시고 다스리시는 위대하신 하나님을 찬양합니다 · 아멘", "en": "Declaring the Majesty of God the Creator and Redeemer · Amen" }
    ]
  },
  {
    "id": "i-must-tell-jesus",
    "titleKo": "내 모든 시험 무거운 짐을 (찬송가 337장)",
    "titleEn": "I Must Tell Jesus (Hymn 337)",
    "artist": "새찬송가 337장 • 기도와 참된 안식",
    "category": "hymn",
    "videoId": "070nLd1iK8U",
    "duration": 260,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 14.0, "kr": "🎵 내 모든 시험 무거운 짐을 (찬송가 337장) - 찬양 전주", "en": "I Must Tell Jesus (Hymn 337) - Intro" },
      { "start": 14.0, "end": 29.0, "kr": "[1절] 내 모든 시험 무거운 짐을 주 예수 앞에 아뢰이면", "en": "I must tell Jesus all of my trials; I cannot bear these burdens alone" },
      { "start": 29.0, "end": 44.0, "kr": "근심에 싸인 날 돌아보사 내 근심 모두 맡으시네", "en": "In my distress He kindly will help me; He ever loves and cares for His own" },
      { "start": 44.0, "end": 58.0, "kr": "[후렴] 무거운 짐을 나 홀로 지고 견디다 못해 쓰러질 때", "en": "I must tell Jesus! I must tell Jesus! I cannot bear my burdens alone" },
      { "start": 58.0, "end": 74.0, "kr": "주 예수 내게 오사 날 구원하시네", "en": "I must tell Jesus! I must tell Jesus! Jesus can help me, Jesus alone!" },
      { "start": 74.0, "end": 90.0, "kr": "[2절] 내 모든 괴롬 주님께 고해 슬픔의 눈물 거두시네", "en": "I must tell Jesus all of my troubles; He is a kind, compassionate Friend" },
      { "start": 90.0, "end": 108.0, "kr": "참 평안 주시는 구주 예수 늘 나와 동행하시도다", "en": "If I but ask Him, He will deliver, make of my troubles quickly an end" },
      { "start": 108.0, "end": 125.0, "kr": "[3절] 내 영혼 주를 의지하오니 날 도우사 승리케 하소서", "en": "Tempted and tried, I need a great Savior, One who can help my burdens to bear" },
      { "start": 125.0, "end": 145.0, "kr": "주 예수 나의 산성이시요 영원한 나의 피난처시라", "en": "I must tell Jesus, I must tell Jesus; He all my cares and sorrows will share" },
      { "start": 145.0, "end": 180.0, "kr": "[후렴 절정] 주 예수 내게 오사 날 구원하시네! 주 예수 오직 한 분뿐일세!", "en": "Jesus can help me, Jesus alone! I must tell Jesus!" },
      { "start": 180.0, "end": 260.0, "kr": "🕊️ 모든 염려와 짐을 주께 맡기며 참된 평안을 누립니다 · 아멘", "en": "Casting All Our Cares Upon Jesus Who Cares for Us · Amen" }
    ]
  },
  {
    "id": "tis-so-sweet-to-trust",
    "titleKo": "구주 예수 의지함이 (찬송가 542장)",
    "titleEn": "'Tis So Sweet to Trust in Jesus (Hymn 542)",
    "artist": "새찬송가 542장 • 믿음의 확신",
    "category": "hymn",
    "videoId": "F76lZ-GzQrk",
    "duration": 275,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 14.0, "kr": "🎵 구주 예수 의지함이 (찬송가 542장) - 찬양 전주", "en": "'Tis So Sweet to Trust in Jesus - Intro" },
      { "start": 14.0, "end": 28.0, "kr": "[1절] 구주 예수 의지함이 심히 기쁜 일일세", "en": "'Tis so sweet to trust in Jesus, just to take Him at His word" },
      { "start": 28.0, "end": 43.0, "kr": "허락하심 받았으니 의심 아주 없도다", "en": "Just to rest upon His promise, just to know, 'Thus saith the Lord!'" },
      { "start": 43.0, "end": 57.0, "kr": "[후렴] 예수 예수 믿는 것은 받은 증거 많도다", "en": "Jesus, Jesus, how I trust Him! How I've proved Him o'er and o'er!" },
      { "start": 57.0, "end": 73.0, "kr": "예수 예수 귀한 예수 믿음 더욱 주소서", "en": "Jesus, Jesus, precious Jesus! O for grace to trust Him more!" },
      { "start": 73.0, "end": 88.0, "kr": "[2절] 구주 예수 의지함이 심히 복된 일일세", "en": "O how sweet to trust in Jesus, just to trust His cleansing blood" },
      { "start": 88.0, "end": 104.0, "kr": "예수 보혈 믿는 자는 영생 복을 얻도다", "en": "Just in simple faith to plunge me 'neath the healing, cleansing flood!" },
      { "start": 104.0, "end": 120.0, "kr": "[3절] 구주 예수 의지하여 죄악 벗어 버리네", "en": "Yes, 'tis sweet to trust in Jesus, just from sin and self to cease" },
      { "start": 120.0, "end": 138.0, "kr": "예수께로 바로 와서 생명 평안 얻었네", "en": "Just from Jesus simply taking life and rest, and joy and peace" },
      { "start": 138.0, "end": 165.0, "kr": "[후렴 절정] 예수 예수 귀한 예수, 믿음 더욱 주소서!", "en": "Jesus, Jesus, precious Jesus! O for grace to trust Him more!" },
      { "start": 165.0, "end": 275.0, "kr": "🕊️ 신실하신 예수 그리스도만을 온전히 신뢰합니다 · 아멘", "en": "Trusting in Jesus Christ, the Author and Perfecter of Faith · Amen" }
    ]
  },
  {
    "id": "walk-with-jesus",
    "titleKo": "주와 같이 길 가는 것 (찬송가 430장)",
    "titleEn": "'Tis So Sweet to Walk With Jesus (Hymn 430)",
    "artist": "새찬송가 430장 • 성도의 동행",
    "category": "hymn",
    "videoId": "X9L1rY2Qo0w",
    "duration": 250,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 13.0, "kr": "🎵 주와 같이 길 가는 것 (찬송가 430장) - 찬양 전주", "en": "'Tis So Sweet to Walk With Jesus - Intro" },
      { "start": 13.0, "end": 27.0, "kr": "[1절] 주와 같이 길 가는 것 즐거운 일 아닌가", "en": "'Tis a happy thing to walk along with Jesus day by day" },
      { "start": 27.0, "end": 42.0, "kr": "우리 주님 걸어가신 발자취를 밟겠네", "en": "Following the blessed footsteps of our Savior on the way" },
      { "start": 42.0, "end": 56.0, "kr": "[후렴] 한 걸음 한 걸음 주 예수와 함께", "en": "Step by step, day by day, walking with our Savior" },
      { "start": 56.0, "end": 72.0, "kr": "날마다 날마다 우리는 걷겠네", "en": "Every day, hand in hand, we will walk along with Him" },
      { "start": 72.0, "end": 86.0, "kr": "[2절] 어린아이 같은 우리 미련하고 약하나", "en": "Weak and foolish though we be, like children needing tender care" },
      { "start": 86.0, "end": 102.0, "kr": "주의 손에 이끌리어 생명 길로 가겠네", "en": "By His loving hand we're led along the path of life so fair" },
      { "start": 102.0, "end": 118.0, "kr": "[3절] 꽃이 피는 들판이나 험한 골짜기라도", "en": "Through the blooming pleasant meadows or along the rugged trail" },
      { "start": 118.0, "end": 135.0, "kr": "주가 인도하는 대로 주와 같이 가겠네", "en": "Where He leads we gladly follow, where His guidance cannot fail" },
      { "start": 135.0, "end": 160.0, "kr": "[후렴 절정] 한 걸음 한 걸음 주 예수와 함께 날마다 걷겠네!", "en": "Step by step, day by day, walking along with Jesus!" },
      { "start": 160.0, "end": 250.0, "kr": "🕊️ 주님 손잡고 날마다 언약의 여정을 걷는 성도가 되길 기도합니다 · 아멘", "en": "Walking Daily with Jesus on the Covenant Journey · Amen" }
    ]
  },
  {
    "id": "peace-wonderful-peace",
    "titleKo": "내 영혼의 그윽히 깊은 데서 (찬송가 412장)",
    "titleEn": "Far Away in the Depths of My Soul (Hymn 412)",
    "artist": "새찬송가 412장 • 하늘의 평화",
    "category": "hymn",
    "videoId": "h1e3k6p9q2o",
    "duration": 285,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 16.0, "kr": "🎵 내 영혼의 그윽히 깊은 데서 (찬송가 412장) - 찬양 전주", "en": "Far Away in the Depths of My Soul - Intro" },
      { "start": 16.0, "end": 32.0, "kr": "[1절] 내 영혼의 그윽히 깊은 데서 맑은 가락이 울려나네", "en": "Far away in the depths of my spirit tonight rolls a melody sweeter than psalm" },
      { "start": 32.0, "end": 49.0, "kr": "하늘 곡조가 언제나 흘러나와 내 영혼을 고이 싸네", "en": "In celestial-like strains it unceasingly falls o'er my soul like an infinite calm" },
      { "start": 49.0, "end": 64.0, "kr": "[후렴] 평화 평화로다 하늘 위에서 내려오네", "en": "Peace! Peace! Wonderful peace, coming down from the Father above!" },
      { "start": 64.0, "end": 82.0, "kr": "그 사랑의 물결이 영원토록 내 영혼을 덮으소서", "en": "Sweep over my spirit forever, I pray, in fathomless billows of love!" },
      { "start": 82.0, "end": 98.0, "kr": "[2절] 내 맘속에 솟아난 이 평화는 깊은 안식을 주도다", "en": "What a treasure I have in this wonderful peace, buried deep in the heart of my soul" },
      { "start": 98.0, "end": 116.0, "kr": "어떤 시련과 풍파도 흔들지 못해, 주 예수의 참 평화라", "en": "So secure that no power can mine it away, while the years of eternity roll!" },
      { "start": 116.0, "end": 133.0, "kr": "[3절] 이 땅 위의 평화는 헛되도다 오직 주님만 바라보네", "en": "I am resting tonight in this wonderful peace, resting sweetly in Jesus' control" },
      { "start": 133.0, "end": 152.0, "kr": "영원토록 변함없는 참된 평강 주님만이 베푸시네", "en": "For I'm kept from all danger by night and by day, and His glory is flooding my soul!" },
      { "start": 152.0, "end": 185.0, "kr": "[후렴 절정] 평화 평화로다! 하늘 위에서 내려오네!", "en": "Peace! Peace! Wonderful peace, coming down from the Father above!" },
      { "start": 185.0, "end": 285.0, "kr": "🕊️ 세상이 줄 수 없는 하나님의 참된 평강이 우리 영혼을 채우시길 기도합니다 · 아멘", "en": "May the Peace of God That Surpasses All Understanding Guard Your Hearts · Amen" }
    ]
  },
  {
    "id": "mercy-is-falling",
    "titleKo": "주의 자비가 내려와 (Mercy Is Falling)",
    "titleEn": "Mercy Is Falling (Like a Sweet Spring Rain)",
    "artist": "David Ruis (데이빗 루이스) • 기쁨과 춤추는 찬양",
    "category": "global",
    "videoId": "R0x7z9L7k1c",
    "duration": 240,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 14.0, "kr": "🎵 주의 자비가 내려와 (Mercy Is Falling) - 찬양 전주", "en": "Mercy Is Falling - David Ruis (Intro)" },
      { "start": 14.0, "end": 28.0, "kr": "[1절] 주의 자비가 내려와 내려와, 주의 자비가 봄비같이 내려와", "en": "Mercy is falling, is falling, is falling; Mercy it falls like the sweet spring rain" },
      { "start": 28.0, "end": 44.0, "kr": "주의 자비가 내려와 나를 덮네", "en": "Mercy is falling, is falling all over me" },
      { "start": 44.0, "end": 58.0, "kr": "[후렴] 헤이호 주의 자비하심으로", "en": "Hey-oh, I receive Your mercy!" },
      { "start": 58.0, "end": 72.0, "kr": "헤이호 영원히 기뻐하리", "en": "Hey-oh, I receive Your grace!" },
      { "start": 72.0, "end": 86.0, "kr": "헤이호 주 사랑 인하여 나 영원히 춤추리라", "en": "Hey-oh, I will dance forevermore!" },
      { "start": 86.0, "end": 102.0, "kr": "[1절 반복] 주의 자비가 내려와 내려와, 주의 자비가 봄비같이 내려와", "en": "Mercy is falling, is falling; Mercy it falls like the sweet spring rain" },
      { "start": 102.0, "end": 120.0, "kr": "주의 자비가 내려와 나를 덮네", "en": "Mercy is falling, is falling all over me" },
      { "start": 120.0, "end": 150.0, "kr": "[후렴 절정] 헤이호 주의 자비하심으로! 영원히 기뻐 뛰놀며 춤추리라!", "en": "Hey-oh, I receive Your mercy! I will dance forevermore!" },
      { "start": 150.0, "end": 240.0, "kr": "🕊️ 날마다 새롭게 부어주시는 주의 자비와 기쁨을 찬양합니다 · 아멘", "en": "Rejoicing in the Mercies of God New Every Morning · Amen" }
    ]
  },
  {
    "id": "do-not-fear",
    "titleKo": "아무것도 두려워 말라 (주 나의 하나님이)",
    "titleEn": "Do Not Fear (The Lord My God Protects Me)",
    "artist": "예수전도단 (YWAM) • 영적 담대함과 평안",
    "category": "confession",
    "videoId": "c3Uf9t1Z7d0",
    "duration": 310,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 18.0, "kr": "🎵 아무것도 두려워 말라 - 찬양 전주", "en": "Do Not Fear - YWAM (Intro)" },
      { "start": 18.0, "end": 33.0, "kr": "[1절] 아무것도 두려워 말라 주 나의 하나님이 지켜주시네", "en": "Do not be afraid of anything, the Lord my God will watch over you" },
      { "start": 33.0, "end": 50.0, "kr": "놀라지 말라 겁내지 말라 주님 나를 붙드시네", "en": "Do not be dismayed, do not fear, the Lord will uphold you" },
      { "start": 50.0, "end": 65.0, "kr": "[후렴] 너는 가만히 있어 주가 하나님 됨 알지어다", "en": "Be still and know that He is God Almighty" },
      { "start": 65.0, "end": 80.0, "kr": "열방과 세계 가운데 주가 높임을 받으리라", "en": "He will be exalted among the nations, exalted in all the earth" },
      { "start": 80.0, "end": 96.0, "kr": "주는 나의 피난처시요 요새시니", "en": "The Lord is my refuge and my fortress" },
      { "start": 96.0, "end": 115.0, "kr": "내가 의뢰하는 하나님이라", "en": "My God in whom I put my whole trust" },
      { "start": 115.0, "end": 135.0, "kr": "(간주 · 묵상)", "en": "(Interlude)" },
      { "start": 135.0, "end": 150.0, "kr": "[1절 반복] 아무것도 두려워 말라 주 나의 하나님이 지켜주시네", "en": "Do not be afraid, the Lord my God will protect you" },
      { "start": 150.0, "end": 168.0, "kr": "놀라지 말라 겁내지 말라 주님 나를 붙드시네", "en": "Do not be dismayed, the Lord will hold you fast" },
      { "start": 168.0, "end": 185.0, "kr": "[선포] 너는 가만히 있어 주가 하나님 됨 알지어다!", "en": "Be still and know that He is God!" },
      { "start": 185.0, "end": 220.0, "kr": "열방과 세계 가운데 주가 영광을 받으시리라!", "en": "He will be exalted in all the nations and the earth!" },
      { "start": 220.0, "end": 310.0, "kr": "🕊️ 어떤 위기 속에서도 굳건한 반석 되시는 하나님을 의지합니다 · 아멘", "en": "Resting Safely in the Mighty Fortress of Our God · Amen" }
    ]
  },
  {
    "id": "every-move-i-make",
    "titleKo": "내 모든 삶의 행동 주 안에 (Every Move I Make)",
    "titleEn": "Every Move I Make",
    "artist": "David Ruis / 다윗의장막 • 활력과 찬양",
    "category": "global",
    "videoId": "vy06wD8p_iA",
    "duration": 260,
    "bgImage": "assets/worship_bg.jpg",
    "lines": [
      { "start": 0.0, "end": 15.0, "kr": "🎵 내 모든 삶의 행동 주 안에 (Every Move I Make) - 찬양 전주", "en": "Every Move I Make - David Ruis (Intro)" },
      { "start": 15.0, "end": 28.0, "kr": "[1절] 내 모든 삶의 행동 주 안에 주 안에 있네", "en": "Every move I make I make in You, You make me move, Jesus" },
      { "start": 28.0, "end": 42.0, "kr": "나의 모든 호흡 주 안에 있네", "en": "Every breath I take I breathe in You" },
      { "start": 42.0, "end": 56.0, "kr": "내 모든 발걸음 주 안에 주 안에 있네", "en": "Every step I take I take in You, You are my way, Jesus" },
      { "start": 56.0, "end": 72.0, "kr": "나의 모든 생명 주께 있네", "en": "Every breath I take I breathe in You" },
      { "start": 72.0, "end": 86.0, "kr": "[후렴] 자비와 은혜의 물결 어디서나 주 얼굴 보네", "en": "Waves of mercy, waves of grace; Everywhere I look, I see Your face" },
      { "start": 86.0, "end": 102.0, "kr": "주의 사랑 날 사로잡네, 오 주님 크신 사랑", "en": "Your love has captured me; Oh my God, this love, how can it be?" },
      { "start": 102.0, "end": 118.0, "kr": "[1절 반복] 내 모든 삶의 행동 주 안에 주 안에 있네", "en": "Every move I make I make in You, You make me move, Jesus" },
      { "start": 118.0, "end": 136.0, "kr": "나의 모든 호흡 주 안에 있네!", "en": "Every breath I take I breathe in You!" },
      { "start": 136.0, "end": 170.0, "kr": "[후렴 절정] 주의 사랑 날 사로잡네! 오 주님 크신 사랑!", "en": "Your love has captured me! Oh my God, this love, how can it be?" },
      { "start": 170.0, "end": 260.0, "kr": "🕊️ 우리의 모든 숨결과 발걸음이 오직 그리스도 안에 있음을 고백합니다 · 아멘", "en": "In Him We Live and Move and Have Our Being · Amen" }
    ]
  }
];

// App Studio State
let worshipStudioState = {
  currentSong: PRESET_PRAISE_SONGS[0],
  allSongs: [],
  activeTab: 'player', // 'player' | 'creator'
  mediaMode: 'local', // 'local' (고음질 수록 음원/영상 & 100% 실시간 자막) | 'youtube' (공식 영상)
  subtitleMode: 'manual', // 'manual' (클릭 및 키보드 수동 넘김 - 권장) | 'auto' (시간 기반 자동 싱크)
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
  worshipStudioState.allSongs = [...PRESET_PRAISE_SONGS, ...customList];
}

// Open / Close Studio Modal
function openWorshipStudio(targetSongId = 'amazing-grace', autoPlay = false) {
  loadCustomSongs();
  populateSongSelector(targetSongId);
  selectWorshipSong(targetSongId, null, autoPlay);
  switchStudioTab('player');
  
  const modal = document.getElementById('worshipStudioModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
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
  const wrapper = document.getElementById('studioYouTubePlayerWrapper');
  if (wrapper) wrapper.style.display = 'block';

  if (ytStudioPlayer && typeof ytStudioPlayer.loadVideoById === 'function') {
    try {
      if (autoPlay) {
        ytStudioPlayer.loadVideoById({ videoId: videoId, startSeconds: 0 });
      } else if (typeof ytStudioPlayer.cueVideoById === 'function') {
        ytStudioPlayer.cueVideoById({ videoId: videoId, startSeconds: 0 });
      }
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
          autoplay: autoPlay ? 1 : 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
          origin: window.location.origin
        },
        events: {
          onReady: (event) => {
            if (autoPlay) {
              try { event.target.playVideo(); } catch(e) {}
            }
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
  presetGroup.label = "⭐ 공식 찬양 보관함 (30곡 라이브러리)";
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

  // 1. Zoom Safe Mode (Ultra-lightweight MP3 + High-contrast live subtitles, 0% stuttering)
  if (worshipStudioState.mediaMode === 'safe-audio' && song.audioUrl) {
    if (ytWrapper) ytWrapper.style.display = 'none';
    if (ytStudioPlayer && typeof ytStudioPlayer.pauseVideo === 'function') {
      try { ytStudioPlayer.pauseVideo(); } catch(e) {}
    }
    if (video) {
      video.pause();
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
    if (video) { video.pause(); video.style.display = 'none'; }
    if (audio) { audio.pause(); audio.style.display = 'none'; }
    if (mediaWrapper) {
      mediaWrapper.style.backgroundImage = 'none';
    }
    mountYouTubePlayer(song.videoId, autoPlay);
  } else if (song.videoUrl) {
    // 3. High-Definition 1080p MP4 Video (All 10 Songs)
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
    if (video) { video.pause(); video.style.display = 'none'; }
    if (audio) { audio.pause(); audio.style.display = 'none'; }
    if (mediaWrapper) mediaWrapper.style.backgroundImage = 'none';
    mountYouTubePlayer(song.videoId, autoPlay);
  } else {
    if (ytWrapper) ytWrapper.style.display = 'none';
    if (video) video.style.display = 'none';
    if (audio) audio.style.display = 'none';
  }

  // Render Lyric Stream Table
  renderLyricStream(song);

  // Initialize Subtitle for selected mode
  worshipStudioState.isSubtitleHidden = false;
  if (worshipStudioState.subtitleMode === 'manual' && song.lines && song.lines.length > 0) {
    worshipStudioState.currentLineIndex = 0;
    displayOverlaySubtitle(song.lines[0]);
    highlightLyricStreamRow(0);
  } else {
    displayOverlaySubtitle(null);
  }
  updateSubtitleControlBar();
}

// Media Timeupdate & Buffer Stall Handler for real-time Subtitle Sync
function setupMediaTimeUpdate(mediaEl) {
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

  const song = worshipStudioState.currentSong;
  // Only suppress HTML overlay if we are playing local video of Amazing Grace which has burned-in subs AND we are in auto mode
  if (worshipStudioState.subtitleMode === 'auto' && worshipStudioState.mediaMode === 'local' && song && song.id === 'amazing-grace' && song.videoUrl) {
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

    // 6. Space: Play / Pause Music
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


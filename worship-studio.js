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
      {
        "start": 0.5,
        "end": 5.0,
        "kr": "🎵 나 같은 죄인 살리신 (찬송가 305장)",
        "en": "Amazing Grace (Hymn 305) - Arise Next Gen"
      },
      {
        "start": 5.0,
        "end": 25.0,
        "kr": "[1절] 나 같은 죄인 살리신 주 은혜 놀라워",
        "en": "Amazing grace! how sweet the sound That saved a wretch like me!"
      },
      {
        "start": 25.0,
        "end": 45.0,
        "kr": "잃었던 생명 찾았고 광명을 얻었네",
        "en": "I once was lost, but now am found, Was blind, but now I see."
      },
      {
        "start": 45.0,
        "end": 65.0,
        "kr": "[2절] 큰 죄악에서 건지신 주 은혜 고마워",
        "en": "'Twas grace that taught my heart to fear, And grace my fears relieved;"
      },
      {
        "start": 65.0,
        "end": 85.0,
        "kr": "나 처음 믿은 그 시간 귀하고 귀하다",
        "en": "How precious did that grace appear The hour I first believed!"
      },
      {
        "start": 85.0,
        "end": 105.0,
        "kr": "[3절] 이제껏 내가 산 것도 주님의 은혜라",
        "en": "Through many dangers, toils and snares, I have already come;"
      },
      {
        "start": 105.0,
        "end": 125.0,
        "kr": "또 나를 장차 본향에 인도해 주시리",
        "en": "'Tis grace hath brought me safe thus far, And grace will lead me home."
      },
      {
        "start": 125.0,
        "end": 145.0,
        "kr": "[4절] 거기서 우리 영원히 주님의 은혜로",
        "en": "When we've been there ten thousand years, Bright shining as the sun,"
      },
      {
        "start": 145.0,
        "end": 165.0,
        "kr": "해처럼 밝게 살면서 주 찬양 하리라",
        "en": "We've no less days to sing God's praise Than when we'd first begun."
      },
      {
        "start": 165.0,
        "end": 170.0,
        "kr": "🕊️ 주님의 은혜에 감사드립니다 · 아멘",
        "en": "Giving Thanks to God's Abundant Grace · Amen"
      }
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
      {
        "start": 0.0,
        "end": 37.0,
        "kr": "🎵 Way Maker (길을 만드시는 분) - 찬양 전주",
        "en": "Way Maker - Leeland (Intro)"
      },
      {
        "start": 37.0,
        "end": 51.0,
        "kr": "[1절] 이곳에 운행하시는 주님, 주를 예배합니다",
        "en": "You are here, moving in our midst; I worship You, I worship You"
      },
      {
        "start": 51.0,
        "end": 65.0,
        "kr": "이곳에 역사하시는 주님, 주를 찬양합니다",
        "en": "You are here, working in this place; I worship You, I worship You"
      },
      {
        "start": 65.0,
        "end": 79.0,
        "kr": "이곳에 임재하시는 주님, 주를 예배합니다",
        "en": "You are here, moving in our midst; I worship You, I worship You"
      },
      {
        "start": 79.0,
        "end": 95.0,
        "kr": "이곳에 일하시는 주님, 주를 찬양합니다",
        "en": "You are here, working in this place; I worship You, I worship You"
      },
      {
        "start": 95.0,
        "end": 108.0,
        "kr": "[후렴] 길을 만드시는 분, 기적의 주, 약속을 지키시는 분",
        "en": "You are Way maker, miracle worker, promise keeper"
      },
      {
        "start": 108.0,
        "end": 122.0,
        "kr": "어둠 속의 빛, 나의 하나님, 그분은 나의 주님",
        "en": "Light in the darkness, my God, that is who You are"
      },
      {
        "start": 122.0,
        "end": 135.0,
        "kr": "[후렴] 길을 만드시는 분, 기적의 주, 언약의 하나님",
        "en": "Way maker, miracle worker, promise keeper, Light in the darkness"
      },
      {
        "start": 135.0,
        "end": 150.0,
        "kr": "어둠 속의 빛, 나의 하나님, 그분은 나의 주님",
        "en": "My God, that is who You are"
      },
      {
        "start": 150.0,
        "end": 164.0,
        "kr": "[2절] 상한 마음 만지시는 주님, 주를 예배합니다",
        "en": "You are here, touching every heart; I worship You, I worship You"
      },
      {
        "start": 164.0,
        "end": 178.0,
        "kr": "모든 아픔 고치시는 주님, 주를 예배합니다",
        "en": "You are here, healing every heart; I worship You, I worship You"
      },
      {
        "start": 178.0,
        "end": 192.0,
        "kr": "모든 삶을 돌이키시는 주님, 주를 찬양합니다",
        "en": "You are here, turning lives around; I worship You, I worship You"
      },
      {
        "start": 192.0,
        "end": 207.0,
        "kr": "부서진 맘 싸매시는 주님, 주를 경배합니다",
        "en": "You are here, mending every heart; I worship You, I worship You"
      },
      {
        "start": 207.0,
        "end": 230.0,
        "kr": "[후렴] 길을 만드시는 분, 기적의 하나님, 언약을 지키시는 분",
        "en": "Way maker, miracle worker, promise keeper, Light in the darkness"
      },
      {
        "start": 230.0,
        "end": 259.0,
        "kr": "어둠 속의 빛, 그분은 나의 하나님, 신실하신 나의 주",
        "en": "My God, that is who You are, that is who You are"
      },
      {
        "start": 259.0,
        "end": 289.0,
        "kr": "[후렴 반복] 길을 만드시는 분, 기적의 주, 나의 하나님",
        "en": "Way maker, miracle worker, promise keeper, that is who You are"
      },
      {
        "start": 289.0,
        "end": 303.0,
        "kr": "[브릿지] 보이지 않아도 주 일하시네, 느껴지지 않아도 역사하시네",
        "en": "Even when I don't see it, You're working; Even when I don't feel it, You're working"
      },
      {
        "start": 303.0,
        "end": 318.0,
        "kr": "결코 멈추지 않으시네, 주님은 결코 멈추지 않으시네",
        "en": "You never stop, You never stop working; You never stop, You never stop working"
      },
      {
        "start": 318.0,
        "end": 331.0,
        "kr": "보이지 않아도 주 일하시네, 느껴지지 않아도 역사하시네",
        "en": "Even when I don't see it, You're working; Even when I don't feel it, You're working"
      },
      {
        "start": 331.0,
        "end": 346.0,
        "kr": "결코 멈추지 않으시네, 주님은 결코 멈추지 않으시네",
        "en": "You never stop, You never stop working; You never stop, You never stop working"
      },
      {
        "start": 346.0,
        "end": 372.0,
        "kr": "[후렴 절정] 길을 만드시는 분, 기적의 하나님, 어둠 속의 빛!",
        "en": "Way maker, miracle worker, promise keeper, Light in the darkness, that is who You are!"
      },
      {
        "start": 372.0,
        "end": 405.0,
        "kr": "그분은 나의 하나님, 신실하신 나의 구원자!",
        "en": "That is who You are! That is who You are!"
      },
      {
        "start": 405.0,
        "end": 432.0,
        "kr": "[선포] 모든 이름 위에 뛰어난 주 예수 그리스도!",
        "en": "His Name is above depression, His Name is above loneliness, disease and every name!"
      },
      {
        "start": 432.0,
        "end": 475.0,
        "kr": "살아계신 나의 주, 영원한 나의 하나님을 찬양합니다",
        "en": "That is who You are, Jesus, that is who You are!"
      },
      {
        "start": 475.0,
        "end": 503.0,
        "kr": "🕊️ 길을 만드시는 신실하신 주님을 영원히 찬양합니다 · 아멘",
        "en": "Giving Praise to the Way Maker, Our Faithful God · Amen"
      }
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
      {
        "start": 0.0,
        "end": 31.0,
        "kr": "🎵 The Blessing (주의 축복 - 민수기 6:24-26) 전주",
        "en": "The Blessing - Elevation Worship / Kari Jobe (Intro)"
      },
      {
        "start": 31.0,
        "end": 38.0,
        "kr": "[1절] 여호와는 너에게 복을 주시고 너를 지키시기를 원하며",
        "en": "The Lord bless you and keep you"
      },
      {
        "start": 38.0,
        "end": 44.5,
        "kr": "그의 얼굴을 네게 비추사 은혜 베푸시기를 원하며",
        "en": "Make His face shine upon you and be gracious to you"
      },
      {
        "start": 44.5,
        "end": 51.5,
        "kr": "여호와는 그 얼굴을 네게로 향하여 드사",
        "en": "The Lord turn His face toward you"
      },
      {
        "start": 51.5,
        "end": 60.0,
        "kr": "네게 평강 주시기를 원하노라",
        "en": "And give you peace"
      },
      {
        "start": 60.0,
        "end": 92.0,
        "kr": "[간주 묵상]",
        "en": "Instrumental Interlude"
      },
      {
        "start": 92.0,
        "end": 110.0,
        "kr": "[후렴] 아멘, 아멘, 아멘",
        "en": "Amen, amen, amen"
      },
      {
        "start": 110.0,
        "end": 130.0,
        "kr": "아멘, 아멘, 아멘 (평강이 임할지어다)",
        "en": "Amen, amen, amen"
      },
      {
        "start": 130.0,
        "end": 146.0,
        "kr": "[간주]",
        "en": "Interlude"
      },
      {
        "start": 146.0,
        "end": 170.0,
        "kr": "[후렴 반복] 아멘, 아멘, 아멘",
        "en": "Amen, amen, amen (We sing)"
      },
      {
        "start": 170.0,
        "end": 200.0,
        "kr": "[간주]",
        "en": "Instrumental Interlude"
      },
      {
        "start": 200.0,
        "end": 214.0,
        "kr": "[2절] 주께서 네게 복을 주시고 너를 지키시며 은혜 베푸시기를 원하노라",
        "en": "The Lord bless you and keep you, make His face shine upon you and be gracious to you"
      },
      {
        "start": 214.0,
        "end": 230.0,
        "kr": "여호와께서 그 얼굴을 네게로 드사 평강 주시기를 원하노라",
        "en": "The Lord turn His face toward you and give you peace"
      },
      {
        "start": 230.0,
        "end": 260.0,
        "kr": "[후렴 절정] 아멘, 아멘, 아멘",
        "en": "Amen, amen, amen"
      },
      {
        "start": 260.0,
        "end": 300.0,
        "kr": "아멘, 아멘, 아멘",
        "en": "Amen, amen, amen"
      },
      {
        "start": 300.0,
        "end": 339.0,
        "kr": "[간주 - 브릿지 준비]",
        "en": "Instrumental Build-up"
      },
      {
        "start": 339.0,
        "end": 352.0,
        "kr": "[브릿지 1] 주의 은혜가 네 위에 머물며, 천 대에 이르기까지",
        "en": "May His favor be upon you and a thousand generations"
      },
      {
        "start": 352.0,
        "end": 365.0,
        "kr": "너와 네 가문과 네 자녀와 그의 후대들에게 임하기를",
        "en": "And your family and your children, and their children, and their children"
      },
      {
        "start": 365.0,
        "end": 378.0,
        "kr": "주의 은혜가 네 위에 머물며, 천 대에 이르기까지",
        "en": "May His favor be upon you and a thousand generations"
      },
      {
        "start": 378.0,
        "end": 392.0,
        "kr": "너와 네 가문과 네 자녀와 그의 후대들에게 임하기를",
        "en": "And your family and your children, and their children, and their children"
      },
      {
        "start": 392.0,
        "end": 434.0,
        "kr": "[간주 - 성령의 임재]",
        "en": "Instrumental Worship"
      },
      {
        "start": 434.0,
        "end": 448.0,
        "kr": "[브릿지 2] 주님의 임재가 네 앞서 가시며 네 뒤를 따르시네",
        "en": "May His presence go before you, and behind you, and beside you"
      },
      {
        "start": 448.0,
        "end": 462.0,
        "kr": "네 사방을 둘러싸시며 언제나 네 안에 함께 계시네",
        "en": "All around you, and within you, He is with you, He is with you"
      },
      {
        "start": 462.0,
        "end": 476.0,
        "kr": "[브릿지 3] 아침에도 저녁에도 네 출입을 지키시며",
        "en": "In the morning, in the evening, in your coming, and your going"
      },
      {
        "start": 476.0,
        "end": 495.0,
        "kr": "네 눈물과 네 기쁨 속에서 주님은 너를 위하시네",
        "en": "In your weeping, and rejoicing, He is for you, He is for you"
      },
      {
        "start": 495.0,
        "end": 540.0,
        "kr": "[선포] 주님은 너를 위하시네! 그는 네 편이시라!",
        "en": "He is for you! He is for you! He is for you!"
      },
      {
        "start": 540.0,
        "end": 620.0,
        "kr": "[후렴 대합창] 아멘! 아멘! 열방과 후대들에게 평강이 임할지어다!",
        "en": "Amen! Amen! Amen! Peace be upon all generations!"
      },
      {
        "start": 620.0,
        "end": 730.0,
        "kr": "🕊️ 천 대에 이르는 하나님의 축복을 선포합니다 · 아멘",
        "en": "Declaring God's Generational Blessing Forever · Amen"
      }
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
      {
        "start": 0.0,
        "end": 5.0,
        "kr": "🎵 Goodness of God (선하신 주) - 전주",
        "en": "Goodness of God - Bethel Music (Intro)"
      },
      {
        "start": 5.0,
        "end": 15.0,
        "kr": "[1절] 사랑합니다 주님, 주의 자비는 결코 마르지 않네",
        "en": "I love You, Lord, for Your mercy never fails me"
      },
      {
        "start": 15.0,
        "end": 22.0,
        "kr": "내 평생 살아온 모든 날들 주님의 손에 붙들렸네",
        "en": "All my days I've been held in Your hands"
      },
      {
        "start": 22.0,
        "end": 31.0,
        "kr": "아침에 눈을 뜰 때부터 밤에 잠자리에 들 때까지",
        "en": "From the moment that I wake up until I lay my head"
      },
      {
        "start": 31.0,
        "end": 37.0,
        "kr": "오, 나는 하나님의 선하심을 노래하리라",
        "en": "Oh, I will sing of the goodness of God"
      },
      {
        "start": 37.0,
        "end": 42.0,
        "kr": "[후렴] 내 평생 주님은 언제나 신실하셨고",
        "en": "'Cause all my life You have been faithful"
      },
      {
        "start": 42.0,
        "end": 48.0,
        "kr": "내 평생 주님은 너무나도 선하셨네",
        "en": "And all my life You have been so, so good"
      },
      {
        "start": 48.0,
        "end": 58.0,
        "kr": "내 모든 호흡이 다하는 그날까지 주의 선하심을 노래하리라",
        "en": "With every breath that I am able, I will sing of the goodness of God"
      },
      {
        "start": 58.0,
        "end": 67.0,
        "kr": "[2절] 주님의 음성을 사랑합니다, 깊은 불 가운데서도 나를 이끄셨네",
        "en": "I love Your voice, You have led me through the fire"
      },
      {
        "start": 67.0,
        "end": 75.0,
        "kr": "가장 어두운 밤에도 주님은 내 곁에 가장 가까이 계셨네",
        "en": "In darkest nights You are close like no other"
      },
      {
        "start": 75.0,
        "end": 83.0,
        "kr": "주는 나의 아버지, 나의 가장 귀한 친구",
        "en": "I've known You as a Father, I've known You as a Friend"
      },
      {
        "start": 83.0,
        "end": 89.0,
        "kr": "주의 은혜 안에서 살았네",
        "en": "And I have lived in the goodness of God"
      },
      {
        "start": 89.0,
        "end": 99.0,
        "kr": "[후렴] 내 평생 주님은 언제나 신실하셨고",
        "en": "'Cause all my life You have been faithful"
      },
      {
        "start": 99.0,
        "end": 110.0,
        "kr": "내 평생 주님은 너무나도 선하셨네, 주의 선하심을 노래하리라",
        "en": "And all my life You have been so good, I will sing of the goodness of God"
      },
      {
        "start": 110.0,
        "end": 127.0,
        "kr": "[브릿지] 주의 선하심이 내 평생에 나를 따르네, 나를 쫓아오네!",
        "en": "Your goodness is running after, it's running after me!"
      },
      {
        "start": 127.0,
        "end": 145.0,
        "kr": "내 모든 삶을 주 앞에 내려놓고 주께 온전히 드리네",
        "en": "With my life laid down, I'm surrendered now, I give You everything"
      },
      {
        "start": 145.0,
        "end": 165.0,
        "kr": "주의 선하심이 내 평생에 나를 따르네, 나를 쫓아오네!",
        "en": "Your goodness is running after, it's running after me!"
      },
      {
        "start": 165.0,
        "end": 205.0,
        "kr": "[후렴 절정] 내 평생 주님은 신실하셨고 선하셨네, 주의 선하심을 영원히 노래하리라!",
        "en": "All my life You have been faithful! I will sing of the goodness of God!"
      },
      {
        "start": 205.0,
        "end": 296.0,
        "kr": "🕊️ 모든 날 동안 베푸신 하나님의 선하심에 감사드립니다 · 아멘",
        "en": "Forever Thankful for the Goodness of God · Amen"
      }
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
      {
        "start": 0.0,
        "end": 11.0,
        "kr": "🎵 10,000 Reasons (송축해 내 영혼) - 어쿠스틱 전주",
        "en": "10,000 Reasons - Matt Redman (Intro)"
      },
      {
        "start": 11.0,
        "end": 19.0,
        "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 주 이름 찬양해",
        "en": "Bless the Lord, O my soul, O my soul, worship His holy name"
      },
      {
        "start": 19.0,
        "end": 38.0,
        "kr": "새 노래로 주를 예배하리, 거룩한 주의 이름을 높이세",
        "en": "Sing like never before, O my soul, I'll worship Your holy name"
      },
      {
        "start": 38.0,
        "end": 52.0,
        "kr": "[1절] 새 날이 밝았고 새 아침이 왔네, 이제 다시 감사의 노래를 드리네",
        "en": "The sun comes up, it's a new day dawning, it's time to sing Your song again"
      },
      {
        "start": 52.0,
        "end": 68.0,
        "kr": "내게 무슨 일이 생기든지, 저녁이 올 때까지 감사로 노래하리라",
        "en": "Whatever may pass and whatever lies before me, let me be singing when the evening comes"
      },
      {
        "start": 68.0,
        "end": 86.0,
        "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 이름 찬양해",
        "en": "Bless the Lord, O my soul, worship His holy name, sing like never before"
      },
      {
        "start": 86.0,
        "end": 95.0,
        "kr": "거룩한 주의 이름을 높이세",
        "en": "I'll worship Your holy name"
      },
      {
        "start": 95.0,
        "end": 108.0,
        "kr": "[2절] 인자와 자비가 풍성하시며 주의 이름 광대하시네",
        "en": "You're rich in love and You're slow to anger, Your name is great and Your heart is kind"
      },
      {
        "start": 108.0,
        "end": 124.0,
        "kr": "주의 선하심을 찬양할 만 가지 이유를 내 영혼이 노래하네",
        "en": "For all Your goodness, I will keep on singing, ten thousand reasons for my heart to find"
      },
      {
        "start": 124.0,
        "end": 151.0,
        "kr": "[후렴] 송축해 내 영혼, 내 영혼아, 거룩하신 이름 찬양해",
        "en": "Bless the Lord, O my soul, worship His holy name, sing like never before"
      },
      {
        "start": 151.0,
        "end": 164.0,
        "kr": "[3절] 내 육신의 힘이 다하고 마지막 날이 이를 때에도",
        "en": "And on that day when my strength is failing, the end draws near and my time has come"
      },
      {
        "start": 164.0,
        "end": 182.0,
        "kr": "내 영혼은 영원토록 주를 찬양하리라, 만 년이 지나도 영원토록",
        "en": "Still, my soul will sing Your praise unending, ten thousand years and then forevermore"
      },
      {
        "start": 182.0,
        "end": 220.0,
        "kr": "[후렴 절정] 송축해 내 영혼, 온 맘 다해 주를 예배하리라!",
        "en": "Bless the Lord, O my soul! I'll worship Your holy name!"
      },
      {
        "start": 220.0,
        "end": 261.0,
        "kr": "🕊️ 만 가지 이유로 주님을 영원토록 찬양합니다 · 아멘",
        "en": "Praising the Lord with 10,000 Reasons Forever · Amen"
      }
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
      {
        "start": 0.0,
        "end": 8.2,
        "kr": "🎵 What a Beautiful Name (아름다우신 이름) - 전주",
        "en": "What a Beautiful Name - Hillsong Worship (Intro)"
      },
      {
        "start": 8.2,
        "end": 22.0,
        "kr": "[1절] 태초에 말씀으로 계신 주, 지존하신 하나님과 함께 계셨네",
        "en": "You were the Word at the beginning, One with God the Lord Most High"
      },
      {
        "start": 22.0,
        "end": 33.0,
        "kr": "만물 가운데 감추어졌던 주의 영광, 그리스도 예수 안에서 나타나셨네",
        "en": "Your hidden glory in creation, now revealed in You our Christ"
      },
      {
        "start": 33.0,
        "end": 47.0,
        "kr": "[후렴 1] 얼마나 아름다운 이름인가, 나의 왕 예수 그리스도의 이름!",
        "en": "What a beautiful Name it is, the Name of Jesus Christ my King"
      },
      {
        "start": 47.0,
        "end": 63.9,
        "kr": "비길 데 없는 그 이름, 얼마나 아름다운 이름인가 예수!",
        "en": "What a beautiful Name it is, nothing compares to this, the Name of Jesus"
      },
      {
        "start": 63.9,
        "end": 78.2,
        "kr": "[2절] 우리를 잃어버린 채 하늘에 머물지 않으시고, 하늘 영광 버리고 낮아지셨네",
        "en": "You didn't want heaven without us, so Jesus, You brought heaven down"
      },
      {
        "start": 78.2,
        "end": 89.5,
        "kr": "나의 죄는 컸으나 주의 사랑은 더 크시니, 무엇이 우리를 주의 사랑에서 끊으리요",
        "en": "My sin was great, Your love was greater, what could separate us now?"
      },
      {
        "start": 89.5,
        "end": 103.4,
        "kr": "[후렴 2] 얼마나 놀라운 이름인가, 나의 왕 예수 그리스도의 이름!",
        "en": "What a wonderful Name it is, the Name of Jesus Christ my King"
      },
      {
        "start": 103.4,
        "end": 125.0,
        "kr": "비길 데 없는 그 이름, 얼마나 놀라운 이름인가 예수!",
        "en": "What a wonderful Name it is, nothing compares to this, the Name of Jesus"
      },
      {
        "start": 125.0,
        "end": 148.0,
        "kr": "[간주 - 브릿지 준비]",
        "en": "Instrumental Build-up"
      },
      {
        "start": 148.0,
        "end": 166.0,
        "kr": "[브릿지] 사망이 주를 가둘 수 없었고 휘장이 찢겼네! 죄와 무덤의 자랑을 꺾으셨네!",
        "en": "Death could not hold You, the veil tore before You, You silence the boast of sin and grave"
      },
      {
        "start": 166.0,
        "end": 185.0,
        "kr": "하늘이 포효하며 주의 영광을 찬양하네! 주 다시 살아나셨네!",
        "en": "The heavens are roaring the praise of Your glory, for You are raised to life again!"
      },
      {
        "start": 185.0,
        "end": 205.0,
        "kr": "주께 비길 자 누구며 주의 권세에 대적할 자 누구리요!",
        "en": "You have no rival, You have no equal, now and forever God You reign!"
      },
      {
        "start": 205.0,
        "end": 240.0,
        "kr": "[후렴 절정] 얼마나 능력 있는 이름인가, 나의 왕 예수 그리스도의 이름!",
        "en": "What a powerful Name it is, what a powerful Name it is, the Name of Jesus Christ my King!"
      },
      {
        "start": 240.0,
        "end": 343.0,
        "kr": "🕊️ 가장 아름답고 능력 있는 예수 그리스도의 이름을 찬양합니다 · 아멘",
        "en": "Praising the Beautiful and Powerful Name of Jesus · Amen"
      }
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
      {
        "start": 0.0,
        "end": 35.4,
        "kr": "🎵 Oceans (주 품에 품으소서) - 잔잔한 건반 전주",
        "en": "Oceans (Where Feet May Fail) - Hillsong UNITED (Intro)"
      },
      {
        "start": 35.4,
        "end": 49.8,
        "kr": "[1절] 깊은 바다 위로 나를 부르시네, 발 디딜 수 없는 깊은 곳으로",
        "en": "You call me out upon the waters, the great unknown where feet may fail"
      },
      {
        "start": 49.8,
        "end": 64.5,
        "kr": "그곳에서 신비로우신 주를 뵈오리, 깊은 바다 속에서도 내 믿음 굳게 서리라",
        "en": "And there I find You in the mystery, in oceans deep, my faith will stand"
      },
      {
        "start": 64.5,
        "end": 77.0,
        "kr": "[후렴] 주의 이름을 부르며, 파도 위로 내 눈을 들어 주를 바라보리라",
        "en": "And I will call upon Your name, and keep my eyes above the waves"
      },
      {
        "start": 77.0,
        "end": 95.0,
        "kr": "바다가 흉흉할 때에도 내 영혼 주의 품에 안식하리, 나는 주의 것, 주는 나의 하나님",
        "en": "When oceans rise my soul will rest in Your embrace, for I am Yours and You are mine"
      },
      {
        "start": 95.0,
        "end": 104.4,
        "kr": "[2절] 깊은 바다 속에서도 주의 은혜 넘치며",
        "en": "Your grace abounds in deepest waters"
      },
      {
        "start": 104.4,
        "end": 119.0,
        "kr": "주의 전능하신 손이 나를 인도하시네, 두려움이 나를 둘러쌀 때에도",
        "en": "Your sovereign hand will be my guide, where feet may fail and fear surrounds me"
      },
      {
        "start": 119.0,
        "end": 133.4,
        "kr": "주님은 결코 날 포기치 않으시며 실패하지 않으시네",
        "en": "You've never failed and You won't start now"
      },
      {
        "start": 133.4,
        "end": 155.0,
        "kr": "[후렴] 주의 이름을 부르리, 파도 위로 내 눈을 들어 주를 바라보리라",
        "en": "So I will call upon Your name, and keep my eyes above the waves"
      },
      {
        "start": 155.0,
        "end": 218.0,
        "kr": "[간주 - 깊은 바다의 묵상]",
        "en": "Instrumental Interlude"
      },
      {
        "start": 218.0,
        "end": 235.0,
        "kr": "[브릿지] 성령이여 한계 없는 믿음으로 날 이끄소서, 어디로 부르시든지 물 위를 걷게 하소서",
        "en": "Spirit lead me where my trust is without borders, let me walk upon the waters wherever You would call me"
      },
      {
        "start": 235.0,
        "end": 260.0,
        "kr": "주 임재 안으로 더 깊이 들어가게 하소서, 나의 구주 예수 안에서 내 믿음 더욱 견고해지리",
        "en": "Take me deeper than my feet could ever wander, and my faith will be made stronger in the presence of my Savior"
      },
      {
        "start": 260.0,
        "end": 310.0,
        "kr": "[브릿지 반복 및 절정] 성령이여 나를 이끄소서! 깊은 바다 위로!",
        "en": "Spirit lead me where my trust is without borders! Take me deeper!"
      },
      {
        "start": 310.0,
        "end": 351.0,
        "kr": "🕊️ 파도를 넘어 주님 품 안에 영원히 안식합니다 · 아멘",
        "en": "Resting Forever in Your Sovereign Embrace · Amen"
      }
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
      {
        "start": 0.0,
        "end": 6.0,
        "kr": "🎵 꽃들도 (花も - 열방의 회복) - 오케스트라 전주",
        "en": "Even If The Flowers - JWorship (Intro)"
      },
      {
        "start": 6.0,
        "end": 18.0,
        "kr": "[1절] 이곳에 생명 샘 솟아나, 눈물 골짝 지나갈 때에",
        "en": "Here springs of living water will overflow, as we pass through the valley of weeping"
      },
      {
        "start": 18.0,
        "end": 30.0,
        "kr": "머잖아 열매 맺히고, 웃음 소리 넘쳐나리라",
        "en": "Soon fruit of righteousness will bear, and songs of joy and laughter will resound"
      },
      {
        "start": 30.0,
        "end": 42.0,
        "kr": "이곳에 생명 샘 솟아나, 눈물 골짝 지나갈 때에",
        "en": "Here springs of living water will overflow, as we pass through the valley of weeping"
      },
      {
        "start": 42.0,
        "end": 54.0,
        "kr": "머잖아 열매 맺히고, 웃음 소리 넘쳐나리라",
        "en": "Soon fruit of righteousness will bear, and songs of joy and laughter will resound"
      },
      {
        "start": 54.0,
        "end": 78.0,
        "kr": "[후렴] 꽃들도 구름도 바람도 넓은 바다도, 찬양하라 찬양하라 예수를!",
        "en": "Even flowers, the clouds, the wind, and the rolling sea: Praise our Jesus!"
      },
      {
        "start": 78.0,
        "end": 104.0,
        "kr": "하늘을 울리며 노래해 나의 영혼아, 은혜의 주 은혜의 주 은혜의 주!",
        "en": "Sing so the heavens echo, O my soul! Lord of grace, Lord of endless grace!"
      },
      {
        "start": 104.0,
        "end": 118.0,
        "kr": "[간주 묵상]",
        "en": "Instrumental Interlude"
      },
      {
        "start": 118.0,
        "end": 130.0,
        "kr": "[2절] 예수님 오실 길 예비해, 십자가를 바라볼 때에",
        "en": "Preparing the way of our coming Lord, fixing our eyes on the Cross"
      },
      {
        "start": 130.0,
        "end": 142.0,
        "kr": "머잖아 열방이 엎드려, 주의 영광 찬양하리라",
        "en": "Soon all nations will bow and worship, praising the glory of our Lord"
      },
      {
        "start": 142.0,
        "end": 166.0,
        "kr": "[후렴 반복] 꽃들도 구름도 바람도 넓은 바다도, 찬양하라 찬양하라 예수를!",
        "en": "Even flowers, the clouds, the wind, and the rolling sea: Praise our Jesus!"
      },
      {
        "start": 166.0,
        "end": 192.0,
        "kr": "하늘을 울리며 노래해 나의 영혼아, 은혜의 주 은혜의 주 은혜의 주!",
        "en": "Sing so the heavens echo, O my soul! Lord of grace, Lord of endless grace!"
      },
      {
        "start": 192.0,
        "end": 245.0,
        "kr": "[후렴 절정] 찬양하라 찬양하라 예수를! 온 땅과 열방이 주를 찬양하라!",
        "en": "Praise Him, praise Jesus our King! All the earth and nations praise the Lord!"
      },
      {
        "start": 245.0,
        "end": 359.0,
        "kr": "🕊️ 모든 열방이 예수 그리스도를 찬양하게 하옵소서 · 아멘",
        "en": "May All Nations Praise Jesus Christ Forever · Amen"
      }
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
      {
        "start": 0.0,
        "end": 17.0,
        "kr": "🎵 하나님의 은혜 (나를 지으신 이가 하나님) - 피아노 전주",
        "en": "Grace of God (Only by Grace) - Park Jong Ho (Intro)"
      },
      {
        "start": 17.0,
        "end": 31.0,
        "kr": "[1절] 나를 지으신 이가 하나님, 나를 부르신 이가 하나님",
        "en": "The One who made me is God, the One who called me is God"
      },
      {
        "start": 31.0,
        "end": 45.0,
        "kr": "나를 보내신 이도 하나님, 나의 달려갈 길 다 가도록",
        "en": "The One who sent me is God, all along the race that I run"
      },
      {
        "start": 45.0,
        "end": 60.0,
        "kr": "나의 마지막 호흡 다하도록, 십자가 그 길을 가게 하신 이",
        "en": "Until my very last breath, the One who led me to walk the way of the Cross"
      },
      {
        "start": 60.0,
        "end": 74.0,
        "kr": "[후렴] 한량없는 은혜, 갚을 길 없는 은혜, 내 삶을 에워싸는 하나님의 은혜",
        "en": "Boundless grace, unpayable grace, God's grace surrounding all my life"
      },
      {
        "start": 74.0,
        "end": 89.0,
        "kr": "나 주저함 없이 그 땅을 밟음도, 나를 붙드시는 하나님의 은혜",
        "en": "Stepping boldly on that land without hesitation, it is God's grace that holds me"
      },
      {
        "start": 89.0,
        "end": 103.0,
        "kr": "[2절] 나를 세우신 이가 하나님, 나를 쓰시는 이가 하나님",
        "en": "The One who established me is God, the One who uses me is God"
      },
      {
        "start": 103.0,
        "end": 117.0,
        "kr": "나를 이끄신 이도 하나님, 나의 모든 삶이 주의 것이라",
        "en": "The One who guided me is God, all my life belongs to the Lord"
      },
      {
        "start": 117.0,
        "end": 131.0,
        "kr": "나의 나 된 것은 다 하나님 은혜라, 주의 사랑이 날 살리셨네",
        "en": "By the grace of God I am what I am, His love gave me life"
      },
      {
        "start": 131.0,
        "end": 160.0,
        "kr": "[후렴 절정] 한량없는 은혜, 갚을 길 없는 은혜, 내 삶을 에워싸는 하나님의 은혜!",
        "en": "Boundless grace, unpayable grace, God's grace surrounding all my life!"
      },
      {
        "start": 160.0,
        "end": 207.0,
        "kr": "나 주저함 없이 그 땅을 밟음도, 나를 붙드시는 하나님의 은혜!",
        "en": "It is God's grace that holds me, His amazing and boundless grace!"
      },
      {
        "start": 207.0,
        "end": 312.0,
        "kr": "🕊️ 나의 나 된 것은 다 하나님의 은혜입니다 · 아멘",
        "en": "By the Grace of God I am What I am · Amen"
      }
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
      {
        "start": 0.0,
        "end": 19.0,
        "kr": "🎵 Living Hope (살아계신 주 나의 참된 소망) - 어쿠스틱 기타 전주",
        "en": "Living Hope - Phil Wickham (Intro)"
      },
      {
        "start": 19.0,
        "end": 31.7,
        "kr": "[1절] 우리 사이 깊은 단절의 골짜기, 내 힘으로 오를 수 없었던 높은 산",
        "en": "How great the chasm that lay between us, how high the mountain I could not climb"
      },
      {
        "start": 31.7,
        "end": 45.1,
        "kr": "절망 속에서 하늘을 바라보며, 캄캄한 밤 주의 이름을 불렀네",
        "en": "In desperation, I turned to heaven, and spoke Your name into the night"
      },
      {
        "start": 45.1,
        "end": 58.0,
        "kr": "어둠을 뚫고 오신 주의 인자하심, 내 영혼의 어두운 그늘을 찢으셨네",
        "en": "Then through the darkness, Your loving kindness tore through the shadows of my soul"
      },
      {
        "start": 58.0,
        "end": 75.5,
        "kr": "모든 일 다 이루셨고 결말은 선포되었네, 예수 그리스도 나의 참된 소망!",
        "en": "The work is finished, the end is written, Jesus Christ, my living hope"
      },
      {
        "start": 75.5,
        "end": 94.8,
        "kr": "[2절] 그 크신 자비를 뉘라서 생각하며, 측량 못할 그 무한한 은혜를 어찌 다 헤아리리",
        "en": "Who could imagine so great a mercy? What heart could fathom such boundless grace?"
      },
      {
        "start": 94.8,
        "end": 114.8,
        "kr": "만유의 하나님 하늘 영광 버리고 낮아지사, 내 죄를 짊어지고 십자가 수치를 당하셨네",
        "en": "The God of ages stepped down from glory to wear my sin and bear my shame"
      },
      {
        "start": 114.8,
        "end": 128.5,
        "kr": "십자가가 선포했네, 내 모든 죄 용서받았음을! 만왕의 왕께서 날 주의 자녀라 부르시네!",
        "en": "The cross has spoken, I am forgiven, the King of kings calls me His own"
      },
      {
        "start": 128.5,
        "end": 148.5,
        "kr": "[후렴] 할렐루야! 나를 자유케 하신 주를 찬양해! 할렐루야! 사망이 내게서 권세를 잃었네!",
        "en": "Hallelujah, praise the One who set me free! Hallelujah, death has lost its grip on me!"
      },
      {
        "start": 148.5,
        "end": 181.2,
        "kr": "주 모든 쇠사슬을 끊으셨고 주의 이름에 구원이 있네, 예수 그리스도 나의 참된 소망!",
        "en": "You have broken every chain, there's salvation in Your name, Jesus Christ, my living hope!"
      },
      {
        "start": 181.2,
        "end": 205.4,
        "kr": "[3절] 약속이 성취되던 그 부활의 아침, 무덤 속 주의 몸이 다시 숨쉬기 시작했네!",
        "en": "Then came the morning that sealed the promise, Your buried body began to breathe"
      },
      {
        "start": 205.4,
        "end": 238.7,
        "kr": "침묵을 깨뜨리고 포효하는 유다의 사자, 무덤은 더 이상 내게 권세 없다고 선포하셨네! 예수, 주의 승리로다!",
        "en": "Out of the silence, the roaring lion declared the grave has no claim on me! Jesus, Yours is the victory!"
      },
      {
        "start": 238.7,
        "end": 268.9,
        "kr": "[후렴 대합창] 할렐루야! 나를 자유케 하신 주를 찬양해! 할렐루야! 사망이 권세를 잃었네!",
        "en": "Hallelujah, praise the One who set me free! Hallelujah, death has lost its grip on me!"
      },
      {
        "start": 268.9,
        "end": 300.0,
        "kr": "주 모든 쇠사슬을 끊으셨고 주의 이름에 구원이 있네, 예수 그리스도 나의 참된 소망!",
        "en": "You have broken every chain, there's salvation in Your name, Jesus Christ, my living hope!"
      },
      {
        "start": 300.0,
        "end": 331.0,
        "kr": "🕊️ 부활의 첫 열매 되신 살아계신 주를 영원히 찬양합니다 · 아멘",
        "en": "Praising the Living Hope, Our Resurrected Lord · Amen"
      }
    ]
  }
]
;

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


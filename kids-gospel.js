/**
 * Arise Next-Gen Faith Storybook & Interactive Role-Play Drama (믿음의 후대관 입체 낭독극)
 * 창세기 1장~3장의 원색 복음 흐름 7단계 여정
 * 
 * ✨ 핵심 기능:
 * 1. 📖 인터랙티브 동화책 모드 (그림 & 복음 스토리 지문)
 * 2. 🎭 역할놀이 입체 낭독극 모드 (캐릭터별 고유 목소리, 말풍선 대본, 대화극 자동 재생)
 *    - 📖 해설자 (선생님) / 👑 하나님 (자애로운 아버지) / 🌿 아담 (순수한 청년)
 *    - 🌸 하와 (맑고 고운 소녀) / 🐍 뱀 (은밀하고 달콤한 유혹) / 🕊️ 예수님 (승리의 왕) / 🧒 믿음의 어린이
 * 3. 🎵 은혜로운 배경 찬양 BGM (5곡 수록, 대사 시 자동 볼륨 덕킹 Audio Ducking)
 * 4. 🔔 Web Audio API 신디사이저 차임벨 효과음
 * 5. 📺 주일학교 및 Zoom 화면공유용 전체화면 모달 (Fullscreen Presentation)
 * 6. 📊 주일학교 공과용 16:9 파워포인트 (PPTX) 즉시 생성
 */

// 1. 캐릭터 프로필 및 음성 설정
const CHARACTER_ROLES = {
  narrator: {
    id: 'narrator',
    nameKo: '해설자',
    nameEn: 'Narrator',
    badgeKo: '📖 이야기 선생님',
    badgeEn: '📖 Narrator',
    avatar: '📖',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.4)',
    pitch: 1.05,
    rate: 0.92,
    gender: 'female'
  },
  god: {
    id: 'god',
    nameKo: '하나님',
    nameEn: 'Father God',
    badgeKo: '👑 창조주 하나님',
    badgeEn: '👑 Creator God',
    avatar: '👑',
    color: '#fbbf24',
    bg: 'rgba(251, 191, 36, 0.14)',
    border: 'rgba(251, 191, 36, 0.45)',
    pitch: 0.78,
    rate: 0.86,
    gender: 'male'
  },
  adam: {
    id: 'adam',
    nameKo: '아담',
    nameEn: 'Adam',
    badgeKo: '🌿 아담',
    badgeEn: '🌿 Adam',
    avatar: '🌿',
    color: '#34d399',
    bg: 'rgba(52, 211, 153, 0.12)',
    border: 'rgba(52, 211, 153, 0.4)',
    pitch: 1.05,
    rate: 0.95,
    gender: 'male'
  },
  eve: {
    id: 'eve',
    nameKo: '하와',
    nameEn: 'Eve',
    badgeKo: '🌸 하와',
    badgeEn: '🌸 Eve',
    avatar: '🌸',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.12)',
    border: 'rgba(244, 114, 182, 0.4)',
    pitch: 1.25,
    rate: 0.95,
    gender: 'female'
  },
  serpent: {
    id: 'serpent',
    nameKo: '간교한 뱀 (사탄)',
    nameEn: 'Cunning Serpent (Satan)',
    badgeKo: '🐍 거짓말쟁이 뱀',
    badgeEn: '🐍 Cunning Serpent',
    avatar: '🐍',
    color: '#c084fc',
    bg: 'rgba(192, 132, 252, 0.14)',
    border: 'rgba(192, 132, 252, 0.45)',
    pitch: 0.65,
    rate: 0.82,
    gender: 'male'
  },
  jesus: {
    id: 'jesus',
    nameKo: '예수 그리스도',
    nameEn: 'Jesus Christ',
    badgeKo: '🕊️ 승리의 왕 예수님',
    badgeEn: '🕊️ Victorious King Jesus',
    avatar: '🕊️',
    color: '#818cf8',
    bg: 'rgba(129, 140, 248, 0.15)',
    border: 'rgba(129, 140, 248, 0.5)',
    pitch: 0.86,
    rate: 0.86,
    gender: 'male'
  },
  child: {
    id: 'child',
    nameKo: '믿음의 어린이',
    nameEn: 'Next-Gen Child',
    badgeKo: '🧒 믿음의 후대',
    badgeEn: '🧒 Faithful Child',
    avatar: '🧒',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.14)',
    border: 'rgba(245, 158, 11, 0.4)',
    pitch: 1.35,
    rate: 0.96,
    gender: 'female'
  },
  together: {
    id: 'together',
    nameKo: '다 함께',
    nameEn: 'All Together',
    badgeKo: '🌟 다 함께 찬양',
    badgeEn: '🌟 All Together',
    avatar: '🌟',
    color: '#38bdf8',
    bg: 'rgba(56, 189, 248, 0.14)',
    border: 'rgba(56, 189, 248, 0.4)',
    pitch: 1.12,
    rate: 0.92,
    gender: 'neutral'
  }
};

// 2. 배경 찬양 트랙 목록
const KIDS_BGM_TRACKS = [
  { id: 'grace', title: '하나님의 은혜 (Only by Grace)', src: 'assets/only_by_grace.mp3', emoji: '🕊️' },
  { id: 'amazing', title: '나 같은 죄인 살리신 (Amazing Grace)', src: 'assets/amazing_grace.mp3', emoji: '✨' },
  { id: 'goodness', title: '선하심 (Goodness of God)', src: 'assets/goodness_of_god.mp3', emoji: '🌿' },
  { id: 'blessing', title: '축복과 평강 (The Blessing)', src: 'assets/the_blessing.mp3', emoji: '🌈' },
  { id: 'waymaker', title: '길을 만드시는 분 (Way Maker)', src: 'assets/way_maker.mp3', emoji: '⭐' }
];

// 3. 7단계 복음 동화 및 리얼 역할놀이 대화 스크립트 데이터
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
      textEn: "God created the clear skies, oceans, blooming flowers, and lovely animals, saying, \"It is good!\" Then God created humans in His own divine image and rejoiced with deep joy: \"It is exceedingly, wonderfully good!\" We were created as God's treasured masterpiece, designed to be completely joyful and safe in His loving presence!",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '온화하고 상냥한 목소리로 이야기 시작',
          actionEn: 'Opening warmly',
          textKo: '하나님께서 푸른 하늘과 눈부신 바다, 향기로운 꽃과 귀여운 동물들을 만드셨어요!',
          textEn: 'God created the clear blue skies, radiant oceans, blooming flowers, and lovely animals!'
        },
        {
          role: 'god',
          actionKo: '온 세상을 바라보시며 기쁨에 차서',
          actionEn: 'Looking upon creation with tender love',
          textKo: '참 아름답고 보기 좋구나! 하지만 아직 내 마음에 품은 가장 소중한 걸작품이 남았단다. 내 형상과 사랑을 듬뿍 담은 사람을 만들자!',
          textEn: 'It is so good! But My most cherished masterpiece is yet to come. Let Us create humans in Our own divine image with all My love!'
        },
        {
          role: 'adam',
          actionKo: '눈을 크게 뜨고 눈부신 세상을 바라보며 감탄',
          actionEn: 'Looking around in wide-eyed wonder',
          textKo: '우와아...! 하나님, 여기가 에덴동산인가요? 세상이 온통 빛과 기쁨으로 가득해요! 심장이 콩닥콩닥 뛸 만큼 행복해요!',
          textEn: 'Wow...! Father God, is this the Garden of Eden? The whole world is shining with light and wonder! My heart overflows with joy!'
        },
        {
          role: 'god',
          actionKo: '아담을 꼭 안아주시며 온 마음으로 축복하심',
          actionEn: 'Embracing Adam with fatherly blessing',
          textKo: '사랑하는 나의 아담아! 너는 내 최고의 기쁨이란다. 와아, 너무너무 좋아서 내 마음이 꽉 찬다! 심히 좋다! 내가 이 모든 세상을 네게 맡기니, 기쁨으로 다스리고 지키렴!',
          textEn: 'My beloved Adam! You are My greatest delight! It is exceedingly, wonderfully good! I entrust all creation to you—care for it with joyful stewardship!'
        },
        {
          role: 'together',
          actionKo: '두 손을 높이 들고 기쁨으로 화답',
          actionEn: 'Praising with open hands and bright smiles',
          textKo: '하나님 품 안에 있을 때 가장 행복해요! 하나님 사랑해요!',
          textEn: 'We are completely happy and safe in Father God’s embrace! We love You, Lord!'
        }
      ]
    },
    {
      chapterKo: "제 2장 · 생명의 사랑 언약",
      chapterEn: "Chapter 2 · The Covenant of Life",
      scripture: "창세기 1:28, 창세기 2:16-17",
      img: "assets/kids_gospel_2.jpg",
      titleKo: "사랑의 안전벨트, 생명의 언약",
      titleEn: "The Covenant of Life & Sacred Promise",
      textKo: "하나님은 사람에게 모든 것을 다스리고 누리는 엄청난 축복을 주시고, 서로 사랑할 돕는 배필 하와를 선물로 주셨어요. 그리고 단 하나의 사랑의 약속을 주셨지요. \"동산 중앙의 선악을 알게 하는 나무 열매는 절대 먹지 마라, 먹으면 반드시 죽으리라!\" 이 약속은 우리를 구속하는 것이 아니라, 하나님 품 안에 있을 때 가장 안전하다는 생명의 안전벨트였답니다.",
      textEn: "God blessed humans to care for all creation and gave a loving helper, Eve, to share life together. God also gave one sacred promise: \"You must not eat from the tree of the knowledge of good and evil, for when you eat from it, you will certainly die.\" Like a protective seatbelt, this loving covenant kept us safe, holy, and truly blessed.",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '다정한 목소리로 이야기 전개',
          actionEn: 'Gentle narrative progression',
          textKo: '하나님은 혼자 있는 아담을 위해 가장 다정한 돕는 배필 하와를 선물로 주시고, 단 하나의 소중한 사랑의 약속을 세우셨어요.',
          textEn: 'God lovingly gifted Adam a sweet companion, Eve, and established one sacred promise of life.'
        },
        {
          role: 'adam',
          actionKo: '하와를 바라보며 벅찬 감격으로',
          actionEn: 'Joyfully admiring Eve',
          textKo: '하와, 너는 내 뼈 중의 뼈요, 살 중의 살이야! 우리 함께 하나님을 영원히 찬양하고 예배하자!',
          textEn: 'Eve, you are bone of my bones and flesh of my flesh! Let us praise and worship God together forever!'
        },
        {
          role: 'eve',
          actionKo: '방긋 웃으며 에덴의 꽃을 가리킴',
          actionEn: 'Smiling brightly, pointing to the blooms',
          textKo: '아담! 하나님이 주신 에덴동산의 과일들이 정말 달콤하고 싱그러워요! 하나님은 참 좋으신 분이에요!',
          textEn: 'Adam! The sweet fruits in Eden are so fresh and delightful! God is truly so good to us!'
        },
        {
          role: 'god',
          actionKo: '자애롭고도 단호한 사랑의 당부',
          actionEn: 'Solemn and loving divine command',
          textKo: '아담아, 하와야! 동산의 모든 좋은 나무 열매는 마음껏 먹어도 좋단다. 하지만 동산 한가운데 있는 선악을 알게 하는 나무 열매는 절대 먹지 마라. 그것을 먹는 날에는 반드시 죽으리라!',
          textEn: 'Adam and Eve! You may freely eat of every tree. But you must not eat from the tree of the knowledge of good and evil, for when you eat from it, you will surely die!'
        },
        {
          role: 'adam',
          actionKo: '씩씩하게 고개를 끄덕이며 약속함',
          actionEn: 'Nodding earnestly with loyalty',
          textKo: '네, 하나님! 이 약속은 하나님 품 안에 있을 때 가장 안전하다는 사랑의 안전벨트예요! 영원히 기억하고 지킬게요!',
          textEn: 'Yes, Father! This covenant is our loving seatbelt that keeps us safe and alive in Your love! We will cherish it always!'
        }
      ]
    },
    {
      chapterKo: "제 3장 · 거짓말쟁이 뱀의 유혹",
      chapterEn: "Chapter 3 · The Serpent's Deceit",
      scripture: "창세기 3:1-6 (Genesis 3:1-6)",
      img: "assets/kids_gospel_fall.jpg",
      titleKo: "약속을 깨뜨린 거짓말쟁이 뱀",
      titleEn: "The Serpent's Lie & The Broken Covenant",
      textKo: "인간이 누리는 큰 행복을 몹시 질투한 옛 뱀(사탄, 마귀)이 찾아왔어요. 뱀은 돕는 배필 하와에게 다가가 달콤하게 속삭였어요. \"결코 죽지 않아! 그걸 먹으면 하나님처럼 대단해질 거야!\" 결국 하나님의 말씀보다 사탄의 거짓말에 속아 선악과를 따먹고, 하나님과의 소중한 언약을 와장창 깨뜨려버렸어요.",
      textEn: "Jealous of human happiness, the ancient serpent (Satan) approached Eve with a deceitful whisper: \"You will not certainly die! If you eat it, your eyes will open and you will be like God!\" Believing Satan's lie over God's word of love, humans ate the forbidden fruit and broke the sacred covenant with their Creator.",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '긴장감 있는 목소리로',
          actionEn: 'Suspenseful and cautious tone',
          textKo: '그런데 인간의 큰 행복을 몹시 질투한 사탄 마귀가 간교한 옛 뱀의 모습으로 하와에게 슬그머니 다가왔어요.',
          textEn: 'Fiercely jealous of human joy, Satan took the guise of a cunning serpent and slithered close to Eve.'
        },
        {
          role: 'serpent',
          actionKo: '간사하고 달콤하게 혀를 날름거리며 속삭임',
          actionEn: 'Hissing deceitfully with sweet whispers',
          textKo: '쉭쉭... 하와야, 하나님이 정말 동산 모든 나무의 열매를 먹지 말라고 하시더냐?',
          textEn: 'Sssss... Eve... Did God really say, you must not eat from any tree in the garden?'
        },
        {
          role: 'eve',
          actionKo: '우물쭈물 머뭇거리며 대답함',
          actionEn: 'Hesitant and wavering',
          textKo: '아니야... 동산 중앙의 나무 열매는 먹지도 말고 만지지도 말라, 너희가 죽을까 하노라 하셨어...',
          textEn: 'No... God said of the tree in the middle, do not eat or touch it, or you will die...'
        },
        {
          role: 'serpent',
          actionKo: '눈을 번뜩이며 귓가에 거짓말을 속삭임',
          actionEn: 'Eyes gleaming with deceit',
          textKo: '히히히! 결코 죽지 않아! 그걸 먹으면 네 눈이 번쩍 뜨여서 하나님처럼 대단해질 텐데? 하나님이 그걸 숨기신 거란다!',
          textEn: 'Hehehe! You will not certainly die! When you eat it, your eyes will be opened and you will be like God! He is keeping it from you!'
        },
        {
          role: 'eve',
          actionKo: '선악과를 탐욕스럽게 바라보며',
          actionEn: 'Gazing longingly at the fruit',
          textKo: '어머... 정말 먹음직도 하고 탐스럽기도 해... 아담, 이리 와서 이것 좀 봐! 우리 같이 먹어보자!',
          textEn: 'Oh... it looks so delicious and desirable for wisdom... Adam, come see! Let us eat together!'
        },
        {
          role: 'adam',
          actionKo: '당황하며 망설이다가 결국 꿀꺽 베어 묾',
          actionEn: 'Conflicted and taking a bite',
          textKo: '어... 하나님이 먹지 말라고 하셨는데... 하지만... 꿀꺽! (선악과를 베어 문다)',
          textEn: 'Wait... God told us not to eat it... but... crunch! (takes a bite)'
        },
        {
          role: 'narrator',
          actionKo: '슬픈 탄식으로',
          actionEn: 'Grievingly',
          textKo: '사탄의 거짓말에 속아 하나님의 말씀을 놓치고, 하나님과의 소중한 언약이 산산조각 깨어지고 말았어요.',
          textEn: 'Deceived by Satan’s lie, they broke God’s holy covenant, falling into spiritual darkness and separation.'
        }
      ]
    },
    {
      chapterKo: "제 4장 · 숨음과 핑계",
      chapterEn: "Chapter 4 · Shame, Hiding & Blame",
      scripture: "창세기 3:7-13, 로마서 3:23",
      img: "assets/kids_gospel_3.jpg",
      titleKo: "\"아담아, 네가 어디 있느냐?\"",
      titleEn: "\"Where Are You?\" – Fear & Broken Fellowship",
      textKo: "하나님을 떠나자마자 마음속에 평안이 사라지고 부끄러움과 두려움이 찾아왔어요. 아담과 하와는 시들어버릴 나뭇잎으로 몸을 가리고 나무 뒤에 숨었지요. 다 아시는 하나님께서 \"네가 어디 있느냐?\" 부르시며 찾아오셨지만, 아담은 아내에게, 하와는 뱀에게 잘못을 떠넘기며 핑계를 대기 시작했어요. 죄로 인해 사랑의 관계가 다 깨어져버린 거예요.",
      textEn: "Separated from God, true peace vanished, replaced by sudden shame and fear. Adam and Eve hid behind the trees in fragile fig leaves. When God tenderly called out, \"Where are you?\", Adam blamed his beloved wife, and Eve blamed the serpent. Sin tore apart their sweet relationship with God and one another.",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '무거운 어조로 상황을 묘사',
          actionEn: 'Somber narrative',
          textKo: '하나님을 떠나자마자 에덴의 평안이 와르르 무너지고, 태어나 처음으로 부끄러움과 무서운 두려움이 찾아왔어요.',
          textEn: 'Separated from God, peace vanished instantly, replaced by sudden shame, nakedness, and deep fear.'
        },
        {
          role: 'adam',
          actionKo: '온몸을 부들부들 떨며 나무 뒤로 숨음',
          actionEn: 'Trembling in panic behind the trees',
          textKo: '하와야! 빨리 숨어! 우리 몸이 벗겨졌어! 바스락거리는 무화과 나뭇잎으로 몸을 가리고 숲속에 숨자!',
          textEn: 'Eve! Quick, hide! We are naked! Let us sew fig leaves and hide deep among the trees!'
        },
        {
          role: 'god',
          actionKo: '아픈 가슴을 안고 동산을 거니시며 슬프게 부르심',
          actionEn: 'Walking in the garden, calling with a grieving heart',
          textKo: '아담아... 아담아! 네가 어디 있느냐?',
          textEn: 'Adam... Adam! Where are you?'
        },
        {
          role: 'adam',
          actionKo: '나무 뒤에서 벌벌 떨며 기어들어가는 목소리로',
          actionEn: 'Cowering behind the trunk in a shaky voice',
          textKo: '하나님... 내가 벗었으므로 두려워하여 숨었나이다...',
          textEn: 'Lord God... I heard You in the garden, and I was afraid because I was naked; so I hid...'
        },
        {
          role: 'god',
          actionKo: '안타까운 마음으로 물으심',
          actionEn: 'Asking with sorrowful compassion',
          textKo: '누가 너의 벗었음을 네게 알렸느냐? 내가 네게 먹지 말라 명한 그 나무 열매를 네가 먹었느냐?',
          textEn: 'Who told you that you were naked? Have you eaten from the tree that I commanded you not to eat from?'
        },
        {
          role: 'adam',
          actionKo: '하와를 삿대질하며 핑계를 댐',
          actionEn: 'Pointing fingers in blame at Eve',
          textKo: '하나님이 저와 함께 있게 하신 저 여자가 그 나무 열매를 주어서 먹었단 말이에요!',
          textEn: 'The woman You put here with me—she gave me fruit from the tree, and I ate it!'
        },
        {
          role: 'eve',
          actionKo: '눈물을 훔치며 뱀을 가리킴',
          actionEn: 'Sobbing, blaming the serpent',
          textKo: '아니에요! 저 간교한 뱀이 거짓말로 저를 속여서 먹게 했어요!',
          textEn: 'No! The cunning serpent deceived me, and I ate!'
        }
      ]
    },
    {
      chapterKo: "제 5장 · 여자의 후손",
      chapterEn: "Chapter 5 · The Seed of the Woman",
      scripture: "창세기 3:14-15 (Genesis 3:15)",
      img: "assets/kids_gospel_promise.jpg",
      titleKo: "뱀의 머리를 깨뜨릴 살 길, 여자의 후손",
      titleEn: "Crushing the Serpent: The Seed of the Woman",
      textKo: "하나님은 죄를 범한 사람과 뱀에게 공의의 책임을 물으셨어요. 하지만 하나님은 우리가 사탄의 노예로 멸망하도록 내버려 두지 않으셨답니다! 그래서 즉시 놀라운 구원의 살 길을 주셨어요. \"여자의 후손이 와서 뱀의 머리를 완전히 박살 낼 것이다!(창세기 3장 15절)\" 사탄의 권세를 꺾으시고 우리를 다시 살리실 구원자 예수 그리스도를 약속해 주신 거예요!",
      textEn: "God held humans and the serpent accountable for sin. Yet our loving Father would never abandon us to despair! Immediately, He proclaimed the glorious promise of salvation: \"The offspring of the woman will crush the serpent's head! (Genesis 3:15)\" God promised Jesus Christ, the Victorious King who breaks Satan's grip and restores our eternal life!",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '힘차고 소망에 찬 어조로',
          actionEn: 'Triumphant and hopeful narrative',
          textKo: '죄로 인해 멸망할 위기에 처했지만, 사랑의 하나님은 인간을 마귀의 손에 버려두지 않으시고 즉시 구원의 살 길을 선포하셨어요!',
          textEn: 'Though facing ruin, our loving Father would never abandon humans to the enemy. Immediately, He proclaimed the glorious gospel of salvation!'
        },
        {
          role: 'god',
          actionKo: '뱀을 향해 엄위한 심판을 호통치시며',
          actionEn: 'Commanding divine judgment upon the serpent',
          textKo: '뱀아! 너는 모든 짐승보다 더욱 저주를 받아 평생 배로 기어 다니고 흙을 먹을 것이다!',
          textEn: 'Serpent! Cursed are you above all livestock! You will crawl on your belly and eat dust all the days of your life!'
        },
        {
          role: 'god',
          actionKo: '구원의 언약을 온 우주에 힘차게 선포하심',
          actionEn: 'Proclaiming the victory of the woman’s offspring',
          textKo: '내가 너로 여자와 원수가 되게 하고 네 후손도 여자의 후손과 원수가 되게 하리니, 여자의 후손이 와서 네 머리를 완전히 박살 낼 것이다!',
          textEn: 'I will put enmity between you and the woman, and between your offspring and hers; He will crush your head, and you will strike His heel!'
        },
        {
          role: 'serpent',
          actionKo: '머리를 감싸 쥐고 공포에 질려 비명을 지름',
          actionEn: 'Screaming in horror, clutching its head',
          textKo: '크아아악! 여자의 후손이라니... 내 머리가 깨지다니 안 돼...!',
          textEn: 'Arrrgh! The seed of the woman?! Crushing my head?! Noooo...!'
        },
        {
          role: 'narrator',
          actionKo: '벅찬 감격으로 복음을 설명',
          actionEn: 'Overflowing with joy',
          textKo: '사탄의 머리를 박살 내시고 우리를 건져내실 참된 왕, 예수 그리스도를 약속해 주신 것이에요!',
          textEn: 'God promised Jesus Christ, the Victorious King who crushes Satan’s grip and rescues us forever!'
        }
      ]
    },
    {
      chapterKo: "제 6장 · 따뜻한 가죽옷 (피의 언약)",
      chapterEn: "Chapter 6 · Coats of Skin (Blood Covenant)",
      scripture: "창세기 3:21, 히브리서 9:22",
      img: "assets/kids_gospel_leather_coat.jpg",
      titleKo: "피의 언약, 따뜻한 가죽옷을 입히시다",
      titleEn: "The Covenant of Blood: Clothed in Grace",
      textKo: "부끄러워 떨고 있는 아담과 하와를 보시며 하나님의 마음은 찢어지듯 아프셨어요. 그래서 쉽게 부서지는 나뭇잎 대신, 하나님이 직접 따뜻한 '가죽옷'을 지어 입혀주셨답니다. 가죽옷을 만들려면 죄 없는 어린양이 대신 피를 흘려야만 했어요. 장차 십자가에서 피 흘려 우리의 모든 죄와 부끄러움을 덮어주실 예수님의 피의 언약이었답니다!",
      textEn: "Looking at trembling Adam and Eve, God's heart overflowed with tender compassion. Instead of frail leaves, God lovingly fashioned warm coats of skin and clothed them. An innocent lamb had to bleed and sacrifice its life to provide these garments. This was the blood covenant pointing to Jesus, whose sacrifice on the cross covers all our shame and sin!",
      dialogues: [
        {
          role: 'narrator',
          actionKo: '따스하고 애틋한 목소리로',
          actionEn: 'Tender and compassionate narration',
          textKo: '시들어가는 나뭇잎 옷을 입고 벌벌 떨고 있는 아담과 하와를 보시며, 하나님의 마음은 눈물로 젖어 들었어요.',
          textEn: 'Looking upon shivering Adam and Eve in fragile leaves, Father God’s heart melted with deep compassion.'
        },
        {
          role: 'god',
          actionKo: '두 사람을 부드럽게 감싸 안으시며',
          actionEn: 'Gently wrapping loving arms around them',
          textKo: '아담아, 하와야... 그 마른 나뭇잎으로는 너희의 부끄러움을 결코 가릴 수 없단다. 이리로 오렴.',
          textEn: 'Adam, Eve... frail leaves can never hide your shame. Come close to Me.'
        },
        {
          role: 'narrator',
          actionKo: '경건하고 숙연한 어조로',
          actionEn: 'Solemn and reverent tone',
          textKo: '하나님은 아무 죄 없는 순결한 어린양을 불러 대신 피를 흘려 죽게 하시고, 따뜻하고 튼튼한 가죽옷을 친히 지어 입혀주셨어요.',
          textEn: 'God called an innocent lamb to bleed and sacrifice its life, fashioning warm coats of skin with His own hands.'
        },
        {
          role: 'adam',
          actionKo: '가죽옷을 어루만지며 회개의 눈물을 흘림',
          actionEn: 'Touching the leather coat in tearful repentance',
          textKo: '하나님... 죄 없는 어린양이 우리 대신 피를 흘렸군요... 우리의 수치와 두려움이 따뜻하게 덮였어요...',
          textEn: 'Lord God... an innocent lamb bled and died in our place... Our shame and fear are completely covered...'
        },
        {
          role: 'eve',
          actionKo: '두 손을 가슴에 모으며 감사의 고백',
          actionEn: 'Repenting with clasped hands',
          textKo: '하나님, 잘못했어요... 그리고 우리를 버리지 않으시고 사랑해 주셔서 정말 감사합니다...',
          textEn: 'Father, forgive us... Thank You so much for not abandoning us and loving us still...'
        },
        {
          role: 'god',
          actionKo: '가죽옷을 여며주시며 영원한 언약을 약속하심',
          actionEn: 'Fastening their coats of skin with a holy promise',
          textKo: '이 피의 약속을 잊지 마라. 장차 내 독생자 예수가 십자가에서 피를 흘려 너희의 모든 죄를 영원히 덮어줄 것이란다!',
          textEn: 'Never forget this covenant of blood. One day, My only Son Jesus will bleed on the cross to cover all your sins for eternity!'
        }
      ]
    },
    {
      chapterKo: "제 7장 · 원래 축복의 회복",
      chapterEn: "Chapter 7 · Restored in Christ",
      scripture: "요한복음 19:30, 요한복음 1:12, 이사야 60:1",
      img: "assets/kids_gospel_4.jpg",
      titleKo: "원래 축복을 회복한 믿음의 후대",
      titleEn: "Original Blessing Restored: Next-Gen of Faith",
      textKo: "예수님께서 십자가에서 \"다 이루었다!\" 선포하시며 뱀의 머리를 깨뜨리시고 하나님 만나는 참된 길이 되셨어요! 이제 예수님을 마음에 모신 우리는 하나님이 \"심히 좋다!\" 감탄하셨던 원래 인간의 참 행복을 완전히 되찾았답니다. 우리는 세상을 살리는 빛, 하나님의 가장 큰 기쁨인 믿음의 후대(Arise Next-Gen)예요!",
      textEn: "On the cross, Jesus proclaimed, \"It is finished!\", crushing Satan and opening the living way back to God! When we welcome Jesus into our hearts, our original blessing of pure joy and peace is forever restored. We are beloved children of God, rising as faithful Next-Gen to shine Christ's light across all nations!",
      dialogues: [
        {
          role: 'jesus',
          actionKo: '십자가 위에서 승리의 영광으로 선포하심',
          actionEn: 'Proclaiming triumphant victory from the cross',
          textKo: '다 이루었다! 내가 십자가에서 피를 흘려 너희의 모든 죄와 저주를 끝내고 사탄의 권세를 완전히 깨뜨렸노라!',
          textEn: 'It is finished! By My blood on the cross, every curse is ended and Satan’s authority is shattered forever!'
        },
        {
          role: 'narrator',
          actionKo: '승리의 감격에 찬 목소리로',
          actionEn: 'Jubilant and joyful narration',
          textKo: '예수님이 부활하셔서 하나님 만나는 참된 길이 되셨어요! 이제 누구든지 예수님을 영접하면 하나님의 사랑스러운 자녀가 됩니다!',
          textEn: 'Jesus has risen, opening the living way back to God! Whoever receives Jesus is given the right to become children of God!'
        },
        {
          role: 'child',
          actionKo: '가슴에 손을 얹고 씩씩하게 영접 기도',
          actionEn: 'Praying boldly with hand over heart',
          textKo: '예수님! 제 마음에 오셔서 나의 구원자, 나의 주인이 되어주세요! 나는 이제 사탄에게 속지 않고 세상을 살리는 믿음의 후대예요!',
          textEn: 'Lord Jesus! Come into my heart to be my Savior and King! I belong to God, rising as faithful Next-Gen to shine Your light!'
        },
        {
          role: 'god',
          actionKo: '하늘에서 기뻐 춤추시며 안아주심',
          actionEn: 'Rejoicing over His beloved child',
          textKo: '사랑하는 내 자녀야! 내가 너를 보며 "심히 좋다!" 하였던 원래 축복이 그리스도 예수 안에서 온전히 회복되었단다!',
          textEn: 'My beloved child! The original blessing where I rejoiced "Exceedingly good!" is now fully restored in Christ Jesus!'
        },
        {
          role: 'together',
          actionKo: '기쁨의 함성으로 다 함께 외침',
          actionEn: 'Shouting in united victory',
          textKo: '일어나 빛을 발하라! 우리는 하나님의 가장 큰 기쁨, 어라이즈 넥스트젠입니다! 할렐루야, 아멘!',
          textEn: 'Arise, shine! We are God’s greatest joy, the Arise Next-Gen! Hallelujah, Amen!'
        }
      ]
    }
  ]
};

// 4. 전역 상태 관리
let kidsStoryState = {
  currentSlideIndex: 0,
  langMode: 'bilingual',        // 'bilingual' | 'ko' | 'en'
  viewerMode: 'storybook',      // 'storybook' | 'roleplay' | 'video'
  contentViewMode: 'storybook', // 'storybook' (지문) | 'roleplay' (대화극 대본)
  isAutoPlay: false,
  isSpeechActive: false,        // Standard storybook reading active
  isDramaPlaying: false,        // Role-play drama auto-read active
  activeDramaIndex: -1,         // Currently speaking dialogue line
  autoPlayTimer: null,          // Timer for silent auto-play
  autoAdvanceTimer: null,       // Timer for advancing after speech
  isBgmPlaying: false,
  currentBgmId: 'grace',
  bgmAudio: null
};

// TTS 엔진 상태 & 보이스 캐시
let kidsVoices = [];
let kidsKeepAliveTimer = null;
let kidsUtteranceTimer = null;

// DOM 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  initKidsStorybook();
  initKidsVoices();
});

function initKidsStorybook() {
  const container = document.getElementById('kids-zone') || document.getElementById('kidsZoneSection');
  if (!container) return;

  renderKidsSlide(0, false);
  setupKidsKeyboardShortcuts();
  setupKidsTouchGestures();
  setupKidsBgm();

  const lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  updateKidsZoneLanguage(lang);
}

// -------------------------------------------------------------
// Web Audio API 신디사이저 차임벨 사운드 효과 (소프트 하프/벨)
// -------------------------------------------------------------
function playKidsChime(type = 'page') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;

    if (type === 'page') {
      // 부드러운 하프 아르페지오 (C5, E5, G5, C6)
      const freqs = [523.25, 659.25, 783.99, 1046.50];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + idx * 0.05);
        gain.gain.setValueAtTime(0.04, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.4);
      });
    } else if (type === 'role') {
      // 캐릭터 말풍선 클릭 시 은은한 벨 (E5, B5)
      const freqs = [659.25, 987.77];
      freqs.forEach((f, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, now + idx * 0.06);
        gain.gain.setValueAtTime(0.04, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.35);
      });
    }
  } catch (e) {
    // Web Audio blocked or silent
  }
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

// 캐릭터 맞춤형 음색 선택기 (남성/여성/내추럴 보이스 분기)
function getCharacterVoice(targetLang, preferredGender = 'female') {
  if (!kidsVoices || kidsVoices.length === 0) {
    kidsVoices = window.speechSynthesis.getVoices() || [];
  }
  if (!kidsVoices || kidsVoices.length === 0) return null;

  if (targetLang.startsWith('ko')) {
    const koVoices = kidsVoices.filter(v => v.lang.startsWith('ko') || v.lang.includes('KR'));
    if (koVoices.length === 0) return null;

    if (preferredGender === 'male') {
      // 엣지/윈도우 남성 보이스 (InJoon, 남성 등)
      let maleV = koVoices.find(v => v.name.includes('InJoon') || v.name.includes('인준') || v.name.includes('Male') || v.name.includes('남성'));
      if (maleV) return maleV;
    }

    // 자연스러운 온라인 보이스 (SunHi, Heami, Google 한국어)
    let v = koVoices.find(voice => voice.name.includes('Natural') || voice.name.includes('Online'));
    if (!v) v = koVoices.find(voice => voice.name.includes('SunHi') || voice.name.includes('Heami') || voice.name.includes('선희') || voice.name.includes('Google'));
    return v || koVoices[0];
  } else {
    const enVoices = kidsVoices.filter(v => v.lang.startsWith('en'));
    if (enVoices.length === 0) return null;

    if (preferredGender === 'male') {
      let maleV = enVoices.find(v => v.name.includes('Guy') || v.name.includes('David') || v.name.includes('Mark') || v.name.includes('Male'));
      if (maleV) return maleV;
    }

    let v = enVoices.find(voice => (voice.lang === 'en-US' || voice.lang === 'en-GB') && (voice.name.includes('Natural') || voice.name.includes('Jenny') || voice.name.includes('Aria')));
    if (!v) v = enVoices.find(voice => voice.name.includes('Google') || voice.name.includes('Zira') || voice.name.includes('Samantha'));
    return v || enVoices[0];
  }
}

// 타이머 초기화 헬퍼
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
// 슬라이드 렌더링 (동화 지문 & 역할놀이 대본 동시 렌더링)
// -------------------------------------------------------------
function renderKidsSlide(index, animate = true) {
  clearAllAutoTimers();
  stopKidsDrama(false);

  const slides = KIDS_STORYBOOK_DATA.slides;
  if (index < 0) index = 0;
  if (index >= slides.length) index = slides.length - 1;

  kidsStoryState.currentSlideIndex = index;
  const slide = slides[index];

  if (animate) playKidsChime('page');

  // 1. 이미지 및 뱃지 업데이트
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

  const badgeText = `Page ${index + 1} / ${slides.length}`;
  if (badgeEl) badgeEl.textContent = badgeText;
  if (counterEl) counterEl.textContent = `${index + 1} / ${slides.length}`;

  // 2. 헤더 및 지문 텍스트 업데이트
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

  // 3. 역할놀이 대본 피드 렌더링
  renderKidsRolePlayDialogue(slide, 'kidsCastRoster', 'kidsDialogueList');

  // 4. 인디케이터 점 렌더링
  renderKidsDots(index, slides.length);

  // 5. 버튼 활성화 상태
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  if (btnPrev) btnPrev.disabled = (index === 0);
  if (btnNext) btnNext.disabled = (index === slides.length - 1);

  // 6. 전체화면 모달 업데이트
  updateKidsFullscreenSlide(slide, index, slides.length);

  // 7. 자동 재생 & 음성 조율
  if (kidsStoryState.isDramaPlaying) {
    playKidsDramaCurrentSlide();
  } else if (kidsStoryState.isSpeechActive) {
    speakKidsCurrentPage();
  } else if (kidsStoryState.isAutoPlay) {
    kidsStoryState.autoPlayTimer = setTimeout(() => {
      if (kidsStoryState.isAutoPlay && !kidsStoryState.isSpeechActive && !kidsStoryState.isDramaPlaying) {
        nextKidsSlide();
      }
    }, 8500);
  }
}

// -------------------------------------------------------------
// 역할놀이 대본 렌더링 (등장인물 뱃지, 말풍선, 대사별 오디오 버튼)
// -------------------------------------------------------------
function renderKidsRolePlayDialogue(slide, rosterId, listId) {
  const rosterEl = document.getElementById(rosterId);
  const listEl = document.getElementById(listId);
  if (!listEl) return;

  const dialogues = slide.dialogues || [];

  // 캐스트 로스터 (등장인물 목록) 렌더링
  if (rosterEl) {
    const presentRoles = Array.from(new Set(dialogues.map(d => d.role)));
    const chipsHtml = presentRoles.map(rKey => {
      const char = CHARACTER_ROLES[rKey] || CHARACTER_ROLES.narrator;
      return `
        <span class="kids-cast-chip" style="border-color: ${char.border};" title="${char.nameKo} / ${char.nameEn}">
          <span>${char.avatar}</span>
          <span style="color: ${char.color};">${char.nameKo}</span>
        </span>
      `;
    }).join('');

    rosterEl.innerHTML = `
      <div class="kids-cast-title">
        <span>🎭 배역(Cast):</span>
      </div>
      <div class="kids-cast-chips">
        ${chipsHtml}
      </div>
    `;
  }

  // 대사 말풍선 카드 목록 렌더링
  listEl.innerHTML = '';
  dialogues.forEach((d, idx) => {
    const char = CHARACTER_ROLES[d.role] || CHARACTER_ROLES.narrator;
    const card = document.createElement('div');
    card.className = `kids-dialogue-card role-${d.role}`;
    card.id = `${listId}-item-${idx}`;
    card.setAttribute('data-index', idx);
    card.title = `클릭하면 ${char.nameKo}의 목소리로 이 대사를 듣습니다`;

    card.innerHTML = `
      <div class="kids-char-avatar" style="background: ${char.bg}; border-color: ${char.color};">
        ${char.avatar}
      </div>
      <div class="kids-bubble-body">
        <div class="kids-bubble-meta">
          <div style="display: flex; align-items: center; gap: 0.4rem; flex-wrap: wrap;">
            <span class="kids-char-badge" style="background: ${char.bg}; color: ${char.color}; border: 1px solid ${char.border};">
              ${char.badgeKo}
            </span>
            ${d.actionKo ? `<span class="kids-action-hint">(${d.actionKo})</span>` : ''}
          </div>
          <button type="button" class="kids-btn-speak-line" onclick="event.stopPropagation(); speakSingleDialogue(${idx})" title="이 대사만 듣기">
            🔊 듣기
          </button>
        </div>
        <p class="kids-line-ko">${d.textKo}</p>
        <p class="kids-line-en">${d.textEn}</p>
      </div>
    `;

    card.onclick = () => speakSingleDialogue(idx);
    listEl.appendChild(card);
  });
}

// 점 인디케이터
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

// 슬라이드 네비게이션
function nextKidsSlide() {
  clearAllAutoTimers();
  if (kidsStoryState.currentSlideIndex < KIDS_STORYBOOK_DATA.slides.length - 1) {
    renderKidsSlide(kidsStoryState.currentSlideIndex + 1, true);
  } else if (kidsStoryState.isAutoPlay || kidsStoryState.isDramaPlaying) {
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

// -------------------------------------------------------------
// 뷰어 및 콘텐츠 모드 전환
// -------------------------------------------------------------
function switchKidsViewerMode(mode) {
  kidsStoryState.viewerMode = mode;
  const tabStory = document.getElementById('tabBookStorybook');
  const tabDrama = document.getElementById('tabBookDrama');
  const tabVideo = document.getElementById('tabBookVideo');
  const viewStory = document.getElementById('kidsStorybookMode');
  const viewVideo = document.getElementById('kidsVideoMode');

  if (tabStory) tabStory.classList.toggle('active', mode === 'storybook');
  if (tabDrama) tabDrama.classList.toggle('active', mode === 'roleplay');
  if (tabVideo) tabVideo.classList.toggle('active', mode === 'video');

  if (mode === 'storybook') {
    if (viewStory) viewStory.style.display = 'block';
    if (viewVideo) viewVideo.style.display = 'none';
    switchKidsStoryContentMode('storybook');
  } else if (mode === 'roleplay') {
    if (viewStory) viewStory.style.display = 'block';
    if (viewVideo) viewVideo.style.display = 'none';
    switchKidsStoryContentMode('roleplay');
  } else if (mode === 'video') {
    if (viewStory) viewStory.style.display = 'none';
    if (viewVideo) viewVideo.style.display = 'block';
    stopKidsBgm();
    stopKidsSpeech();
    stopKidsDrama();
  }
}

function switchKidsStoryContentMode(mode) {
  kidsStoryState.contentViewMode = mode;

  const btnStory = document.getElementById('btnMiniStory');
  const btnRoleplay = document.getElementById('btnMiniRoleplay');
  const btnModalStory = document.getElementById('btnModalMiniStory');
  const btnModalRoleplay = document.getElementById('btnModalMiniRoleplay');

  if (btnStory) btnStory.classList.toggle('active', mode === 'storybook');
  if (btnRoleplay) btnRoleplay.classList.toggle('active', mode === 'roleplay');
  if (btnModalStory) btnModalStory.classList.toggle('active', mode === 'storybook');
  if (btnModalRoleplay) btnModalRoleplay.classList.toggle('active', mode === 'roleplay');

  const textBody = document.getElementById('kidsStoryTextBody');
  const dialogueFeed = document.getElementById('kidsDialogueFeed');
  const modalTextBody = document.getElementById('kidsModalStoryTextBody');
  const modalDialogueFeed = document.getElementById('kidsModalDialogueFeed');

  if (mode === 'roleplay') {
    if (textBody) textBody.style.display = 'none';
    if (dialogueFeed) dialogueFeed.style.display = 'flex';
    if (modalTextBody) modalTextBody.style.display = 'none';
    if (modalDialogueFeed) modalDialogueFeed.style.display = 'flex';
  } else {
    if (textBody) textBody.style.display = 'flex';
    if (dialogueFeed) dialogueFeed.style.display = 'none';
    if (modalTextBody) modalTextBody.style.display = 'block';
    if (modalDialogueFeed) modalDialogueFeed.style.display = 'none';
  }
}

// 언어 모드 전환
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
  } else if (kidsStoryState.isDramaPlaying) {
    playKidsDramaCurrentSlide();
  }
}

// -------------------------------------------------------------
// 배경 찬양 BGM 제어 및 오디오 덕킹 (Audio Ducking)
// -------------------------------------------------------------
function setupKidsBgm() {
  const track = KIDS_BGM_TRACKS.find(t => t.id === kidsStoryState.currentBgmId) || KIDS_BGM_TRACKS[0];
  if (!kidsStoryState.bgmAudio) {
    kidsStoryState.bgmAudio = new Audio(track.src);
    kidsStoryState.bgmAudio.loop = true;
    kidsStoryState.bgmAudio.volume = 0.18;
  }
}

function setKidsBgmDucking(isSpeaking) {
  if (!kidsStoryState.bgmAudio || !kidsStoryState.isBgmPlaying) return;
  // 말할 때는 0.04로 부드럽게 낮추고, 말이 끝나면 0.18로 복원
  const target = isSpeaking ? 0.04 : 0.18;
  try {
    kidsStoryState.bgmAudio.volume = target;
  } catch(e) {}
}

function changeKidsBgmTrack(trackId) {
  const track = KIDS_BGM_TRACKS.find(t => t.id === trackId);
  if (!track) return;
  kidsStoryState.currentBgmId = trackId;

  const wasPlaying = kidsStoryState.isBgmPlaying;
  if (kidsStoryState.bgmAudio) {
    kidsStoryState.bgmAudio.pause();
  }

  kidsStoryState.bgmAudio = new Audio(track.src);
  kidsStoryState.bgmAudio.loop = true;
  kidsStoryState.bgmAudio.volume = 0.18;

  const select = document.getElementById('kidsBgmSelect');
  if (select) select.value = trackId;

  if (wasPlaying) {
    kidsStoryState.bgmAudio.play().then(() => {
      kidsStoryState.isBgmPlaying = true;
      updateKidsBgmButtonUI();
    }).catch(e => console.warn(e));
  }
}

function updateKidsBgmButtonUI() {
  const btn = document.getElementById('btnKidsBgm');
  const modalBtn = document.getElementById('btnModalBgm');
  const text = kidsStoryState.isBgmPlaying ? '⏸️ 배경 찬양 끄기' : '🎵 배경 찬양';

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
      console.warn("Autoplay blocked:", err);
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
// 🎭 역할놀이 입체 오디오 드라마 엔진 (Character Dialogue TTS)
// -------------------------------------------------------------
function cleanScriptForSpeech(text) {
  if (!text) return '';
  return text
    .replace(/\(.*?\)/g, '') // 괄호 안의 지문 (온마음으로 기뻐하심) 등은 낭독 제외
    .replace(/창\s*(\d+)[:장]\s*(\d+)절?/g, '창세기 $1장 $2절')
    .replace(/창세기\s*(\d+):(\d+)/g, '창세기 $1장 $2절')
    .replace(/(\d+):(\d+)/g, '$1장 $2절')
    .replace(/·/g, ', ')
    .trim();
}

function highlightActiveDialogue(index) {
  // 인라인 및 모달의 모든 대사 카드 하이라이트 해제 후 현재 대사 활성화
  document.querySelectorAll('.kids-dialogue-card').forEach(el => el.classList.remove('active-speaking'));

  if (index < 0) return;

  ['kidsDialogueList', 'kidsModalDialogueList'].forEach(listId => {
    const card = document.getElementById(`${listId}-item-${index}`);
    if (card) {
      card.classList.add('active-speaking');
      try {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } catch(e) {}
    }
  });
}

// 개별 대사 낭독 (사용자가 말풍선을 직접 클릭했을 때)
function speakSingleDialogue(dialogueIndex) {
  if (!('speechSynthesis' in window)) return;

  stopKidsSpeech();
  stopKidsDrama(false);

  playKidsChime('role');

  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  if (!slide || !slide.dialogues || !slide.dialogues[dialogueIndex]) return;

  const d = slide.dialogues[dialogueIndex];
  const char = CHARACTER_ROLES[d.role] || CHARACTER_ROLES.narrator;
  const mode = kidsStoryState.langMode; // 'bilingual' | 'ko' | 'en'

  highlightActiveDialogue(dialogueIndex);
  setKidsBgmDucking(true);

  const cleanKo = cleanScriptForSpeech(d.textKo);
  const cleanEn = d.textEn.replace(/\(.*?\)/g, '').trim();

  function createUtterance(text, lang) {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang;
    utt.volume = 1.0;
    utt.rate = char.rate;
    utt.pitch = char.pitch;
    const v = getCharacterVoice(lang, char.gender);
    if (v) utt.voice = v;
    return utt;
  }

  function finish() {
    highlightActiveDialogue(-1);
    setKidsBgmDucking(false);
  }

  if (mode === 'ko') {
    const utt = createUtterance(cleanKo, 'ko-KR');
    utt.onend = finish;
    utt.onerror = finish;
    window.speechSynthesis.speak(utt);
  } else if (mode === 'en') {
    const utt = createUtterance(cleanEn, 'en-US');
    utt.onend = finish;
    utt.onerror = finish;
    window.speechSynthesis.speak(utt);
  } else {
    // Bilingual: 한국어 먼저, 0.4초 후 영어
    const uttKo = createUtterance(cleanKo, 'ko-KR');
    const uttEn = createUtterance(cleanEn, 'en-US');
    uttKo.onend = () => {
      setTimeout(() => {
        window.speechSynthesis.speak(uttEn);
      }, 350);
    };
    uttKo.onerror = finish;
    uttEn.onend = finish;
    uttEn.onerror = finish;
    window.speechSynthesis.speak(uttKo);
  }
}

// 🎭 역할놀이 입체 대화극 자동 재생 컨트롤러
function updateDramaButtonUI(isPlaying) {
  const btn = document.getElementById('btnKidsDramaPlay');
  const modalBtn = document.getElementById('btnModalDramaPlay');
  const text = isPlaying ? '⏹️ 대화극 멈추기' : '🎭 입체 대화극 낭독';

  if (btn) {
    btn.innerHTML = text;
    btn.classList.toggle('tts-active', isPlaying);
  }
  if (modalBtn) {
    modalBtn.innerHTML = text;
    modalBtn.classList.toggle('tts-active', isPlaying);
  }
}

function toggleKidsDramaPlay() {
  if (!('speechSynthesis' in window)) {
    alert("현재 브라우저에서는 음성 합성 기능을 지원하지 않습니다.");
    return;
  }

  if (kidsStoryState.isDramaPlaying) {
    stopKidsDrama();
  } else {
    stopKidsSpeech();
    // 역할놀이 모드로 전환 후 자동 시작
    switchKidsStoryContentMode('roleplay');
    kidsStoryState.isDramaPlaying = true;
    updateDramaButtonUI(true);

    // 배경 찬양이 안 켜져 있으면 잔잔하게 자동 재생
    if (!kidsStoryState.isBgmPlaying) {
      toggleKidsBgm();
    }

    playKidsDramaCurrentSlide();
  }
}

function stopKidsDrama(updateUI = true) {
  clearAllAutoTimers();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  kidsStoryState.isDramaPlaying = false;
  kidsStoryState.activeDramaIndex = -1;
  highlightActiveDialogue(-1);
  setKidsBgmDucking(false);

  if (updateUI) updateDramaButtonUI(false);
}

function playKidsDramaCurrentSlide() {
  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  if (!slide || !slide.dialogues || slide.dialogues.length === 0) {
    stopKidsDrama();
    return;
  }

  kidsStoryState.activeDramaIndex = 0;
  playDramaLineSequentially(slide.dialogues, 0);
}

function playDramaLineSequentially(dialogues, lineIndex) {
  if (!kidsStoryState.isDramaPlaying) return;

  if (lineIndex >= dialogues.length) {
    // 해당 장의 모든 배역 대사가 끝남!
    highlightActiveDialogue(-1);
    setKidsBgmDucking(false);

    // 1.8초 감상 후 다음 장으로 자동 넘김
    kidsStoryState.autoAdvanceTimer = setTimeout(() => {
      if (kidsStoryState.isDramaPlaying) {
        if (kidsStoryState.currentSlideIndex < KIDS_STORYBOOK_DATA.slides.length - 1) {
          nextKidsSlide();
        } else {
          // 7장 완료! 축하 차임벨
          playKidsChime('page');
          stopKidsDrama();
        }
      }
    }, 1800);
    return;
  }

  kidsStoryState.activeDramaIndex = lineIndex;
  const d = dialogues[lineIndex];
  const char = CHARACTER_ROLES[d.role] || CHARACTER_ROLES.narrator;
  const mode = kidsStoryState.langMode;

  highlightActiveDialogue(lineIndex);
  setKidsBgmDucking(true);

  const cleanKo = cleanScriptForSpeech(d.textKo);
  const cleanEn = d.textEn.replace(/\(.*?\)/g, '').trim();

  function createUtterance(text, lang) {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = lang;
    utt.volume = 1.0;
    utt.rate = char.rate;
    utt.pitch = char.pitch;
    const v = getCharacterVoice(lang, char.gender);
    if (v) utt.voice = v;
    return utt;
  }

  function advanceToNextLine() {
    if (!kidsStoryState.isDramaPlaying) return;
    // 인물 간 자연스러운 호흡 (450ms)
    kidsStoryState.autoAdvanceTimer = setTimeout(() => {
      playDramaLineSequentially(dialogues, lineIndex + 1);
    }, 450);
  }

  if (mode === 'ko') {
    const utt = createUtterance(cleanKo, 'ko-KR');
    utt.onend = advanceToNextLine;
    utt.onerror = advanceToNextLine;
    window.speechSynthesis.speak(utt);
  } else if (mode === 'en') {
    const utt = createUtterance(cleanEn, 'en-US');
    utt.onend = advanceToNextLine;
    utt.onerror = advanceToNextLine;
    window.speechSynthesis.speak(utt);
  } else {
    // Bilingual: 한국어 후 영어
    const uttKo = createUtterance(cleanKo, 'ko-KR');
    const uttEn = createUtterance(cleanEn, 'en-US');
    uttKo.onend = () => {
      setTimeout(() => {
        if (!kidsStoryState.isDramaPlaying) return;
        window.speechSynthesis.speak(uttEn);
      }, 300);
    };
    uttKo.onerror = advanceToNextLine;
    uttEn.onend = advanceToNextLine;
    uttEn.onerror = advanceToNextLine;
    window.speechSynthesis.speak(uttKo);
  }
}

// -------------------------------------------------------------
// 기존 단일 내레이션 낭독 엔진 (Standard Storybook Read Aloud)
// -------------------------------------------------------------
function updateTtsButtonUI(isSpeaking) {
  const btn = document.getElementById('btnKidsTts');
  const modalBtn = document.getElementById('btnModalTts');
  const text = isSpeaking ? '⏹️ 낭독 멈추기' : '🔊 소리내어 읽기';

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
    alert("현재 브라우저에서는 음성 낭독 기능을 지원하지 않습니다.");
    return;
  }

  if (kidsStoryState.isSpeechActive) {
    stopKidsSpeech();
  } else {
    stopKidsDrama();
    switchKidsStoryContentMode('storybook');
    kidsStoryState.isSpeechActive = true;
    updateTtsButtonUI(true);
    speakKidsCurrentPage();
  }
}

function stopKidsSpeech() {
  clearAllAutoTimers();
  if (kidsUtteranceTimer) clearTimeout(kidsUtteranceTimer);
  if (kidsKeepAliveTimer) clearInterval(kidsKeepAliveTimer);

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  kidsStoryState.isSpeechActive = false;
  updateTtsButtonUI(false);
  setKidsBgmDucking(false);
}

function speakKidsCurrentPage() {
  if (!('speechSynthesis' in window)) return;

  clearAllAutoTimers();
  window.speechSynthesis.cancel();

  const slide = KIDS_STORYBOOK_DATA.slides[kidsStoryState.currentSlideIndex];
  if (!slide) return;

  const mode = kidsStoryState.langMode;

  kidsUtteranceTimer = setTimeout(() => {
    try {
      kidsStoryState.isSpeechActive = true;
      updateTtsButtonUI(true);
      setKidsBgmDucking(true);

      const rawTextKo = `${slide.chapterKo}. ${slide.titleKo}. ${slide.textKo}`;
      const textKo = cleanScriptForSpeech(rawTextKo);
      const textEn = `${slide.chapterEn}. ${slide.titleEn}. ${slide.textEn}`;

      function createUtterance(text, lang) {
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = lang;
        utt.volume = 1.0;
        utt.rate = 0.92;
        utt.pitch = 1.05;
        const voice = getCharacterVoice(lang, 'female');
        if (voice) utt.voice = voice;
        return utt;
      }

      function finishSpeaking() {
        setKidsBgmDucking(false);
        if (kidsStoryState.isAutoPlay && kidsStoryState.isSpeechActive) {
          kidsStoryState.autoAdvanceTimer = setTimeout(() => {
            if (kidsStoryState.isAutoPlay && kidsStoryState.isSpeechActive) {
              nextKidsSlide();
            }
          }, 1500);
        } else if (!kidsStoryState.isAutoPlay) {
          updateTtsButtonUI(false);
          kidsStoryState.isSpeechActive = false;
        }
      }

      if (mode === 'ko') {
        const utt = createUtterance(textKo, 'ko-KR');
        utt.onend = finishSpeaking;
        utt.onerror = finishSpeaking;
        window.speechSynthesis.speak(utt);
      } else if (mode === 'en') {
        const utt = createUtterance(textEn, 'en-US');
        utt.onend = finishSpeaking;
        utt.onerror = finishSpeaking;
        window.speechSynthesis.speak(utt);
      } else {
        const uttKo = createUtterance(textKo, 'ko-KR');
        const uttEn = createUtterance(textEn, 'en-US');
        uttKo.onend = () => {
          if (!kidsStoryState.isSpeechActive) return;
          kidsStoryState.autoAdvanceTimer = setTimeout(() => {
            if (!kidsStoryState.isSpeechActive) return;
            window.speechSynthesis.speak(uttEn);
          }, 450);
        };
        uttKo.onerror = finishSpeaking;
        uttEn.onend = finishSpeaking;
        uttEn.onerror = finishSpeaking;
        window.speechSynthesis.speak(uttKo);
      }

    } catch (err) {
      console.error(err);
      kidsStoryState.isSpeechActive = false;
      updateTtsButtonUI(false);
    }
  }, 60);
}

// -------------------------------------------------------------
// 자동 넘김 (Auto-Play)
// -------------------------------------------------------------
function updateAutoPlayButtonUI() {
  const btn = document.getElementById('btnKidsAutoPlay');
  const modalBtn = document.getElementById('btnModalAutoPlay');
  const text = kidsStoryState.isAutoPlay ? '⏸️ 넘김 일시정지' : '▶️ 자동 넘김';

  if (btn) btn.innerHTML = text;
  if (modalBtn) modalBtn.innerHTML = text;
}

function toggleKidsAutoPlay() {
  kidsStoryState.isAutoPlay = !kidsStoryState.isAutoPlay;
  updateAutoPlayButtonUI();
  clearAllAutoTimers();

  if (kidsStoryState.isAutoPlay) {
    if (!kidsStoryState.isSpeechActive && !kidsStoryState.isDramaPlaying) {
      kidsStoryState.autoPlayTimer = setTimeout(() => {
        if (kidsStoryState.isAutoPlay && !kidsStoryState.isSpeechActive && !kidsStoryState.isDramaPlaying) {
          nextKidsSlide();
        }
      }, 8500);
    }
  }
}

// -------------------------------------------------------------
// Fullscreen Presentation Mode (Zoom / TV)
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

  // 전체화면 모달 내 역할놀이 대본 렌더링
  renderKidsRolePlayDialogue(slide, 'kidsModalCastRoster', 'kidsModalDialogueList');
}

// 키보드 네비게이션
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

// 모바일 터치 제스처
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

    s.addText(`${item.chapterKo} • ${item.chapterEn}`, {
      x: 0.6, y: 0.4, w: 8.0, h: 0.4,
      fontSize: 12, color: '38BDF8', bold: true
    });
    s.addText(`📖 ${item.scripture}`, {
      x: 8.6, y: 0.4, w: 4.0, h: 0.4,
      fontSize: 11, color: '34D399', align: 'right', bold: true
    });

    try {
      s.addImage({
        path: item.img,
        x: 0.6, y: 0.9, w: 6.8, h: 5.6
      });
    } catch(e) {
      console.warn("Could not embed image directly to PPT:", e);
    }

    s.addShape(pptx.ShapeType.roundRect, {
      x: 7.7, y: 0.9, w: 4.9, h: 5.6,
      fill: { color: '1E293B' },
      line: { color: '38BDF8', width: 1.5 }
    });

    s.addText(item.titleKo, {
      x: 8.0, y: 1.2, w: 4.3, h: 0.8,
      fontSize: 19, color: 'FFFFFF', bold: true
    });
    s.addText(item.titleEn, {
      x: 8.0, y: 2.0, w: 4.3, h: 0.6,
      fontSize: 13, color: 'F59E0B', italic: true, bold: true
    });

    s.addText(item.textKo, {
      x: 8.0, y: 2.7, w: 4.3, h: 1.8,
      fontSize: 12, color: 'F8FAFC', lineSpacing: 20
    });

    s.addText(item.textEn, {
      x: 8.0, y: 4.6, w: 4.3, h: 1.6,
      fontSize: 10.5, color: '94A3B8', italic: true, lineSpacing: 16
    });
  });

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

// -------------------------------------------------------------
// Multi-Language Updater for Kids Zone
// -------------------------------------------------------------
function updateKidsZoneLanguage(lang) {
  if (!lang) lang = (typeof currentLang !== 'undefined' && currentLang) || 'ko';
  const t = (typeof translations !== 'undefined' && translations[lang]) 
    ? translations[lang] 
    : ((typeof translations !== 'undefined' && translations['en']) ? translations['en'] : null);
  if (!t) return;

  const tabStory = document.getElementById('tabBookStorybook');
  const tabDrama = document.getElementById('tabBookDrama');
  const tabVideo = document.getElementById('tabBookVideo');
  if (tabStory && t.kids_tab_storybook) tabStory.innerHTML = t.kids_tab_storybook;
  if (tabDrama && t.kids_tab_roleplay) tabDrama.innerHTML = t.kids_tab_roleplay;
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

  updateTtsButtonUI(kidsStoryState.isSpeechActive);
  updateDramaButtonUI(kidsStoryState.isDramaPlaying);
  updateKidsBgmButtonUI();
  updateAutoPlayButtonUI();

  renderKidsSlide(kidsStoryState.currentSlideIndex, false);
}

// 전역 window 함수 노출
window.nextKidsSlide = nextKidsSlide;
window.prevKidsSlide = prevKidsSlide;
window.goToKidsSlide = goToKidsSlide;
window.setKidsStoryLang = setKidsStoryLang;
window.switchKidsViewerMode = switchKidsViewerMode;
window.switchKidsStoryContentMode = switchKidsStoryContentMode;
window.toggleKidsAutoPlay = toggleKidsAutoPlay;
window.toggleKidsSpeech = toggleKidsSpeech;
window.stopKidsSpeech = stopKidsSpeech;
window.toggleKidsDramaPlay = toggleKidsDramaPlay;
window.stopKidsDrama = stopKidsDrama;
window.speakSingleDialogue = speakSingleDialogue;
window.speakKidsCurrentPage = speakKidsCurrentPage;
window.toggleKidsBgm = toggleKidsBgm;
window.changeKidsBgmTrack = changeKidsBgmTrack;
window.openKidsFullscreen = openKidsFullscreen;
window.closeKidsFullscreen = closeKidsFullscreen;
window.downloadKidsStorybookPptx = downloadKidsStorybookPptx;
window.updateKidsZoneLanguage = updateKidsZoneLanguage;

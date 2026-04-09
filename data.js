// [1] 강좌 데이터 (1~10강 상세 버전)
export const courseData = [
    {
        id: 1, level: "BEGINNER", title: "01. 첫인사와 자기소개",
        concepts: [
            "1. 안녕하세요: <b>Hello!</b> / <b>Hi!</b>", "2. 아침 인사: <b>Good morning!</b>", "3. 점심 인사: <b>Good afternoon!</b>", "4. 저녁 인사: <b>Good evening!</b>", "5. 헤어질 때: <b>Goodbye!</b>",
            "6. 이름 묻기: <b>What is your name?</b>", "7. 이름 답하기: <b>My name is [이름].</b>", "8. 안부 묻기: <b>How are you?</b>", "9. 안부 답하기: <b>I am fine, thank you.</b>", "10. 만나서 반가워요: <b>Nice to meet you.</b>",
            "11. 나 소개하기: <b>I am a father.</b>", "12. 출신 묻기: <b>Where are you from?</b>", "13. 출신 답하기: <b>I am from Korea.</b>", "14. 나이 말하기: <b>I am 60 years old.</b>", "15. 다시 봐서 반가워요: <b>Nice to see you again.</b>"
        ],
        quizzes: [
            { q: "아침 인사는?", opts: ["Good morning", "Good night"], a: 0 }, { q: "이름이 뭐예요?", opts: ["What is your name?", "How are you?"], a: 0 },
            { q: "만나서 반가워요", opts: ["Nice to meet you", "Sorry"], a: 0 }, { q: "한국에서 왔어요", opts: ["I am from Korea", "I like Korea"], a: 0 },
            { q: "저녁 인사는?", opts: ["Good evening", "Good morning"], a: 0 }, { q: "헤어질 때", opts: ["Bye", "Hi"], a: 0 },
            { q: "어떻게 지내세요?", opts: ["How are you?", "Who are you?"], a: 0 }, { q: "제 이름은 존입니다", opts: ["My name is John", "I am John"], a: 0 },
            { q: "나이를 말할 때", opts: ["I am 60 years old", "I have 60 years"], a: 0 }, { q: "감사합니다", opts: ["Thank you", "Please"], a: 0 },
            { q: "괜찮아요", opts: ["I am fine", "I am bad"], a: 0 }, { q: "나 소개", opts: ["I am...", "You are..."], a: 0 },
            { q: "반갑습니다(다시 만남)", opts: ["Nice to see you again", "Who are you"], a: 0 }, { q: "안녕(편하게)", opts: ["Hi", "Goodbye"], a: 0 },
            { q: "천만에요", opts: ["You're welcome", "No"], a: 0 }
        ],
        test: [
            { q: "처음 만난 사람에게 하는 인사는?", opts: ["Nice to meet you", "Good night"], a: 0 },
            { q: "상대방의 고향을 묻는 질문은?", opts: ["Where are you from?", "Where are you going?"], a: 0 },
            { q: "완벽한 자기소개 문장은?", opts: ["My name is Sam and I am from Korea.", "I name Sam from Korea."], a: 0 }
        ]
    },
    {
        id: 2, level: "BEGINNER", title: "02. 식당에서 주문하기",
        concepts: [
            "1. 두 명입니다: <b>Two people, please.</b>", "2. 메뉴판 주세요: <b>Can I have a menu?</b>", "3. 주문할게요: <b>I am ready to order.</b>", "4. 추천해주세요: <b>What do you recommend?</b>", "5. 이거 주세요: <b>I will have this one.</b>",
            "6. 물 좀 주세요: <b>Can I have some water?</b>", "7. 스테이크 미디엄으로: <b>Medium, please.</b>", "8. 냅킨 필요해요: <b>Can I get some napkins?</b>", "9. 덜 맵게 해주세요: <b>Not too spicy, please.</b>", "10. 화장실 어디죠: <b>Where is the restroom?</b>",
            "11. 계산서 주세요: <b>Can I have the bill?</b>", "12. 포장할게요: <b>To go, please.</b>", "13. 맛있어요!: <b>It is delicious!</b>", "14. 영수증 주세요: <b>Can I have a receipt?</b>", "15. 나중에 올게요: <b>I will come back later.</b>"
        ],
        quizzes: [
            { q: "두 명 예약/입장", opts: ["Two people, please", "I am two"], a: 0 }, { q: "메뉴판 요청", opts: ["Can I have a menu?", "Give me paper"], a: 0 },
            { q: "주문 준비 완료", opts: ["I'm ready to order", "I want food"], a: 0 }, { q: "물 요청", opts: ["Can I have water?", "Water go"], a: 0 },
            { q: "추천 메뉴 묻기", opts: ["What do you recommend?", "What is good?"], a: 0 }, { q: "포장하기", opts: ["To go, please", "For here, please"], a: 0 },
            { q: "계산서 요청", opts: ["Can I have the bill?", "Give me money"], a: 0 }, { q: "영수증 요청", opts: ["Can I have a receipt?", "Give me paper"], a: 0 },
            { q: "맛 표현", opts: ["It is delicious", "It is hungry"], a: 0 }, { q: "맵지 않게", opts: ["Not too spicy", "More spicy"], a: 0 },
            { q: "스테이크 굽기", opts: ["Medium, please", "Half, please"], a: 0 }, { q: "화장실 위치", opts: ["Where is the restroom?", "Where is the room?"], a: 0 },
            { q: "냅킨 요청", opts: ["Can I get some napkins?", "I want paper"], a: 0 }, { q: "이거 주문", opts: ["I will have this", "I see this"], a: 0 },
            { q: "나중에 오기", opts: ["I'll come back later", "Bye bye"], a: 0 }
        ],
        test: [
            { q: "식당에 들어가서 메뉴를 보고 물을 시키는 순서?", opts: ["Menu -> Order -> Water", "Water -> Menu -> Order"], a: 0 },
            { q: "계산할 때 가장 정중한 표현?", opts: ["Can I have the bill, please?", "Check! Check!"], a: 0 },
            { q: "남은 음식을 싸가고 싶을 때?", opts: ["To go, please.", "Eat here."], a: 0 }
        ]
    },
    {
        id: 3, level: "BEGINNER", title: "03. 길 찾기 (공항 & 택시)",
        concepts: [
            "1. 여권 여기 있습니다: <b>Here is my passport.</b>", "2. 방문 목적이 뭐죠: <b>What is the purpose of your visit?</b>", "3. 관광하러 왔어요: <b>For sightseeing.</b>", "4. 얼마나 머무나요: <b>How long will you stay?</b>", "5. 일주일요: <b>For one week.</b>",
            "6. 수화물 찾는 곳 어디죠: <b>Where is the baggage claim?</b>", "7. 가방을 잃어버렸어요: <b>I lost my bag.</b>", "8. 택시 타는 곳 어디죠: <b>Where is the taxi stand?</b>", "9. 이 주소로 가주세요: <b>Please take me to this address.</b>", "10. 얼마나 걸리나요: <b>How long does it take?</b>",
            "11. 여기서 세워주세요: <b>Stop here, please.</b>", "12. 짐 좀 도와주실래요: <b>Can you help me with my bags?</b>", "13. 거스름돈은 가지세요: <b>Keep the change.</b>", "14. 영수증 줄 수 있나요: <b>Can I have a receipt?</b>", "15. 왼쪽으로 가세요: <b>Go to the left.</b>"
        ],
        quizzes: [
            { q: "여권을 보여줄 때", opts: ["Here is my passport", "I have no paper"], a: 0 }, { q: "방문 목적: 관광", opts: ["Sightseeing", "Working"], a: 0 },
            { q: "가방 잃어버렸을 때", opts: ["I lost my bag", "Where is my home"], a: 0 }, { q: "택시 승강장 묻기", opts: ["Where is the taxi stand?", "Where is the taxi seat?"], a: 0 },
            { q: "주소로 가달라고 할 때", opts: ["Take me to this address", "Go to this house"], a: 0 }, { q: "얼마나 걸리나요?", opts: ["How long does it take?", "How much is it?"], a: 0 },
            { q: "거스름돈 가지세요", opts: ["Keep the change", "Give me money"], a: 0 }, { q: "짐 도와주기 요청", opts: ["Help me with my bags", "Take my bags"], a: 0 },
            { q: "왼쪽으로 가세요", opts: ["Go to the left", "Go to the right"], a: 0 }, { q: "세워주세요", opts: ["Stop here", "Run here"], a: 0 },
            { q: "체류 기간", opts: ["How long will you stay?", "When do you go?"], a: 0 }, { q: "방문 목적", opts: ["Purpose of visit", "What is your job"], a: 0 },
            { q: "영수증 요청", opts: ["Can I have a receipt?", "Give me paper"], a: 0 }, { q: "일주일 동안", opts: ["For one week", "After one week"], a: 0 },
            { q: "짐 찾는 곳", opts: ["Baggage claim", "Bag room"], a: 0 }
        ],
        test: [
            { q: "입국 심사에서 일주일 머물 관광객의 대답은?", opts: ["Sightseeing, for one week.", "Business, for two days."], a: 0 },
            { q: "택시 기사에게 목적지를 말하고 세워달라고 할 때?", opts: ["Take me to this address -> Stop here.", "Stop here -> Take me to this address."], a: 0 },
            { q: "거스름돈이 1달러 남았을 때 매너 있는 표현?", opts: ["Keep the change.", "Give me 1 dollar."], a: 0 }
        ]
    },
    // 💡 4~10강은 요약형으로 넣고 아버님이 3강까지 완료하시면 제가 더 풍성하게 짜드릴게요!
    { id: 4, level: "ELEMENTARY", title: "04. 호텔 체크인 & 룸서비스", concepts: ["1. 체크인 하고 싶어요: I'd like to check in.", "2. 제 예약 확인해주세요: Check my reservation.", "3. 조식 포함인가요: Is breakfast included?", "4. 수건 더 주세요: More towels, please.", "5. 수영장 어딨죠: Where is the pool?"], quizzes: [], test: [] },
    { id: 5, level: "ELEMENTARY", title: "05. 마트 쇼핑 & 환불", concepts: ["1. 얼마예요: How much is it?", "2. 너무 비싸요: It's too expensive.", "3. 할인 되나요: Can I get a discount?", "4. 환불하고 싶어요: I'd like a refund.", "5. 카드 되나요: Do you take cards?"], quizzes: [], test: [] },
    { id: 6, level: "INTERMEDIATE", title: "06. 병원에서 증상 말하기", concepts: ["1. 머리가 아파요: I have a headache.", "2. 감기 걸렸어요: I have a cold.", "3. 약 좀 주세요: I need some medicine.", "4. 의사를 만나야 해요: I need to see a doctor.", "5. 열이 나요: I have a fever."], quizzes: [], test: [] },
    { id: 7, level: "INTERMEDIATE", title: "07. 전화 영어 기초", concepts: ["1. 누구세요: Who is calling?", "2. 끊지 말고 기다리세요: Hold on, please.", "3. 나중에 전화할게요: I'll call you back later.", "4. 잘 안 들려요: I can't hear you well.", "5. 메시지 남길까요: Can I leave a message?"], quizzes: [], test: [] },
    { id: 8, level: "ADVANCED", title: "08. 비즈니스 미팅", concepts: ["1. 만나서 영광입니다: It's an honor to meet you.", "2. 본론으로 들어갑시다: Let's get down to business.", "3. 동의합니다: I agree with you.", "4. 고려해 볼게요: I'll think about it.", "5. 제안서 보내드릴게요: I'll send you a proposal."], quizzes: [], test: [] },
    { id: 9, level: "ADVANCED", title: "09. 영어로 토론하기", concepts: ["1. 제 생각에는: In my opinion...", "2. 확실한가요: Are you sure?", "3. 일리가 있네요: You have a point.", "4. 오해하지 마세요: Don't get me wrong.", "5. 요약하자면: To sum up..."], quizzes: [], test: [] },
    { id: 10, level: "NATIVE", title: "10. 원어민 슬랭 & 관용구", concepts: ["1. 매우 쉽다: A piece of cake.", "2. 행운을 빌어: Break a leg.", "3. 비밀을 누설하다: Spill the beans.", "4. 이제 그만하자: Let's call it a day.", "5. 완전 공감해: I feel you."], quizzes: [], test: [] }
];

// [2] 음악 데이터 (가사 아주 길게!)
export const songData = [
    {
        title: "Yesterday",
        artist: "The Beatles",
        lyrics: `Yesterday, all my <b>[ 1번 빈칸 ]</b> seemed so far away<br>Now it looks as though they're here to <b>[ 2번 빈칸 ]</b><br>Oh, I believe in yesterday<br><br>Suddenly, I'm not half the man I used to be<br>There's a shadow hanging over me<br>Oh, yesterday came suddenly`,
        blanks: ["troubles", "stay"]
    },
    {
        title: "My Way",
        artist: "Frank Sinatra",
        lyrics: `And now, the <b>[ 1번 빈칸 ]</b> is near<br>And so I face the final curtain<br>My friend, I'll say it clear<br>I'll state my case, of which I'm <b>[ 2번 빈칸 ]</b><br><br>I've lived a life that's full<br>I traveled each and every highway<br>And more, much more than this<br>I did it my way`,
        blanks: ["end", "certain"]
    },
    {
        title: "Wonderful Tonight",
        artist: "Eric Clapton",
        lyrics: `It's late in the evening; she's wondering what clothes to wear<br>She puts on her make-up and brushes her long blonde hair<br>And then she asks me, "Do I look all right?"<br>And I say, "Yes, you look <b>[ 1번 빈칸 ]</b> tonight"<br><br>We go to a party and everyone turns to see<br>This <b>[ 2번 빈칸 ]</b> lady that's walking around with me`,
        blanks: ["wonderful", "beautiful"]
    },
    {
        title: "Imagine",
        artist: "John Lennon",
        lyrics: `Imagine there's no <b>[ 1번 빈칸 ]</b><br>It's easy if you try<br>No hell below us<br>Above us only sky<br><br>Imagine all the <b>[ 2번 빈칸 ]</b><br>Living for today... Aha-ah...`,
        blanks: ["heaven", "people"]
    },
    {
        title: "Top of the World",
        artist: "Carpenters",
        lyrics: `Such a feelin's comin' over me<br>There is wonder in most every thing I see<br>Not a cloud in the <b>[ 1번 빈칸 ]</b>, got the sun in my eyes<br>And I won't be surprised if it's a <b>[ 2번 빈칸 ]</b>`,
        blanks: ["sky", "dream"]
    },
    {
        title: "Dancing Queen",
        artist: "ABBA",
        lyrics: `You can dance, you can jive<br>Having the <b>[ 1번 빈칸 ]</b> of your life<br>Ooh, see that girl, watch that scene<br>Dig in the <b>[ 2번 빈칸 ]</b> queen`,
        blanks: ["time", "dancing"]
    },
    {
        title: "Stand By Me",
        artist: "Ben E. King",
        lyrics: `When the night has come and the land is <b>[ 1번 빈칸 ]</b><br>And the moon is the only light we'll see<br>No I won't be afraid, oh I won't be afraid<br>Just as long as you stand, stand <b>[ 2번 빈칸 ]</b> me`,
        blanks: ["dark", "by"]
    },
    {
        title: "Hey Jude",
        artist: "The Beatles",
        lyrics: `Hey Jude, don't make it <b>[ 1번 빈칸 ]</b><br>Take a sad song and make it better<br>Remember to let her into your <b>[ 2번 빈칸 ]</b><br>Then you can start to make it better`,
        blanks: ["bad", "heart"]
    },
    {
        title: "Honesty",
        artist: "Billy Joel",
        lyrics: `If you search for tenderness it isn't hard to find<br>You can have the love you need to live<br>But if you look for truthfulness you might as well be <b>[ 1번 빈칸 ]</b><br>It always seems to be so hard to give<br><br>Honesty is such a <b>[ 2번 빈칸 ]</b> word`,
        blanks: ["blind", "lonely"]
    },
    {
        title: "Hotel California",
        artist: "Eagles",
        lyrics: `On a dark desert highway, cool wind in my hair<br>Warm smell of colitas, rising up through the air<br>Up ahead in the distance, I saw a shimmering light<br>My head grew <b>[ 1번 빈칸 ]</b> and my sight grew dim<br>I had to <b>[ 2번 빈칸 ]</b> for the night`,
        blanks: ["heavy", "stop"]
    }
];

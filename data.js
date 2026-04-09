// data.js

export const courseData = [
    {
        id: 1, 
        level: "1단원-1강", 
        title: "기초 인사와 안부 묻기 (완벽 마스터)",
        concepts: [
            "1. 안녕하세요! : <b>Hello! / Hi!</b>",
            "2. 좋은 아침입니다 : <b>Good morning.</b>",
            "3. 점심 인사 : <b>Good afternoon.</b>",
            "4. 저녁 인사 : <b>Good evening.</b>",
            "5. 안녕히 주무세요 : <b>Good night.</b>",
            "6. 처음 뵙겠습니다 : <b>How do you do?</b>",
            "7. 만나서 반갑습니다 : <b>Nice to meet you.</b>",
            "8. 다시 뵙게 되어 기뻐요 : <b>Good to see you again.</b>",
            "9. 어떻게 지내세요? : <b>How are you?</b>",
            "10. 잘 지냅니다, 고마워요 : <b>I'm fine, thank you.</b>",
            "11. 별일 없으시죠? : <b>What's up?</b>",
            "12. 그저 그래요 : <b>So so.</b>",
            "13. 가족들은 잘 지내나요? : <b>How is your family?</b>",
            "14. 나중에 봐요 : <b>See you later.</b>",
            "15. 조심히 가세요 : <b>Take care.</b>"
        ],
        quizzes: [
            { q: "아침에 만났을 때 하는 인사는?", opts: ["Good morning", "Good night"], a: 0 },
            { q: "'만나서 반갑습니다'의 올바른 표현은?", opts: ["Nice to meet you", "See you later"], a: 0 },
            { q: "친한 친구에게 '별일 없지?'라고 가볍게 물을 때", opts: ["What's up?", "How do you do?"], a: 0 },
            { q: "'잘 지냅니다, 고마워요'의 알맞은 영작은?", opts: ["I'm fine, thank you", "I'm bad, sorry"], a: 0 },
            { q: "헤어질 때 '조심히 가세요'라고 말하고 싶다면?", opts: ["Take care", "Hello"], a: 0 },
            { q: "'다시 뵙게 되어 기뻐요'는?", opts: ["Good to see you again", "Who are you?"], a: 0 },
            { q: "저녁 인사는?", opts: ["Good evening", "Good afternoon"], a: 0 },
            { q: "가족의 안부를 물을 때", opts: ["How is your family?", "Where is your family?"], a: 0 },
            { q: "잠자리에 들 때 하는 인사는?", opts: ["Good night", "Good morning"], a: 0 },
            { q: "'나중에 봐요'의 영어 표현은?", opts: ["See you later", "Nice to meet you"], a: 0 },
            { q: "기분이 '그저 그래요'라고 답할 때", opts: ["So so", "Very good"], a: 0 },
            { q: "공식적인 자리에서 처음 뵙겠습니다 할 때", opts: ["How do you do?", "What's up?"], a: 0 },
            { q: "오후/점심 인사는?", opts: ["Good afternoon", "Good evening"], a: 0 },
            { q: "기본적인 안부를 묻는 질문은?", opts: ["How are you?", "What is this?"], a: 0 },
            { q: "안녕!(편하게)", opts: ["Hi", "Goodbye"], a: 0 }
        ],
        test: [
            { q: "[실전 1] 비즈니스 미팅에서 처음 만난 바이어에게 건넬 가장 적절한 인사는?", opts: ["How do you do? Nice to meet you.", "What's up? Who are you?"], a: 0 },
            { q: "[실전 2] A: How are you? / B의 알맞은 대답은?", opts: ["I'm fine, thank you.", "Good morning."], a: 0 },
            { q: "[실전 3] 밤늦게 헤어지며 다음을 기약할 때 알맞은 말은?", opts: ["Good night, take care.", "Good evening, hello."], a: 0 },
            { q: "[실전 4] 친척 어르신을 오랜만에 다시 만났을 때?", opts: ["Good to see you again.", "Nice to meet you."], a: 0 },
            { q: "[실전 5] A: How is your family? / B: (그들은 모두 잘 지내요)", opts: ["They are doing great.", "I am so so."], a: 0 }
        ]
    },
    {
        id: 2, 
        level: "1단원-2강", 
        title: "자기소개 당당하게 하기",
        concepts: [
            "1. 제 이름은 ~입니다 : <b>My name is John.</b>",
            "2. 저는 한국에서 왔습니다 : <b>I am from Korea.</b>",
            "3. 저는 서울에 삽니다 : <b>I live in Seoul.</b>",
            "4. 저는 회사원입니다 : <b>I am an office worker.</b>",
            "5. 저는 은퇴했습니다 : <b>I am retired.</b>",
            "6. 취미는 등산입니다 : <b>My hobby is hiking.</b>",
            "7. 저는 골프 치는 것을 좋아합니다 : <b>I like playing golf.</b>",
            "8. 결혼하셨나요? : <b>Are you married?</b>",
            "9. 네, 저는 결혼했고 아이가 둘 있습니다 : <b>Yes, I'm married and have two kids.</b>",
            "10. 나이가 어떻게 되시나요? : <b>How old are you?</b>",
            "11. 저는 60세입니다 : <b>I am 60 years old.</b>",
            "12. 직업이 무엇인가요? : <b>What do you do?</b>",
            "13. 만나서 이야기 나눠서 즐거웠습니다 : <b>It was nice talking to you.</b>",
            "14. 연락처가 어떻게 되나요? : <b>What is your phone number?</b>",
            "15. 제 명함입니다 : <b>Here is my business card.</b>"
        ],
        quizzes: [
            { q: "출신을 말할 때", opts: ["I am from Korea", "I go to Korea"], a: 0 },
            { q: "직업을 물어볼 때 쓰는 표현은?", opts: ["What do you do?", "What are you doing?"], a: 0 },
            { q: "'저는 은퇴했습니다'는?", opts: ["I am retired", "I am tired"], a: 0 },
            { q: "취미가 등산이라고 할 때", opts: ["My hobby is hiking", "I am hiking"], a: 0 },
            { q: "나이를 말할 때 올바른 동사는?", opts: ["I am 60 years old", "I have 60 years"], a: 0 },
            { q: "사는 곳을 말할 때", opts: ["I live in Seoul", "I look at Seoul"], a: 0 },
            { q: "명함을 건넬 때", opts: ["Here is my business card", "Take this paper"], a: 0 },
            { q: "연락처를 물어볼 때", opts: ["What is your phone number?", "Where is your phone?"], a: 0 },
            { q: "결혼 여부를 물을 때", opts: ["Are you married?", "Do you marry?"], a: 0 },
            { q: "자녀가 두 명 있다고 할 때", opts: ["I have two kids", "I make two kids"], a: 0 },
            { q: "골프 치는 것을 좋아한다", opts: ["I like playing golf", "I play good golf"], a: 0 },
            { q: "자기 이름 소개", opts: ["My name is...", "You are..."], a: 0 },
            { q: "대화 후 헤어질 때", opts: ["It was nice talking to you", "I talk to you"], a: 0 },
            { q: "회사원이라고 소개할 때", opts: ["I am an office worker", "I work office"], a: 0 },
            { q: "나이를 물어볼 때", opts: ["How old are you?", "What is your age?"], a: 0 }
        ],
        test: [
            { q: "[실전 1] 외국인이 직업을 물었다 (What do you do?). 은퇴했다고 대답하려면?", opts: ["I am retired.", "I play golf."], a: 0 },
            { q: "[실전 2] 모임에서 완벽한 자기소개 순서는?", opts: ["Name -> From -> Hobby", "Hobby -> Name -> From"], a: 0 },
            { q: "[실전 3] 헤어지기 전 연락처를 교환하고 싶을 때 알맞은 말은?", opts: ["Here is my business card. What is your phone number?", "I live in Seoul. Bye."], a: 0 },
            { q: "[실전 4] A: Are you married? / B의 알맞은 대답은?", opts: ["Yes, I have two kids.", "I am 60 years old."], a: 0 },
            { q: "[실전 5] 취미를 묻는 질문에 알맞은 대답은?", opts: ["My hobby is hiking.", "I am from Korea."], a: 0 }
        ]
    },
    // 나머지 1단원의 18개 강의와 2단원~20단원 타이틀 (추후 내용 채움)
    { id: 3, level: "1단원-3강", title: "숫자와 돈 계산하기", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 4, level: "1단원-4강", title: "날짜와 요일, 시간 묻기", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 5, level: "1단원-5강", title: "길 물어보기 기본기", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 6, level: "1단원-6강", title: "가족 소개와 호칭", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 7, level: "1단원-7강", title: "취향과 호불호 표현하기", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 8, level: "1단원-8강", title: "식당 예약하기", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 9, level: "1단원-9강", title: "음식 주문과 계산", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 10, level: "1단원-10강", title: "카페에서 음료 주문", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 20, level: "2단원-1강", title: "공항 체크인 (2단원 시작)", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 40, level: "3단원-1강", title: "호텔 체크인과 불만 접수 (3단원)", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 60, level: "4단원-1강", title: "쇼핑과 사이즈 교환 (4단원)", concepts: ["..."], quizzes: ["..."], test: ["..."] },
    { id: 400, level: "20단원-20강", title: "원어민 프리토킹 마스터 (완강)", concepts: ["..."], quizzes: ["..."], test: ["..."] }
];

export const songData = [
    {
        title: "Yesterday", artist: "The Beatles",
        lyrics: `Yesterday, all my <b>[ 1번 ]</b> seemed so far away<br>Now it looks as though they're here to <b>[ 2번 ]</b><br>Oh, I believe in yesterday<br><br>Suddenly, I'm not half the man I used to be<br>There's a shadow hanging over me<br>Oh, yesterday came suddenly`,
        blanks: ["troubles", "stay"]
    },
    {
        title: "My Way", artist: "Frank Sinatra",
        lyrics: `And now, the <b>[ 1번 ]</b> is near<br>And so I face the final curtain<br>My friend, I'll say it clear<br>I'll state my case, of which I'm <b>[ 2번 ]</b><br><br>I've lived a life that's full<br>I traveled each and every highway`,
        blanks: ["end", "certain"]
    }
];

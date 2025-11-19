/* ---------------------
   HISTORIE-SLIDER
---------------------- */
const stories = [
    { title: "Mose och den brinnande busken", text: "Enligt Tora mötte Mose Gud vid en buske som brann utan att förtäras. Där fick han uppdraget att leda israeliterna ut ur Egypten." },
    { title: "Miraklet under Chanukka", text: "När templet återinvigdes fanns bara olja för en dag, men ljuset brann i åtta. Därför firas Chanukka i åtta kvällar." },
    { title: "Abrahams förbund", text: "Abraham slöt ett evigt förbund med Gud. Brit Milah, omskärelse på åttonde dagen, är ett tecken på detta förbund." },
    { title: "Röda Havets delning", text: "När israeliterna flydde från Egypten, enligt Tora, delade Gud havet så att folket kunde gå igenom på torr mark." },
    { title: "Ester räddar sitt folk", text: "Drottning Ester avslöjade en plan att utrota judarna i Persien. Hennes mod räddade folket, vilket firas under Purim." }
    // … fler stories
];

let index = 0;
let autoscrollActive = true;
const storyBox = document.getElementById("storyBox");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

function loadStory(i) {
    storyTitle.style.opacity = "0";
    storyText.style.opacity = "0";
    setTimeout(() => {
        storyTitle.textContent = stories[i].title;
        storyText.textContent = stories[i].text;
        void storyTitle.offsetWidth;
        void storyText.offsetWidth;
        storyTitle.style.animation = "none";
        storyText.style.animation = "none";
        setTimeout(() => {
            storyTitle.style.animation = "fadeIn 0.6s forwards";
            storyText.style.animation = "fadeIn 0.6s 0.2s forwards";
        }, 10);
    }, 300);
}

loadStory(index);

document.getElementById("prevStory").addEventListener("click", () => {
    index = (index - 1 + stories.length) % stories.length;
    loadStory(index);
});

document.getElementById("nextStory").addEventListener("click", () => {
    index = (index + 1) % stories.length;
    loadStory(index);
});

setInterval(() => {
    if (autoscrollActive) {
        index = (index + 1) % stories.length;
        loadStory(index);
    }
}, 4000);

storyBox.addEventListener("mouseenter", () => { autoscrollActive = false; });
storyBox.addEventListener("mouseleave", () => { autoscrollActive = true; });

/* ---------------------
   RANDOM CARD QUIZ
---------------------- */
const questions = [
    { q:"När börjar sabbaten?", a:[{keywords:["fredag","solnedgång"]},{keywords:["fredagskväll"]}] },
    { q:"När slutar sabbaten?", a:[{keywords:["lördag","solnedgång"]},{keywords:["lördagskväll"]}] },
    { q:"När görs Brit Milah?", a:[{keywords:["8","dag"]},{keywords:["åtta","dag"]}] },
    { q:"Vad betyder Mitzvah?", a:[{keywords:["bud"]},{keywords:["budord"]}] },
    { q:"Vad firar Pesach?", a:[{keywords:["uttåget","egypten"]},{keywords:["frihet","egypten"]}] },
    { q:"Vad kallas Pesach-måltiden?", a:[{keywords:["seder"]},{keywords:["sedermåltiden"]}] },
    { q:"Vilket bröd äter man under Pesach?", a:[{keywords:["matzá"]},{keywords:["matza"]},{keywords:["matzot"]},{keywords:["osyrat bröd"]}] },
    { q:"Vilken högtid pågår i sju dagar i lövhyddor?", a:[{keywords:["sukkot"]},{keywords:["lövhyddohögtiden"]}] },
    { q:"Vad firar man under Chanukka?", a:[{keywords:["olja"]},{keywords:["oljans mirakel"]},{keywords:["ljus"]}] },
    { q:"Hur många ljus har Chanukkian?", a:[{keywords:["8"]},{keywords:["åtta"]}] }
    // … fler frågor
];

let questionPool = [...questions];
const quizContainer = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function showRandomCard() {
    if(questionPool.length === 0) {
        questionPool = [...questions]; // reset when all answered
    }
    const idx = Math.floor(Math.random() * questionPool.length);
    const q = questionPool[idx];

    quizContainer.innerHTML = `
        <div class="quiz-card">
            <p>${q.q}</p>
            <input type="text" id="currentAnswer" placeholder="Skriv ditt svar..." />
            <button id="submitCard">Skicka</button>
        </div>
    `;

    document.getElementById("submitCard").addEventListener("click", () => {
        const userAns = document.getElementById("currentAnswer").value.trim().toLowerCase();
        const correct = q.a.some(opt => opt.keywords.every(kw => userAns.includes(kw)));
        if(correct) {
            resultDiv.textContent = "Rätt! ✅";
        } else {
            resultDiv.textContent = "Fel ❌";
        }
        // Remove answered question
        questionPool.splice(idx, 1);
        setTimeout(() => {
            resultDiv.textContent = "";
            showRandomCard();
        }, 1000);
    });
}

// Start the first card
showRandomCard();

/* ---------------------
   HISTORIE-SLIDER
---------------------- */
const stories = [
    { title: "Mose och den brinnande busken", text: "Enligt Tora mötte Mose Gud vid en buske som brann utan att förtäras. Där fick han uppdraget att leda israeliterna ut ur Egypten." },
    { title: "Röda Havets delning", text: "När israeliterna flydde från Egypten delade Gud havet så att folket kunde gå igenom på torr mark." },
    { title: "Abrahams förbund", text: "Abraham slöt ett evigt förbund med Gud. Brit Milah, omskärelse på åttonde dagen, är ett tecken på detta förbund." },
    { title: "Sabbat", text: "Sabbaten är en vilodag som firas varje vecka från fredag kväll till lördag kväll för att minnas Guds skapelse." },
    { title: "Purim", text: "Drottning Ester avslöjade en plan att utrota judarna i Persien. Hennes mod räddade folket, vilket firas under Purim." },
    { title: "Chanukka", text: "När templet återinvigdes fanns bara olja för en dag, men ljuset brann i åtta. Därför firas Chanukka i åtta kvällar." },
    { title: "Pesach", text: "Pesach, eller påsk, firar israeliternas uttåg ur Egypten och befrielsen från slaveriet." },
    { title: "Yom Kippur", text: "Försoningsdagen är den heligaste dagen i judendomen, då man fastar och ber om förlåtelse för sina synder." },
    { title: "Bar/Bat Mitzvah", text: "När en pojke fyller 13 eller en flicka 12 blir de religiöst ansvariga för sina handlingar." },
    { title: "Tora-läsning", text: "Toran läses offentligt i synagogan varje vecka, vilket är en central del av judiskt religiöst liv." },
    { title: "Jerusalem", text: "Jerusalem är en helig stad för judar, med Västra muren som en viktig plats för bön." },
    { title: "Rosh Hashana", text: "Nyårsfirandet markerar början på det judiska året och är en tid för reflektion och förbön." },
    { title: "Sukkot", text: "Lövhyddohögtiden firas genom att bo i tillfälliga hyddor för att minnas ökenvandringen." },
    { title: "Simchat Tora", text: "Festen för Toran firar avslutandet och påbörjandet av läsningen av Torarullen." },
    { title: "Kashrut", text: "Kashrut är de judiska matreglerna, som bland annat förbjuder att blanda kött och mjölk." },
    { title: "Mikveh", text: "Rituellt bad används i olika reningsritualer, till exempel för konversion eller efter menstruation." },
    { title: "Tefillin", text: "Små läderrullar med Tora-texter som fästs på arm och panna under morgonbönen." },
    { title: "Mezuzah", text: "En pergamentrulle med Tora-texter som placeras vid dörrposter för att påminna om Guds bud." },
    { title: "Menora", text: "En sjuarmad ljusstake som symboliserar Guds närvaro och används vid tempeltjänst." },
    { title: "Shavuot", text: "Högtid som firar när Gud gav Toran till Mose på Sinai berg." },
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

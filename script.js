/* ---------------------
   HISTORIE-SLIDER
---------------------- */
const stories = [
    { title: "Mose och den brinnande busken", text: "Enligt Tora mötte Mose Gud vid en buske som brann utan att förtäras. Där fick han uppdraget att leda israeliterna ut ur Egypten." },
    { title: "Miraklet under Chanukka", text: "När templet återinvigdes fanns bara olja för en dag, men ljuset brann i åtta. Därför firas Chanukka i åtta kvällar." },
    { title: "Abrahams förbund", text: "Abraham slöt ett evigt förbund med Gud. Brit Milah, omskärelse på åttonde dagen, är ett tecken på detta förbund." },
    { title: "Röda Havets delning", text: "När israeliterna flydde från Egypten, enligt Tora, delade Gud havet så att folket kunde gå igenom på torr mark." },
    { title: "Ester räddar sitt folk", text: "Drottning Ester avslöjade en plan att utrota judarna i Persien. Hennes mod räddade folket, vilket firas under Purim." },
    { title: "Daniel i lejongropen", text: "Daniel vägrade att sluta be till Gud och kastades i en lejongropa. Men Gud skyddade honom och lejonen gjorde honom ingen skada." },
    { title: "Kung Davids historia", text: "David var en herdepojke som blev kung över Israel. Han besegrade jätten Goliat med endast en slungsten och tro på Gud." },
    { title: "Torahn ges på Sinai berg", text: "Enligt traditionen fick Mose Torahs bud på Sinai berg. Dessa lagar blev grunden för det judiska folkets tro och liv." },
    { title: "Noas ark och regnbågen", text: "Enligt Tora räddade Noa sin familj och djurparen från den stora floden. Gud gav regnbågen som ett tecken på sitt förbund." },
    { title: "Jonah och valen", text: "Profeten Jonah försökte fly från Guds uppdrag men sväljdes av en stor fisk. Efter tre dagar följde han sin kallelse." },
    { title: "Josef och drömmarna", text: "Josef såldes som slav till Egypten men blev kung Faraos rådgivare genom sin förmåga att tolka drömmar. Han räddade sitt folk från svält." },
    { title: "Jerusalems tempel byggdes", text: "Kung Salomo byggde det första templet i Jerusalem. Det var ett heligt centrum för judisk tillbedjan i nästan 400 år." }
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

/* Manual controls */
document.getElementById("prevStory").addEventListener("click", () => {
    index = (index - 1 + stories.length) % stories.length;
    loadStory(index);
});

document.getElementById("nextStory").addEventListener("click", () => {
    index = (index + 1) % stories.length;
    loadStory(index);
});

/* Auto scroll */
setInterval(() => {
    if (autoscrollActive) {
        index = (index + 1) % stories.length;
        loadStory(index);
    }
}, 4000);

storyBox.addEventListener("mouseenter", () => { autoscrollActive = false; });
storyBox.addEventListener("mouseleave", () => { autoscrollActive = true; });

/* ---------------------
   QUIZ 20 frågor – intelligent validering
---------------------- */
const questions = [
    { q:"När börjar sabbaten?", a:[{keywords:["fredag","solnedgång"]},{keywords:["fredagskväll"]}] },
    { q:"När slutar sabbaten?", a:[{keywords:["lördag","solnedgång"]},{keywords:["lördagskväll"]}] },
    { q:"När görs Brit Milah?", a:[{keywords:["8","dag"]},{keywords:["åtta","dag"]},{keywords:["åttonde","dagen"]}] },
    { q:"Vad betyder Mitzvah?", a:[{keywords:["bud"]},{keywords:["budord"]}] },
    { q:"Vad firar Pesach?", a:[{keywords:["uttåget","egypten"]},{keywords:["frihet","egypten"]}] },
    { q:"Vad kallas Pesach-måltiden?", a:[{keywords:["seder"]},{keywords:["sedermåltiden"]}] },
    { q:"Vilket bröd äter man under Pesach?", a:[{keywords:["matzá"]},{keywords:["matza"]},{keywords:["matzot"]},{keywords:["osyrat bröd"]}] },
    { q:"Vilken högtid pågår i sju dagar i lövhyddor?", a:[{keywords:["sukkot"]},{keywords:["lövhyddohögtiden"]}] },
    { q:"Vad firar man under Chanukka?", a:[{keywords:["olja"]},{keywords:["oljans mirakel"]},{keywords:["ljus"]}] },
    { q:"Hur många ljus har Chanukkian?", a:[{keywords:["8"]},{keywords:["åtta"]},{keywords:["9"]},{keywords:["nio"]}] },
    { q:"Vad betyder Yom Kippur?", a:[{keywords:["försoning"]},{keywords:["botdagen"]}] },
    { q:"Hur länge fastar man vid Yom Kippur?", a:[{keywords:["25","timmar"]},{keywords:["ett","dygn"]}] },
    { q:"Vad symboliserar chuppan?", a:[{keywords:["hemmet"]},{keywords:["det nya hemmet"]}] },
    { q:"Varför krossas ett glas vid bröllop?", a:[{keywords:["tempel"]},{keywords:["templet"]},{keywords:["jerusalem"]}] },
    { q:"Vid vilken ålder är flickor Bat Mitzvah?", a:[{keywords:["12","år"]},{keywords:["tolv","år gammal"]}] },
    { q:"Vid vilken ålder är pojkar Bar Mitzvah?", a:[{keywords:["13","år"]},{keywords:["tretton","år gammal"]}] },
    { q:"Vad firas vid Rosh Hashana?", a:[{keywords:["nyår"]},{keywords:["judiska nyåret"]}] },
    { q:"Vilket instrument blåser man i vid Rosh Hashana?", a:[{keywords:["shofar"]},{keywords:["vädurshorn"]},{keywords:["horn"]}] },
    { q:"Vem ledde uttåget ur Egypten?", a:[{keywords:["mose"]},{keywords:["moses"]},{keywords:["profeten mose"]}] },
    { q:"Vem stoppade folkmordet i Purim-berättelsen?", a:[{keywords:["ester"]},{keywords:["esther"]},{keywords:["drottning ester"]}] }
];

// Skapa quiz-formulär
const quizContainer = document.getElementById("quiz");
questions.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>${i + 1}. ${item.q}</p>
        <input type="text" id="q${i}" placeholder="Skriv ditt svar här..." />
    `;
    quizContainer.appendChild(div);
});

// Funktion för att kolla om svaret innehåller alla nyckelord
function checkAnswer(ans, keywords) {
    return keywords.every(kw => ans.includes(kw));
}

// Rätta quiz
document.getElementById("submit").addEventListener("click", () => {
    let score = 0;
    questions.forEach((item, i) => {
        const ans = document.getElementById("q" + i).value.trim().toLowerCase();
        const isCorrect = item.a.some(opt => checkAnswer(ans, opt.keywords));
        if(isCorrect) score++;
    });
    document.getElementById("result").textContent = `Du fick ${score} av ${questions.length} rätt!`;
});

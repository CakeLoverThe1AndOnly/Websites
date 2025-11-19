/* ---------------------
   HISTORIE-SLIDER
---------------------- */

const stories = [
    {
        title: "Mose och den brinnande busken",
        text: "Enligt Tora mötte Mose Gud vid en buske som brann utan att förtäras. Där fick han uppdraget att leda israeliterna ut ur Egypten."
    },
    {
        title: "Miraklet under Chanukka",
        text: "När templet återinvigdes fanns bara olja för en dag, men ljuset brann i åtta. Därför firas Chanukka i åtta kvällar."
    },
    {
        title: "Abrahams förbund",
        text: "Abraham slöt ett evigt förbund med Gud. Brit Milah, omskärelse på åttonde dagen, är ett tecken på detta förbund."
    },
    {
        title: "Röda Havets delning",
        text: "När israeliterna flydde från Egypten, enligt Tora, delade Gud havet så att folket kunde gå igenom på torr mark."
    }
];

let index = 0;
let autoscrollActive = true;

const storyBox = document.getElementById("storyBox");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

function loadStory(i) {
    storyTitle.textContent = stories[i].title;
    storyText.textContent = stories[i].text;
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

/* Auto scroll when mouse NOT over */
setInterval(() => {
    if (autoscrollActive) {
        index = (index + 1) % stories.length;
        loadStory(index);
    }
}, 4000);

storyBox.addEventListener("mouseenter", () => {
    autoscrollActive = false;
});

storyBox.addEventListener("mouseleave", () => {
    autoscrollActive = true;
});


/* ---------------------
   QUIZ 20 frågor
---------------------- */

const questions = [
    { q: "När börjar sabbaten?", a: "När solen går ner på fredag" },
    { q: "När slutar sabbaten?", a: "När solen går ner på lördag" },
    { q: "När görs Brit Milah?", a: "8 dagar" },
    { q: "Vad betyder Mitzvah?", a: "Bud" },
    { q: "Vad firar Pesach?", a: "Uttåget ur Egypten" },
    { q: "Vad kallas Pesach-måltiden?", a: "Seder" },
    { q: "Vilket bröd äter man under Pesach?", a: "Matzá" },
    { q: "Vilken högtid pågår i sju dagar i lövhyddor?", a: "Sukkot" },
    { q: "Vad firar man under Chanukka?", a: "Oljans mirakel" },
    { q: "Hur många ljus har Chanukkian?", a: "Åtta" },
    { q: "Vad betyder Yom Kippur?", a: "Försoningsdagen" },
    { q: "Hur länge fastar man vid Yom Kippur?", a: "25 timmar" },
    { q: "Vad symboliserar chuppan?", a: "Hemmet" },
    { q: "Varför krossas ett glas vid bröllop?", a: "Templets förstörelse" },
    { q: "Vid vilken ålder är flickor Bat Mitzvah?", a: "12 år" },
    { q: "Vid vilken ålder är pojkar Bar Mitzvah?", a: "13 år" },
    { q: "Vad firas vid Rosh Hashana?", a: "Nyår" },
    { q: "Vilket instrument blåser man i vid Rosh Hashana?", a: "Shofar" },
    { q: "Vem ledde uttåget ur Egypten?", a: "Mose" },
    { q: "Vem stoppade folkmordet i Purim-berättelsen?", a: "Ester" }
];

const quizContainer = document.getElementById("quiz");

questions.forEach((item, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>${i + 1}. ${item.q}</p>
        <input type="text" id="q${i}" />
    `;
    quizContainer.appendChild(div);
});

document.getElementById("submit").addEventListener("click", () => {
    let score = 0;

    questions.forEach((item, i) => {
        const ans = document.getElementById("q" + i).value.trim().toLowerCase();
        if (ans === item.a.toLowerCase()) score++;
    });

    document.getElementById("result").textContent =
        `Du fick ${score} av ${questions.length} rätt!`;
});

const questions = [
    { q: "När börjar sabbaten?", a: "När solen går ner på fredag" },
    { q: "Hur länge varar sabbaten?", a: "Till solen går ner på lördag" },
    { q: "Vid vilken ålder utförs omskärelse?", a: "8 dagar" },
    { q: "Vid vilken ålder firar pojkar Bar Mitzvah?", a: "13 år" },
    { q: "Vid vilken ålder firar flickor Bat Mitzvah?", a: "12 år" },
    { q: "Vad betyder 'Mitzvah'?", a: "Bud" },
    { q: "Vad symboliserar chuppan vid ett bröllop?", a: "Hemmet de ska bygga" },
    { q: "Varför krossas ett glas vid judiskt bröllop?", a: "För att minnas templets förstörelse" },
    { q: "Vad firas vid Rosh Hashana?", a: "Det judiska nyåret" },
    { q: "Vilket horn blåser man i under Rosh Hashana?", a: "Shofar" },
    { q: "Vad betyder Yom Kippur?", a: "Försoningsdagen" },
    { q: "Hur länge varar fastan vid Yom Kippur?", a: "25 timmar" },
    { q: "Vad firar man under Chanukka?", a: "Oljans mirakel" },
    { q: "Hur många Chanukka-ljus tänds totalt?", a: "Åtta" },
    { q: "Vad gör man under Sukkot?", a: "Bygger lövhyddor" },
    { q: "Vad firas under Pesach?", a: "Uttåget ur Egypten" },
    { q: "Vad kallas Pesach-måltiden?", a: "Seder" },
    { q: "Vilket bröd äts under Pesach?", a: "Matzá" },
    { q: "Vem räddade judarna i berättelsen om Purim?", a: "Ester" },
    { q: "Vilken högtid firar givandet av Tio Budorden?", a: "Shavuot" }
];

const quizContainer = document.getElementById("quiz");

questions.forEach((item, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p>${index + 1}. ${item.q}</p>
        <input type="text" id="q${index}" />
    `;
    quizContainer.appendChild(div);
});

document.getElementById("submit").addEventListener("click", () => {
    let score = 0;

    questions.forEach((item, index) => {
        const userAns = document.getElementById("q" + index).value.trim().toLowerCase();
        if (userAns === item.a.toLowerCase()) score++;
    });

    document.getElementById("result").innerText = `Du fick ${score} av ${questions.length} rätt!`;
});

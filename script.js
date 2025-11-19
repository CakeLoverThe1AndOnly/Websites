(function () {
  const answers = { q1: "b", q2: "b", q3: "b", q4: "b" };

  const btn = document.getElementById("checkBtn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const form = new FormData(document.getElementById("quizForm"));
    let score = 0;
    let missing = false;

    for (const q in answers) {
      const user = form.get(q);
      if (!user) missing = true;
      if (user === answers[q]) score++;
    }

    if (missing) {
      result.textContent = "Du måste besvara alla frågor.";
      result.style.color = "crimson";
      return;
    }

    result.style.color = "black";
    result.textContent = `Du fick ${score} av 4 rätt.`;
  });
})();

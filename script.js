(function() {
  const answers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "b"
  };

  const btn = document.getElementById("checkBtn");
  const result = document.getElementById("result");

  btn.addEventListener("click", () => {
    const form = document.getElementById("quizForm");
    const data = new FormData(form);

    let score = 0;
    let missing = false;

    for (const q in answers) {
      const val = data.get(q);
      if (!val) missing = true;
      if (val === answers[q]) score++;
    }

    if (missing) {
      result.textContent = "Du måste svara på alla frågor.";
      result.style.color = "crimson";
      return;
    }

    result.style.color = "#000";
    result.textContent = `Du fick ${score} av 4 rätt.`;
  });
})();

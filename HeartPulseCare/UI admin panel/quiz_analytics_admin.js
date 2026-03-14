const quizResults = [
  { name: "Amit", score: 19 },
  { name: "Riya", score: 11 },
  { name: "Neha", score: 22 },
  { name: "Rahul", score: 9 }
];

function getRisk(score) {
  if (score >= 18) return "Low";
  if (score >= 12) return "Medium";
  return "High";
}

function renderAnalytics() {
  const table = document.getElementById("resultTable");
  table.innerHTML = "";

  let total = quizResults.length;
  let sum = 0;
  let low = 0;
  let high = 0;

  quizResults.forEach(user => {
    const risk = getRisk(user.score);
    sum += user.score;

    if (risk === "Low") low++;
    if (risk === "High") high++;

    table.innerHTML += `
      <tr>
        <td>${user.name}</td>
        <td>${user.score}</td>
        <td>${risk}</td>
      </tr>
    `;
  });

  document.getElementById("totalUsers").innerText = total;
  document.getElementById("avgScore").innerText = (sum / total).toFixed(1);
  document.getElementById("lowRisk").innerText = low;
  document.getElementById("highRisk").innerText = high;
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}

renderAnalytics();
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
/* MOTIVATIONAL HEALTH TIPS ROTATION */
const tips = [
  "❤️ Taking care of your heart today builds a healthier tomorrow.",
  "🥗 A balanced diet is one of the strongest medicines for your heart.",
  "🚶‍♂️ Even a 20-minute walk can significantly improve heart health.",
  "🧘 Stress management is as important as exercise for heart recovery.",
  "💧 Staying hydrated helps your heart pump more efficiently.",
  "⏰ Consistency in diet and exercise beats intensity."
];

let tipIndex = 0;
const tipText = document.getElementById("tipText");

setInterval(() => {
  tipText.style.opacity = 0;

  setTimeout(() => {
    tipIndex = (tipIndex + 1) % tips.length;
    tipText.textContent = tips[tipIndex];
    tipText.style.opacity = 1;
  }, 300);
}, 4000);
//example
if (userLoggedIn) {
  document.querySelector(".auth-links").style.display = "none";
}
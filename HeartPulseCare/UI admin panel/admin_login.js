function switchTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));

  if (tab === "login") {
    document.querySelectorAll(".tab")[0].classList.add("active");
    document.getElementById("loginForm").classList.add("active");
  } else {
    document.querySelectorAll(".tab")[1].classList.add("active");
    document.getElementById("registerForm").classList.add("active");
  }
}

/* SUCCESS MODAL */
function showSuccess() {
  document.getElementById("successModal").classList.add("active");

  setTimeout(() => {
    document.getElementById("successModal").classList.remove("active");
    // window.location.href = "admin_dashboard.html";
  }, 2500);
}

/* TEMP: frontend test */
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  showSuccess();
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  showSuccess();
});
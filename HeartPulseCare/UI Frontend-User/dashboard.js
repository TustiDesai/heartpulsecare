function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}

/* Animate progress bars */
document.querySelectorAll(".progress").forEach(bar => {
  const value = bar.getAttribute("data-progress");
  bar.style.setProperty("--fill", value + "%");
});
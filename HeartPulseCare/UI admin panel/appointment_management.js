const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});
// ===== RESCHEDULE MODAL LOGIC =====
const modal = document.getElementById("rescheduleModal");
const closeModalBtn = document.getElementById("closeModal");
const saveBtn = document.getElementById("saveReschedule");

let activeRow = null;

// Open modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("reschedule")) {
    activeRow = e.target.closest("tr");
    modal.classList.add("show");
  }
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Save reschedule
saveBtn.addEventListener("click", () => {
  const newDate = document.getElementById("newDate").value;
  const newTime = document.getElementById("newTime").value;

  if (!newDate || !newTime) {
    alert("Please select date & time");
    return;
  }

  activeRow.children[2].innerText = newDate;
  activeRow.children[3].innerText = newTime;
  activeRow.querySelector(".status").innerText = "Rescheduled";

  modal.classList.remove("show");
});
const messages = [
  {
    user: "Riya Patel",
    email: "riya@gmail.com",
    message: "Need help regarding diet plan.",
    status: "Open"
  },
  {
    user: "Amit Shah",
    email: "amit@gmail.com",
    message: "Appointment confirmation issue.",
    status: "Open"
  }
];

let currentIndex = null;

function renderMessages() {
  const table = document.getElementById("messageTable");
  table.innerHTML = "";

  messages.forEach((msg, index) => {
    table.innerHTML += `
      <tr class="animate">
        <td>${msg.user}</td>
        <td>${msg.email}</td>
        <td>${msg.message}</td>
        <td class="${msg.status === 'Open' ? 'status-open' : 'status-resolved'}">
          ${msg.status}
        </td>
        <td>
          <button class="action-btn reply" onclick="openReply(${index})">
            <i class="fa fa-reply"></i>
          </button>
          <button class="action-btn resolve" onclick="markResolved(${index})">
            <i class="fa fa-check"></i>
          </button>
        </td>
      </tr>
    `;
  });
}

function openReply(index) {
  currentIndex = index;
  document.getElementById("replyModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("replyModal").style.display = "none";
  document.getElementById("replyText").value = "";
}

function sendReply() {
  alert("Reply sent successfully!");
  closeModal();
}

function markResolved(index) {
  messages[index].status = "Resolved";
  renderMessages();
}

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}

renderMessages();
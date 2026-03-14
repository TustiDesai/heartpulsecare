const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

document.addEventListener("DOMContentLoaded", () => {
const doctorData = {
  labels: ["Dr. Shah", "Dr. Mehta", "Dr. Patel", "Dr. Joshi"],
  datasets: [{
    label: "Appointments",
    data: [32, 18, 24, 12],
    backgroundColor: "rgba(0, 123, 255, 0.6)",
    borderColor:"#007bff",
    borderWidth: 2,
    borderRadius: 8,
    hoverBackgroundColor: "rgba(0, 123, 255, 0.85)",
    
  }]
};

const calendarDays = document.getElementById("calendarDays");
const monthYear = document.getElementById("monthYear");

let currentDate = new Date();

const bookedDates = [5, 10, 18, 23]; // demo booked slots

function renderCalendar() {
  calendarDays.innerHTML = "";

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthYear.textContent = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric"
  });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    calendarDays.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("calendar-day");
    dayDiv.textContent = day;

    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    if (bookedDates.includes(day)) {
      dayDiv.classList.add("booked");
    }

    dayDiv.addEventListener("click", () => {
      dayDiv.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }],
        { duration: 300, easing: "ease-out" }
      );
    });

    calendarDays.appendChild(dayDiv);
  }
}

document.getElementById("prevMonth").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById("nextMonth").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

renderCalendar();

new Chart(document.getElementById("doctorChart"), {
  type: "bar",
  data: doctorData,
  options: {
  responsive: true,
  animation: {
    duration: 1200,
    easing: "easeOutCubic"
  },
  plugins: {
    legend: {
      labels: {
        color: "#003d5b",
        font: {
          size: 14,
          weight: "bold"
        }
      }
    },
    tooltip: {
      backgroundColor: "#003d5b",
      titleColor: "#fff",
      bodyColor: "#fff",
      padding: 12,
      cornerRadius: 8,
      animation: {
        duration: 300
      }
    }
  },
  scales: {
    x: {
      ticks: {
        color: "#444"
      },
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: "#444"
      },
      grid: {
        color: "rgba(0,0,0,0.05)"
      }
    }
  }
}
});
})
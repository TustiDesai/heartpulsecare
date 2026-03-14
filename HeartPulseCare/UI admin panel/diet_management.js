const data = {
  heartAttack: {
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  },
  angioplasty: {
    breakfast: [],
    lunch: [],
    snacks: [],
    dinner: []
  }
};

document.addEventListener("DOMContentLoaded", () => {
  render();
  document.getElementById("saveBtn").addEventListener("click", saveDiet);
  document.getElementById("toggleBtn").onclick = () =>
    document.getElementById("sidebar").classList.toggle("collapsed");
  document.getElementById("categorySelect").onchange = render;
});

function render() {
  const category = document.getElementById("categorySelect").value;
  const container = document.getElementById("dietSections");
  container.innerHTML = "";

  Object.keys(data[category]).forEach(meal => {
    const card = document.createElement("div");
    card.className = "diet-card";
    card.innerHTML = `<h3>${meal.toUpperCase()}</h3>`;

    data[category][meal].forEach((item, index) => {
      card.innerHTML += `
        <div class="diet-item">
          <span>${item}</span>
          <span class="actions">
            <button onclick="editDiet('${meal}',${index})">✏️</button>
            <button onclick="deleteDiet('${meal}',${index})">🗑</button>
          </span>
        </div>`;
    });

    container.appendChild(card);
  });
}

function openModal() {
  document.getElementById("dietModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("dietModal").style.display = "none";
  document.getElementById("dietText").value = "";
  document.getElementById("editIndex").value = -1;
}

function saveDiet() {
  const category = document.getElementById("categorySelect").value;
  const meal = document.getElementById("mealType").value;
  const text = document.getElementById("dietText").value;
  const index = document.getElementById("editIndex").value;

  if (!text) return alert("Enter diet item");

  if (index == -1) {
    data[category][meal].push(text);
  } else {
    data[category][meal][index] = text;
  }

  closeModal();
  render();
}

function editDiet(meal, index) {
  const category = document.getElementById("categorySelect").value;
  document.getElementById("dietText").value = data[category][meal][index];
  document.getElementById("mealType").value = meal;
  document.getElementById("editIndex").value = index;
  openModal();
}

function deleteDiet(meal, index) {
  const category = document.getElementById("categorySelect").value;
  data[category][meal].splice(index, 1);
  render();
}
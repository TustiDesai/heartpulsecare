// ================= HOSPITAL DATA =================
const hospitals = [
    {
        name: "Apollo Hospital",
        city: "Ahmedabad",
        area: "Satellite",
        emergency: true
    },
    {
        name: "Zydus Hospital",
        city: "Ahmedabad",
        area: "SG Highway",
        emergency: true
    }
];

// ================= RENDER HOSPITAL TABLE =================
function renderHospitalTable() {
    const tbody = document.getElementById("hospitalTableBody");
    tbody.innerHTML = "";

    hospitals.forEach((h, index) => {
        tbody.innerHTML += `
            <tr>
                <td>${h.name}</td>
                <td>${h.city}</td>
                <td>${h.area}</td>
                <td>${h.emergency ? "Yes" : "No"}</td>
                <td class="actions">
                    <button class="icon edit">✏️</button>
                    <button class="icon map">📍</button>
                    <button class="icon delete">🗑️</button>
                </td>
            </tr>
        `;
    });
}

// ================= NEARBY HOSPITALS =================
function showNearbyHospitals(city) {
    const container = document.getElementById("nearbyHospitals");
    container.innerHTML = "";

    const nearby = hospitals.filter(h => h.city === city);

    if (nearby.length === 0) {
        container.innerHTML = "<p>No nearby hospitals found</p>";
        return;
    }

    nearby.forEach(h => {
        container.innerHTML += `
            <div class="nearby-card">
                <span class="pin">📍</span>
                <div>
                    <strong>${h.name}</strong><br>
                    ${h.area}, ${h.city}
                </div>
            </div>
        `;
    });
}

// ================= INITIAL LOAD =================
renderHospitalTable();
showNearbyHospitals(hospitals[0].city);
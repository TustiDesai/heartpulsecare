// SIDEBAR TOGGLE

const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.getElementById("sidebar")

toggleBtn.onclick = () => {
sidebar.classList.toggle("collapsed")
}


// TIME SLOTS

const slots = [
"9:00 AM","9:30 AM","10:00 AM","10:30 AM",
"11:00 AM","11:30 AM","12:00 PM",
"3:00 PM","3:30 PM","4:00 PM"
]

const slotsContainer = document.getElementById("slots")

let selectedSlot = null

slots.forEach(time=>{

const div=document.createElement("div")
div.className="slot"
div.innerText=time

div.onclick=()=>{

document.querySelectorAll(".slot")
.forEach(s=>s.classList.remove("selected"))

div.classList.add("selected")

selectedSlot=time
document.getElementById("appointment_time").value = time

}

slotsContainer.appendChild(div)

})


// BOOK APPOINTMENT

function bookAppointment(){

const name=document.getElementById("name").value
const doctor=document.getElementById("doctor").value
const date=document.getElementById("date").value

if(!selectedSlot){
alert("Select time slot")
return
}

const history=document.getElementById("historyList")

const item=document.createElement("div")
item.className="history-item"

item.innerHTML=
`<b>${name}</b> booked with ${doctor}<br>
${date} • ${selectedSlot}`

history.prepend(item)

alert("Appointment booked successfully ❤️")

}
function loadAppointments(){

fetch("http://127.0.0.1:5000/appointments")
.then(res => res.json())
.then(data => {

let historyDiv = document.querySelector(".history");
historyDiv.innerHTML = "<h3>Your Appointment History</h3>";

data.forEach(app => {

historyDiv.innerHTML += `
<div class="history-card">
<p><b>Name:</b> ${app.patient_name}</p>
<p><b>Hospital:</b> ${app.hospitals}</p>
<p><b>Doctor:</b> ${app.doctor}</p>
<p><b>Date:</b> ${app.appointment_date}</p>
</div>
`;

});

});

}

window.onload = loadAppointments;


const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.getElementById("sidebar")

toggleBtn.onclick = () => {

sidebar.classList.toggle("collapsed")

}

let container=document.getElementById("hospitalList")

fetch("http://127.0.0.1:5000/hospitals")
.then(res=>res.json())
.then(data=>{

data.forEach(h=>{

container.innerHTML+=`
<div class="hospital-card">
<h3>${h.hospital_name}</h3>
<p><b>Location:</b> ${h.location}</p>
<p><b>Facilities:</b> ${h.facilities}</p>
<p><b>Contact:</b> ${h.contact}</p>
</div>
`

})

})
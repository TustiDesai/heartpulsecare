const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.getElementById("sidebar")

toggleBtn.onclick = () => sidebar.classList.toggle("collapsed")


function submitFeedback(){

let user_name = document.getElementById("name").value
let email = document.getElementById("email").value
let message = document.getElementById("message").value

fetch("http://127.0.0.1:5000/submit_feedback",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
user_name:user_name,
email:email,
message:message
})
})
.then(res=>res.json())
.then(data=>{
alert("Thank you for your feedback ❤️")
})
.catch(error=>{
console.log(error)
})

}
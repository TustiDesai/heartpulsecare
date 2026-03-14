const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.getElementById("sidebar")

toggleBtn.onclick = () => sidebar.classList.toggle("collapsed")

// Get score from localStorage
let score = localStorage.getItem("quizScore") || 0

let scoreNumber = document.getElementById("scoreNumber")
let progressCircle = document.getElementById("progressCircle")

scoreNumber.innerText = score

let percent = score / 100

let offset = 534 - (534 * percent)

progressCircle.style.strokeDashoffset = offset

// Risk level logic

let riskLevel = document.getElementById("riskLevel")
let resultMessage = document.getElementById("resultMessage")

if(score >= 81){

riskLevel.innerText = "❤️ Heart Hero"
resultMessage.innerText = "Amazing! Your heart health habits are excellent."

}

else if(score >= 61){

riskLevel.innerText = "💪 On Track"
resultMessage.innerText = "You're doing well but can improve further."

}

else if(score >= 41){

riskLevel.innerText = "⚠️ Risk Zone"
resultMessage.innerText = "Your lifestyle needs improvement to protect your heart."

}

else{

riskLevel.innerText = "🚨 Danger Zone"
resultMessage.innerText = "High risk! Please consult a doctor and improve lifestyle."

}
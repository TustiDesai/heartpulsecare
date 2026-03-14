const toggleBtn = document.getElementById("toggleBtn")
const sidebar = document.getElementById("sidebar")

toggleBtn.onclick = () => sidebar.classList.toggle("collapsed")


let score = 0
let currentQuestion = 0
let selectedScore = 0


const quizData = [

{
question:"1. What do you do when you see stairs?",
options:[
{text:"I look for the elevator – my best friend.",score:0},
{text:"I climb, but I count every step with regret.",score:2},
{text:"I race up like Rocky Balboa.",score:5}
]
},

{
question:"2. How often do you say no to fried food?",
options:[
{text:"Never. I'm emotionally attached to samosas.",score:0},
{text:"Sometimes, when I feel guilty.",score:2},
{text:"Mostly avoid them.",score:5}
]
},

{
question:"3. What’s your relationship with sugar?",
options:[
{text:"Soulmates.",score:0},
{text:"Trying to reduce.",score:2},
{text:"Natural sugars only.",score:5}
]
},

{
question:"4. How active is your day?",
options:[
{text:"Couch potato.",score:0},
{text:"Walk sometimes.",score:2},
{text:"Workout regularly.",score:5}
]
},

{
question:"5. How many hours do you sleep?",
options:[
{text:"Less than 5",score:0},
{text:"6-7 hours",score:2},
{text:"7-8 hours",score:5}
]
},

{
question:"6. Stress level?",
options:[
{text:"Very high",score:0},
{text:"Manageable",score:2},
{text:"Meditation helps",score:5}
]
},

{
question:"7. Health checkups?",
options:[
{text:"Never",score:0},
{text:"Rarely",score:2},
{text:"Every year",score:5}
]
},

{
question:"8. Waistline?",
options:[
{text:"XXL",score:0},
{text:"Average",score:2},
{text:"Fit",score:5}
]
},

{
question:"9. Smoking or drinking?",
options:[
{text:"Regularly",score:0},
{text:"Socially",score:2},
{text:"No",score:5}
]
},

{
question:"10. Meals?",
options:[
{text:"High carb",score:0},
{text:"Balanced sometimes",score:2},
{text:"Healthy diet",score:5}
]
},

{
question:"11. Family heart disease?",
options:[
{text:"Both sides",score:0},
{text:"One side",score:2},
{text:"None",score:5}
]
},

{
question:"12. Walk after meals?",
options:[
{text:"Never",score:0},
{text:"Sometimes",score:2},
{text:"Always",score:5}
]
},

{
question:"13. BP report?",
options:[
{text:"High",score:0},
{text:"Borderline",score:2},
{text:"Perfect",score:5},
{text:"Not tested",score:1}
]
},

{
question:"14. Chest pain?",
options:[
{text:"Often",score:0},
{text:"Sometimes",score:2},
{text:"Never",score:5}
]
},

{
question:"15. Overweight?",
options:[
{text:"Yes",score:0},
{text:"Slightly",score:2},
{text:"No",score:5}
]
},

{
question:"16. Walk 1 km?",
options:[
{text:"Cannot",score:0},
{text:"Slow",score:2},
{text:"Fast",score:5}
]
},

{
question:"17. Fatigue?",
options:[
{text:"Always",score:0},
{text:"Sometimes",score:2},
{text:"Rarely",score:5}
]
},

{
question:"18. Healthy habits?",
options:[
{text:"Never",score:0},
{text:"Occasionally",score:2},
{text:"Regularly",score:5}
]
},

{
question:"19. Blood report?",
options:[
{text:"Upload report (ignored in score)",score:0},
{text:"Skip",score:0}
]
},

{
question:"20. Healthy life belief?",
options:[
{text:"Not sure",score:1},
{text:"Hope so",score:2},
{text:"Yes",score:5}
]
}

]


function loadQuestion(){

let q=quizData[currentQuestion]

document.getElementById("question").innerText=q.question

let optionsHTML=""

q.options.forEach(opt=>{
optionsHTML+=`<div class="option" onclick="selectOption(${opt.score})">${opt.text}</div>`
})

document.getElementById("options").innerHTML=optionsHTML

document.getElementById("progress").style.width=(currentQuestion/quizData.length)*100+"%"

}

function selectOption(val){
selectedScore=val
document.querySelectorAll(".option").forEach(opt=>{opt.classList.remove("selected")})
event.target.classList.add("selected")
}

function nextQuestion(){

score+=selectedScore
selectedScore=0

currentQuestion++

if(currentQuestion>=quizData.length){

localStorage.setItem("quiz_score", score)
window.location.href="quiz_result.html"

return
}

loadQuestion()

}

function showResult(){

let result=""

if(score>=81) result="❤️ Heart Hero"

else if(score>=61) result="💪 On Track"

else if(score>=41) result="⚠️ Risk Zone"

else result="🚨 Danger Zone"


document.querySelector(".quiz-card").innerHTML=`
<h2>Your Score: ${score}</h2>
<h3>${result}</h3>
<p>Thank you for taking the heart health quiz.</p>
`

}

loadQuestion()

function submitQuiz(){

let score = 0

for(let i=1;i<=20;i++){

let selected = document.querySelector(`input[name="q${i}"]:checked`)

if(selected && parseInt(selected.value) === correctAnswers[i]){
score++
}

}

let risk=""

if(score>=15){
risk="Low Risk"
}
else if(score>=10){
risk="Moderate Risk"
}
else{
risk="High Risk"
}

let userId = parseInt(localStorage.getItem("user_id"))

fetch("http://127.0.0.1:5000/submit_quiz",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
user_id:userId,
score:score,
risk_level:risk
})
})
.then(res=>res.json())
.then(data=>{
window.location.href="quiz_result.html"
})

}
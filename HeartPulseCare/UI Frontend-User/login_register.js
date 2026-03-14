console.log("JS Loaded");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const goRegister = document.getElementById("goRegister");
const goLogin = document.getElementById("goLogin");

// TAB SWITCH
function showLogin() {
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
}

function showRegister() {
  registerTab.classList.add("active");
  loginTab.classList.remove("active");
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

goRegister.addEventListener("click", showRegister);
goLogin.addEventListener("click", showLogin);

// TEMP FORM HANDLERS
loginForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const data = await response.json();

    if (data.user) {
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert(data.message);
    }

});

registerForm.addEventListener("submit", async (e) => {

e.preventDefault();

const full_name = document.getElementById("regName").value;
const email = document.getElementById("regEmail").value;
const password = document.getElementById("regPassword").value;
const confirm_password = document.getElementById("regConfirmPassword").value;

const response = await fetch("http://127.0.0.1:5000/register",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({
full_name,
email,
password,
confirm_password
})
});

const result = await response.text();

alert(result);

});
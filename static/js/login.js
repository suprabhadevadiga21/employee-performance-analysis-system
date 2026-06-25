

let mode = localStorage.getItem("login_mode") || "hr";
let registerMode = false;

function updateUI(){

document.getElementById("role").value = mode;

document.getElementById("title").innerText =
(mode === "hr") ? "HR Login" : "User Login";

document.getElementById("termsLink").href =
(mode === "hr") ? "/terms" : "/user_terms";

if(mode === "employee"){
document.getElementById("registerLink").classList.remove("hidden");
}else{
document.getElementById("registerLink").classList.add("hidden");
registerMode=false;
document.getElementById("registerForm").classList.add("hidden");
document.getElementById("loginForm").classList.remove("hidden");
}
}

function toggleMode(){
mode = (mode === "hr") ? "employee" : "hr";
localStorage.setItem("login_mode", mode);
updateUI();
}

function toggleRegister(){
registerMode = !registerMode;

if(registerMode){
document.getElementById("loginForm").classList.add("hidden");
document.getElementById("registerForm").classList.remove("hidden");
document.getElementById("title").innerText = "Register User";
}else{
document.getElementById("registerForm").classList.add("hidden");
document.getElementById("loginForm").classList.remove("hidden");
updateUI();
}
}

window.onload = updateUI;


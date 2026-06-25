

const check = document.getElementById("agreeCheck");
const btn = document.getElementById("continueBtn");

// ✅ RESTORE STATE ON LOAD
window.onload = function(){
    let accepted = localStorage.getItem("hr_terms") === "true";

    check.checked = accepted;
    btn.disabled = !accepted;
};

// ✅ SAVE STATE ON CHANGE
check.addEventListener("change", function(){
    localStorage.setItem("hr_terms", this.checked);
    btn.disabled = !this.checked;
});

// ✅ REDIRECT WITH CORRECT ROLE
function goLogin(){
    localStorage.setItem("hr_terms","true");
    localStorage.setItem("login_mode","hr"); // FIXED

    window.location.href="/login";
}


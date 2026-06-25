

const check = document.getElementById("agreeCheck");
const btn = document.getElementById("continueBtn");

// ✅ RESTORE STATE ON LOAD
window.onload = function(){
    let accepted = localStorage.getItem("user_terms") === "true";

    check.checked = accepted;
    btn.disabled = !accepted;
};

// ✅ SAVE STATE
check.addEventListener("change", function(){
    localStorage.setItem("user_terms", this.checked);
    btn.disabled = !this.checked;
});

// ✅ CORRECT ROLE FIX
function goLogin(){
    localStorage.setItem("user_terms","true");
    localStorage.setItem("login_mode","employee"); // FIXED

    window.location.href="/login";
}


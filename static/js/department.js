
const deptInput = document.getElementById("dept_name");
const descInput = document.getElementById("dept_desc");

deptInput.addEventListener("input", function() {
    let dept = deptInput.value.toLowerCase();

    if (dept.includes("hr")) {
        descInput.value = "Manages employee records, recruitment, and company policies";
    } 
    else if (dept.includes("it")) {
        descInput.value = "Handles software, hardware, and technical support";
    }
    else if (dept.includes("finance")) {
        descInput.value = "Manages company budget, payroll, and expenses";
    }
    else if (dept.includes("sales")) {
        descInput.value = "Responsible for client acquisition and revenue generation";
    }
    else if (dept.includes("marketing")) {
        descInput.value = "Handles advertising, branding, and promotions";
    }
    else if (dept.includes("operations")) {
        descInput.value = "Oversees daily business operations and workflow";
    }
    else {
        descInput.value = "";
    }
});

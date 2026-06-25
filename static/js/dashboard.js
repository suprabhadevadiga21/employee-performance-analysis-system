
document.getElementById("searchInput").addEventListener("keyup", function(){
    let val = this.value.toLowerCase();
    document.querySelectorAll("#empTable tbody tr").forEach(row=>{
        let name = row.cells[0].innerText.toLowerCase();
        row.style.display = name.includes(val) ? "" : "none";
    });
});



let charts = {};

function loadDashboard(){

fetch("/api/chart-data")
.then(res => res.json())
.then(data => {

    console.log("DATA:", data);

    // ===== DESTROY OLD CHARTS =====
    Object.values(charts).forEach(c => c.destroy());

    // ===== PIE =====
    charts.pie = new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["High","Medium","Low"],
            datasets: [{ data: data.pie }]
        }
    });

    // ===== SALARY =====
    charts.bar = new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: data.salary_labels || data.labels,
            datasets: [{ data: data.salary_data || data.bar }]
        }
    });

    // ===== DEPARTMENT =====
    charts.dept = new Chart(document.getElementById("deptChart"), {
        type: "bar",
        data: {
            labels: data.dept_labels,
            datasets: [{ data: data.dept_data }]
        }
    });

    // ===== TREND =====
    charts.line = new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: data.trend_labels,
            datasets: [{
                data: data.trend_data,
                tension:0.3
            }]
        }
    });

    // ===== TOP PERFORMER =====
    if(data.top){
        document.getElementById("topPerformer").innerText =
            data.top.name + " (" + data.top.predicted_score.toFixed(2) + ")";
    }

});
}

// LOAD
loadDashboard();

// AUTO REFRESH
setInterval(loadDashboard, 10000);


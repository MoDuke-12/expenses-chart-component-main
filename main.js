let chart = document.querySelectorAll("li.chart");
let amount = document.querySelectorAll(".amount");

// GET Data From json file and add to HTML File
function chartsRepo() {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++) {
        chart[i].style.height = data[i].amount + "%";
        amount[i].style.bottom = data[i].amount + 1 + "%";
        amount[i].innerHTML = "$" + data[i].amount;
      }
    });
}
chartsRepo();

// Add Active & Remove
chart.forEach((el) => {
  el.addEventListener("click", () => {
    chart.forEach((ele) => ele.classList.remove("active"));
    el.classList.add("active");
  });
});

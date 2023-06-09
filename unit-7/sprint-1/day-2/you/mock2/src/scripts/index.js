//add your js code here

let currentPage = 1;

const apiUrl = "https://jsonmock.hackerrank.com/api/football_matches";

function fetchPage(pageNumber) {
  fetch(`${apiUrl}?page=${pageNumber}`)
    .then((res) => res.json())
    .then((data) => {
      display(data?.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function display(data) {
  console.log(data);
  document.querySelector("tbody").innerHTML = "";
  data.forEach((e, i) => {
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = e.competition;

    let td2 = document.createElement("td");
    td2.innerText = e.year;

    let td3 = document.createElement("td");
    td3.innerText = e.round;

    let td4 = document.createElement("td");
    td4.innerText = e.team1;

    let td5 = document.createElement("td");
    td5.innerText = e.team2;

    let td6 = document.createElement("td");
    td6.innerText = e.team1goals;

    let td7 = document.createElement("td");
    td7.innerText = e.team2goals;

    row.append(td1, td2, td3, td4, td5, td6, td7);

    document.querySelector("tbody").append(row);
  });
}

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPage(currentPage);
  }
});

next.addEventListener("click", () => {
  currentPage++;
  fetchPage(currentPage);
});

fetchPage(currentPage);

function filterPage() {
    window.location.href = "/filter.html"
}
//add your js code here

function fetchPage(year, team1, team2) {
  let apiUrl = `https://jsonmock.hackerrank.com/api/football_matches?year=${year}`;
  if (team1) {
    apiUrl += `&team1=${team1}`;
  }

  if (team2) {
    apiUrl += `&team2=${team2}`;
  }

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      display(data?.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

fetchPage(2011, "", "");

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

const filterData = () => {
  const year = document.querySelector("#year").value;
  const team1 = document.querySelector("#team1").value;
  const team2 = document.querySelector("#team2").value;

  fetchPage(year, team1, team2);
};

document.querySelector("#year").addEventListener("change", filterData);
document.querySelector("#team1").addEventListener("change", filterData);
document.querySelector("#team2").addEventListener("change", filterData);

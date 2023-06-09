// Write code related to Done page here

let DoneList = JSON.parse(localStorage.getItem("done-list")) || [];

displayTable(DoneList);

function displayTable(DoneList) {
  //   console.log(myTask);
  document.querySelector("tbody").innerHTML = "";
  DoneList.forEach(function (e, i) {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = e.task;

    let td2 = document.createElement("td");
    td2.innerText = e.description;

    let td3 = document.createElement("td");
    td3.innerText = e.start_date;

    let td4 = document.createElement("td");
    td4.innerText = e.end_date;

    let td5 = document.createElement("td");
    td5.innerText = e.priority;

    row.append(td1, td2, td3, td4, td5);

    document.querySelector("tbody").append(row);
  });
}

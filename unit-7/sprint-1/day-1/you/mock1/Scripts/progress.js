// Write code for the Progress page here

let myPriority = JSON.parse(localStorage.getItem("priority-list")) || [];

let DoneList = JSON.parse(localStorage.getItem("done-list")) || [];

displayTable(myPriority);

function displayTable(myPriority) {
//   console.log(myTask);
  document.querySelector("tbody").innerHTML = "";
  myPriority.forEach(function (e, i) {
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

    let td6 = document.createElement("td");
    td6.innerText = "Add";

    td6.addEventListener("click", function () {
      DoneList.push(e);
      localStorage.setItem("done-list", JSON.stringify(DoneList));
    });

    td6.addEventListener("click", function () {
      delFunction(e, i);
    });

    row.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(row);
  });
}

function delFunction(e, i) {
  myPriority.splice(i, 1);
  displayTable(myPriority);
  localStorage.setItem("priority-list", JSON.stringify(myPriority));
}

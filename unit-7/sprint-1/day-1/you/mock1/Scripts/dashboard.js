// Write code related to dashboard page here

let myTask = JSON.parse(localStorage.getItem("task-list")) || [];

let myPriority = JSON.parse(localStorage.getItem("priority-list")) || [];

let filter = document.getElementById("filter");

let totalData = myTask.length;
document.querySelector("#task-count").innerText = totalData;

displayTable(myTask);

function displayTable(myTask) {
  console.log(myTask);
  document.querySelector("tbody").innerHTML = "";
  myTask.forEach(function (e, i) {
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
      myPriority.push(e);
      localStorage.setItem("priority-list", JSON.stringify(myPriority));
    });

    td6.addEventListener("click", function () {
      delFunction(e, i);
    });

    row.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(row);
  });
}

filter.addEventListener("change", function () {
  if (filter.value == "") {
    displayTable(myTask);
  } else {
    let filterData = myTask.filter((e) => {
      return e.priority == filter.value;
    });
    displayTable(filterData);
  }
});

function delFunction(e, i) {
  myTask.splice(i, 1);
  displayTable(myTask);
  localStorage.setItem("task-list", JSON.stringify(myTask));
}

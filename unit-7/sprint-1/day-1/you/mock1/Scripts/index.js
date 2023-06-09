// Write code related to Home page here
document.querySelector("form").addEventListener("submit", mytask);

let myTask = JSON.parse(localStorage.getItem("task-list")) || [];

function mytask(e) {
  e.preventDefault();
  let task = document.querySelector("#name").value;
  let description = document.querySelector("#desc").value;
  let start_date = document.querySelector("#start").value;
  let end_date = document.querySelector("#end").value;
  let priority = document.querySelector("#priority").value;

  let taskObj = {
    task,
    description,
    start_date,
    end_date,
    priority,
  };

  console.log(taskObj);
  myTask.push(taskObj);
  localStorage.setItem("task-list", JSON.stringify(myTask));
}

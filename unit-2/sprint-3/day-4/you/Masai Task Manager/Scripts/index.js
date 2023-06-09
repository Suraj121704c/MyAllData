// Write code related to Home page here 

let task = document.querySelector("form").addEventListener("submit",taskAdd)

let taskArr = JSON.parse(localStorage.getItem("task-list")) || []

function taskAdd(){
    event.preventDefault();
    let name = document.querySelector("#name").value
    let description = document.querySelector("#desc").value
    let start = document.querySelector("#start").value
    let end = document.querySelector("#end").value
    let priority = document.querySelector("#priority").value
    let obj = {
        name,
        description,
        start,
        end,
        priority
    }
    taskArr.push(obj)
    localStorage.setItem("task-list",JSON.stringify(taskArr))
}
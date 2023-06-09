// Write all the JS Code related to Home Page Here 
document.querySelector("form").addEventListener("submit",mytask)

let mytaskArr = JSON.parse(localStorage.getItem("tasks")) || []

let CompleteArr = JSON.parse(localStorage.getItem("task-completed")) || []
 
function mytask(){
    event.preventDefault()
    let task = document.querySelector("#name").value
    let type = document.querySelector("#type").value
    let date = document.querySelector("#date").value
    let priority = document.querySelector("#priority").value
    let taskObj = {
        task,
        type,
        priority,
        date
    }
    mytaskArr.push(taskObj)
    localStorage.setItem("tasks",JSON.stringify(mytaskArr))
    displaytable(mytaskArr)
}
function displaytable(mytaskArr){
   document.querySelector("tbody").innerHTML=""
   mytaskArr.forEach(function(elem,i){
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = elem.task
    let td2 = document.createElement("td")
    td2.innerText = elem.type
    let td3 = document.createElement("td")
    td3.innerText = elem.date
    let td4 = document.createElement("td")
    td4.innerText = elem.priority
    let td5 = document.createElement("td")
    td5.innerText = "Complete"
    td5.addEventListener("click",function(){
      CompleteArr.push(elem)
      localStorage.setItem("task-completed",JSON.stringify(CompleteArr))
    })
    td5.addEventListener("click",function(){
        delfun(elem,i)
    })
    row.append(td1,td2,td3,td4,td5)

    document.querySelector("tbody").append(row)
   })
}
function delfun(elem,i){
    mytaskArr.splice(i,1)
    displaytable(mytaskArr)
    localStorage.setItem("tasks",JSON.stringify(mytaskArr))
}
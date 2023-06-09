// Write all the JS Code related to Completed Page Here 

let killArr = JSON.parse(localStorage.getItem("task-completed")) || []

let fanArr = JSON.parse(localStorage.getItem("task-favorites")) || []

let filter = document.getElementById("filter")

displaytable(killArr)

function displaytable(killArr){
    document.querySelector("tbody").innerHTML = ""
    killArr.forEach(function(elem,i){
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
    td5.innerText = "Add"
    td5.addEventListener("click",function(){
      fanArr.push(elem)
      localStorage.setItem("task-favorites",JSON.stringify(fanArr))
    })
    td5.addEventListener("click",function(){
        delfun(elem,i)
    })
    row.append(td1,td2,td3,td4,td5)

    document.querySelector("tbody").append(row)
    })
}

function delfun(elem,i){
    killArr.splice(i,1)
    displaytable(killArr)
    localStorage.setItem("task-completed",JSON.stringify(killArr))
}

filter.addEventListener("change",function(){
    if(filter.value == ""){
        displaytable(killArr)
    }else{
        let filteredData = killArr.filter(function(el){
            return el.priority === filter.value
        })
        displaytable(filteredData)
    }
})
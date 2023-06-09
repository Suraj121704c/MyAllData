// Write all the JS Code related to Favourites Page Here 

let fan = JSON.parse(localStorage.getItem("task-favorites")) || []

displaytable(fan)

function displaytable(fan){
    document.querySelector("tbody").innerHTML = ""

    fan.forEach(function(elem,i){
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText = elem.task
    let td2 = document.createElement("td")
    td2.innerText = elem.type
    let td3 = document.createElement("td")
    td3.innerText = elem.date
    let td4 = document.createElement("td")
    td4.innerText = elem.priority

    row.append(td1,td2,td3,td4)

    document.querySelector("tbody").append(row)
    })
}
// Write code related to Done page here
let doneArr = JSON.parse(localStorage.getItem("done-list")) 

displayd(doneArr)

function displayd(doneArr){
    doneArr.forEach(function(elem,i){
        let row = document.createElement("tr")
        let td1 =  document.createElement("td")
        td1.innerText=elem.name
        let td2 =  document.createElement("td")
        td2.innerText=elem.description
        let td3 =  document.createElement("td")
        td3.innerText=elem.start
        let td4 =  document.createElement("td")
        td4.innerText=elem.end
        let td5 =  document.createElement("td")
        td5.innerText=elem.priority

        row.append(td1,td2,td3,td4,td5)

       document.querySelector("tbody").append(row)
    })
}
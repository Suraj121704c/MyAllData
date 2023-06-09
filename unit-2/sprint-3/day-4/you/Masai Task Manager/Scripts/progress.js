// Write code for the Progress page here 



let newArr = JSON.parse(localStorage.getItem("priority-list")) || [];

let doneArr = JSON.parse(localStorage.getItem("done-list")) || []

displayP(newArr)

function displayP(newArr){
    document.querySelector("tbody").innerHTML=""
    newArr.forEach(function(elem,i){
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
        let td6 = document.createElement("td")
        td6.innerText="Add"
        td6.addEventListener("click",function(){
            doneArr.push(elem)
            localStorage.setItem("done-list",JSON.stringify(doneArr))
            deleteNow(elem,i)
         })

        row.append(td1,td2,td3,td4,td5,td6)

       document.querySelector("tbody").append(row)
    })
}
function deleteNow(elem,i){
    newArr.splice(i,1)
    displayP(newArr)
    localStorage.setItem("priority-list",JSON.stringify(newArr))
}
// Write code related to dashboard page here


let des = JSON.parse(localStorage.getItem("task-list")) || [];

let newArr = JSON.parse(localStorage.getItem("priority-list")) || [];

let filter = document.getElementById("filter")


displaydesc(des)

function displaydesc(des){
    document.querySelector("tbody").innerHTML=""

    des.forEach(function(elem,i){
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
           newArr.push(elem)
           localStorage.setItem("priority-list",JSON.stringify(newArr))
        })
        td6.addEventListener("click",function(){
            deleteFun(elem,i)
        })
         
        let cont = i+1
        document.querySelector("#task-count").innerText=cont

        row.append(td1,td2,td3,td4,td5,td6)

       document.querySelector("tbody").append(row)
    })  
}

function deleteFun(elem,i){
    des.splice(i,1)
    displaydesc(des)
    localStorage.setItem("task-list",JSON.stringify(des))
}

filter.addEventListener("change",function(el){
    if(filter.value=="Select Priority"){
        displaydesc(des)
       }else{
        let filteredData = des.filter(function(el){
            return el.priority===filter.value
          })
          displaydesc(filteredData);
       }
})
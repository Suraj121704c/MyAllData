// fill in javascript code here
document.querySelector("form").addEventListener("submit",mySub)
function mySub(){
    event.preventDefault()
    let name = document.querySelector("#name").value
    let id = document.querySelector("#docID").value
    let special = document.querySelector("#dept").value
    let experience = document.querySelector("#exp").value
    let email = document.querySelector("#email").value
    let mobile = document.querySelector("#mbl").value
    displayTable(name,id,special,experience,email,mobile)
}

function displayTable(name,id,special,experience,email,mobile){
    let row = document.createElement("tr")
    let td1 = document.createElement("td")
    td1.innerText=name
    let td2 = document.createElement("td")
    td2.innerText=id
    let td3 = document.createElement("td")
    td3.innerText=special
    let td4 = document.createElement("td")
    td4.innerText=experience
    let td5 = document.createElement("td")
    td5.innerText=email
    let td6 = document.createElement("td")
    td6.innerText=mobile

    let td7 = document.createElement("td")
    if(experience > 5){
        td7.innerText = "Senior"
    }else if(experience >= 2 && experience < 5){
        td7.innerText = "Junior"
    }else{
        td7.innerText = "Trainee"
    }
     
    let td8 = document.createElement("td")
    td8.innerText= "Delete"
    td8.setAttribute("id","delete")
    row.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(row)

    document.querySelector("#delete").addEventListener("click",del)

    function del(){
        td1.innerText=""
        td2.innerText=""
        td3.innerText=""
        td4.innerText=""
        td5.innerText=""
        td6.innerText=""
        td7.innerText=""
        td8.innerText=""
    }
}



document.querySelector("#LS").addEventListener("click",addLS)

document.querySelector("#SL").addEventListener("click",addSL)

let LS = JSON.parse(localStorage.getItem("username")) || []
function addLS(){
    event.preventDefault()
    let user = document.querySelector("#user").value
    let obj = {
        user,
    }
    LS.push(obj)
    localStorage.setItem("username",JSON.stringify(LS))
}
function addSL(){
    event.preventDefault()
    LS.forEach(function(elem,i){
      document.querySelector(".adding").innerText=elem.user
    })         
}
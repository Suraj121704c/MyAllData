let PhoneArr = JSON.parse(localStorage.getItem("mobile")) || []
document.querySelector("#ph").addEventListener("click",function(){
    event.preventDefault()
    let phone = document.querySelector("#phone").value
    let obj = {
        phone,
    }
    PhoneArr.push(obj)
    localStorage.setItem("mobile",JSON.stringify(PhoneArr))
})
document.querySelector("#hp").addEventListener("click",function(){
    event.preventDefault()
    PhoneArr.forEach(function(elem,i){
        document.querySelector(".adding2").innerText=elem.phone
      })
})
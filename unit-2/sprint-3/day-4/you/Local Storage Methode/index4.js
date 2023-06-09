let Data = JSON.parse(localStorage.getItem("students")) || []
document.querySelector("#dt").addEventListener("click",function(){
    event.preventDefault()
    let names = document.querySelector("#name").value
    let obj = {
        names,
    }
    Data.push(obj)
    localStorage.setItem("students",JSON.stringify(Data))
})
document.querySelector("#td").addEventListener("click",function(){
    event.preventDefault()
    for(let i = 0;i<Data.length;i++){
        console.log(Data[i].names)
    }
})
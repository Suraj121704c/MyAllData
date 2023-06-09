let hobArr = JSON.parse(localStorage.getItem("hobby")) || []
document.querySelector("#hb").addEventListener("click",function(){
    event.preventDefault()
    let hobby = document.querySelector("#Hobby").value
    let obj = {
        hobby,
    }
    hobArr.push(obj)
    localStorage.setItem("hobby",JSON.stringify(hobArr))
})
document.querySelector("#bh").addEventListener("click",function(){
    event.preventDefault()
    for(let i = 0;i<hobArr.length;i++){
        console.log(hobArr[i].hobby)
    }
})
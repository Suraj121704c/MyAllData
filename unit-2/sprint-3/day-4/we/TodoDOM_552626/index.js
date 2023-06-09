document.querySelector("form").addEventListener("submit",myTodo);

//we are needing this array to store the values of the obj cause only object is going to be rewritten on the other hand obj of array is not going to be 

let todoArr = JSON.parse(localStorage.getItem("todo")) || [];

 //to avoid data loss in the local storage with the refresh

let favArray = JSON.parse(localStorage.getItem("favourites")) || [];

function myTodo(){
    event.preventDefault()
    
    //preventing it from refresh 

    let task = document.querySelector("#task").value
    let priority = document.querySelector("#priority").value
    let taskObj = {
      task,
      priority
    }; 
    todoArr.push(taskObj)
    localStorage.setItem("todo",JSON.stringify(todoArr))
    displayTable(todoArr)
}

//we are using array from cause for each dont take obj as an input it only takes array , map 

function displayTable(todoArr) {

   document.querySelector("tbody").innerHTML=""

   //before making a new row we are making previous row empty

todoArr.forEach(function(elem,i){
   let row = document.createElement("tr")
   let td1 = document.createElement("td")
   td1.innerText=elem.task
   let td2 = document.createElement("td")
   td2.innerText=elem.priority
  
   if(elem.priority == "High" ){
      td2.style.backgroundColor = "red"
   }else{
      td2.style.backgroundColor = "green"
   }
   
   let td3 = document.createElement("td")
   td3.innerText= "Add as fav"

   //anonymus function means function with no name

   td3.addEventListener("click",function(){
         favArray.push(elem)
         localStorage.setItem("favourites",JSON.stringify(favArray))
   })
   td3.addEventListener("click",function(){
      deleteFav(elem,i)
   })
   row.append(td1,td2,td3)
  
   document.querySelector("tbody").append(row)
})
}
function deleteFav(elem,i){
   todoArr.splice(i,1);
   console.log(todoArr)
   displayTable(todoArr)
   localStorage.setItem("todo",JSON.stringify(todoArr))
 }

//call to display local storage data on the web page 

displayTable(todoArr)

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;
let paginationWrapper = document.getElementById("pagination-wrapper");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");

let loginUserButton = document.getElementById("login-user");
let getTodoButton = document.getElementById("fetch-todos");

let mainSection = document.getElementById("data-list-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let userId = +localStorage.getItem("userId") || null;
const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

loginUserButton.addEventListener("click",function(){
  let obj = {
    "username" : loginUserUsername.value,
    "password" : loginUserPassword.value
  }
  loginUser(obj)
})
async function loginUser(obj){
  try{
   let login_request = await fetch(userLoginURL,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(obj)
   })
   if(login_request.ok){
    notificationWrapper.innerHTML = `<h5 class = "notificaton info">
    hey ${obj.username}, welcome back!
    </h5>`
    let token =  await login_request.json()
    localStorage.setItem("access_token",token.accessToken)
   }else{
    alert("Please Enter the right details !!!")
   }
  }catch (error){
    alert("Bad Request !!!")
  }
}

async function fetchAllData(){
  try {
    let fetchTodoData = await fetch(`${baseServerURL}/todos?userId=${localStorage.getItem("userId")}`,{
      method: "GET",
      headers : {
        "Content-Type" : "application/json",
        Authorization : `Bearer ${localStorage.getItem("localAccessToken")}`
      }
    })
    if(fetchTodoData){
      let all_data = await fetchTodoData.json()
      getTodoButton.addEventListener("click",()=>{
        DisplayTodo(all_data)
      })
    }

  } catch (error) {
    alert("Bad Gateway !!!");
  }
}
function DisplayTodo(all_data){
  mainSection.innerHTML = ""
  let new_array = all_data.map((item)=>{
    if(item.completed){
      return `<label><input class = "todo-item-checkbox" data-id = "${item.id}" type= "checkbox" checked="">${item.title}</label>
      `
    }else{
      return `<label><input class = "todo-item-checkbox" data-id = "${item.id}" type= "checkbox" checked="">${item.title}</label>
      `
    }
  })
  mainSection.innerHTML = new_array.join(" ")
}
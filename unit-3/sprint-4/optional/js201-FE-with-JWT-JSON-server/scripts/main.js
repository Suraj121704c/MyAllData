const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
const recipeIngredientURL = `${baseServerURL}/recipeIngredients`;
const employeeURL = `${baseServerURL}/employees`;
const userRegisterURL = `${baseServerURL}/user/register`;
const userLoginURL = `${baseServerURL}/user/login`;

let mainSection = document.getElementById("data-list-wrapper");
let paginationWrapper = document.getElementById("pagination-wrapper");
let notificationWrapper = document.getElementById("notifications-wrapper");

let registerUserUsername = document.getElementById("register-user-username");
let registerUserFirstname = document.getElementById("register-user-firstname");
let registerUserLastname = document.getElementById("register-user-lastname");
let registerUserEmail = document.getElementById("register-user-email");
let registerUserPassowrd = document.getElementById("register-user-passowrd");
let registerUserAvatar = document.getElementById("register-user-avatar");
let registerUserLevel = document.getElementById("register-user-level");
let registerUserButton = document.getElementById("register-user");

let loginUserUsername = document.getElementById("login-user-username");
let loginUserPassword = document.getElementById("login-user-passowrd");
let loginUserButton = document.getElementById("login-user");

let getTodoButton = document.getElementById("fetch-todos");

let userAuthToken = null;
let userId = null;

const urlAllTodosOfUser = `${baseServerURL}/todos?userId=${userId}`;
const urlTodosBase = `${baseServerURL}/todos/`;

window.addEventListener("load", () => {});

getTodoButton.addEventListener("click", async function () {
  // console.log(userId);
  try {
    let res = await fetch(`${baseServerURL}/todos?userId=${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userAuthToken}`,
      },
    });
    let data = await res.json();
    renderData(data);
  } catch (error) {
    renderData(error);
  }
});

loginUserButton.addEventListener("click", async function () {
  let userName = loginUserUsername.value;
  let password = loginUserPassword.value;

  let userObj = {
    username: userName,
    password: password,
  };

  console.log(userObj);

  try {
    let res = await fetch(userLoginURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userObj),
    });

    let data = await res.json();

    userAuthToken = data.accessToken;
    userId = data.user.id;

    renderData(data);
  } catch (error) {
    renderData(JSON.stringify(error));
  }
});

registerUserButton.addEventListener("click", async function () {
  let userName = registerUserUsername.value;
  let firstName = registerUserFirstname.value;
  let lastName = registerUserLastname.value;
  let email = registerUserEmail.value;
  let password = registerUserPassowrd.value;
  let avatar = registerUserAvatar.value;
  let level = registerUserLevel.value;

  let userObject = {
    username: userName,
    password: password,
    email: email,
    firstname: firstName,
    lastname: lastName,
    avatar: avatar,
    userLevel: level,
  };

  try {
    let res = await fetch(userRegisterURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });

    let data = await res.json();
    renderData(JSON.stringify(data));
  } catch (error) {
    renderData(JSON.stringify(error));
  }
});

function renderData(obj) {
  mainSection.innerHTML = `
    <pre>
      ${JSON.stringify(obj, null, 2)}
    </pre>
  `;
}

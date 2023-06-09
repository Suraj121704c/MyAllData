document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Get toggle links
  const toggleRegisterLink = document.getElementById("toggle-register");
  const toggleLoginLink = document.getElementById("toggle-login");

  toggleRegisterLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  toggleLoginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  });

  document
    .getElementById("login-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      console.log(email, password);
      if (email == "eve.holt@reqres.in") {
        fetch(`https://reqres.in/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            alert("Admin Login Success...");
            window.location.href = "/admin.html";
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        fetch("https://backendchecking.onrender.com/users")
          .then((response) => response.json())
          .then((users) => {
            const user = users.find(
              (user) => user.email === email && user.password === password
            );
            if (user) {
              alert("User login successful");
              window.location.href = "/Doctors.html";
            } else {
              alert("User login failed");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });

  // Handle register form submission
  document
    .getElementById("register-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      fetch("https://backendchecking.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("User registered successfully");
          window.location.href = "/index.html"
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
});

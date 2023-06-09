import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { isAuth, login } = useContext(AuthContext);
  const [email, setEmail] = React.useState("eve.holt@reqres.in");
  const [password, setPassword] = React.useState("cityslicka");

  const handleLogin = () => {
    const user = {
      email,
      password,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        login(json.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isAuth) {
    return <Navigate to={"/products"} />;
  }

  return (
    <div style={{ color: "blue", border: "1px solid black" }}>
      <h1>Login Here</h1>
      <br />
      <input
        style={{ border: "1px solid black" }}
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        style={{ border: "1px solid black" }}
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button style={{ border: "1px solid black" }} onClick={handleLogin}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;

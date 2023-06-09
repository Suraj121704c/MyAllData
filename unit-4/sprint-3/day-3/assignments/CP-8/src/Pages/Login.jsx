import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isAuth, login } = useContext(AuthContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
      headers: {
        "Content-Type": "application/json",
      },
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
    return <Navigate to="/" />;
  }

  return (
    <div>
      <form className="auth_form" >
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="email"
          className="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          style={{ padding: "5px", margin: "10px", width: 200 }}
          type="password"
          className="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input className="submit" type="submit" onClick={handleLogin}/>
      </form>
    </div>
  );
}

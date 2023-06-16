import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    axios({
      method: "post",
      url: "http://localhost:5000/users/login",
      data: userDetails,
    })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        alert("Logged In  Successfully...")
        navigate("/blogs")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <h1>Login Here...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="text"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

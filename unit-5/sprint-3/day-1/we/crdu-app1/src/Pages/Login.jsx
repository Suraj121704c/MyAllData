import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { auth } = useSelector((store) => {
    return store.authReducer;
  });

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData)).then(() => {
      navigate(location.state,{replace : true});
    });
    setEmail("");
    setPassword("");
  };

  return (
    <DIV auth={auth}>
      <h2>User Login</h2>
      <h3>{auth ? "LOGIN SUCCESS !!!" : "LOGIN TO CONTINUE !!!"}</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  margin: 40px auto;
  border: 1px solid gray;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  input {
    width: 80%;
    height: 40px;
    font-size: Large;
  }
  button {
    width: 20%;
    height: 35px;
  }
  h3 {
    color: ${({ auth }) => (auth ? "green" : "red")};
  }
`;

export default Login;

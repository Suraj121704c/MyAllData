import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
} from "../Redux/auth/action";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const { auth } = useSelector((store) => {
    return store.auth;
  }, shallowEqual);
//   console.log(auth);
  const handleLogin = () => {
    let userData = { email, password };
    // console.log(userData);
    dispatch(loginRequestAction());
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        console.log(res.data.token)
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailureAction());
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const { loginUser, authState } = useContext(AuthContext);
  const [email,setEmail] = React.useState("eve.holt@reqres.in");
  const [password,setPassword] = React.useState("cityslicka");

  const handleLogin = (e) => {
    e.preventDefault()
    const values = {
      email,password
    };
    fetch("https://reqres.in/api/login",{
      method:"POST",
      body:JSON.stringify(values),
      headers:{
        "Content-Type" : "application/json"
      },
    })
    .then((res)=>res.json())
    .then((json)=>{
      loginUser(json.token)
    })
  }

  if(authState.isAuth){
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" onClick={handleLogin}/>
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;

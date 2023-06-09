import { Link, Navigate, json } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import React from "react";

// eve.holt@reqres.in
// cityslicka

function Login() {
  const { login, authState } = useContext(AuthContext);
  const [email, setEmail] = React.useState("eve.holt@reqres.in");
  const [password, setPassword] = React.useState("cityslicka");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email,
      password,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userDetails),
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

  if (authState.isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
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
          <button
            data-testid="form-submit"
            type="submit"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;

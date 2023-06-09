import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
// no need of Backend for this one to work...

function App() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
    useAuth0();
  return (
    <div className="App">
      <h1>Auth O</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login with PopUp</button>
        </li>

        <li>
          <button onClick={loginWithRedirect}>Login with Redirect</button>
        </li>

        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>

      <h3>User is {isAuthenticated ? "Logged In" : "Not Logged In"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;

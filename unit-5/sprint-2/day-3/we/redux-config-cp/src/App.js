import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import Login from "./Pages/Login";
import "./App.css"
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <div className="App">
      {/* add Todo component here */}
      {/* <h1>{process.env.REACT_APP_JSON_SERVER_PORT}</h1> */}
      {/* <Counter />
      <Todo /> */}
      {/* <Login /> */}
      <MainRoutes />
    </div>
  );
}

export default App;

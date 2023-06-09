import "./App.css";
import Todo from "./Components/Todo";

function App() {
  console.log(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`);
  return (
    <div className="App">
      {/* Add the Todo component here */}
      <Todo />
    </div>
  );
}

export default App;

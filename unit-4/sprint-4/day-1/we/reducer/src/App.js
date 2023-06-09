import "./App.css";
import { CounterState } from "./Component/Counter";
import CounterReducer from "./Component/CounterReducer";
import Users from "./Component/Users";
import TodoApp from "./Component/TodoApp";

function App() {
  return (
    <div className="App">
      {/* <h1>COUNTER</h1> */}
      {/* <CounterState /> */}
      <CounterReducer />
      {/* <Users /> */}
      <TodoApp />
    </div>
  );
}

export default App;

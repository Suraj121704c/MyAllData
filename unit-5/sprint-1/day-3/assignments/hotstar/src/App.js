import "./App.css";
import TodoApp from "./Todo/Todo";
import Debounce from "./useDebounce/Debounce";
import Throttler from "./Throttler/Throttler";

function App() {
  return (
    <div className="App">
      <Throttler />
      <Debounce />
      <TodoApp />
    </div>
  );
}

export default App;

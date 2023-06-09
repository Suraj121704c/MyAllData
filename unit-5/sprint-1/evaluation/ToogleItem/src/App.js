import "./App.css";
import { useToggleItems } from "./hooks/useToggleItems";

function App() {
  const [value, fun] = useToggleItems(["A", "B", "C"], 1);
  return (
    <div className="App">
      <h1>Custom Hooks</h1>
      <h1 data-testid="status">{value}</h1>
      <button onClick={fun} data-testid="toggle">
        toogle
      </button>
    </div>
  );
}

export default App;

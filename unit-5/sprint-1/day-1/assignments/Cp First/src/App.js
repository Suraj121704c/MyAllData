import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <div data-testid="counter">{/* counter component */}
      <Counter />
      </div>
    </div>
  );
}

export default App;

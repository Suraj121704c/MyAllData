import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className="App">
      <Button size={"large"} color={"teal"}>
        Click Me
      </Button>
      <Button size={"medium"} color={"blue"}>
        Click
      </Button>
      <Counter />
    </div>
  );
}

export default App;

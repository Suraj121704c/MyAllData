import "./App.css";
import { Products } from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Products />
      <p>API USED - {process.env.REACT_APP_PRODUCTION_URL}</p>
    </div>
  );
}

export default App;

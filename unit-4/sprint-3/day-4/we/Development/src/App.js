import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>{process.env.REACT_APP_DEVELOPMENT_URL}</h1>
      <AllRoutes />
    </div>
  );
}

export default App;

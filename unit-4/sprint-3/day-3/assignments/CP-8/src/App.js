import "./App.css";
import { Navbar } from "./Routes/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

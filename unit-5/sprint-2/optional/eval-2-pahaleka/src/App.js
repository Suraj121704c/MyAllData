import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="data-app">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

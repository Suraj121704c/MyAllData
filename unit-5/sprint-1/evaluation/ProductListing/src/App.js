import "./App.css";
import { AddProject } from "./component/AddProject";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App">
      {/* Do not change anything here */}
      <Navbar />
      <AddProject />
    </div>
  );
}

export default App;

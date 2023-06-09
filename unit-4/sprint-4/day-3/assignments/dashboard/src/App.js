import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/Card";
import Fotter from "./Components/Fotter"

function App() {
  return <div className="App">
     <Navbar />
     <Hero />
     <Cards />
     <Fotter />
  </div>;
}

export default App;

import "./App.css";
import Fotter from "./Fotter";
import Welcome from "./HeroSection";
import Navbar from "./Navbar";
import OfferSection from "./OfferSection";
import Teacher from "./Teacher";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <OfferSection />
      <Teacher />
      <Fotter />
    </div>
  );
}

export default App;

import { Routes,Route,Link } from "react-router-dom"
import './App.css';
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";

//There are 2 props in Route component one is path other one is elementProp(path,element)
//Link takes one prope (to)

function App() {
  return (
    <div className="App">
      {/* in react it doesn't reload the Page */}
      {/* it just updates the url not reloading */}
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        alignContent:"center"
        }}>
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
      </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Left from './Components/Left';
import { RIght } from './Components/RIght';

function App() {
  return (
    <div className="App" style={{width : "90%" , height : "90%" , margin : "50px auto" , display : "flex" , gap : "10"}}>
       <Left />
       <RIght />
    </div>
  );
}

export default App;

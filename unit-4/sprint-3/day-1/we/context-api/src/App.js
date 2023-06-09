import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';
import Button from './Components/Button';

function App() {
  const {theme,toogleTheme} = useContext(ThemeContext)
  return (
    <div 
    className="App"
    style={{
      background : theme === "dark" ? "black" : "white",
      color: theme === "dark" ? "white" : "black",
      padding : "10px",
    }}
    >
      <Navbar />
      <Main />
      <Button onClick={toogleTheme} btnText={"CHANGE THEME"}/>
    </div>
  );
} 

export default App;

import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Button = ({onClick,btnText}) => {
const {theme} = useContext(ThemeContext);
return (
    <button 
    style={{
        background:theme === "dark" ? "black" : "white",
        color : theme === "dark" ? "white" : "black",
        padding : "5px",
        cursor : "pointer",
        border : theme === "dark" ? "1px solid white" : "1px solid black",
        margin:"10px"
    }}
    onClick={onClick}
    >
        {btnText}
    </button>
)

}

export default Button
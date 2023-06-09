import { useContext } from "react"
import { CartContext } from "../Context/CartContext";

export const Card = () => {
    const {handleCartUpdate} = useContext(CartContext)
    return (
        <div>
           <button onClick={() => {handleCartUpdate(1)}}>Buy Now</button> 
        </div>
    )
}
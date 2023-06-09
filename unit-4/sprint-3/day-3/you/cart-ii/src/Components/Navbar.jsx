import React from 'react';
import "../Styles/Navbar.css"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                My Shopping
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
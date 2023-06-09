import './App.css';
import CartDisplay from './Component/Cart';
import Button from './Component/Button.jsx';
import React from 'react';


let cart = [{
  id : 1,
  name : "Noodles",
  price : "₹ 30",
},
{
  id : 2,
  name : "Biriyani",
  price : "₹ 90",
},
{
  id : 3,
  name : "Chips",
  price : "₹ 10",
},
]

let CartData = cart.map((cart=>
<div style={{display:"flex" , justifyContent:"space-between"}} key = {Math.random()}>
  <CartDisplay  
  key = {Math.random()}
   name = {cart.name} 
   price = {cart.price} 
   />
   <Button />
   </div>))

function App() {

  return (
    <div className="App" style={{backgroundColor : "aliceblue" , color:"blue" ,margin:"0px",padding:"0px" }}>
      <h1>Cart</h1>
     <>
     {CartData}
     </>   
     <h1>Total = ₹ 290</h1>
    </div>
  );
}

export default App;

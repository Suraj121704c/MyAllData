import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
import React from "react";

function App() {
  const [count,setCount] = React.useState(1)

  const handleQty = (val) => {
      setCount(count + val)
  }
  
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {
          data.map((data)=>{
            return (
            <Product key={data.id} name={data.name} price={data.price} quantity={count}  id={data.id}
            handleQty={handleQty}
            />
            )
          })
        }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        <p>total : {
          data.reduce((acc,item)=>(
            acc+=item.price*item.quantity
          ),0)
          }</p>
      </h1>
    </div>
  );
}

export default App;

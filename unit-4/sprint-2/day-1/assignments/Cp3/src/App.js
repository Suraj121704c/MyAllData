import "./App.css";
import data from "./db.json";
import Product from "./components/Product";
import React from "react";

function App() {
  const [cardData, setCartData] = React.useState(data);

  const handleQty = (id, val) => {
    const newQuantity = cardData.map((el) => {
      return el.id === id
        ? {
            ...el,
            quantity: el.quantity + val,
          }
        : el;
    });
    setCartData(newQuantity);
  };

  // console.log(data.quantity)

  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
        {cardData.map((data) => {
          return (
            <Product
              name={data.name}
              price={data.price}
              quantity={data.quantity}
              id={data.id}
              handleQty={handleQty}
            />
          );
        })}
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {cardData.reduce((acc, el) => {
          return acc + el.price * el.quantity;
        }, 0)}
      </h1>
    </div>
  );
}

export default App; 

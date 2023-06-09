import { useDispatch } from "react-redux";
import { getCartProducts } from "../Redux/CartReducer/action";
import { useEffect } from "react";

export const CartPage = () => {
  const cart = ((state)=>{
    console.log(state.cartReducer)
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartProducts);
  }, []);

  return <div data-testid="cart-list">

  </div>;
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Redux/ProductReducer/action";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.productReducer.products;
  });
  useEffect(() => {
    dispatch(getProducts);
  }, []);

  return (
    <div data-testid="product-list">
      {/* Map through products with ProductCard component  */}
      {products.length > 0 &&
        products.map((el) => (
          <ProductCard
            key={el.id}
            title={el.title}
            image={el.images[0]}
            price={el.price}
            brand={el.brand}
            discount={el.discountPercentage}
          />
        ))}
    </div>
  );
};

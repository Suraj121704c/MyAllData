import React, { useEffect } from "react";
import { getProducts } from "../api";
import { AxiosResponse } from "axios";

type Card = {
  name: string;
  price: string;
  brand: string;
  image: string;
  like: number;
  dislike: number;
  id?: number;
};

const ProductList = () => {
  const [products, setProducts] = React.useState<Card[]>([]);

  useEffect(() => {
    getProducts().then((res: AxiosResponse) => {
      setProducts(res.data);
    });
  }, []);

  console.log(products);

  return (
    <div className={`product-list`}>
      {/* Add all product cards here in grid format  */}
    </div>
  );
};

export default ProductList;

import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import { addProduct } from "../api";

interface myObj {
  name: string;
  brand: string;
  price: number;
  image: string;
  like: number;
  dislike: number;
}

const obj: myObj = {
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
};

export const AddProduct = () => {
  const [val, setVal] = useState<myObj>(obj);
  const [pro, setPro] = useState<myObj[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPro([...pro, val]);
    addProduct(pro);
  };

  return (
    <div>
      <Navbar pagename={"Add Product Page"}/>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Product Name"
          className="product-name"
          name="name"
          value={val.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          value={val.image}
          name="image"
          placeholder="Product Image"
          className="product-image"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          placeholder="Product Price"
          name="price"
          className="product-price"
          value={val.price}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Product Brand"
          className="product-brand"
          name="brand"
          value={val.brand}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className="submit-form">
          Add Product
        </button>
      </form>
    </div>
  );
};

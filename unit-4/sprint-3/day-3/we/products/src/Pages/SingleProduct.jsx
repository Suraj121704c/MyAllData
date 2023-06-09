import React from "react";

import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`http://localhost:3001/products/${id}`).then((res) =>
    res.json()
  );
};

export const SingleProduct = () => {
  const [data, setData] = React.useState([]);
  let params = useParams();

  const fetchAndUpdate = () => {
    getData(params?.products_id)
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  const handleClick = () => {
    console.log(data)
    fetch("http://localhost:3001/Cart",{
      method : "POST",
      body : JSON.stringify(data),
      headers : {
        'Content-Type' : "application/json"
      }
    }).then((res)=>res.json())
    .then((data)=>console.log(data))
  }

  return (
    <>
      <h1>SingleProduct Page</h1>
      <div>
        <img src={data?.image} alt={data?.title} />
        <h1>{data?.title}</h1>
        <h1>{data?.category}</h1>
        <p>{data?.description}</p>
        <h1>{data?.price}</h1>
        <button onClick={handleClick}>add-to-cart</button>
      </div>
    </>
  );
};

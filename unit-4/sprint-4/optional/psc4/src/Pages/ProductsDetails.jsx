import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const getData = (id) => {
  // return fetch(`http://localhost:3001/products/${id}`).then((res) =>
  //   res.json()
  // );
  return axios.get(`http://localhost:3001/products/${id}`)
};

const ProductsDetails = () => {
  let params = useParams();
  const [data, setData] = React.useState([]);

  const fetchAndUpdate = () => {
    getData(params?.prouducts_id)
      .then((data) => {
        setData(data.data);
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return (
    <div>
      <h1>SingleProduct Page</h1>
      <div>
        <img src={data?.image} alt={data?.title} />
        <h1>{data?.title}</h1>
        <h1>{data?.category}</h1>
        <p>{data?.description}</p>
        <h1>{data?.price}</h1>
      </div>
    </div>
  );
};

export default ProductsDetails;

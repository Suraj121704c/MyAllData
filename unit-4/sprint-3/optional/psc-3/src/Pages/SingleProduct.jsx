import React from "react";
// for accessing params we have to import this
import { useParams } from "react-router-dom";

const getData = (id) => {
  return fetch(`http://localhost:3001/products/${id}`).then((res) =>
    res.json()
  );
};

const SingleProduct = () => {
  const [data, setData] = React.useState([]);
  let params = useParams();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  console.log(params);

  const fetchAndUpdate = () => {
    setLoading(true)
    getData(params?.prouducts_id)
      .then((data) => {
        setData(data);
        setLoading(false)
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      });
  };

  // console.log(data)

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return loading ? (
    <h1>Loding...</h1>
  ) : error ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
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

export default SingleProduct;

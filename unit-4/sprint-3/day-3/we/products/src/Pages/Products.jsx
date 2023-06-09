import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const Products = () => {
  const [data, setData] = React.useState([]);
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [q, setq] = React.useState("");
  const quantam = React.useRef(null);
  const [notFound, setNotFound] = React.useState(false);

  const fetchAndUpdate = async (q) => {
    try {
      setLoading(true);
      const task = await getData(`http://localhost:3001/products?q=${q}`);
      // console.log(task);
      setData(task);
      setLoading(false);
      setErr(false);
    } catch (error) {
      setErr(true);
      setNotFound(true);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAndUpdate(q);
  }, [q]);

  React.useEffect(() => {
    setSearchParams({ q: q });
  }, [q]);

  if (data.length === 0) {
    return (
      <h1>Product Not Found .....</h1>
    )
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>Products</h1>
      <input type="search" placeholder="search here" ref={quantam} />
      <br />
      <br />
      <button onClick={() => setq(quantam.current.value)}>search-here</button>
      <br />
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3 ,1fr)" }}>
        {data.map((data) => (
          <div key={data.id}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={data.image}
              alt={data.title}
            />
            <h1>Title : {data.title}</h1>
            <Link to={`/products/${data.id}`}>MoreDetails</Link>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Products;

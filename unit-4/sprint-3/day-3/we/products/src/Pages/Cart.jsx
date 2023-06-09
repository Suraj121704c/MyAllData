import React from "react";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

export const Cart = () => {
  const [data, setData] = React.useState([]);
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const fetchAndUpdate = async () => {
    try {
      setLoading(true);
      const task = await getData(`http://localhost:3001/Cart`);
      // console.log(task);
      setData(task);
      setLoading(false);
      setErr(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>Carts</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3 ,1fr)" }}>
        {data.map((data) => (
          <div key={data.id}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={data.image}
              alt={data.title}
            />
            <h1>Title : {data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

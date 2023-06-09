import React from "react";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

export default function AllProducts() {
  const [products, setProducts] = React.useState([]);

  const fetchAndUpdate = async () => {
    try {
      let data = await getData(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchAndUpdate();
  }, []);

  return (
    <div>
      <h2>All Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5 ,1fr)",
        }}
        className="products-wrapper"
      >
        {
          /* Map the below div against product data */
          products?.data?.map((product) => (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                margin: "20px",
              }}
              key={product.id}
            >
              <h3 className="name">{product.title}</h3>
              <div className="brand">{product.brand}</div>
              <div className="price">{product.price}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const getCurrentPageUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
};

const getUrl = (url, sort, orderBy) => {
  if (sort && orderBy) {
    return (url = `${url}&_sort=${sort}&_order=${orderBy}`);
  }
  return url;
};

const Products = () => {
  const [products, setProducts] = React.useState([]);

  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = React.useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );

  //for Sorting Purpose
  const [orderBy, setOrderBy] = React.useState("");
  const sort = "price";
  // State for the last Page
  const [total, settotal] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  let limit = 3;

  React.useEffect(() => {
    setLoading(true);
    let apiUrl = getUrl(
      `http://localhost:3001/products/?_page=${page}&_limit=${limit}`,
      sort,
      orderBy
    );
    fetch(apiUrl)
      .then((res) => {
        const x = res.headers.get("x-total-count");

        settotal(x);

        return res.json();
      })
      .then((json) => {
        setProducts(json);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err);
      });
  }, [page, orderBy]);

  React.useEffect(() => {
    let paramObj = { page };
    if (orderBy) {
      paramObj.orderBy = orderBy;
    }
    setSearchParams(paramObj);
  }, [page, orderBy]);

  return loading ? (
    <h1>Loding...</h1>
  ) : error ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>Products Page</h1>

      <button onClick={() => setOrderBy("asc")}>
        Order By Price - Ascending Order
      </button>&nbsp;&nbsp;
      <button onClick={() => setOrderBy("")}>Reset</button>&nbsp;&nbsp;
      <button onClick={() => setOrderBy("desc")}>
        Order By Price - Descending Order
      </button>
      <br />
      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3 ,1fr)" }}>
        {products?.map((product) => (
          <div key={product.id}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={product.image}
              alt={product.title}
            />
            <h1>Title : {product.title}</h1>
            <h1>Price : {product.price}</h1>
            <p>Category : {product.category}</p>
            {/* //Initilisation of params */}
            <Link to={`/products/${product.id}`}>MoreDetails</Link>
          </div>
        ))}
      </div>
      {/* PageInition */}
      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>&nbsp;&nbsp;
        <button disabled>{page}</button>&nbsp;&nbsp;
        <button
          disabled={Math.ceil(total / limit) === page}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Products;

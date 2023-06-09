import React, { useState } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const intialState = {
  isLoading: true,
  isError: false,
  data: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "GET_USER_REQUEST": {
      return {
        ...state,
        isLoading: true,
        isError: false,
        data: null,
      };
    }
    case "GET_USER_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    }
    case "GET_USER_FAILURE": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
}

const Product = () => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [total, setTotal] = useState();
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);
  let limit = 6;
  let [searchParams, setSearchParams] = useSearchParams();
  const quantam = React.useRef(null);
  const [q, setq] = React.useState("");

  const getUser = (dispatch, page, order,q) => {
    dispatch({ type: "GET_USER_REQUEST" });
    fetch(
      `http://localhost:3001/Products/?q=${q}&_page=${page}&_limit=${limit}&_sort=price&_order=${order}`
    )
      .then((res) => {
        const x = res.headers.get("x-total-count");
        setTotal(x);
        return res.json();
      })
      .then((res) => {
        console.log(`payload`, res);
        dispatch({ type: "GET_USER_SUCCESS", payload: res });
      })
      .catch((err) => {
        dispatch({ type: "GET_USER_FAILURE" });
      });
  };

  console.log(total);

  useEffect(() => {
    getUser(dispatch, page, order,q);
  }, [page, order,q]);

  const { data } = state;

  useEffect(() => {
    setSearchParams({ page: page, order: order,q:q });
  }, [page, order,q]);

  

  return state.isLoading ? (
    <h1>Loding...</h1>
  ) : state.isError ? (
    <h1>Something went Wrong Please Refresh</h1>
  ) : (
    <div>
      <h1>Products Page</h1>
      <input type="search" placeholder="search here" ref={quantam} />
      <br />
      <br />
      <button onClick={() => setq(quantam.current.value)}>search-here</button>
      <br />
      <br />
      <button onClick={() => setOrder("asc")}>
        Order By Price - Ascending Order
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setOrder("")}>Reset</button>&nbsp;&nbsp;
      <button onClick={() => setOrder("desc")}>
        Order By Price - Descending Order
      </button>
      <br />
      <br />
      {data.length === 0 ? (<h1 style={{color:"red"}}>Search Carefully</h1>) : (<div style={{ display: "grid", gridTemplateColumns: "repeat(3 ,1fr)" }}>
        {data?.map((product) => (
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
      )}
      
      {/* Pageinitaion */}
      <div style={{ marginTop: "20px" }}>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        &nbsp;&nbsp;
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

export default Product;

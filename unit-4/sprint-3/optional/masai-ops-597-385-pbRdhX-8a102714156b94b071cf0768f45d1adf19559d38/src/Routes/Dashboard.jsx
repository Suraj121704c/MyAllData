import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function Dashboard() {
  const { logout, authState } = useContext(AuthContext);
  const [products, setProducts] = React.useState([]);
  let [serachParams, setSearchParams] = useSearchParams();
  const [order, setOrderBy] = React.useState("asc");
  const [total, setTotal] = React.useState();
  const [load, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [err, setErr] = React.useState(false);

  const fetchAndUpdateData = async (page, order) => {
    setLoading(true);
    try {
      let res = await getData(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=${order}&sort=price`
      );
      const { data, totalPages } = res;
      setProducts(data);
      setTotal(totalPages);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setErr(true);
    }
  };

  React.useEffect(() => {
    fetchAndUpdateData(page, order);
  }, [page, order]);

  // Setting Search Param
  React.useEffect(()=>{
     setSearchParams({page:page,order:order})
  },[page,order])

  if (!authState.isAuth) {
    return <Navigate to={"/login"} />;
  }

  if (load) {
    return <Loader />;
  }

  const handlePage = (val) => {
      const chaneged = page + val
      setPage(chaneged)
  }

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logout}>
          Logout
        </button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <br />
      <div data-testid="sort-container">
        <button data-testid="low-to-high" 
        onClick={() => setOrderBy("asc")}
        disabled={order==="asc"}
        >
          Sort low to high
        </button>

        <button data-testid="high-to-low" 
        onClick={() => setOrderBy("desc")}
        disabled={order==="desc"}
        >
          Sort high to low
        </button>
      </div>

      <br />
      <br />

      <div>      
      <Pagination page={page} handlePage={handlePage} totalPages={total}/>
        <br />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        { load ? (<Loader />) : err ? (<h1>Something Went Wrong....</h1>) : (
        <ProductList products={products}/>
        ) }
      </div>
    </div>
  );
}

export default Dashboard;

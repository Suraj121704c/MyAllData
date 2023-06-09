import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Pagination from "../Components/Pagination";

function Dashboard() {
  const {logout,isAuth,token} = useContext(AuthContext)

  if(!isAuth){
    return <Navigate to="/login" />
  }


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button 
        data-testid="logout-btn"
        onClick={logout}
        >Logout</button>
        <p>
          Token: 
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <Pagination />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;

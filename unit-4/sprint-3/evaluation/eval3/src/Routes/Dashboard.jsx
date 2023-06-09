import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";
import RestaurantTable from "../Components/RestaurantTable";
import Pagination from "../Components/Pagination";

const getData = (url) => {
  return fetch(url).then((res)=>res.json())
}

function Dashboard() {
  const {logoutUser,authState} = useContext(AuthContext);
  const [data,setData] = React.useState([]);
  const [pages,setPages] = React.useState(1)
  const [totalPage,setTotalPage] = React.useState();

  const fetchAndUpdate = async (pages) => {
    try {
      let res = await getData(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?pages=${pages}`
      )
      const {data,totalPages} = res;
      setData(data);
      setTotalPage(totalPages)   
    } catch (err) {
      console.log(err)
    }
  }
 
  React.useEffect(()=>{
    fetchAndUpdate(pages)
  },[pages])



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data}/>
      </div>
      <div data-testid="pagination-container">
        {<Pagination />}
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from "./Pagination";
import RestaurantCard from "./RestaurantCard";

const getData = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error)
  }
}
function Restaurants() {
   const [load,setLoad] = React.useState(false)
   const [page,setPage] = React.useState(1)
   const [totalPage,setTotalPage] = React.useState();
   const [prod,setProd] = React.useState([]);

   React.useEffect(()=>{
    fetch(page); 
   },[page])
   const fetch = async (page) => {
      setLoad(true);
      try {
        let res = await getData(
          `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`
        )
        const {data} = res
        const {totalPages} = res
        setTotalPage(totalPages)
        setProd(data)
        setLoad(false)
      } catch (error) {
        console.log(error)
      }
   }
   if(load) {
    return <LoadingIndicator />
   }
  function onChange(val) {
    setPage(val)
  }

  return (
    <div style={{textAlign:"center"}}>
      <h1  data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {
          prod.map((item)=>{
            return (
              <RestaurantCard 
              key = {item.id}
              name = {item.name}
              image = {item.image}
              type = {item.type}
              rating = {item.rating}
              price_starts_from = {item.price_starts_from}
              number_of_votes = {item.number_of_votes}
              />
            )
          })
        }
      </div>
      <div>
        <Pagination  onChange={onChange} total={totalPage} current={page}/>
      </div>
    </div>
  );
}

export default Restaurants;

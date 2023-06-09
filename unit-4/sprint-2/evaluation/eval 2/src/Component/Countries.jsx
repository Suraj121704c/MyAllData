import LoadingIndicator from "./LoadingIndicator";
import React from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

const getData = async (url) => {
  try{
    const res = await fetch(url)
    const data = await res.json()
    return data
  }catch(err){
    console.log(err)
  }
}

function Countries() { 
  const [load,setLoading] = React.useState(false)
  const [page,setPage] = React.useState(1)
  const [totalPage,setTotalPage] = React.useState(0)
  const [country,setCountry] = React.useState([])

  React.useEffect(()=>{
    fetchAndUpdate(page)
  },[page])
  
  const fetchAndUpdate = async (page) => {
    setLoading(true)
    try {
      let res = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
      const {data} = res
      const {totalPages} = res
      setTotalPage(totalPages)
      setCountry(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handlePage = (val) => {
    const changeBy = page + val
    setPage(changeBy)
  }

  // console.log(country)
  // console.log(totalPage)

  if(load){
  return <LoadingIndicator />;
  }

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {
          country.map((item)=>(
            <CountriesCard 
            key={item.id}
            country={item.country}
            population={item.population}
            />
          ))
        }
      </div>
      <div>
        <Pagination current = {page} onChange={handlePage} total={totalPage}/>
      </div>
    </div>
  );
}

export default Countries;

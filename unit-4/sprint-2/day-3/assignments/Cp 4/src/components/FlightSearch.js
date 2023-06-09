import React from "react";
import SearchResults from "./SearchResults";

const initState = {
  source : "",
  destination : ""
}

export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  return fetch(`https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`).then((res)=>res.json())
};

function FlightSearch() {
  const [data,setData] = React.useState([])
  const [err,setErr] = React.useState(false)
  const [formState,setFormState] = React.useState(initState)

  // on page load fetch the data (useEffect)
  React.useEffect(()=>{
     fetchData().then((flight)=>{
      // console.log(data)
      setData(flight)
     }).catch((err)=>{
       setErr(true)
     })
  },[])

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormState({
      ...formState,
      [name] : value
    })
  }

 

  const handleSearch = () => {
    // filter the data based on source and destination
    console.log(formState)
  };

  if(err){
    return <h1>Something went wrong... Please refresh</h1>
  }

  const {source,destination} = formState;

  return (
    <div style={{textAlign:"center"}}>

      <div></div>

      <div>

        <section>

          <h4>Flight Search</h4>

          <br />

          <input 
          name="source"
          value={source}
          data-testid="source-input" placeholder="Source" 
          onChange={handleChange}
          />

          <br /> 
          <br />

          <input 
          name="destination"
          value={destination}
          onChange={handleChange}
          data-testid="destination-input" placeholder="Destination" 
          />
          <br /> 
          <br />

          <button 
          onClick={handleSearch}
          data-testid="search-button"
          >Search
          </button>

        </section>

      </div>

      {
        // import searchResults here 
      }
      

      <div data-testid="no-flights" className="">
            No Flights Found
      </div>


    </div>
  );
}

export default FlightSearch;

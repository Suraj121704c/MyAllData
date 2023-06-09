import React from 'react';
import './App.css';
import ProductFrom from './Components/ProductsForm.jsx';
import ProductItem from './Components/Products.jsx'
import PageInitaion from './Components/Pageinitaion.jsx';

// 1. Create form which can take title price and imageUrl from user
// 2. Show Products on the UI
// 3. Create Page Initiation

const getData = async (url) => {
  // return fetch(url)
  // .then((res)=> {
  //   console.log(res.headers.get(`X-Total-Count`))
  //   return res.json()
  // })
  try {
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)
    return {
      totalCount : +res.headers.get('X-Total-Count'),
      data,
    }
  } catch (error) {
    console.log(error)
  }
}

export default function App() {
  const [loading,setLoding] = React.useState(false)
  const [error,setError] = React.useState(false)
  const [products,setProducts]  = React.useState([])
  const [page,setPage] = React.useState(1);
  const [totalCount,setTotalCount] = React.useState(0)

  const fetchAndUpdateData = async (page) => {
    setLoding(true)
    try {
      let res = await getData(`http://localhost:3001/products?_page=${page}&_limit=3`) 
      // setProducts(data);
      const {totalCount , data} = res;
      setProducts(data);
      setTotalCount(totalCount)
      setLoding(false)
    } catch (error) {
      setError(true)
      setLoding(false)
    } 
  }

  React.useEffect(()=>{
    //Takes one call and one dependency array
    fetchAndUpdateData(page)
  },[page])
  //by passing page it becomes now a updater function
 
  const handleFormSubmit = (formData) => {
    setLoding(true)
    // console.log(e)
    fetch("http://localhost:3001/products",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res)=>res.json())
    .then(()=>{
      setLoding(false)
      fetchAndUpdateData(page)
    })
    .catch((err)=>{
      // console.log(err)
      setError(true)
      setLoding(false)
    })  
  }

  // console.log(formState)
  // console.log(products)
  //Initial State
  
  const handlePageChange = (val) => {
    const changeBy  = page + val
    setPage(changeBy);
  }


  return (
    loading ? (
      <h1>Loading...</h1>
    ) : error ? (
      <h1>Something Went Wrong... Please Refresh</h1>
    ) :
    <div className="App"> 
    <h1 style={{color:"blue"}}>Create Product</h1>
       <ProductFrom handleFormSubmit={handleFormSubmit}/>
       <br />
       <br />
       <br />
       <div id="products-display">
        <h1 style={{color:"red"}}>Products</h1>      
         <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
          {products.map((prod)=>{
           return <ProductItem key={prod.id} {...prod} />
          })}
         </div>
       </div>
      <PageInitaion page={page} handlePageChange={handlePageChange} totalCount={totalCount}/>
    </div>
  );
}



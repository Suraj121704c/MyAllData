import React from 'react'
// for accessing params we have to import this
import { useParams } from 'react-router-dom';

const getData = (id) => {
  return fetch(`http://localhost:3001/products/${id}`).then((res)=>res.json())
}

const SingleProduct = () => {
  const [data,setData] = React.useState([]);
  let params = useParams()

  console.log(params)

  const fetchAndUpdate = () => {
    getData(params?.products_id)
    .then((data)=>setData(data))
    .catch((error)=>console.log(error))
  }

  // console.log(data)

  React.useEffect(()=>{
   fetchAndUpdate();
  },[])
  
  return (
    <div>
      <h1>SingleProduct Page</h1>
      <div>
       <img src={data?.image} alt={data?.title}/>
       <h1>{data?.title}</h1>
       <h1>{data?.category}</h1>
       <p>{data?.description}</p>
       <h1>{data?.price}</h1>
      </div>
    </div>
  )
}

export default SingleProduct

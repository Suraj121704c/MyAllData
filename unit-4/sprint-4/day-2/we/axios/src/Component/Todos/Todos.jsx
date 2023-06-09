import axios from "axios";
import React from "react";
import { useEffect  } from "react";

const getData = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts`,{
        // Best way to use params in Axios Api fetching
        params : {
            userId:1,
        }
    })
}

function Todos () {
   const [data,setData] = React.useState([]);
   const [loading,setLaoding] = React.useState(false)
   const [error,setError] = React.useState(false)

   useEffect(() => {
    setLaoding(true)
     getData().then((res)=>{
        setData(res.data);
        setLaoding(false)
     }).catch((error)=>{
        setError(true)
        setLaoding(false);
     })
   }, [])
   
   console.log(data)

   return (
    <>
    Hello
    </>
   )

}
export default Todos
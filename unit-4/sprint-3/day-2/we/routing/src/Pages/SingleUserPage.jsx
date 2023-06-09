import React, {useEffect} from "react";
import { useParams } from "react-router-dom";     

const getData = (id) => {
    return fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>res.json())
}
   
function SingleUserPage () {
    const [data,setData] = React.useState({})
    const [loading,setLoading] = React.useState(false)
    const [err,setErr] = React.useState(false)
    let params = useParams()
    
    console.log(params)

     const  fetchAndUpdateData = () => {
        setLoading(true)
        getData(params?.user_id)
        .then((data) => setData(data))
        .catch((err) => setErr(true))
        .finally(() => setLoading(false))
    }

    useEffect(()=>{
        fetchAndUpdateData();
    },[])

    // When the data accessing start breaking use optional chaining 

    return (
        loading ? <h1>Loading...</h1> : err ? <h1>Something Went Wrong.....</h1> : (
    <div style={{margin :"25px" , border : "1px solid black"}}>
        <img src={data?.data?.avatar} alt={data?.data?.first_name}/>
        <h5>
            Name : {data?.data?.first_name}{" "}{data?.data?.last_name}
        </h5>
       <p>Email : {data?.data?.email}</p>
       <hr />
       <p>{data?.support?.url}</p>
       <p>{data?.support?.text}</p>
    </div>
    )
    )
}
export default SingleUserPage
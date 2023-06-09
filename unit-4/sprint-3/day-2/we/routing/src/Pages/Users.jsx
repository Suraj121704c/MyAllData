import { useState,useEffect } from "react"
import { Link , useNavigate ,useSearchParams } from "react-router-dom"
// import { NavLink } from "react-router-dom"

const getData = (page) => {
    return fetch(`https://reqres.in/api/users?page=${page}`)
    .then((res)=>res.json())
} 

const getCurrentPage = (val = 1) => {  
    let pageNumber = Number(val)
    if(typeof pageNumber !== "number"){
        pageNumber = 1
    }
    if(pageNumber <= 0) {
        pageNumber = 1
    }
    if(!pageNumber){
        pageNumber = 1
    }
    return pageNumber
;}

export default function Users () {
    //as soon as customer any of the card link it should move to the different page 

    const [loading,setLoading] = useState(false)
    const [data,setData] = useState([])
    const [err,setErr] = useState(false)
    // const isAuth = false; //this will come from context API
    const navigate = useNavigate()
    
    let [serachParams,setSearchParams] = useSearchParams()
    const initialPage = getCurrentPage(serachParams.get("page"))
    const [page,setPage] = useState(initialPage) 

    const  fetchAndUpdateData = (page) => {
        setLoading(true)
        getData(page)
        .then((data)=>setData(data))
        .catch((err)=>setErr(true))
        .finally(()=>setLoading(false))
    }
    
    //add dependence so that data comes according to it
    useEffect(()=>{
        fetchAndUpdateData(page);
    },[page])
    
    
    //Automatically redirect to the home page 
   const handlePageChange = (val) => {
    const changeBy = page + val
    setPage(changeBy)
   } 

   //using search params(retrieving search params)
   //fixing so that it will no go to its initial state
   useEffect(()=>{
     setSearchParams({ page : page })
   },[page])
  
    return (
    loading ? <h1>Loading...</h1> : err ? <h1>Something Went Wrong.....</h1> :
    <>
    <button onClick={() => navigate('/')}>Go to home page using useNavigate hook</button>
    <Link to="/">
    <button>
        Go to home page using Link hook
        </button></Link>
    <h1>Users</h1>
    <div style={{display:"flex",justifyContent:"space-around",
    
}}>
    {
       data?.data?.map((user)=>(
        <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"50%",flexWrap:"wrap"}} key={user.id}>
            <img style={{borderRadius:"50%"}} src={user.avatar} alt={user.first_name} />
            <p>Name : {user.first_name}{" "}{user.last_name}</p>
            <p>Email : {user.email}</p>
            <Link style={{textDecoration:"none", color:"green"}} to={`/users/${user.id}`}>More Info...</Link>
        </div>
       ))
    }
    
    </div>
    <button disabled={page===1} onClick={()=>handlePageChange(-1)}>PREV</button>
    <button disabled>{page}</button>
    <button disabled={page===2} onClick={() => handlePageChange(+1)}>NEXT</button> 
    </>
    )
} 

// reqres.in user link = "https://reqres.in/api/users"
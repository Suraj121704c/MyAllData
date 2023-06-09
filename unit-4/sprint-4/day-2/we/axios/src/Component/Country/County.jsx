import { useEffect } from "react";
import React from "react";
import { getCountries } from "./api";

function Countries () {
    const [data,setData] = React.useState([]);
    const [loading,setLaoding] = React.useState(false)
    const [error,setError] = React.useState(false)
    const [page,setPage] = React.useState(1)
    const [totalPages, setTotalPages] = React.useState(1);

    useEffect(() => {
        setLaoding(true)
        getCountries({ page , limit : 10 , sort:"population" , order : "desc" }).then((res)=>{
            setData(res.data.data);
            setTotalPages(res.data.totalPages)
            setLaoding(false)
         }).catch((error)=>{
            setError(true)
            setLaoding(false);
         })
       }, [page])

    //    console.log(data)

    return loading ? <h1>Loading...</h1> : error ? (
        <h1>Something Went Wrong ..... Please Refresh</h1>
    ) : (
    <>
    <h1>Countries</h1>
    {data.map((country) => (
        <div key={country.id}>{country.country}- {country.population}</div>
    ))
    }
    <div>
        <button onClick={() => setPage(page-1)}
        disabled={page === 1}>PREV</button>
        <button disabled>{page}</button>
        <button onClick={() => setPage(page+1)}
        disabled={page === totalPages}>NEXT</button>
    </div>
    </>
)
}
export {Countries}
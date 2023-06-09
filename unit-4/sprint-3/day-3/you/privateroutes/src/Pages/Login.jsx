import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export default function Login(){
    const {isAuth , login} = useContext(AuthContext)
    if(isAuth){
        return <Navigate to="/dashboard" />
    }
    return (
        <>
        <h1>This is Login Page</h1>
        <button onClick={login}>Login Here</button>
        </>
    )
}
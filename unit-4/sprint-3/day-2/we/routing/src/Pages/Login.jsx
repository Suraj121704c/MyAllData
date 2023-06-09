import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
// import { Home } from "./Home"
import { Navigate } from "react-router-dom"

export default function Login () {
    const {isAuth,login} = useContext(AuthContext)

    if(isAuth) {
        return <Navigate to="/"/>
    }

    return (
    <>
    <h1>Home Page of the Webseite</h1>
    <button onClick={login}>LOGIN</button>
    </>
    )
}
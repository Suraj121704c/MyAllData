import React from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { useContext } from 'react';

export default function Login() {
    const {login,isAuth} = useContext(AuthContext);
    const [email,setEmail] = React.useState("eve.holt@reqres.in");
    const [password,setPassword] = React.useState("cityslicka");

    const handleLogin = (e) => {
        e.preventDefault()
        const userDetails = {
         email,
         password
        }
        fetch("https://reqres.in/api/login",{
             method : "POST",
             body:JSON.stringify(userDetails),
             headers:{
                 "Content-Type" : "application/json"
             },
         }).then((res)=>res.json())
         .then((json)=>{
             login(json.token);
            //  console.log(json)
         }).catch((err)=>{
             console.log(err)
         })
      }

    return (
        <div>
            <form data-testid = "auth_form" 
            onSubmit={handleLogin}
             >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}

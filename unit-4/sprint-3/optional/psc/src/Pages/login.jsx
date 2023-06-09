import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

const Login = () => {
    //Consuming the Login from Auth Context 
    const {login,isAuth} = useContext(AuthContext)
    const [email,setEmail] = React.useState("eve.holt@reqres.in")
    const [password,setPassword] = React.useState("cityslicka")
 
  const handleLogin = () => {
  const useDetails = {
    email,
    password
  }
  fetch("https://reqres.in/api/login",{
    method : "POST",
    body:JSON.stringify(useDetails),
    headers:{
        "Content-Type" : "application/json"
    },
  }).then((res)=>res.json())
  .then((json)=>{
    // console.log(json)
    login(json.token);
  }).catch((err)=>{
    console.log(err)
  })
  }
  if(isAuth){
    return <Navigate to="/" />
  }
 
  return (
    <div>
      <h1>Do Login Here</h1>
      <input type="text" placeholder='Enter Email'
      value={email} 
      onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input type="password" placeholder='Enter Password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       />
      <br />
      <br />
      <button onClick={handleLogin}>LOGIN</button>
     </div>
  )
}

export default Login

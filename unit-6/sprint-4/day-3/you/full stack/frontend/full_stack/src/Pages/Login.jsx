import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios";


const Login = () => {
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email, pass
    }
    // console.log(userDetails)
    axios({
      method: "post",
      url: "http://localhost:8000/users/login",
      data: userDetails
    }).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <Navbar />
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder='email...' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          <input type="password" placeholder='pass...' value={pass} onChange={(e) => setPass(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
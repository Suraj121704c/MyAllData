import React from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios"

const Register = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [pass, setPass] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const userDetails = {
      name, email, pass
    }
    axios({
      method: "post",
      url: "http://localhost:8000/users/register",
      data: userDetails
    }).then((response) => {
      console.log(response.data);
    })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Navbar />
      <h1>Register-Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" placeholder='name...' value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Email: <input type="text" placeholder='email...' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <br />
        <label>
          Pass: <input type="text" placeholder='pass...' value={pass} onChange={(e) => setPass(e.target.value)} />
        </label>
        <br />
        <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Register
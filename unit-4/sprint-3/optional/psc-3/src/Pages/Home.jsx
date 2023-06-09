import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

const Home = () => {
  const {logout} = useContext(AuthContext);
  const {token} = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Token : {token}</h2>
      <button onClick={logout}>LOGOUT HERE</button>
    </div>
  )
}

export default Home

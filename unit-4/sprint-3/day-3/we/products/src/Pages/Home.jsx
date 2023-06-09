import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'
const Home = () => { 
    const {isAuth,logout} = useContext(AuthContext)
  return (
    <div>
      <h1>Welcome to Home Page...</h1>
      <button disabled={!isAuth} onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Home

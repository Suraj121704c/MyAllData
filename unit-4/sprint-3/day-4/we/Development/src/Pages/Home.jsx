import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';

const Home = () => {
  const {logout,isAuth} = useContext(AuthContext)
  return (
    <div>
      <h1>Home Page</h1>
      <button disabled={!isAuth} onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Home

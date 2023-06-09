import React from 'react'
import { AuthContext } from '../Context/AuthContext'
const Home = () => {
  const {token} = React.useContext(AuthContext)
  
  return (
    <div>
      <h1>Home Page</h1>
      <h1>Token : {token}</h1>
    </div>
  )
}

export default Home

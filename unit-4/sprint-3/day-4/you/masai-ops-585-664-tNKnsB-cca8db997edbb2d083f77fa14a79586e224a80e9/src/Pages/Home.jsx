import React from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function Home() {
  
  const {token} = React.useContext(AuthContext)

  return (
    <div>
      <h1 className = "home_page" >Welcome to Home Page</h1>
      <h1>Token : {token}</h1>
    </div>
  )

}

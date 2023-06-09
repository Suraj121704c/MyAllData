import React, {Children, createContext, useState} from 'react'

const getData = (url) => {
  return fetch(url).then((res)=>res.json())
}

export const AuthContext = createContext()

export default function AuthContextProvider( {children} ) {
 const [isAuth,setIsAuth] = useState(false)
 const [loading,setLoading] = useState(false)
 const [error,setError] = useState(null)
 const [token,setToken] = useState("")
 const [users,Setusers] = useState("")
 const [password,setPassword] = useState("")
 

 const LoginData = (e) => {
  Setusers(e.target.value)
 }

 const PasswordData = (e) => {
  setPassword(e.target.value)
 }

 const fetchAndUpadte = async () => {
  setLoading(true)
  try {
    let obj = {users,password}
    let data = await getData(`https://reqres.in/api/login`,{
      method : "POST",
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(obj)
    })
    console.log(data.token)
    setLoading(false)
  } catch (error) {
    setError(error)
    setLoading(false)
  }
 }

 const value = {token,LoginData,PasswordData,fetchAndUpadte}

  return (
    <div>
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

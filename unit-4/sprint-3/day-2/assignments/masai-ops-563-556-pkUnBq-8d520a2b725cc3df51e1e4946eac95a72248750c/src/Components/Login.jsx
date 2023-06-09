import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function Login() {
 
    const {token,LoginData,PasswordData,fetchAndUpadte} = useContext(AuthContext)

    const handleChange = (e) => {
     e.preventDefault()
     fetchAndUpadte()
    }
       
    return (
        <div>
            <form data-testid = "auth_form" onSubmit={handleChange} >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={LoginData}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={PasswordData}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}

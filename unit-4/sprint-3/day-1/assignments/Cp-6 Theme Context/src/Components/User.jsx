import React from 'react'

export default function User({
    isDarkTheme,user
}) {
    
    const {img,name,position,level,points} = user

    return (
        <div 
        style={{color:isDarkTheme?"white" : "black"}}
         data-testid = "user" >
           <img src={img} />
           <h3>{name}</h3>
           <h3>{position}</h3>
           <input 
           style={{accentColor : isDarkTheme ? "yellow" : "blue"}}
           data-testid = "level" level={level}
           type="range"
           />
           <h3>{points}</h3>
        </div>
    )
}

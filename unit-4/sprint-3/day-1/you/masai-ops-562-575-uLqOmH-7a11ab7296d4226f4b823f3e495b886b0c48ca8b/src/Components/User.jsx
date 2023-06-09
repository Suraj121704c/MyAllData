import React from 'react'
export default function User({
    name,
    position,
    level,
    points,
    img,
    isDarkTheme
}) {

    let themeColor = {}

    isDarkTheme ? (themeColor= {accentColor : "yellow"}) : null

    return (
        <div data-testid = "user" >
            <p>{name}</p>
            <p>{position}</p>
            <p>{level}</p>
            <p>{points}</p>
            <img 
            src={img} 
            alt={name}/>
            <input 
            data-testid = "level" 
            type = "range" 
            style={themeColor}/>
        </div>
    )
}

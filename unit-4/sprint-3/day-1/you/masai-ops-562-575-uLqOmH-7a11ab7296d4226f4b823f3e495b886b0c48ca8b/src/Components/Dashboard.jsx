import React from 'react'
import User from './User'

import {ThemeContext} from '../Context/ThemeContextProvider'

let data = [
    {
      "id": 1,
      "name": "Nrupul Dev",
      "position": "CTO",
      "level": 15,
      "points": 23456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 2,
      "name": "Prateek",
      "position": "CEO",
      "level": 15,
      "points": 22456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 3,
      "name": "Yogesh",
      "position": "SVP",
      "level": 15,
      "points": 24536,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    }
  ]

export const Dashboard = () => {
    const {isDarkTheme,handleTheme} = React.useContext(ThemeContext)

    let bgColor = [];
    isDarkTheme ? bgColor = 
    {backgroundColor: "white" ,
     color : "black"} : 
    bgColor = {backgroundColor:"black",color:"white"}

    return (
        <div data-testid = "dashboard-cont" style={bgColor}>
            <select data-testid = "select-theme" onChange={(e) => handleTheme(e)}>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>   
            {
                data.map((el)=>{
                    return <User key={el.id} {...el} isDarkTheme={isDarkTheme} />
                })
            }
        </div>
)
}

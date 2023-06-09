import React from 'react'
import App from '../App'

//create
export const ThemeContext = React.createContext();


export default function ThemeContextProvider() {
  const [isDarkTheme,setDarkTheme] = React.useState(false)

  function handleTheme(e){
    let theme = e.target.value;
    
    theme === "Dark Theme" ? setDarkTheme(true) : setDarkTheme(false)
    
  }

  return (
      <ThemeContext.Provider value={{isDarkTheme,handleTheme}}>
          <App />
      </ThemeContext.Provider>
  )
}

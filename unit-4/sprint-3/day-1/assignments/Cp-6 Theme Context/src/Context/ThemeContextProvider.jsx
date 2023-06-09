import React from "react";
import App from "../App";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
  <ThemeContext.Provider value={{isDarkTheme,setIsDarkTheme}}>
  <App />
  </ThemeContext.Provider>
  );
}

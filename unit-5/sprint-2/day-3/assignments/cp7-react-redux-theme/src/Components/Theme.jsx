import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_THEME } from "../Redux/actionTypes";

const Theme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    // console.log(state.theme.theme);
    return state.theme.theme;
  });
  const setTheme = (newTheme) => {
    dispatch({ type: CHANGE_THEME, payload: newTheme });
  };

  return (
    <div>
      <button
        onClick={() => setTheme("light")}
        disabled={theme === "light"}
      >
        Switch to Light
      </button>
      <button
        onClick={() => setTheme("dark")}
        disabled={theme === "dark"}
      >
        Switch to Dark
      </button>
    </div>
  );
};

export default Theme;

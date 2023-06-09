import React from "react";
import { Sidebar } from "../Components/Sidebar.jsx";
import { MovieList } from "../Components/MovieList.jsx";

export const Homepage = () => {
  return (
    <div style={{display : "flex"}}>
      <div>
        <Sidebar />
      </div>
      <div>
        <MovieList />
      </div>
    </div>
  );
};

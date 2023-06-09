import React, { useState } from "react";
import axios from "axios";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [data, setData] = useState([]);

  const handleSearch = (movie) => {
    axios({
      method: "get",
      url: `https://www.omdbapi.com/?i=tt3896198&apikey=15d21b02&s=${movie}`,
    })
      .then((res) => {
        if (res.data.Response === "True") {
          setData(res?.data?.Search);
        }
      })
      .catch((err) => console.log(err));
  };
  const debounce = useDebounce(handleSearch, 3000);
  return (
    <div>
      <h1>Hotstar App</h1>
      <input
        placeholder="search-by-debounce"
        onChange={(e) => debounce(e.target.value)}
      />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {data.length ? (
          data.map((movie) => (
            <div
              style={{
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                borderRadius: "20px",
              }}
              key={movie.imdbID}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h1>Title : {movie.Title}</h1>
              <h3>Year : {movie.Year}</h3>
            </div>
          ))
        ) : (
          <h1>No Movie Found!!! Search Again !!!</h1>
        )}
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Debounce;

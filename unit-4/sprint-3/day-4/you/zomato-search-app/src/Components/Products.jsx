import React from "react";
import { useSearchParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

export const Products = () => {
  const [data, setData] = React.useState([]);
  const [s, sets] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const quantam = React.useRef(null);

  const fetchAndUpdate = async (s) => {
    try {
      const food = await getData(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${s}`
      );
      setData(food.meals);
    //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchAndUpdate(s);
  }, [s]);

  React.useEffect(() => {
    setSearchParams({ s: s });
  }, [s]);

  return (
    <div>
      <h1>Searched Food</h1>
      <input type="search" placeholder="search here" ref={quantam} />
      <br />
      <br />
      <button onClick={() => sets(quantam.current.value)}>search-here</button>
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
        }}
      >
        {data.map((food) => (
          <div style={{ border: "3px solid red" }} key={food.idMeal}>
            <img
              style={{ width: "200px" }}
              src={food.strMealThumb}
              alt={food.strMeal}
            />
            <h1>{food.strMeal}</h1>
            <p>{food.strInstructions}</p>
            <h2>Origin : {food.strArea}</h2>
            <h3>Category : {food.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

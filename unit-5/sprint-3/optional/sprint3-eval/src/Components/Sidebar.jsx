import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styled from "styled-components";

// Complete the logic do not remove any data-testid

export const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialRating = searchParams.getAll("rating");
  const [rating, setRating] = useState(initialRating || []);

  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder || "");

  const handleChange = (e) => {
    let newRating = [...rating];
    const value = e.target.value;
    if (newRating.includes(value)) {
      newRating = newRating.filter((el) => el !== value);
    } else {
      newRating.push(value);
    }
    setRating(newRating);
    // console.log(rating)
  };

  const handleSort = (e) => {
    // console.log(e.target.value)
    setOrder(e.target.value);
  };

  useEffect(()=>{
    let params = {
      rating,
    }
    order && (params.order = order)
    setSearchParams(params)
  },[rating,order])

  // console.log(searchParams)

  return (
    <DIV>
      <h3>Filter by Rating</h3>
      <div>
        <input
          data-testid="movie-filter-1"
          type="checkbox"
          value={"1"}
          onChange={handleChange}
          checked={rating.includes("1")}
        />
        <label>{"\u2605 \u2606 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-2"
          type="checkbox"
          value={"2"}
          onChange={handleChange}
          checked={rating.includes("2")}
        />
        <label>{"\u2605 \u2605 \u2606 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-3"
          type="checkbox"
          value={"3"}
          onChange={handleChange}
          checked={rating.includes("3")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2606 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-4"
          type="checkbox"
          value={"4"}
          onChange={handleChange}
          checked={rating.includes("4")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2606"}</label>
        <br />
        <input
          data-testid="movie-filter-5"
          type="checkbox"
          value={"5"}
          onChange={handleChange}
          checked={rating.includes("5")}
        />
        <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
        <br />
      </div>
      <br />
      <br />
      <h3>Sort By Year</h3>
      <div onChange={handleSort}> 
        <input
          data-testid="movie-sort-asc"
          type="radio"
          name="order"
          value={"asc"}
          defaultChecked={order === "asc"}
        />
        <label>Ascending</label>
        <br />
        <input
          data-testid="movie-sort-desc"
          type="radio"
          name="order"
          value={"desc"}
          defaultChecked={order === "desc"}
        />
        <label>Descending</label>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  width: 140%;
  border-right: 1px solid gray;
`;

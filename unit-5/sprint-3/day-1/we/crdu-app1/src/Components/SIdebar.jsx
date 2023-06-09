import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const SIdebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // to make the change in url as permanent
  let initialCategory = searchParams.getAll("category");
  const [category, setCategory] = useState(initialCategory || []);
  // to make the change in url as permanent even when we reload
  const initialOrder = searchParams.get("order");
  const [order, setOrder] = useState(initialOrder);

  const hanleChange = (e) => {
    let newCategory = [...category];
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value);
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory);
    // console.log(category);
  };

  const handleSort = (e) => {
    // console.log(e.target.value);
    setOrder(e.target.value);
  };

  useEffect(() => {
    let params = {
      category,
    };

    // if order is not present then don't add it
    order && (params.order = order);

    setSearchParams(params);
  }, [category, order]);

  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input
          type="checkbox"
          value={"male"}
          onChange={hanleChange}
          // to check the checkbox
          checked={category.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"female"}
          onChange={hanleChange}
          checked={category.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value={"kids"}
          onChange={hanleChange}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <br />
      <br />
      <br />
      <h3>Sort Based On Price</h3>
      <div onChange={handleSort}>
        <input type="radio" name="order" value={"asc"} defaultChecked={order === "asc"}/>
        <label>Ascending</label>
        <input type="radio" name="order" value={"desc"} defaultChecked={order === "desc"}/>
        <label>Descending</label>
      </div>
    </div>
  );
};

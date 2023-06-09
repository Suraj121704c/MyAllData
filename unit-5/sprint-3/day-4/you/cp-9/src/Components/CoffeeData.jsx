import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeDataAction } from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.coffeeData;
  });

  useEffect(() => {
    dispatch(coffeeDataAction);
  }, []);

  // console.log(data)

  return (
    <div>
      <h2>Coffee Data</h2>
      <div
        className="coffee_data_cont"
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto auto" }}
      >
        {/* map the below div against your coffee data */}
        {data.length > 0 &&
          data.map((el) => (
            <div className="coffee-item" key={el.id}>
              <img className="image" alt="img" width="70%" src={el.image} />
              <div className="title">{el.title}</div>
              <div className="price">{el.price}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

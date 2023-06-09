import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { coffeeData } from "../Redux/AppReducer/action";

export default function CoffeeData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.coffeeData;
  });

  React.useEffect(() => {
    dispatch(coffeeData);
  }, []);

  // console.log(data);

  return (
    <div>
      <h2>Coffee Data</h2>
      <div className="coffee_data">
        {/* map the below div against your coffee data */}
        {/* Show image, title and price  */}
        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id}>
              <img src={el.image} alt={el.title} />
              <h1>{el.title}</h1>
              <p>{el.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

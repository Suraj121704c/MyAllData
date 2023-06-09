import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.restaurantData;
  });
  React.useEffect(() => {
    dispatch(restData);
  }, []);

  // console.log(data)

  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data">
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}
        {data.length > 0 &&
          data.map((el) => (
            <div key={el.id}>
              <img src={el.image} alt={el.name} />
              <h1>{el.name}</h1>
              <h2>{el.type}</h2>
              <h2>{el.rating}</h2>
              <h3>{el.number_of_votes}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

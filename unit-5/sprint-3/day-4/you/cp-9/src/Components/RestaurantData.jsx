import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantDataAction } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.restaurantData;
  });

  React.useEffect(() => {
    dispatch(restaurantDataAction);
  }, []);

  //   console.log(data);
  return (
    <div>
      <h2> Restaurant Data </h2>
      <div
        className="restaurant_data_cont"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
        }}
      >
        {/* Map the below div against your restaurant Data */}
        {data.length > 0 &&
          data.map((el) => (
            <div className="restaurant_item" key={el.id}>
              <img className="image" alt="img" width="70%" src={el.image} />
              <div className="name">{el.name}</div>
              <div className="type">{el.type}</div>
              <div className="rating">{el.rating}</div>
              <div className="number_of_votes">{el.number_of_votes}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

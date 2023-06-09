import React from "react";
import { useParams } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

function SingleRestaurantPage() {
  let param = useParams();
  const [data, setData] = React.useState([]);

  // console.log(param)

  const fetchAndUpdate = async () => {
    try {
      let res = await getData();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name"></h3>
      </div>
      <div data-testid="restaurant-type">Type:</div>
      <div data-testid="restaurant-rating">Rating:</div>
      <div data-testid="restaurant-votes">Votes:</div>
      <div data-testid="restaurant-price">Starting Price:</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;

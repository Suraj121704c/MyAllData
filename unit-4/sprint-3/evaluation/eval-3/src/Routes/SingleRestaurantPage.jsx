function SingleRestaurantPage() {
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

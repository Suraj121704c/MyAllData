function RestaurantCard({ name, image,type,rating,price_starts_from,number_of_votes }) {
  return (
  <div 
  data-testid="restaurant-card" >
   {/* display the props */}
   <img 
   data-testid="restaurant-card-image"
   src={image}
   alt={name}
   />
   <p data-testid="restaurant-card-name">{name}</p>
   <p data-testid="restaurant-card-type">{type}</p>
   <p data-testid="restaurant-card-price">{price_starts_from}</p>
   <p data-testid="restaurant-card-rating">{rating}</p>
   <p data-testid="restaurant-card-votes">{number_of_votes}</p>
  </div>
  );
}

export default RestaurantCard;

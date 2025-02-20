export default function FoodCard({ meal }) {
  function handleAddToCart() {
    console.log(`Adding ${meal.id} to cart`);
  }

  return (
    <div className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p className="meal-item-price">${meal.price}</p>
      <p className="meal-item-description">{meal.description}</p>
      <button className="button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
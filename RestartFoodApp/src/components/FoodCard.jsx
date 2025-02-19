export default function FoodCard({ meal }) {
  return (
    <div className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p className="meal-item-price">${meal.price}</p>
      <p className="meal-item-description">{meal.description}</p>
      <button className="button">Add to Cart</button>
    </div>
  );
}
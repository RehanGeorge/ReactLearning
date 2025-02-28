import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function FoodCard({ meal }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="meal-item">
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
      <h3>{meal.name}</h3>
      <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
      <p className="meal-item-description">{meal.description}</p>
      <Button onClick={() => addItemToCart(meal)}>Add to Cart</Button>
    </div>
  );
}
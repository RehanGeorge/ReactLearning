import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function MealItem(props) {
    const cartCtx = useContext(CartContext);

    function handleAddMealToCart() {
        cartCtx.addItem(props);
    };

    return (
        <div className="meal-item">
            <article>
                <img src={`http://localhost:3000/${props.image}`} alt={props.name} />
                <h3>{props.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(props.price)}</p>
                <p className="meal-item-description">{props.description}</p>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
            </article>
        </div>
    )
}
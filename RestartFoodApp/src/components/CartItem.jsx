import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

export default function CartItem({ item}) {
    const cartCtx = useContext(CartContext);
    const { updateItemQuantity } = cartCtx;
    
    return (
        <li key={item.id}>
            <div className="cart-item">
                <p>{item.item.name} - ${item.item.price}</p>
                <div className="cart-item-actions">
                    <button onClick={() => updateItemQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateItemQuantity(item.id, 1)}>+</button>
                </div>
            </div>
        </li>
    );
}
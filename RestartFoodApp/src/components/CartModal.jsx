import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";

export default function CartModal() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartItems = cartCtx.items;

    const totalPrice = cartItems.reduce((total, item) => total + item.id.price * item.quantity, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <>
            <Modal
             className="cart" open={userProgressCtx.progress === 'cart'}
             onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}>
                <div className="cart">
                    <h2>Your Cart</h2>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem key={item.id.id} item={item} />
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>{currencyFormatter.format(totalPrice)}</h3>
                    </div>
                    <div className="modal-actions">
                        <Button textOnly onClick={handleCloseCart}>Close</Button>
                        {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
                    </div>
                </div>
            </Modal>
        </>
    );
}
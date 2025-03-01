import { useImperativeHandle, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import CartItem from "./CartItem";
import CheckoutModal from "./CheckoutModal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";

export default function CartModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartItems = cartCtx.items;

    const totalPrice = cartItems.reduce((total, item) => total + item.id.price * item.quantity, 0);

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    return (
        <>
            <Modal className="cart" open={userProgressCtx.progress === 'cart'}>
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
                        <Button onClick={handleCloseCart}>Go to Checkout</Button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
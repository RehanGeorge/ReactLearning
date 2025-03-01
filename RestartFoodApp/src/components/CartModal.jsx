import { useImperativeHandle, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import CartItem from "./CartItem";
import CheckoutModal from "./CheckoutModal";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function CartModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;

    const totalPrice = cartItems.reduce((total, item) => total + item.item.price * item.quantity, 0);

    const dialogModal = useRef();
    const checkoutModal = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialogModal.current.showModal(),
        close: () => dialogModal.current.close()
    }));

    function handleCheckoutClick() {
        dialogModal.current.close();
        checkoutModal.current.open();
    }

    return (
        <>
            <dialog className="modal" ref={dialogModal}>
                <div className="cart">
                    <h2>Your Cart</h2>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem key={item.item.id} item={item} />
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>{currencyFormatter.format(totalPrice)}</h3>
                    </div>
                    <div className="modal-actions">
                        <Button textOnly onClick={() => dialogModal.current.close()}>Close</Button>
                        <Button onClick={handleCheckoutClick}>Go to Checkout</Button>
                    </div>
                </div>
            </dialog>
            <CheckoutModal ref={checkoutModal} />
        </>
    );
}
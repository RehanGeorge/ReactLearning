import { useImperativeHandle, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import CartItem from "./CartItem";

export default function CartModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;

    const dialogModal = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialogModal.current.showModal(),
        close: () => dialogModal.current.close()
    }));

    return (
        <dialog className="modal" ref={dialogModal}>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem key={item.item.id} item={item} />
                    ))}
                </ul>
                <div className="modal-actions">
                    <button className="text-button" onClick={() => dialogModal.current.close()}>Close</button>
                    <button className="button">Go to Checkout</button>
                </div>
            </div>
        </dialog>
    );
}
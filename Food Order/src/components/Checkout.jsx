import { useContext } from "react";

import Modal from "./UI/Modal";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./Input";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
        return totalPrice + item.price * item.quantity;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const customerData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: {
                    items: cartCtx.items,
                    customer: customerData
                }
            })
        })
    }

    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal" />
                    <Input label="City" type="text" id="city" />
                </div>

                <p className="modal-actions">
                    <Button type="button" textOnly onClick={handleClose}>Close</Button>
                    <Button>Submit Order</Button>
                </p>
                </form>
        </Modal>
    )
}
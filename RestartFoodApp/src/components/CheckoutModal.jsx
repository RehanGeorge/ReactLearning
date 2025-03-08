import { useContext, useActionState } from "react";
import { CartContext } from "../store/shopping-cart-context";
import SubmitModal from "./SubmitModal";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function CheckoutModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const {data, isLoading: isSending, error, sendRequest, clearData} = useHttp('http://localhost:3000/orders', requestConfig, []);
    console.log(data);

    const cartItems = cartCtx.items;

    const totalPrice = cartItems.reduce((total, item) => total + item.id.price * item.quantity, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleFinish() {
        userProgressCtx.hideCheckout();
        cartCtx.clearCart();
        clearData();
    }

    async function checkoutAction(prevState, formData) {
        const customerData = {};

        formData.forEach((value, key) => {
            customerData[key] = value;
        });

        await sendRequest(
            JSON.stringify({
                order: {
                    items: cartItems,
                    customer: customerData,
                }
            })
        )
    }

    const [formState, formAction, pending] = useActionState(checkoutAction, null);

    let actions = (
        <>
            <Button textOnly type="button" onClick={handleClose}>Close</Button>
            <Button type="submit">Submit Order</Button>
        </>
    );

    if (pending) {
        actions = <span>Sending order data...</span>;
    }

    if (data.message && !error) {
        return (
            <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleFinish}>
                <h2>Success!</h2>                
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <p className="modal-actions">
                    <Button onClick={handleFinish}>Close</Button>
                </p>
            </Modal>
        )
    }

    return (
        <>
            <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
                <form action={formAction}>
                        <h2>Checkout</h2>
                        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
                        <div className="control">
                            <div className="control">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="control">
                                <label htmlFor="email">E-mail Address</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="control">
                                <label htmlFor="address">Street</label>
                                <input id="street" name="street" required></input>
                            </div>
                            <div className="control-row">
                                <div className="control">
                                    <label htmlFor="postal">Postal Code</label>
                                    <input id="postal" name="postal-code" required></input>
                                </div>
                                <div className="control">
                                    <label htmlFor="city">City</label>
                                    <input id="city" name="city" required></input>
                                </div>
                            </div>
                        </div>
                        {error && <Error title="Failed to submit order" message={error} />}
                        <div className="modal-actions">
                            {actions}
                        </div>
                </form>
            </Modal>
        </>
    )
}
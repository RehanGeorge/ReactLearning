import { useImperativeHandle, useRef, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import SubmitModal from "./SubmitModal";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import { currencyFormatter } from "../util/formatting";

export default function CheckoutModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const cartItems = cartCtx.items;

    const totalPrice = cartItems.reduce((total, item) => total + item.id.price * item.quantity, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    const dialogModal = useRef();

    const successModal = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialogModal.current.showModal(),
        close: () => dialogModal.current.close()
    }));

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerData = {};
        formData.forEach((value, key) => {
            customerData[key] = value;
        });
        console.log(customerData);
        try {
            console.log(cartItems.length);
            const response = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    order: {
                        items: cartItems,
                        customer: customerData,
                    }
                })
            })
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            console.log('Error:', error);
        }
        dialogModal.current.close();
        successModal.current.open();
    }

    return (
        <>
            <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
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
                        <div className="modal-actions">
                            <Button textOnly type="button" onClick={handleClose}>Close</Button>
                            <Button type="submit">Submit Order</Button>
                        </div>
                </form>
            </Modal>
            <SubmitModal ref={successModal}/>
        </>
    )
}
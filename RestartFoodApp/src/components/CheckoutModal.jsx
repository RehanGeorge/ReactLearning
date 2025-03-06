import { useImperativeHandle, useRef, useContext } from "react";
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

    const {data, isLoading: isSending, error, sendRequest} = useHttp('http://localhost:3000/orders', requestConfig, []);

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

        sendRequest(
            JSON.stringify({
                order: {
                    items: cartItems,
                    customer: customerData,
                }
            })
        )
        
        console.log(customerData);
        dialogModal.current.close();
        successModal.current.open();
    }

    let actions = (
        <>
            <Button textOnly type="button" onClick={handleClose}>Close</Button>
            <Button type="submit">Submit Order</Button>
        </>
    );

    if (isSending) {
        actions = <span>Sending order data...</span>;
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
                        {error && <Error title="Failed to submit order" message={error} />}
                        <div className="modal-actions">
                            {actions}
                        </div>
                </form>
            </Modal>
            <SubmitModal ref={successModal}/>
        </>
    )
}
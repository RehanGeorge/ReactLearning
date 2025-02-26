import { useImperativeHandle, useRef, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import SubmitModal from "./SubmitModal";

export default function CheckoutModal({ ref }) {
    const cartCtx = useContext(CartContext);
    const cartItems = cartCtx.items;

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
            <form onSubmit={handleSubmit}>
                <dialog className="modal" ref={dialogModal}>
                    <h2>Checkout</h2>
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
                        <button className="text-button" onClick={() => dialogModal.current.close()}>Close</button>
                        <button className="button" type="submit">Submit Order</button>
                    </div>
                </dialog>
            </form>
            <SubmitModal ref={successModal}/>
        </>
    )
}
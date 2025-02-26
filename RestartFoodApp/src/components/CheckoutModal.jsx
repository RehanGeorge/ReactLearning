import { useImperativeHandle, useRef } from "react"
import SubmitModal from "./SubmitModal";

export default function CheckoutModal({ ref }) {
    const dialogModal = useRef();

    const successModal = useRef();

    useImperativeHandle(ref, () => ({
        open: () => dialogModal.current.showModal(),
        close: () => dialogModal.current.close()
    }));

    function handleSubmit(event) {
        event.preventDefault();
        customerData = new FormData(event.target);
        console.log(customerData);
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
                                <input id="postal" name="postal" required></input>
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
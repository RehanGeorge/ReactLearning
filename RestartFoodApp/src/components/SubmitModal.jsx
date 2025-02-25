import { useImperativeHandle, useRef } from "react";

export default function SubmitModal({ ref }) {
    const successModal = useRef();

    useImperativeHandle(ref, () => ({
        open: () => successModal.current.showModal(),
        close: () => successModal.current.close()
    }))

    function handleClick() {
        successModal.current.close();
    }

    return (
        <dialog className="modal" ref={successModal}>
            <div className="cart">
                <h2>Success!</h2>
                <p>Your order was submitted successfully.</p>
                <p>We will get back to you with more details via email within the next few minutes.</p>
                <div className="modal-actions">
                    <button className="button" onClick={handleClick}>Okay</button>
                </div>
            </div>
        </dialog>
    );
}
import { useImperativeHandle, useRef } from "react"

export default function CartModal({ ref }) {
    const dialogModal = useRef();

    useImperativeHandle(ref, () => {
        return {
            open: () => dialogModal.current.showModal(),
            close: () => dialogModal.current.close()
        }
    })

    return (
        <dialog className="modal" ref={dialogModal}>
            <div className="cart">
                <h2>Your Cart</h2>
                <ul className="cart-items">
                    <li>
                        <div className="cart-item">
                            <p>Item 1</p>
                            <div className="cart-item-actions">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                    </li>
                    <p>Item 2</p>
                    <p>Item 3</p>
                </ul>
                <div className="modal-actions">
                    <button className="text-button" onClick={() => dialogModal.current.close()}>Close</button>
                    <button className="button">Go to Checkout</button>
                </div>
            </div>
        </dialog>
    )
}
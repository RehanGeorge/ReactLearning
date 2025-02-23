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
            <div className="modal-content">Hi</div>
        </dialog>
    )
}
import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ ref, children, caption }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method="dialog">
                <button>{caption}</button>
            </form>
        </dialog>, document.getElementById('modal-root')
    );
}
import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, result, targetTime, remainingTime, onReset }) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {userLost ? 'lost' : 'won'}</h2>
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime}</strong> seconds.</p>
            <p>You stopped the timer with <strong>{formattedRemainingTime}</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
}
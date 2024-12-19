import { useState, useRef, useEffect } from "react"
import { ResultModal } from "./ResultModal";


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [isActive, setIsActive] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    
    
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.open();
            setIsActive(false)
        }, targetTime * 1000);

        setIsActive(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setIsActive(false);
    }

    return (
        <>
            <ResultModal ref={dialog} result={"lost"} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                {timerExpired && <p>You lost!</p>}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={isActive ? handleStop : handleStart}>
                        {isActive ? "Stop Challenge" : "Start Challenge"}
                    </button>
                </p>
                <p className={isActive ? "active" : ""}>{isActive ? "Time is running..." : "Timer inactive"}</p>
            </section>
        </>
    )
}
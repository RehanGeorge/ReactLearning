import { useState, useRef, useEffect } from "react"


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [isActive, setIsActive] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    
    
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setIsActive(false)
        }, targetTime * 1000);

        setIsActive(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setIsActive(false);
    }

    return (
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
    )
}
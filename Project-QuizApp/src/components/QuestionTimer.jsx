import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('setting timeout');
        const timeoutId = setTimeout(onTimeout, timeout);

        return () => {
            console.log('clearing timeout');
            clearTimeout(timeoutId);
        }
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('setting interval');
        const intervalId = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            console.log('clearing interval');
            clearInterval(intervalId);
        }
    }, []);
        
    return <progress id="question-time" value={remainingTime} max={timeout}></progress>
}
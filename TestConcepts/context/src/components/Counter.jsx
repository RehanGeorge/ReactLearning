import { useContext } from "react";
import { CounterContext } from "../store/counter-context";

export default function Counter() {
    const counterCtx = useContext(CounterContext);    
    
    return (
        <div>
            <h1>Counter</h1>
            <p>{counterCtx.count}</p>
            <button onClick={counterCtx.increaseCount}>Increase</button>
            <button onClick={counterCtx.decreaseCount}>Decrease</button>
        </div>
    )
}
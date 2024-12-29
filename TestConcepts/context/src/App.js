import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './store/counter-context';
import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    function increaseCount() {
      setCount(prevCount => prevCount + 1);
    }

    function decreaseCount() {
      setCount(prevCount => prevCount - 1);
    }


  return (
    <div className="App">
      <CounterContext value={{ count, increaseCount, decreaseCount }}>
        <Counter />
      </CounterContext>
    </div>
  );
}

export default App;

import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './store/counter-context';

function App() {
  return (
    <div className="App">
      <CounterContext>
        <Counter />
      </CounterContext>
    </div>
  );
}

export default App;

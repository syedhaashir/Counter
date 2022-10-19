import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setcounter] = useState(0)
  const [isLit, setLit] = useState(true);
  const toggle = () => {
    setLit(!isLit)
  }
  return (
    <>
      <div className='head'>
        <h1 className='heading'>Counter Value {counter}</h1>
        <button onClick={toggle}> Chaprasi Hashir</button>
      </div>
      <div className={(isLit) ? 'light' : 'dark'}>
        <button onClick={() => setcounter(counter + 1)} className="button-56">Increment</button>
        <button onClick={() => setcounter(counter - 1)} className="button-56">Decrement</button>
        {/* <button onClick={() => counter()}>Reset</button> */}
      </div>
      <div className="room">{(isLit) ? 'Main Gandu Hoon' : 'Main Lora Hoon'}</div>
    </>
  );
}

export default App;


import React from 'react';
import { useCounter } from '../../src/hooks/useCounter';
import './Counter.css';

export const CounterWithCustomHook = () => {

const {state,increment, decrement, reset}=useCounter(100);

  return (
    <>

    <h1>
        Counter With Hook {state}
    </h1>
    <hr/>

    <button onClick={ ()=>increment(10)}  className="btn">+1</button>
    <button onClick={ ()=>decrement(2)} className="btn">-1</button>
    <button onClick={ reset} className="btn">Reset</button>
    
    
    </>
  )
}

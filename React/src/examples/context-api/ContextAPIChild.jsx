import {useContext} from 'react';
import CounterContext from './CounterContext.jsx';
export function ContextAPIChild() {
  const { increment,decrement } = useContext(CounterContext);

  return (
    <>
      <div>ContextAPI Child</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}
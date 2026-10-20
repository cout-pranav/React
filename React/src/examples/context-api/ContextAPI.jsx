import { useContext } from 'react';
import CounterContext from './CounterContext.jsx';
import { ContextAPIChild } from './ContextAPIChild.jsx';

export function ContextAPI() {

  const { count } = useContext(CounterContext);

  return (
    <>
      <div>ContextAPI</div>
      <div>Count: {count}</div>
      <ContextAPIChild />
    </>
  )
}
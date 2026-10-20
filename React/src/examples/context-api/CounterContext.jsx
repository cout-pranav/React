import {createContext, useState} from 'react'

const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [count, setCount] = useState(5);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
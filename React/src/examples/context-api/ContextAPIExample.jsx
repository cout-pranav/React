import { CounterProvider } from './CounterContext.jsx';
import { ContextAPI } from './ContextAPI.jsx';

export function ContextAPIExample() {

  return (
    <CounterProvider>
      <ContextAPI />
    </CounterProvider>
  )
}

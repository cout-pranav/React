import useLocalStorage from './useLocalStorage.jsx';

export function UseLocalStorageExample() {

  const [name, setName] = useLocalStorage('name', '');
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <>
      <div>useLocalStorage</div>
      <p>Reload the page — values persist in localStorage.</p>

      <label>
        Name:{' '}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <div>Hello, {name || 'stranger'}</div>

      <div>Count: {count}</div>
      <button onClick={() => setCount((c) => c - 1)}>−</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  )
}

import { ContextAPIExample } from './context-api/ContextAPIExample.jsx';
import { UseLocalStorageExample } from './use-local-storage/UseLocalStorageExample.jsx';
import { UseDebounceExample } from './use-debounce/UseDebounceExample.jsx';

// Registry of all examples. Each entry becomes a route, a nav link and a Home page card.
export const examples = [
  {
    path: 'context-api',
    title: 'Context API',
    description: 'Share state between components with createContext and useContext.',
    component: ContextAPIExample,
  },
  {
    path: 'use-local-storage',
    title: 'useLocalStorage',
    description: 'A custom hook that keeps state in sync with localStorage so it survives reloads.',
    component: UseLocalStorageExample,
  },
  {
    path: 'use-debounce',
    title: 'useDebounce',
    description: 'Debounce a text input so an API request fires only after the user stops typing.',
    component: UseDebounceExample,
  },
];

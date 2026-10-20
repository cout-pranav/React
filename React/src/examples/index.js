import { ContextAPIExample } from './context-api/ContextAPIExample.jsx';

// Registry of all examples. Each entry becomes a route, a nav link and a Home page card.
export const examples = [
  {
    path: 'context-api',
    title: 'Context API',
    description: 'Share state between components with createContext and useContext.',
    component: ContextAPIExample,
  },
];

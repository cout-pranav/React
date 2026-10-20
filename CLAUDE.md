# CLAUDE.md

React sample/learning repo. The app lives in `React/`: Vite + React 19, plain JSX (no TypeScript).

## Commands (run from `React/`)
- `npm install` — install deps
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run preview` — preview production build

No test framework is set up.

## Stack
- React 19.3, react-dom 19.3
- Vite 8 with `@vitejs/plugin-react` 6
- ESLint 10 flat config (`React/eslint.config.js`) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- React Router (package `react-router`, declarative mode — import from `'react-router'`, not `react-router-dom`)

## Structure (`React/src/`)
- `main.jsx` — entry; `<App />` inside `StrictMode` + `BrowserRouter`
- `App.jsx` — `<Routes>`: Home (index), one route per example (generated from the registry), `*` → NotFound
- `layout/Layout.jsx` (+ `Layout.css`) — sidebar of `NavLink`s generated from the registry, page content in `<Outlet />`
- `pages/` — `Home.jsx` (lists all examples), `NotFound.jsx`
- `examples/index.js` — **registry**: `examples = [{ path, title, description, component }]`
- `examples/<name>/` — one self-contained folder per example
  - `context-api/` — `ContextAPIExample.jsx` (entry, wraps `CounterProvider`), `ContextAPI.jsx`, `ContextAPIChild.jsx`, `CounterContext.jsx`
  - `use-local-storage/` — `UseLocalStorageExample.jsx` (entry), `useLocalStorage.jsx` (custom hook, default export)

## How to add a new example
1. Create `src/examples/<kebab-name>/` with a `<Name>Example.jsx` entry (named export). It must wrap any providers it needs, so it works standalone.
2. Add one entry to `src/examples/index.js` (`path` = URL segment, e.g. `'use-reducer'`).

The route, sidebar link and Home page listing appear automatically — no changes to `App.jsx`, `Layout.jsx` or `Home.jsx`.

## Conventions
- Everything an example needs (components, contexts, hooks, CSS) lives inside its own folder; nothing example-specific in `src/` root.
- Function components with hooks; components use named exports (`App` is the default export).
- Custom hooks live in their example folder as `use<Name>.jsx` with a default export (e.g. `use-local-storage/useLocalStorage.jsx`).
- Reuse the CSS variables in `index.css` (`--text-h`, `--border`, `--accent`, `--accent-bg`, …) for styling.

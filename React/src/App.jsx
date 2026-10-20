import { Routes, Route } from 'react-router';
import { Layout } from './layout/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { examples } from './examples';


function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {examples.map(({ path, component: Example }) => (
          <Route key={path} path={path} element={<Example />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

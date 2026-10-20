import { NavLink, Outlet } from 'react-router';
import { examples } from '../examples';
import './Layout.css';

export function Layout() {

  return (
    <div className="layout">
      <nav className="sidebar">
        <NavLink to="/" end className="brand">React Examples</NavLink>
        <ul>
          {examples.map(({ path, title }) => (
            <li key={path}>
              <NavLink to={`/${path}`}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

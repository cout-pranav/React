import { Link } from 'react-router';
import { examples } from '../examples';

export function Home() {

  return (
    <>
      <h1>React Examples</h1>
      <p>Pick an example to see it in action.</p>
      <ul>
        {examples.map(({ path, title, description }) => (
          <li key={path}>
            <Link to={`/${path}`}>{title}</Link> — {description}
          </li>
        ))}
      </ul>
    </>
  )
}

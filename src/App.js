import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="appWrap">
      <header className="">
        <nav>
          <ul className="navMain">
            <li>
              <Link to ="guide">Grant Guide</Link>
            </li>
            <li>
              <Link to="templates"> Content Templates</Link> 
              </li>
            <li>
              <Link to ="portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
      <div className="hero">
        <div className="centered">
          <h1>Grants Guide</h1>
          <p>concise tagline</p>
          <h2>Science, medical and health projects</h2>
          <p> This site contains articles and bookmarks to save you time.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

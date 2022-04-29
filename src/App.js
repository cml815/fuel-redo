import { Link, Outlet } from 'react-router-dom';
import './App.css';
import './utils.css';

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
              <Link to="templates"> Grant Templates</Link> 
              </li>
            <li>
              <Link to ="about">About Us</Link>
            </li>
          </ul>
          <hr />
        </nav>
        <Outlet />
      </header>
      <section className="hero">
        <div className="heroContainer">
          <div className="heroText">
            <h1 className="xl">Grants Guide</h1>
            <p>concise tagline</p>
            <h2>Science, medical and health projects</h2>
            <p> This site contains articles and bookmarks to save you time.</p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { Link, Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          <h1>Get Ahead in Business</h1>
          <h2>Clear, persuasive content</h2>
          <p>Drive growth by making the most of your communications. </p>
        </div>
      </div>
    </div>
  );
}

export default App;

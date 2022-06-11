import { Outlet } from 'react-router-dom';
import MainNav from './components/MainNav';
import './App.css';
import './global.css';
import './utils.css';

function App() {
  return (
    <div className="appWrap">
      <header className="">
        <MainNav />
        <Outlet />
      </header>
      <section className="hero">
        <div className="heroContainer">
          <div className="heroText">
            <h1 className="xl">Grant Guide is Here!</h1>
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

import {Link, Outlet} from 'react-router-dom';
import '../App.css';
import '../global.css';
import '../utils.css';
import '../content.md';
import MainNav from '../components/MainNav';

export default function Guide() {
  return (
    <>
    <header className="">
        <MainNav />
        <Outlet />
      </header>
      <div className="flex">
        <nav className="sidebar">
          <Link to="/guide/sbir">SBIR</Link> {" "}
          <Link to="/guide/beginners">Beginners Guide</Link> {" "}
          <Link to="/templates">Templates</Link>{" "}
        </nav>
        <h2>Grant Guide</h2>
      </div>
      <Outlet />
     
    </>
  )
}

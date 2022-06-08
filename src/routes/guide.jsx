import {Link, Outlet} from 'react-router-dom';
import '../App.css';
import '../global.css';
import '../utils.css';
import '../content.md';

export default function Guide() {
  return (
    <>
      <div className="flex">
        <nav className="sidebar">
          <Link to="/sbir">SBIR</Link> {" "}
          <Link to="/beginners">Beginners Guide</Link> {" "}
          <Link to="/templates">Templates</Link>{" "}
        </nav>
        <h2>Grant Guide</h2>
      </div>
      <Outlet />
     
    </>
  )
}

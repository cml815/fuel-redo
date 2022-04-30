import {Link, Outlet} from 'react-router-dom';
import '../App.css';
import '../global.css';
import '../utils.css';

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

/* eslint-disable import/no-webpack-loader-syntax */
// import Content from '!@mdx-js/loader!./content.mdx'

// export default function Guide () {
//   return <Content />
// }

import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
    <>
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
    </>
  )
}
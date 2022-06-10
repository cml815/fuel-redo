import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
    <footer>
       <hr />
          <p>This is the footer</p>
          <ul className="">
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
        
        </footer>
    </>
  )
}
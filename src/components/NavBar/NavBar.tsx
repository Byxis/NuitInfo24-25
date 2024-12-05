import { Link } from "react-router-dom";
import "./NavBar.css"



function NavBar() {
  return(
    <nav>
        <div>
            <ul>
                <li>
                    <Link to="/test">Test</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
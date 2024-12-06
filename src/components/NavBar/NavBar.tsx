import { Link } from "react-router-dom";
import "./NavBar.css"



function NavBar() {
  return(
    <nav>
        <div>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/jeu-ludique-ocean">Jeu</Link>
                </li>
                <li>
                    <Link to="/a-propos">À propos</Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
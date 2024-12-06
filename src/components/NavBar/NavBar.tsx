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
                    <Link to="/jeu/carte-interactive">Carte Interactive</Link>
                </li>
                <li>
                    <Link to="/jeu/quiz">Quiz</Link>
                </li>
                <li>
                    <Link to="/solution">Solution</Link>
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
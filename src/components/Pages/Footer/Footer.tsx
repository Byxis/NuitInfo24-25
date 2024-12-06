import { Link } from 'react-router-dom';
import './Footer.css'


function Footer() {
    return(
        <div>
            <div className='footer-container'>
            <h2>Vous voulez en savoir plus ?</h2>
            Consultez nos autres pages pour découvrir des ressources supplémentaires et des initiatives locales que vous pouvez soutenir pour participer activement à la protection des océans !
                
                <ul className='footer-ul'>
                    <li className='card'><Link to="/jeu/carte-interactive">Carte Interactive</Link></li>
                    <li className='card'><Link to="/solution">Des solution pour l'avenir</Link></li>
                    <li className='card'><Link to="/a-propos">À Propos</Link></li>
                </ul>
            </div>
            <div id="footerTextWrapper">
                <footer>
                        Masse et Nous - Nuit de l'info 2024&#169;
                </footer>
            </div>
        </div>
    );
}
                    
                    

export default Footer
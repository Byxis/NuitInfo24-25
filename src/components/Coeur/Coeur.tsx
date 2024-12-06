import { Link } from 'react-router-dom'
import './Coeur.css'

function Coeur() {

  return (
    <>
      <div>
          <Link to="/CourantsOceaniques">
            <img src={"../src/assets/Coeur.svg"} className="Coeur" />
          </Link>
      </div>
      <h1>Coeur</h1>
    </>
  )
}

export default Coeur

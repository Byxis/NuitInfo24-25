import { Link } from 'react-router-dom'
import './SystemeImmunitaire.css'

function SystemeImmunitaire() {

  return (
    <>
      <div>
          <Link to="/RecifCorallien">
            <img src={"../src/assets/SystemeImmunitaire.svg"} className="CSystemeImmunitaireoeur" />
          </Link>
      </div>
      <h1>SystemeImmunitaire</h1>    
    </>
  )
}

export default SystemeImmunitaire

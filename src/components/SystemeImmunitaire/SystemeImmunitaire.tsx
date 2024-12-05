import { Link } from 'react-router-dom'
import './SystemeImmunitaire.css'

function SystemeImmunitaire() {

  return (
    <>
      <div>
          <Link to="/RecifCorallien">
            <img src={"../src/assets/SystemeImmunitaire.jpg"} className="CSystemeImmunitaireoeur" />
          </Link>
      </div>
      <h1>SystemeImmunitaire</h1>      
      <p className="read">
        Click on the SystemeImmunitaire !
      </p>
    </>
  )
}

export default SystemeImmunitaire

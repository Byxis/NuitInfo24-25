import { Link } from 'react-router-dom'
import './Poumons.css'

function Poumons() {

  return (
    <>
      <div>
          <Link to="/Plancton">
            <img src={"../src/assets/Poumons.svg"} className="Poumons" />
          </Link>
      </div>
      <h1>Poumons</h1>      
      <p className="read">
        Click sur le Poumons !
      </p>
    </>
  )
}

export default Poumons

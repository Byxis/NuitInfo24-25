import { Link } from 'react-router-dom'
import './Sang.css'

function Sang() {

  return (
    <>
      <div>
          <Link to="/Eau">
            <img src={"../src/assets/Sang.svg"} className="Sang" />
          </Link>
      </div>
      <h1>Sang</h1>      
      <p className="read">
        Click on the Sang !
      </p>
    </>
  )
}

export default Sang

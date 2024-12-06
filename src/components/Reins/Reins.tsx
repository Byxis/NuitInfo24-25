import { Link } from 'react-router-dom'
import './Reins.css'

function Reins() {

  return (
    <>
      <div>
          <Link to="/Mangroves">
            <img src={"../src/assets/Reins.svg"} className="Reins" />
          </Link>
      </div>
      <h1>Reins</h1>     
    </>
  )
}

export default Reins

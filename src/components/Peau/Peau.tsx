import { Link } from 'react-router-dom'
import './Peau.css'

function Peau() {

  return (
    <>
      <div>
          <Link to="/Surface">
            <img src={"../src/assets/Peau.svg"} className="Peau" />
          </Link>
      </div>
      <h1>Peau</h1>    
    </>
  )
}

export default Peau

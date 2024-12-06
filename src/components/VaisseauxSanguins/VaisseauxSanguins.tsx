import { Link } from 'react-router-dom'
import './VaisseauxSanguins.css'

function VaisseauxSanguins() {

  return (
    <>
      <div>
          <Link to="/RivieresFleuves">
            <img src={"../src/assets/VaisseauxSanguins.svg"} className="VaisseauxSanguins" />
          </Link>
      </div>
      <h1>VaisseauxSanguins</h1>   
    </>
  )
}

export default VaisseauxSanguins

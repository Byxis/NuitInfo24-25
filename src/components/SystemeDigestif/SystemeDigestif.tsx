import { Link } from 'react-router-dom'
import './SystemeDigestif.css'

function SystemeDigestif() {

  return (
    <>
      <div>
          <Link to="/ReseauTrophique">
            <img src={"../src/assets/SystemeDigestif.svg"} className="SystemeDigestif" />
          </Link>
      </div>
      <h1>SystemeDigestif</h1>      
      <p className="read">
        Click on the SystemeDigestif !
      </p>
    </>
  )
}

export default SystemeDigestif

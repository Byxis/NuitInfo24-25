import './Grid.css'
import Coeur from '../Coeur/Coeur'
import Poumons from '../Poumons/Poumons'
import SystemeDigestif from '../SystemeDigestif/SystemeDigestif'
import SystemeImmunitaire from '../SystemeImmunitaire/SystemeImmunitaire' 

const Grid = () => {
  return (
    <div className="grid-container">
        <div className="grid-item item-1"> <Coeur/> </div>
        <div className="grid-item item-2"> <Poumons/> </div>
        <div className="grid-item item-3"> <SystemeDigestif/> </div>
        <div className="grid-item item-4"> <SystemeImmunitaire/> </div>
    </div>
  );
};

export default Grid;

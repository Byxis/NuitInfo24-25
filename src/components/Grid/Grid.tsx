import './Grid.css'
import Coeur from '../Coeur/Coeur'
import Poumons from '../Poumons/Poumons'
import SystemeDigestif from '../SystemeDigestif/SystemeDigestif'
import SystemeImmunitaire from '../SystemeImmunitaire/SystemeImmunitaire' 
import Peau from '../Peau/Peau'
import Reins from '../Reins/Reins'
import Sang from '../Sang/Sang'
import VaisseauxSanguins from '../VaisseauxSanguins/VaisseauxSanguins'

const Grid = () => {
  return (
    <div className="grid-container">
        <div className="grid-item item-1"> <Coeur/> </div>
        <div className="grid-item item-2"> <Poumons/> </div>
        <div className="grid-item item-3"> <SystemeDigestif/> </div>
        <div className="grid-item item-4"> <SystemeImmunitaire/> </div>
        <div className="grid-item item-5"> <Peau/> </div>
        <div className="grid-item item-6"> <Reins/> </div>
        <div className="grid-item item-7"> <Sang/> </div>
        <div className="grid-item item-8"> <VaisseauxSanguins/> </div>
    </div>
  );
};

export default Grid;

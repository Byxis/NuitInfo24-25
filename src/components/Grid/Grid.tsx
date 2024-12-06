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
    <div id="grid-wrapper">
        <div className="grid-item" id="Coeur"> <Coeur /> </div>
        <div className="grid-item" id="Poumons"> <Poumons /> </div>
        <div className="grid-item" id="SystemeDigestif"> <SystemeDigestif /> </div>
        <div className="grid-item" id="SystemeImmunitaire"> <SystemeImmunitaire /> </div>
        <div className="grid-item" id="Peau"> <Peau /> </div>
        <div className="grid-item" id="Reins"> <Reins /> </div>
        <div className="grid-item" id="Sang"> <Sang /> </div>
        <div className="grid-item" id="VaisseauxSanguins"> <VaisseauxSanguins /> </div>
    </div>
  );
};

export default Grid;

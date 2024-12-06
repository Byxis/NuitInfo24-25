import Slots from "../Slots/Slots.tsx"
import ClassicCard, { ClassicCardSquare } from "./Card/ClassicCard.tsx"
import UserCard from "./Card/UserCard.tsx"
import './credit.css'

function Credit() {

  return (
    <div className="Credits">
      <div className="Developpers">
        <h1 className="para"> Devs du projet -</h1>
        <UserCard username="MaxbanCh"> </UserCard>
        <UserCard username="Byxis"> </UserCard>
        <UserCard username="yaya1541"> </UserCard>
        <UserCard username="dawoldo"> </UserCard>
        <UserCard username="Askneuh"> </UserCard>
        <UserCard username="SymetTr1x"> </UserCard>
      </div>
      <div >

      <div className="contexte">
        <h1 className="para">Evènement</h1>
        <ClassicCard name="Nuit de l'Info" website="https://www.nuitdelinfo.com" image="https://www.nuitdelinfo.com/materiel_communication/logo/N2i_logo-color.png" desc="Organisteur de l'évènement"></ClassicCard>
        <ClassicCardSquare name="Race for Water" website="https://www.raceforwater.org/fr/" image="https://upload.wikimedia.org/wikipedia/commons/3/3f/Race_for_Water_Foundation_-_Logo.svg" 
        desc="Fondation partenaire de l'évènement"></ClassicCardSquare>
        <ClassicCardSquare 
        name="Polytech Montpellier" website="https://polytech.umontpellier.fr/" image="https://www.polytech.umontpellier.fr/images/logo_entete.png" 
        desc="Notre organisateur local de La Nuit de l'info"></ClassicCardSquare>
      </div>
      </div>

      <Slots />

    </div>
    
  )
}

export default Credit

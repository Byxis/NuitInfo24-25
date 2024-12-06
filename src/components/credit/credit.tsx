import ClassicCard, { ClassicCardSquare } from "./Card/ClassicCard.tsx"
import UserCard from "./Card/UserCard.tsx"
import './credit.css'

function Credit() {

  return (
    <div classname="Credits">
      <div className="Developpers">
        <h1> Devs du projet -</h1>
        <UserCard username="MaxbanCh"> </UserCard>
        <UserCard username="Byxis"> </UserCard>
        <UserCard username="yaya1541"> </UserCard>
        <UserCard username="dawoldo"> </UserCard>
        <UserCard username="Askneuh"> </UserCard>
        <UserCard username="SymetTr1x"> </UserCard>
      </div>
      <div >

      <div className="contexte">
        <h1>Evenement</h1>
        <ClassicCard name="Nuit de l'Info" website="https://www.nuitdelinfo.com" image="https://www.nuitdelinfo.com/materiel_communication/logo/N2i_logo-color.png" desc="Organisteur de l'evenement"></ClassicCard>
        <ClassicCardSquare name="Race for Water" website="https://www.raceforwater.org/fr/" image="https://upload.wikimedia.org/wikipedia/commons/3/3f/Race_for_Water_Foundation_-_Logo.svg" 
        desc="Fondation partenaire de l'evenement"></ClassicCardSquare>
        
        <ClassicCardSquare 
        name="Polytech Montpellier" website="https://polytech.umontpellier.fr/" image="https://www.polytech.umontpellier.fr/images/logo_entete.png" 
        desc="Notre organisateur local de la nuit de l'info"></ClassicCardSquare>
      </div>

      <div className="Statut">
        <h1>Statut du Projet</h1>
        
      </div>

      </div>
    </div>
    
  )
}

export default Credit

import './ReseauTrophique.css'

function ReseauTrophique() {

  return (
    <>
      <div>
        <a href="https://fr.wikipedia.org/wiki/Réseau_trophique_marin">
          <img src={"../src/assets/ReseauTrophique.jpg"} className="ReseauTrophique" />
        </a>
      </div>
      <h1>ReseauTrophique</h1>
      <p className="read">
      Fonction humaine : Le système digestif décompose les aliments en nutriments utilisables par le corps.
      Equivalent océanique : Les récifs coralliens et les décomposeurs (comme les bactéries et les crustacés) jouent un rôle crucial dans le recyclage des nutriments dans l'écosystème marin
      </p>
    </>
  )
}

export default ReseauTrophique

import './Plancton.css'

function Plancton() {

  return (
    <>
      <div>
        <a href="https://fr.wikipedia.org/wiki/Plancton">
          <img src={"../src/assets/Plancton.jpg"} className="Plancton" />
        </a>
      </div>
      <h1>Plancton</h1>
      <p className="read">
      Fonction humaine : Les poumons permettent les échanges d'oxygène et de dioxyde de carbone avec l'air.
      Equivalent océanique : Le phytoplancton, par photosynthèse, produit plus de 50 % de l'oxygène que nous respirons, tout en absorbant une grande quantité de CO2.
      </p>
    </>
  )
}

export default Plancton

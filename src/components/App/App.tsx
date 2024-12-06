import CarteInteractive from '../CarteInteractive/CarteInteractive.tsx'
import { useState } from 'react'


function App2() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };
  return (
    <><div className="App">
      <header>
        <h1>{darkMode ? 'Mode Sombre' : 'Mode Clair'}</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Passer au mode clair' : 'Passer au mode sombre'}
        </button>
        <CarteInteractive />
      </header>
      <main>
      </main>
    </div>
    </>
  )
}

export default App2

import React from 'react'
import { Navbar, PokemonItem } from './components'
function App() {
  return (
    <div className="App_wrapper">
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <PokemonItem />
        </main>
        <footer>

        </footer>
      </div>
    </div>
  )
}

export default App;

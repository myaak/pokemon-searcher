
import { Navbar, PokemonItem, PokemonType} from './components'

import './components/styles.scss'
function App() {
  return (
    <div className="App_wrapper">
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="list">
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          <PokemonItem />
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </div>
  )
}

export default App;

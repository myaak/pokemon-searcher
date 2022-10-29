import { useState, useEffect, useCallback } from 'react'
import { Navbar, PokemonBigItem, PokemonList } from './components'
import './components/styles.scss'

function App() {

  //const [isLoading, setIsLoading] = useState<boolean>()
  const [bigItemActive, setBigItemActive] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const debounce = useCallback(() => {
    setTimeout(() => { }, 200)
  }, [])

  const handleActivateBitItem = () => {
    setBigItemActive((prev) => !prev)
  }

  const searchPokemons = (data: Array<Object>) => {
    debounce()
    if (search === "") {
      return data
    }
    return data.filter((item: any) =>
      item.title.toLowerCase().includes(search?.toLowerCase()))
  }

  useEffect(() => {

  }, [search])

  return (
    <div className="App_wrapper">
      {bigItemActive &&
        <PokemonBigItem />
      }
      <div className="App">
        <header>
          <Navbar
            searchPokemon={(value) => setSearch(value)}
          />
        </header>
        <main>
          <div className="content__wrapper">
            <div className="pokemon-list__wrapper">
              <PokemonList
                activateItem={handleActivateBitItem}
                filter={(data) => searchPokemons(data)}
              />
            </div>
          </div>
        </main>
        <footer>

        </footer>
      </div>
    </div>
  )
}

export default App;

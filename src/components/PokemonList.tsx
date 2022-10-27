import {useState, useEffect, useCallback} from 'react'
import PokemonItem from "./PokemonItem"
import PokemonType from "./PokemonType"

interface Props {
  filter:(data:any) => Array<Object>
  activateItem:() => void
}

const PokemonList = ({filter, activateItem}:Props) => {
  const types = ["fire","grass","ground","water","normal", 
    "ice","dark","poison","rock","flying","steel","fighting",
    "fairy", "electric", "dragon"]

  const [pokemons, setPokemons] = useState<Array<Object>>([])
  const [pokemonTypes, setPokemonTypes] = useState<Array<Object>>([])

   async function getPokemons() {
    await fetch(`http://192.168.0.104:8080/Pokemon`)
    .then(res => { return res.json() })
    .then(data => {
        setPokemons(filter(data))
      }) 
  }

  async function getPokemonTypes() {
    await fetch('http://192.168.0.104:8080/PokemonTypes')
    .then(res => { return res.json() })
    .then(data=> setPokemonTypes(data))
  }

  useEffect(() => {
    getPokemons()
    getPokemonTypes()
  },[filter])

  return (
    <div className="pokemon-list">
      <div className="pokemon-list__container">
      <ul>
        {
          pokemons.map((item: any, index: number) => (
            <PokemonItem 
              key={index}
              activateItem={activateItem}
              title={item.title}
              description={item.Description}
              imageSource={item.image}
              children={
            pokemonTypes.map((type:any, index:number) => (
              item.id === type.PokemonID &&
                <PokemonType key={index} title={types[type.PokemonType]}/>
            ))
              }
            />
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default PokemonList

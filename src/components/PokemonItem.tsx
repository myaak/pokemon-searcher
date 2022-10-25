import {PokemonType} from './'


const prop={title: 'Grass', source: 'grass.png'}

const PokemonItem = () => {
  return (
    <div className="PokemonItem__wrapper">
      <div className="PokemonItem__item">
        <div className="PokemonItem__image">
          <img src="bulb.png" />
        </div>
        <div className="PokemonItem__content">
          <div className="PokemonItem__title">
            BULBASAUR
          </div>
          <div className="PokemonItem__type">
            <span>Type:</span>
            <PokemonType 
              source={prop.source}
              />
            <PokemonType 
              source={'fire.png'}
              />
          </div>
          <div className="PokemonItem__description">
            <span>Description:</span>
            asds sad iasij
          </div>

        </div>
      </div>
    </div>

  )
}

export default PokemonItem

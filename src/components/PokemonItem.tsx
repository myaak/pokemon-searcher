import * as React from 'react'


const PokemonItem = () => {
  return(
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
            <img src="grass.png"/>

          </div>
          <div className="PokemonItem__description"></div>

        </div>
      </div>
    </div>

  )
}

export default PokemonItem

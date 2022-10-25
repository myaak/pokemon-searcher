import * as React from 'react'

import './styles.scss'

interface Props {
  source: string
}

const PokemonType = ({ source }: Props) => {
  return (
    <div className="PokemonType__wrapper">
      <div className="PokemonType__img">
        <img src={source} />
      </div>
      <div className="PokemonType__desc">{source.split('.')[0]}</div>
    </div>
  )
}

export default PokemonType 

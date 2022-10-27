import * as React from 'react'

import './styles.scss'

interface Props {
  title: string
}

const PokemonType = ({ title }: Props) => {
  return (
    <div className="PokemonType__wrapper">
      <div className="PokemonType__img">
        <img src={title + '.png'} />
      </div>
      <div className="PokemonType__desc">{title}</div>
    </div>
  )
}

export default PokemonType 

import * as React from 'react'

const PokemonType = (props: any) => {
  return (
    <div>
      <div className="">{props.title}</div>
      <img src={props.source} />
    </div>
  )
}

export default { PokemonType }

import { PokemonType, PokemonBigItem } from './'

interface Props {
  title: string,
  children?: React.ReactNode,
  description?: string,
  imageSource?: string
  activateItem:() => void
}

const PokemonItem = ({ title, children, description, imageSource, activateItem }: Props) => {

  const handleClick = () => {
    activateItem()
  }

  return (
    <div className="PokemonItem__wrapper" onClick={handleClick}>
      <div className="PokemonItem__item">
        <div className="PokemonItem__image">
          <img src={imageSource} />
        </div>
        <div className="PokemonItem__content">
          <div className="PokemonItem__title">
            {title}
          </div>
          <div className="PokemonItem__type">
            <span>Type:</span>
            {children}
          </div>
          <div className="PokemonItem__description">
            <span>Description:</span>
            {description}
          </div>

        </div>
      </div>
    </div>

  )
}

export default PokemonItem

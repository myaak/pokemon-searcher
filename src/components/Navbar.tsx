import { useEffect, useState } from 'react'
import './styles.scss'
interface Props {
  searchPokemon:(value:string) => void
}

const Navbar = ({searchPokemon}:Props) => {
  const [search, setSearch] = useState<string>()

  async function onSearch(e:any) {
    setSearch(e.target.value)
    searchPokemon(e.target.value)
  }

  useEffect(() => {

  },[search])

  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="navbar__logo">
          <img src="logo.png" />
        </div>
        <div className="navbar__searchbar">
          <input type="text" value={search}
            placeholder="Search by pokemon name"
            onChange={(e) => onSearch(e)} />
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <div className="navbar__menu">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
            <line x1="3" y1="12" x2="21" y2="12">
            </line>
            <line x1="3" y1="6" x2="21" y2="6">
            </line>
            <line x1="3" y1="18" x2="21" y2="18">
            </line>
          </svg>
        </div>
      </div>
    </div>
  )
}






export default Navbar

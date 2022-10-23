import {useState} from 'react'
import './styles.scss'

const Navbar = () => {
  const [search, setSearch] = useState<string>()

  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="navbar__logo">
          <img src="logo.jpg"/>
        </div>
          <div className="navbar__searchbar">
          <input type="text" value={search}
            placeholder = "Search by pokemon name"
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
      </div>
    </div>
  )
}






export default Navbar

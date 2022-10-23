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
            onChange={(e) => setSearch(e.target.value)}/>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        </div>
         <div className="navbar__menu">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
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

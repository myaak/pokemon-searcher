import {useState} from 'react'

const Navbar = () => {
  const [search, setSearch] = useState<string>()

  return (
    <div style={styles.wrapper} className="navbar__wrapper">
      <div style={styles.navbar} className="navbar">
        <div style={styles.logo} className="navbar__logo">
          <img style={{
            width:'200px',
            height:'72px'
          }} src="logo.jpg"/>
        </div>
          <div style={styles.search} className="navbar__searchbar">
          <input type="text" value={search} style={styles.searchBar}
            placeholder = "Search by pokemon name"
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>
      </div>
    </div>
  )
}


const styles = {
  wrapper :{
    width:'100vw',
    height:'72px',
    backgroundColor: 'black'
  },
  navbar: {
    display: 'flex',
    width:'1200px',
    height:'100%',
    margin:'0 auto'
  },
  logo: {

  },
  search: {

  },
  searchBar: {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid white',
    color: 'white',
    width: '300px',
    height: '30px'
  }

}




export default Navbar

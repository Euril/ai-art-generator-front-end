import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className={styles.nav}>
          <ul className={styles.container}>
            <div className={styles.leftnav}>
              <h2><Link to='/blogs'>AI Art Generator</Link></h2>
            </div>
            <div className={styles.rightnav}>
              <li><Link to="/createimage">Create Ai Art</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/profile">My Art</Link></li>
<<<<<<< HEAD
              <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
=======
              <li><Link to="/Login" onClick={handleLogout}>LOG OUT</Link></li>
>>>>>>> 8a6a8c355a016693507236750e557d322a67f4b0
            </div>
            
          </ul>
        </nav>
      :
        <nav>
          {/* <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul> */}
        </nav>
      }
    </>
  )
}

export default NavBar
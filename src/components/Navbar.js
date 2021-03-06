import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({icon, title}) => {
  return(
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {' '}<Link to='/'>{title}</Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Gitsearch',
  icon: 'fab fa-github'
}

export default Navbar
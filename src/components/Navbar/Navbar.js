import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav className='main-nav'>
      <Logo />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profil">Profil</Link>
        </li>
        <li>
          <Link to="/reglage">Réglage</Link>
        </li>
        <li>
          <Link to="/communaute">Communauté</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

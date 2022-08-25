import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navbar.scss'


const Navbar = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <Link to="/">Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/reglage">Réglage</Link>
        <Link to="/communaute">Communauté</Link>
      </ul>
    </nav>
  )
}

export default Navbar

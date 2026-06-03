import { Link } from 'react-router-dom'
import React, { useContext } from 'react'

import styles from './Navbar.module.css'

import Logo from '../../assets/img/logo.png'

/* contexts */
import { Context } from '../../context/UserContext'

/* hooks */

function Navbar() {
  const { authenticated, logout } = useContext(Context)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <img src={Logo} alt="PetMatch" />
        <h2 style={{ lineHeight: 2, color: '#333' }}><strong>[PetMatch]</strong></h2>
        <h5 style={{ lineHeight: 1, marginLeft: '10px' }}><i>by icoma.com</i></h5>
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/pet/myadoptions">Minhas Adoções</Link>
            </li>
            <li>
              <Link to="/pet/mypets">Meus Pets</Link>
            </li>
            <li>
              <Link to="/user/profile">Meu Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Registar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar

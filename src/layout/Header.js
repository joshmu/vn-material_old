import React from 'react'
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'

import style from '../styles.module.scss'

const Header = () => {
  return (
    <nav className={style.header}>
      <h1>
        <NavLink exact to="/">
          <FontAwesomeIcon icon={faListAlt} />
          <span className={style.logo}> V</span>ideo
          <span className={style.logo}>N</span>ote
        </NavLink>
      </h1>
      <ul>
        <NavLink activeClassName={style.active} exact to="/">
          <li>Video</li>
        </NavLink>
        <NavLink activeClassName={style.active} exact to="/notes">
          <li>Notes</li>
        </NavLink>
        <NavLink activeClassName={style.active} exact to="/about">
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header

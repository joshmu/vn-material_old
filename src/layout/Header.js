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
        <li>
          <NavLink activeClassName={style.active} exact to="/">
            Video
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={style.active} exact to="/todo">
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={style.active} exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header

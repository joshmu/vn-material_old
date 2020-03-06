import React from 'react'
import { NavLink } from 'react-router-dom'

import { header, initial, active } from './header.module.scss'

const Header = () => {
  return (
    <nav className={header}>
      <h1>
        <NavLink exact to="/">
          <span className={initial}>V</span>ideo
          <span className={initial}>N</span>ote
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink activeClassName={active} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={active} exact to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

import { header, initial } from './header.module.scss'

const Header = () => {
  return (
    <nav className={header}>
      <h1>
        <Link to="/">
          <span className={initial}>V</span>ideo
          <span className={initial}>N</span>ote
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header

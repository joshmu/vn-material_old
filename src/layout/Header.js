import React from 'react'

import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <nav className={headerStyles.header}>
      <h1>VideoNote</h1>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header

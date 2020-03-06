import React from 'react'

import { layoutStyle, container } from './layout.module.scss'

const Layout = props => {
  return (
    <div className={layoutStyle}>
      <div className={container}>{props.children}</div>
    </div>
  )
}

export default Layout

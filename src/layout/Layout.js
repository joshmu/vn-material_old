import React from 'react'

import style from '../styles.module.scss'

const Layout = props => {
  return (
    <div className={style.layout}>
      <div className={style.container}>{props.children}</div>
    </div>
  )
}

export default Layout

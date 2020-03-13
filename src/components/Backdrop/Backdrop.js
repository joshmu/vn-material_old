import React, { useContext } from 'react'

import { playerContext } from '../../context/player/PlayerState'

import style from './backdrop.module.scss'

const Backdrop = () => {
  const { ready } = useContext(playerContext)
  return (
    <div
      className={style.backdrop}
      style={{ display: ready ? 'block' : 'none' }}
    ></div>
  )
}

export default Backdrop

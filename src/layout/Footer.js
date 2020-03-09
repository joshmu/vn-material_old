import React from 'react'

import style from '../styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright, faHeart } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Developed with{' '}
        <FontAwesomeIcon
          icon={faHeart}
          style={{ color: 'rgb(250, 100, 100)' }}
        />{' '}
        by{' '}
        <a href="https://jos.com" target="_blank" rel="noopener noreferrer">
          <strong>MU</strong>
        </a>{' '}
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

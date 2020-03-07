import React from 'react'

import style from '../styles.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <p>
        Developed with{' '}
        <i className="fa fa-heart" style={{ color: 'rgb(250, 100, 100)' }}></i>{' '}
        by{' '}
        <a href="https://jos.com" target="_blank" rel="noopener noreferrer">
          <strong>MU</strong>
        </a>{' '}
        <i className="far fa-copyright"></i>
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

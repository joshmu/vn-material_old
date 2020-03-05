import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p>
        Developed with{' '}
        <i className="fa fa-heart" style={{ color: 'rgb(250, 100, 100)' }}></i>{' '}
        by{' '}
        <a href="https://jos.com" target="_blank" rel="noopener noreferrer">
          <strong>MU</strong>
        </a>
        {' ©'}
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

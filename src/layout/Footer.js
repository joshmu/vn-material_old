import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <p>
        Made with{' '}
        <i className="fa fa-heart" style={{ color: 'rgb(250, 100, 100)' }}></i>{' '}
        by{' '}
        <a href="https://joshmu.com" target="_blank" rel="noopener noreferrer">
          Mu
        </a>
        {' ©'}
        {new Date().getFullYear()}
      </p>
    </div>
  )
}

export default Footer

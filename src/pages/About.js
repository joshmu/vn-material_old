import React from 'react'

import styles from '../styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Thank you.</h2>
      <p>We hope you are enjoying VideoNote!</p>
      <p>Feel free to say hello and let us know what you think. =)</p>
      <ul>
        <li>
          <a href="https://joshmu.com">www.joshmu.com</a>
        </li>
        <li>
          <a href="https://instgram.com/joshmu">
            <FontAwesomeIcon icon={faInstagram} /> joshmu
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About

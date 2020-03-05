import React from 'react'

import { about, container } from './about.module.scss'

const About = () => {
  return (
    <div className={about}>
      <div className={container}>
        <h2>Thank you.</h2>
        <p>We hope you are enjoying VideoNote!</p>
        <p>Feel free to say hello and let us know what you think. =)</p>
        <ul>
          <li>
            <a href="https://joshmu.com">www.joshmu.com</a>
          </li>
          <li>
            <a href="https://instgram.com/joshmu">
              <i className="fab fa-instagram"></i> joshmu
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About

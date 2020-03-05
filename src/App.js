import React from 'react'

import Header from './layout/Header'
import Body from './layout/Body'
import Footer from './layout/Footer'

import appStyles from './app.module.scss'

function App() {
  return (
    <div className={appStyles.app}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'

import Header from './layout/Header'
import Footer from './layout/Footer'

import { app, container } from './app.module.scss'

function App() {
  return (
    <div className={app}>
      <Header />
      <div className={container}>Lettuce begin...</div>
      <Footer />
    </div>
  )
}

export default App

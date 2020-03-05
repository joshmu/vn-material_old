import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './pages/Home'
import About from './pages/About'

import { app, container } from './app.module.scss'

function App() {
  return (
    <div className={app}>
      <Router>
        <Header />
        <div className={container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App

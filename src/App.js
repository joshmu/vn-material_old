import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import { PlayerState } from './context/player/PlayerState'

import Layout from './layout/Layout'
import Video from './pages/Video'
import About from './pages/About'
import Todo from './pages/Todo'

import { app, container } from './app.module.scss'

function App() {
  return (
    <div className={app}>
      <PlayerState>
        <Router>
          <Header />
          <div className={container}>
            <Layout>
              <Switch>
                <Route exact path="/video" component={Video} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/about" component={About} />
                <Route component={Video} />
              </Switch>
            </Layout>
          </div>
          <Footer />
        </Router>
      </PlayerState>
    </div>
  )
}

export default App

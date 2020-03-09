import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import { PlayerState } from './context/player/PlayerState'
import { TodoState } from './context/todo/TodoState'

import Layout from './layout/Layout'
import VideoPage from './pages/VideoPage'
import AboutPage from './pages/AboutPage'
import Todo from './components/Todo'

// import 'normalize.css'

import './index.scss'
import styles from './styles.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <PlayerState>
        <TodoState>
          <Router>
            <Header />
            <Layout>
              <Switch>
                <Route exact path="/video" component={VideoPage} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/about" component={AboutPage} />
                <Route component={VideoPage} />
              </Switch>
            </Layout>
            <Footer />
          </Router>
        </TodoState>
      </PlayerState>
    </div>
  )
}

export default App

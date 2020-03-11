import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core'
import theme from './themes/theme'

import Header from './layout/Header'
import Footer from './layout/Footer'

import { PlayerState } from './context/player/PlayerState'
import { TodoState } from './context/todo/TodoState'

import Main from './layout/Main'
import VideoPage from './pages/VideoPage'
import AboutPage from './pages/AboutPage'
import Notes from './components/Notes'

// import 'normalize.css'
// import './index.scss'

const appContainerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div style={appContainerStyle}>
          <PlayerState>
            <TodoState>
              <Router>
                <Header />
                <Main>
                  <Switch>
                    <Route exact path="/" component={VideoPage} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={VideoPage} />
                  </Switch>
                </Main>
                <Footer />
              </Router>
            </TodoState>
          </PlayerState>
        </div>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App

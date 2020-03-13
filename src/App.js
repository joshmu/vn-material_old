import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './themes/theme'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Drawer from './components/Drawer/Drawer'
import Backdrop from './components/Backdrop/Backdrop'

import { PlayerState } from './context/player/PlayerState'
import { TodoState } from './context/todo/TodoState'

import Main from './layout/Main'
import AppPage from './pages/AppPage'
import AboutPage from './pages/AboutPage'
import Notes from './components/Notes/Notes'

import './index.scss'

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
                <Backdrop />
                <Header />
                <Main>
                  <Switch>
                    <Route exact path="/" component={AppPage} />
                    <Route exact path="/notes" component={Notes} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route component={AppPage} />
                  </Switch>
                </Main>

                <Drawer />
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

import React, { useState } from 'react'

import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core'
import theme from './themes/theme'

import Header from './layout/Header'
import Footer from './layout/Footer'
import Drawer from './components/Drawer/Drawer'
import Backdrop from './components/Backdrop/Backdrop'

import { PlayerState } from './context/player/PlayerState'
import { TodoState } from './context/todo/TodoState'

import Main from './layout/Main'
import AppContent from './components/AppContent/AppContent'
import About from './components/About/About'

import './index.scss'

const appContainerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column'
}

function App() {
  const [openAbout, setOpenAbout] = useState(false)

  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <div style={appContainerStyle}>
            <PlayerState>
              <TodoState>
                <Backdrop />
                <Header setOpenAbout={setOpenAbout} />
                <About open={openAbout} setOpen={setOpenAbout} />
                <Main>
                  <AppContent />
                </Main>
                <Drawer />
                <Footer />
              </TodoState>
            </PlayerState>
          </div>
        </StylesProvider>
      </ThemeProvider>
    </CssBaseline>
  )
}

export default App

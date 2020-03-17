import React, { useContext } from 'react'

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import { Theaters as TheatersIcon } from '@material-ui/icons'

import { globalContext } from '../context/global/GlobalState'

const useStyles = makeStyles(theme => ({
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  const {
    toggleSettingsOpen,
    toggleAboutOpen,
    toggleNotesDrawerOpen
  } = useContext(globalContext)

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleSettingsOpen}
        >
          <TheatersIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          VideoNote
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            toggleNotesDrawerOpen(true)
          }}
        >
          Notes
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            toggleSettingsOpen(true)
          }}
        >
          Settings
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            toggleAboutOpen(true)
          }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

import React, { useContext, Link } from 'react'

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import { Theaters as TheatersIcon } from '@material-ui/icons'

import { todoContext } from '../context/todo/TodoState'

const useStyles = makeStyles(theme => ({
  menuButton: {
    // marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = ({ setOpenAbout }) => {
  const classes = useStyles()
  const { toggleOpen } = useContext(todoContext)
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <TheatersIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          VideoNote
        </Typography>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="vn"
        >
          App
        </Button>{' '}
        <Button
          color="inherit"
          onClick={() => {
            toggleOpen(true)
          }}
        >
          Notes
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            setOpenAbout(true)
          }}
        >
          About
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

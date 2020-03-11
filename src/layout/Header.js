import React from 'react'
import { Link } from 'react-router-dom'

import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          VideoNote
        </Typography>
        <Button
          className={classes.button}
          color="inherit"
          component={Link}
          to="video"
        >
          Video
        </Button>
        <Button color="inherit" component={Link} to="notes">
          Notes
        </Button>
        <Button color="inherit" component={Link} to="about">
          About
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header

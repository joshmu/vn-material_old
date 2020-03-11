import React from 'react'
import { NavLink } from 'react-router-dom'

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
  root: {
    flexGrow: 1
  },
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
    <div className={classes.root}>
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
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faListAlt } from '@fortawesome/free-regular-svg-icons'

// import style from '../styles.module.scss'

// const Header = () => {
//   return (
//     <nav className={style.header}>
//       <h1>
//         <NavLink exact to="/">
//           <FontAwesomeIcon icon={faListAlt} />
//           <span className={style.logo}> V</span>ideo
//           <span className={style.logo}>N</span>ote
//         </NavLink>
//       </h1>
//       <ul>
//         <NavLink activeClassName={style.active} exact to="/">
//           <li>Video</li>
//         </NavLink>
//         <NavLink activeClassName={style.active} exact to="/notes">
//           <li>Notes</li>
//         </NavLink>
//         <NavLink activeClassName={style.active} exact to="/about">
//           <li>About</li>
//         </NavLink>
//       </ul>
//     </nav>
//   )
// }

export default Header

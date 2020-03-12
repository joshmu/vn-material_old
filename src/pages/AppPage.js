import React, { useState, useEffect, useContext } from 'react'
import { makeStyles, Grid } from '@material-ui/core'

import Player from '../components/react-player/Player'
import Notes from '../components/Notes'
import SourceLoader from '../components/SourceLoader'

import { playerContext } from '../context/player/PlayerState'

const drawerWidth = 340

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },

  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 1),
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start'
  // },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen
    // }),
    // marginRight: -drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen
    // }),
    // marginRight: 0,
    // width: '100%'
  }
}))

const AppPage = () => {
  const classes = useStyles()

  const { ready, url } = useContext(playerContext)
  const [init, setInit] = useState(false)

  // remember the previous url when switching route
  useEffect(() => {
    if (url) setInit(true)
  }, [url])

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        {init ? (
          <>
            <Player />
            {ready && <Notes />}
          </>
        ) : (
          <SourceLoader setInit={setInit} />
        )}
      </Grid>
    </Grid>
  )
}

export default AppPage

import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: 'lightgrey',
    flex: 1
  }
}))

const Main = props => {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      className={classes.root}
    >
      {props.children}
    </Grid>
  )
}

export default Main

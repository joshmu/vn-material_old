import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

const styles = {
  root: {
    backgroundColor: 'lightgrey',
    flex: 1
  }
}
const useStyles = makeStyles(styles)

const Main = props => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      {props.children}
    </Grid>
  )
}

export default Main

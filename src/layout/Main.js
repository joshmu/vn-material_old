import React from 'react'

import { Grid } from '@material-ui/core'

const Main = props => {
  return <Grid container>{props.children}</Grid>
}

export default Main

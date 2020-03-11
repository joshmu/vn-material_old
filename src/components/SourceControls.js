import React from 'react'
import { makeStyles, Grid, Button } from '@material-ui/core'
import { CloudUpload, Link } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: 'salmon'
  }
}))

const SourceControls = ({ urlSource, setUrlSource }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="flex-end">
        <Grid item>
          <Button
            color={urlSource ? 'secondary' : 'primary'}
            onClick={() => setUrlSource(false)}
            variant="contained"
            startIcon={<CloudUpload />}
          >
            File
          </Button>
        </Grid>

        <Grid item>
          <Button
            color={urlSource ? 'primary' : 'secondary'}
            onClick={() => setUrlSource(true)}
            variant="contained"
            startIcon={<Link />}
          >
            URL
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default SourceControls

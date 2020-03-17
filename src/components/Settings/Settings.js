import React, { useContext } from 'react'
import {
  Grid,
  Typography,
  Button,
  Paper,
  makeStyles,
  Dialog,
  DialogContent,
  DialogActions
} from '@material-ui/core'

import { globalContext } from '../../context/global/GlobalState'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '2rem'
  },
  smile: {
    marginBottom: '2rem',
    marginTop: '0.5rem'
  }
}))

const Settings = () => {
  const classes = useStyles()

  const { settingsOpen, toggleSettingsOpen } = useContext(globalContext)

  return (
    <div>
      <Dialog
        onClose={toggleSettingsOpen}
        aria-labelledby="settings"
        open={settingsOpen}
      >
        <DialogContent dividers>
          <Grid container justify="center" style={{ marginTop: '2rem' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Paper elevation={3} className={classes.paper}>
                <Typography>Settings</Typography>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={toggleSettingsOpen} color="primary">
            Let's go!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Settings

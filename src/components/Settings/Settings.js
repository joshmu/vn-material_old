import React, { useContext } from 'react'
import {
  Grid,
  Typography,
  Button,
  Paper,
  makeStyles,
  Dialog,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
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

  const {
    settingsOpen,
    toggleSettingsOpen,
    bufferSeconds,
    setBufferSeconds
  } = useContext(globalContext)

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

                <FormControl>
                  <InputLabel htmlFor="standard-adornment-bufferSeconds">
                    Buffer (seconds)
                  </InputLabel>
                  <Input
                    id="standard-adornment-bufferSeconds"
                    type="number"
                    value={bufferSeconds}
                    onChange={e => setBufferSeconds(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="seconds buffer"></IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
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

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
import {
  Instagram as InstagramIcon,
  Mood as MoodIcon
} from '@material-ui/icons'

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

const About = () => {
  const classes = useStyles()

  const { aboutOpen, toggleAboutOpen } = useContext(globalContext)

  return (
    <div>
      <Dialog
        onClose={toggleAboutOpen}
        aria-labelledby="about-information"
        open={aboutOpen}
      >
        <DialogContent dividers>
          <Grid container justify="center" style={{ marginTop: '2rem' }}>
            <Grid item style={{ textAlign: 'center' }}>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h2">Thank you.</Typography>
                <Typography>We hope you are enjoying VideoNote!</Typography>
                <Typography>
                  Feel free to say hello and let us know what you think.
                </Typography>
                <MoodIcon className={classes.smile} />
                <Typography>
                  <Button
                    href="https://joshmu.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    www.joshmu.com
                  </Button>
                </Typography>
                <Button
                  href="https://instagram.com/joshmu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={toggleAboutOpen} color="primary">
            Have fun!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default About

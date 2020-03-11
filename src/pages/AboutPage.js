import React from 'react'
import { Grid, Typography, Button, Paper, makeStyles } from '@material-ui/core'
import {
  Instagram as InstagramIcon,
  Mood as MoodIcon
} from '@material-ui/icons'

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

  return (
    <Grid container justify="center">
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
  )
}

export default About

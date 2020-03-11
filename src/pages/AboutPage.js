import React from 'react'
import { Grid, Typography, Link } from '@material-ui/core'
import {
  Instagram as InstagramIcon,
  Mood as MoodIcon
} from '@material-ui/icons'

const About = () => {
  return (
    <Grid container justify="center">
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant="h2">Thank you.</Typography>
        <Typography>We hope you are enjoying VideoNote!</Typography>
        <Typography>
          Feel free to say hello and let us know what you think.
        </Typography>
        <MoodIcon style={{ marginBottom: '2rem', marginTop: '0.5rem' }} />
        <Typography>
          <Link
            to="https://joshmu.com"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            www.joshmu.com
          </Link>
        </Typography>
        <Link
          to="https://instagram.com/joshmu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ marginTop: '0.5rem' }} />
        </Link>
      </Grid>
    </Grid>
  )
}

export default About

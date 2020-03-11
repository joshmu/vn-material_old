import React from 'react'
import { makeStyles, Typography, Link } from '@material-ui/core'
import { FavoriteBorder, Copyright } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  icon: {
    position: 'relative',
    top: '0.05rem',
    width: '0.8rem',
    height: '0.8rem'
  }
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography display="block" variant="body2" align="center">
        Developed with{' '}
        <FavoriteBorder
          className={classes.icon}
          style={{ color: 'rgb(250, 100, 100)' }}
          fontSize="small"
        />{' '}
        by{' '}
        <Link
          color="inherit"
          href="https://joshmu.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>MU</strong>
        </Link>{' '}
        <Copyright className={classes.icon} fontSize="small" />
        {new Date().getFullYear()}
      </Typography>
    </div>
  )
}

export default Footer

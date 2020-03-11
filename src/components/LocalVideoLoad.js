import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: 'salmon',
    textAlign: 'right'
  },
  input: {
    display: 'none'
  }
}))

const VideoFileSource = ({ onFileChange }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <label htmlFor="videoFile">
        <input
          className={classes.input}
          id="videoFile"
          name="videoFile"
          type="file"
          onChange={onFileChange}
        />
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          component="span"
          color="primary"
        >
          Locate Video
        </Button>
      </label>
    </div>
  )
}

export default VideoFileSource

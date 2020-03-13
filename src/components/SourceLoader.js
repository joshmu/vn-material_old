import React, { useContext, useState } from 'react'
import { Grid, Input } from '@material-ui/core'
import LocalVideoLoad from './LocalVideoLoad'

import { playerContext } from '../context/player/PlayerState'

const LoadSource = ({ setInit }) => {
  const [url, setUrl] = useState('')

  const { loadVideo } = useContext(playerContext)

  const onFileChange = e => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setUrl(url)
    loadVideo(url)
    setInit(true)
  }

  const onChange = e => {
    setUrl(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
    // prevent submit on blank input
    if (url.length > 0) {
      loadVideo(url)
      setInit(true)
    }
  }

  return (
    <div style={{ paddingTop: '2rem' }}>
      <Grid
        container
        spacing={3}
        justify="center"
        align="center"
        direction="row"
        // style={{ backgroundColor: 'grey' }}
      >
        <Grid item xs={10} md={3}>
          <LocalVideoLoad onFileChange={onFileChange} />
        </Grid>
        <Grid item xs={10} md={6}>
          <form onSubmit={onSubmit}>
            <label htmlFor="videoUrl"></label>
            <Input
              autoFocus
              id="videoUrl"
              name="videoUrl"
              type="text"
              value={url}
              onChange={onChange}
              placeholder="Or Paste Url & Smack Enter..."
              onSubmit={onSubmit}
              fullWidth
            />
          </form>
        </Grid>
      </Grid>
    </div>
  )
}

export default LoadSource

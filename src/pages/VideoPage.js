import React, { useState, useEffect, useContext } from 'react'
import { Grid } from '@material-ui/core'

import Player from '../components/react-player/Player'
import Notes from '../components/Notes'
import SourceLoader from '../components/SourceLoader'

import { playerContext } from '../context/player/PlayerState'

const VideoPage = () => {
  const { ready, url } = useContext(playerContext)
  const [init, setInit] = useState(false)

  // remember the previous url when switching route
  useEffect(() => {
    if (url) setInit(true)
  }, [url])

  return (
    <Grid container>
      <Grid item xs={12}>
        {init ? (
          <>
            <Player />
            {ready && <Notes />}
          </>
        ) : (
          <SourceLoader setInit={setInit} />
        )}
      </Grid>
    </Grid>
  )
}

export default VideoPage

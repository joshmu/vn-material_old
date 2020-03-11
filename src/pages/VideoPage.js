import React, { useState, useContext } from 'react'
import { Grid } from '@material-ui/core'

import Player from '../components/react-player/Player'
import Notes from '../components/Notes'
import SourceLoader from '../components/SourceLoader'

import { playerContext } from '../context/player/PlayerState'

const VideoPage = () => {
  const [init, setInit] = useState(false)
  const { ready } = useContext(playerContext)

  return (
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
  )
}

export default VideoPage

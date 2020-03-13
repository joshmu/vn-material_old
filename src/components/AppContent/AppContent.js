import React, { useState, useEffect, useContext } from 'react'
import { Grid } from '@material-ui/core'

import Player from '../Player/Player'
import Notes from '../Notes/Notes'
import SourceLoader from '../SourceLoader'

import { playerContext } from '../../context/player/PlayerState'

const AppPage = () => {
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
            {ready && (
              <Grid container justify="center">
                <Grid item md={9}>
                  <Notes />
                </Grid>
              </Grid>
            )}
          </>
        ) : (
          <SourceLoader setInit={setInit} />
        )}
      </Grid>
    </Grid>
  )
}

export default AppPage

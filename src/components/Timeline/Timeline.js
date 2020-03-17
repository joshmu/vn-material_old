import React, { useContext } from 'react'
import { LinearProgress } from '@material-ui/core'
import { playerContext } from '../../context/player/PlayerState'

import style from './timeline.module.scss'

const Timeline = () => {
  const { progress } = useContext(playerContext)
  /*
  progress: {
        playedSeconds: 0,
        played: 0,
        loadedSeconds: 0,
        loaded: 0
      }
      */

  return (
    <div className={style.timeline}>
      <LinearProgress
        variant="buffer"
        value={+(progress.played * 100).toFixed(2)}
        valueBuffer={+(progress.loaded * 100).toFixed(2)}
        color="primary"
      />
    </div>
  )
}

export default Timeline

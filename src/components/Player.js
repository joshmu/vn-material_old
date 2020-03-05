import React from 'react'

import ReactPlayer from 'react-player'

import { player, reactPlayer } from './player.module.scss'

const Player = ({ url }) => {
  return (
    <div className={player}>
      <ReactPlayer
        className={reactPlayer}
        url={url}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
            preload: true
          }
        }}
      />
    </div>
  )
}

export default Player

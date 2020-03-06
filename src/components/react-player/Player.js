import React, { useEffect, useContext, useRef } from 'react'

import ReactPlayer from 'react-player'

import { playerContext } from '../../context/player/PlayerState'

// TEST URL:
// https://www.youtube.com/watch?v=hE2Ira-Cwxo

import {
  controlStyle,
  playerStyle,
  reactPlayerStyle
} from './player.module.scss'

const Player = () => {
  const player = useRef(null)

  const {
    url,
    playing,
    togglePlay,
    onReady,
    ready,
    onStart,
    onPlay,
    onPause,
    onDuration,
    duration,
    onProgress,
    progress
  } = useContext(playerContext)

  useEffect(() => {
    console.log('url changed!', url)
  }, [url])

  return (
    <>
      <div className={playerStyle}>
        <ReactPlayer
          ref={player}
          className={reactPlayerStyle}
          url={url}
          onReady={onReady}
          onStart={onStart}
          playing={playing}
          onPlay={onPlay}
          onPause={onPause}
          onDuration={onDuration}
          onProgress={onProgress}
          width="100vw"
          height="100%"
          config={{
            youtube: {
              playerVars: { showinfo: 1, autoplay: 1 },
              preload: true
            }
          }}
        />
      </div>
      {/* <div className={controlStyle}>
        {ready && (
          <button onClick={togglePlay}>{playing ? 'PAUSE' : 'PLAY'}</button>
        )}
      </div> */}
    </>
  )
}

export default Player

import React, { useEffect, useContext, useRef } from 'react'

import ReactPlayer from 'react-player'

import { playerContext } from '../../context/player/PlayerState'

// TEST URL:
// https://www.youtube.com/watch?v=hE2Ira-Cwxo

import style from '../../styles.module.scss'

const Player = () => {
  const player = useRef(null)

  const {
    url,
    playing,
    // togglePlay,
    nativeControls,
    onReady,
    // ready,
    onStart,
    onPlay,
    onPause,
    onDuration,
    // duration,
    onProgress,
    setPlayer
    // progress
  } = useContext(playerContext)

  useEffect(() => {
    console.log('url changed!', url)
    setPlayer(player.current)
  }, [url, player])

  return (
    <>
      <div className={style.player}>
        <ReactPlayer
          ref={player}
          className={style.reactPlayer}
          url={url}
          controls={nativeControls}
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
      {/* <div className={style.controls}>
        {ready && (
          <button onClick={togglePlay}>{playing ? 'PAUSE' : 'PLAY'}</button>
        )}
      </div> */}
    </>
  )
}

export default Player

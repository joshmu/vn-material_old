import React, { useEffect, useContext, useRef } from 'react'

import ReactPlayer from 'react-player'

import { todoContext } from '../../context/todo/TodoState'
import { playerContext } from '../../context/player/PlayerState'

// TEST URL:
// https://www.youtube.com/watch?v=hE2Ira-Cwxo

// TODO: width: calc(100% - drawerWidth) > react player
// todo: player.wrapper.style.width = 'width'
// todo: player.wrapper.style.width = window.innerWidth - 360 + 'px'
import style from '../../styles.module.scss'

const Player = () => {
  const player = useRef(null)

  const { open, drawerWidth } = useContext(todoContext)

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
    // eslint-disable-next-line
  }, [url, player])

  return (
    <div
      className={style.player}
      style={{ width: open ? `calc(100% - ${drawerWidth})` : '100%' }}
    >
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
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { showinfo: 1, autoplay: 0 },
            preload: true
          }
        }}
      />
    </div>
  )
}

export default Player

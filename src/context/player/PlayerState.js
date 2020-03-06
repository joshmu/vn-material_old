import React, { createContext, useReducer } from 'react'
import playerReducer from './playerReducer'

import {
  TOGGLE_PLAY,
  ON_READY,
  ON_START,
  ON_PLAY,
  ON_PAUSE,
  ON_DURATION,
  LOAD_VIDEO
} from '../Types'

// create context
const playerContext = createContext()

// export provider with actions
const PlayerState = props => {
  const initialState = {
    playing: false,
    ready: false,
    duration: 0,
    url: null
  }

  // reducer handles state manipulation
  const [state, dispatch] = useReducer(playerReducer, initialState)

  // actions
  const loadVideo = url => {
    console.log('load video', url)
    dispatch({
      type: LOAD_VIDEO,
      payload: url
    })
  }

  const togglePlay = () => {
    console.log('toggling play/pause')
    dispatch({
      type: TOGGLE_PLAY
    })
  }

  const onReady = () => {
    console.log('onReady')
    dispatch({
      type: ON_READY
    })
  }

  const onStart = () => {
    console.log('onStart')
    dispatch({
      type: ON_START
    })
  }

  const onPlay = () => {
    console.log('onPlay')
    dispatch({
      type: ON_PLAY
    })
  }

  const onPause = () => {
    console.log('onPause')
    dispatch({
      type: ON_PAUSE
    })
  }

  const onDuration = duration => {
    console.log('onDuration')
    dispatch({
      type: ON_DURATION,
      payload: duration
    })
  }

  // return provider
  return (
    <playerContext.Provider
      value={{
        playing: state.playing,
        ready: state.ready,
        duration: state.duration,
        url: state.url,
        loadVideo,
        togglePlay,
        onReady,
        onStart,
        onPlay,
        onPause,
        onDuration
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}

export { PlayerState, playerContext }

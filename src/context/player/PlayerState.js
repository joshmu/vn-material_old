import React, { createContext, useReducer } from 'react'
import playerReducer from './playerReducer'

import {
  TOGGLE_PLAY,
  ON_READY,
  ON_START,
  ON_PLAY,
  ON_PAUSE,
  ON_DURATION,
  ON_PROGRESS,
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
    url: null,
    progress: {
      playedSeconds: 0,
      played: 0,
      loadedSeconds: 0,
      loaded: 0
    }
  }

  // reducer handles state manipulation
  const [state, dispatch] = useReducer(playerReducer, initialState)

  // hold all esential data in 'v' which is given to value prop (this avoids the mistake of forgetting to add actions as props)
  const v = {
    playing: state.playing,
    ready: state.ready,
    duration: state.duration,
    url: state.url,
    progress: state.progress
  }

  // actions
  v.loadVideo = url => {
    console.log('load video', url)
    dispatch({
      type: LOAD_VIDEO,
      payload: url
    })
  }

  v.togglePlay = () => {
    console.log('toggling play/pause')
    dispatch({
      type: TOGGLE_PLAY
    })
  }

  v.onReady = () => {
    console.log('onReady')
    dispatch({
      type: ON_READY
    })
  }

  v.onStart = () => {
    console.log('onStart')
    dispatch({
      type: ON_START
    })
  }

  v.onPlay = () => {
    console.log('onPlay')
    dispatch({
      type: ON_PLAY
    })
  }

  v.onPause = () => {
    console.log('onPause')
    dispatch({
      type: ON_PAUSE
    })
  }

  v.onDuration = duration => {
    console.log('onDuration', duration)
    dispatch({
      type: ON_DURATION,
      payload: duration
    })
  }

  v.onProgress = state => {
    // console.log('onProgress', state)
    dispatch({
      type: ON_PROGRESS,
      payload: state
    })
  }

  // return provider
  return (
    <playerContext.Provider value={v}>{props.children}</playerContext.Provider>
  )
}

export { PlayerState, playerContext }
import React, { createContext, useReducer } from 'react'

import globalReducer from './globalReducer'

import {
  TOGGLE_SETTINGS_OPEN,
  TOGGLE_ABOUT_OPEN,
  TOGGLE_NOTES_DRAWER_OPEN,
  SET_BUFFER_SECONDS
} from '../Types'

// create the context
const globalContext = createContext()

// export the state in a provider
const GlobalState = props => {
  const initialState = {
    settingsOpen: false,
    aboutOpen: false,
    notesDrawerOpen: false,
    bufferSeconds: -3
  }

  // better control of state using reducer
  const [state, dispatch] = useReducer(globalReducer, initialState)

  const v = {
    settingsOpen: state.settingsOpen,
    aboutOpen: state.aboutOpen,
    notesDrawerOpen: state.notesDrawerOpen,
    bufferSeconds: state.bufferSeconds
  }

  // actions
  v.toggleSettingsOpen = open => {
    dispatch({
      type: TOGGLE_SETTINGS_OPEN,
      payload: open
    })
  }

  v.toggleAboutOpen = open => {
    dispatch({
      type: TOGGLE_ABOUT_OPEN,
      payload: open
    })
  }

  v.toggleNotesDrawerOpen = open => {
    dispatch({
      type: TOGGLE_NOTES_DRAWER_OPEN,
      payload: open
    })
  }

  v.setBufferSeconds = secs => {
    dispatch({
      type: SET_BUFFER_SECONDS,
      payload: secs
    })
  }

  // provider
  return (
    <globalContext.Provider value={v}>{props.children}</globalContext.Provider>
  )
}

export { globalContext, GlobalState }

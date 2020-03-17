import {
  TOGGLE_SETTINGS_OPEN,
  TOGGLE_ABOUT_OPEN,
  TOGGLE_NOTES_DRAWER_OPEN,
  SET_BUFFER_SECONDS
} from '../Types'

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.settingsOpen,
        aboutOpen: false,
        notesDrawerOpen: false
      }
    case TOGGLE_ABOUT_OPEN:
      return {
        ...state,
        aboutOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.aboutOpen,
        settingsOpen: false,
        notesDrawerOpen: false
      }
    case TOGGLE_NOTES_DRAWER_OPEN:
      return {
        ...state,
        notesDrawerOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.notesDrawerOpen,
        settingsOpen: false,
        aboutOpen: false
      }
    case SET_BUFFER_SECONDS:
      return {
        ...state,
        bufferSeconds: action.payload
      }
    default:
      return state
  }
}

import {
  TOGGLE_SETTINGS_OPEN,
  TOGGLE_ABOUT_OPEN,
  TOGGLE_NOTES_DRAWER_OPEN
} from '../Types'

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS_OPEN:
      return {
        ...state,
        settingsOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.settingsOpen
      }
    case TOGGLE_ABOUT_OPEN:
      return {
        ...state,
        aboutOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.aboutOpen
      }
    case TOGGLE_NOTES_DRAWER_OPEN:
      return {
        ...state,
        notesDrawerOpen:
          typeof action.payload === 'boolean'
            ? action.payload
            : !state.notesDrawerOpen
      }
    default:
      return state
  }
}

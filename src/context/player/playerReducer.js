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

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_PLAY:
      return {
        ...state,
        playing: !state.playing
      }
    case ON_READY:
      return {
        ...state,
        ready: true
      }
    case ON_START:
      return {
        ...state,
        playing: true
      }
    case ON_PLAY:
      return {
        ...state
      }
    case ON_PAUSE:
      return {
        ...state
      }
    case ON_DURATION:
      return {
        ...state,
        duration: action.payload
      }
    case ON_PROGRESS:
      return {
        ...state,
        progress: action.payload
      }
    case LOAD_VIDEO:
      return {
        ...state,
        url: action.payload
      }
    default:
      return state
  }
}

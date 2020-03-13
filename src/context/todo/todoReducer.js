import {
  ADD_TODO,
  UPDATE_TODO,
  UPDATE_NEW_TODO,
  TOGGLE_OPEN,
  SET_ACTION_INPUT_REF
} from '../Types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        newTodo: {
          msg: '',
          seconds: null,
          checked: false
        },
        todos: [...state.todos, state.newTodo]
      }
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        )
      }
    case UPDATE_NEW_TODO:
      return {
        ...state,
        newTodo: { ...state.newTodo, ...action.payload }
      }
    case TOGGLE_OPEN:
      return {
        ...state,
        open: typeof action.payload === 'boolean' ? action.payload : !state.open
      }
    case SET_ACTION_INPUT_REF:
      return {
        ...state,
        actionInputRef: action.payload
      }
    default:
      return state
  }
}

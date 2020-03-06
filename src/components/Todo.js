import React, { useState, useContext } from 'react'

import { playerContext } from '../context/player/PlayerState'

import { todoStyle, formStyle } from './todo.module.scss'

const Todo = () => {
  const [state, setState] = useState({
    current: '',
    todos: []
  })

  const { progress } = useContext(playerContext)

  const onSubmit = e => {
    e.preventDefault()
    const newTodo = `${state.current} (${progress.playedSeconds.toFixed(2)}s)`
    setState({
      current: '',
      todos: [...state.todos, newTodo]
    })
  }

  const onChange = e => {
    setState({
      current: e.target.value,
      todos: [...state.todos]
    })
  }

  return (
    <div className={todoStyle}>
      <form className={formStyle} onSubmit={onSubmit}>
        <label htmlFor="addTodo">Add Todo</label>
        <input
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Add note..."
          value={state.current}
          onChange={onChange}
        />
        <button>Add</button>
      </form>
      <ul>
        {state.todos.length > 0 &&
          state.todos.map((todo, idx) => <li key={idx}>{todo}</li>)}
      </ul>
    </div>
  )
}

export default Todo

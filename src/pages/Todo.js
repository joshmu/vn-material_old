import React, { useState } from 'react'

import Layout from '../layout/Layout'

import { todoStyle, container, formStyle } from './todo.module.scss'

const Todo = () => {
  const [state, setState] = useState({
    current: '',
    todos: []
  })

  const onSubmit = e => {
    e.preventDefault()
    setState({
      current: '',
      todos: [...state.todos, state.current]
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
        {state.todos.length > 0 && state.todos.map(todo => <li>{todo}</li>)}
      </ul>
    </div>
  )
}

export default Todo

import React, { useState, useEffect, useContext } from 'react'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const Todo = () => {
  const [state, setState] = useState({
    current: {
      todo: '',
      seconds: null
    },
    todos: []
  })

  const { progress } = useContext(playerContext)

  useEffect(() => {
    if (state.current.todo.length > 0 && state.current.seconds === null) {
      console.log('setting timestamp')
      setState({
        ...state,
        current: {
          todo: state.current.todo,
          seconds: +progress.playedSeconds.toFixed(2)
        }
      })
    }
  }, [state.current.todo])

  const onSubmit = e => {
    e.preventDefault()
    const newTodo = `${state.current.todo} (${state.current.seconds}s)`
    setState({
      current: { todo: '', seconds: null },
      todos: [...state.todos, newTodo]
    })
  }

  const onChange = e => {
    setState({
      current: { todo: e.target.value, seconds: state.current.seconds },
      todos: [...state.todos]
    })
  }

  return (
    <div className={style.todo}>
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="addTodo">Add Todo</label>
        <p>{progress.playedSeconds.toFixed(2)}</p>
        <input
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Add note..."
          value={state.current.todo}
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

import React, { useState, useEffect, useContext } from 'react'

import TodoItem from './TodoItem'
import Duration from './Duration'

import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const Todo = () => {
  const [state, setState] = useState({
    current: {
      msg: '',
      seconds: null,
      checked: false
    },
    todos: []
  })

  const { progress, ready } = useContext(playerContext)

  useEffect(() => {
    if (state.current.msg.length > 0 && state.current.seconds === null) {
      console.log('setting timestamp')
      setState({
        ...state,
        current: {
          ...state.current,
          seconds: Math.round(progress.playedSeconds)
        }
      })
    }
  }, [state.current.msg])

  const onSubmit = e => {
    e.preventDefault()
    // add todo and reset current
    setState({
      current: { msg: '', seconds: null, checked: false },
      todos: [...state.todos, state.current]
    })
  }

  const onChange = e => {
    console.log('onChange')
    setState({
      ...state,
      current: {
        ...state.current,
        msg: e.target.value
      }
    })
  }

  return (
    <div className={style.todo}>
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="addTodo">Add Todo</label>
        <input
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Add note..."
          value={state.current.msg}
          onChange={onChange}
        />
        {ready && (
          <Duration
            className={style.timer}
            seconds={
              state.current.seconds === null
                ? Math.round(progress.playedSeconds)
                : state.current.seconds
            }
          />
        )}
        {/* <div className={style.timer}>
            <span>
              {state.current.seconds === null
                ? Math.round(progress.playedSeconds)
                : state.current.seconds}
            </span>
          </div> */}
        <button>Add</button>
      </form>
      <ul className={style.ul}>
        {state.todos.length > 0 &&
          state.todos.map((todo, idx) => <TodoItem key={idx} todo={todo} />)}
      </ul>
    </div>
  )
}

export default Todo

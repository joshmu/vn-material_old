import React, { useEffect, useContext } from 'react'

// todo: click timestamp on todo input to disable timestamp add
// todo: seek whilst there is a note changes timestamp
// todo: selected note jumps to timestamp
// todo: selected note click timestamp and seek to change the time
// todo: full screen video with note input
// todo: sidebar opens with all notes
// todo: can have notes without timestamps
// todo: as video plays relevant todo shows/highlighted whilst timestamp is met
// todo: save todos to csv so it can be re-used for other purposes
// todo: load back in csv? with video url too?

import TodoItem from './TodoItem'
import Duration from './Duration'

import { playerContext } from '../context/player/PlayerState'
import { todoContext } from '../context/todo/TodoState'

import style from '../styles.module.scss'

const Todo = () => {
  const { newTodo, todos, addTodo, updateNewTodo } = useContext(todoContext)
  const { progress, ready, togglePlay } = useContext(playerContext)

  useEffect(() => {
    if (newTodo.msg.length > 0 && newTodo.seconds === null) {
      console.log('setting timestamp')
      updateNewTodo({
        seconds: progress.playedSeconds
      })
    }
  }, [newTodo.msg])

  const onSubmit = e => {
    e.preventDefault()
    addTodo()
  }

  const onChange = e => {
    updateNewTodo({
      // don't apply space when toggling play/pause on empty input
      msg: e.target.value === ' ' ? '' : e.target.value
    })
  }

  const onKeyDown = e => {
    // keyboard shortcuts on empty todo
    if (newTodo.msg === '') {
      console.log('key', e.key)
      if (e.key === ' ') {
        togglePlay()
      }
      if (e.key === 'ArrowLeft') {
        // todo: seek vid
      }
      if (e.key === 'ArrowRight') {
        // todo: seek vid
      }
      if (e.key === 'ArrowUp') {
        // todo: volume?
      }
      if (e.key === 'ArrowDown') {
        // todo: volume?
      }
    }
  }

  return (
    <div className={style.todo}>
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="addTodo"></label>
        <input
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Add note..."
          value={newTodo.msg}
          autocomplete="off"
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        {ready && (
          <Duration
            className={style.timer}
            seconds={
              newTodo.seconds === null
                ? progress.playedSeconds
                : newTodo.seconds
            }
          />
        )}
        {/* <div className={style.timer}>
            <span>
              {state.newTodo.seconds === null
                ? Math.round(progress.playedSeconds)
                : state.newTodo.seconds}
            </span>
          </div> */}
        {/* <button>Add</button> */}
      </form>
      <ul className={style.ul}>
        {todos.length > 0 &&
          todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default Todo

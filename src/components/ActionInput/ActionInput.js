import React, { useRef, useContext, useEffect } from 'react'

import Duration from '../Duration'
import Timeline from '../Timeline'

import { playerContext } from '../../context/player/PlayerState'
import { todoContext } from '../../context/todo/TodoState'

import style from './actionInput.module.scss'

const ActionInput = () => {
  const inputRef = useRef()

  const { newTodo, addTodo, updateNewTodo, setActionInputRef } = useContext(
    todoContext
  )
  const { progress, ready, togglePlay, seekTo } = useContext(playerContext)

  useEffect(() => {
    if (newTodo.msg.length > 0 && newTodo.seconds === null) {
      console.log('setting timestamp')
      updateNewTodo({
        seconds: progress.playedSeconds
      })
    }
    // eslint-disable-next-line
  }, [newTodo.msg])

  useEffect(() => {
    setActionInputRef(inputRef)
    // eslint-disable-next-line
  }, [])

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
        const destination = progress.playedSeconds - 10
        if (destination > 0) {
          seekTo(destination)
        } else {
          // start of clip
          seekTo(0)
        }
      }
      if (e.key === 'ArrowRight') {
        const destination = progress.playedSeconds + 10
        seekTo(destination)
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
    <div>
      <Timeline />
      <form className={style.form} onSubmit={onSubmit}>
        <label htmlFor="addTodo"></label>
        <input
          ref={inputRef}
          id="addTodo"
          name="addTodo"
          type="text"
          placeholder="Add note..."
          value={newTodo.msg}
          autoComplete="off"
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
      </form>
    </div>
  )
}

export default ActionInput

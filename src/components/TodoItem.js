import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Duration from './Duration'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import { todoContext } from '../context/todo/TodoState'
import { playerContext } from '../context/player/PlayerState'

import style from '../styles.module.scss'

const TodoItem = ({ todo: { id, msg, seconds, checked }, focusInput }) => {
  const { updateTodo } = useContext(todoContext)
  const { seekTo } = useContext(playerContext)

  const onTodoClick = () => {
    console.log('onTodoClick')
    focusInput()
    seekTo(seconds)
  }

  const onCheck = () => {
    console.log('check')
    updateTodo({
      id,
      checked: !checked
    })
  }

  return (
    <li className={`${style.todoItem} todoItem ${checked && 'checked'}`}>
      <span className={`${style.checked} check`} onClick={onCheck}>
        {checked ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </span>
      <p className="msg" onClick={onTodoClick}>
        {msg}
      </p>
      <Duration className={`${style.timestamp} duration`} seconds={seconds} />
      {/* <span className={style.timestamp}>{seconds}s</span> */}
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  focusInput: PropTypes.func.isRequired
}

export default TodoItem

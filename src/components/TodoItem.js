import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Duration from './Duration'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'

import { todoContext } from '../context/todo/TodoState'

import style from '../styles.module.scss'

const TodoItem = ({ todo: { id, msg, seconds, checked } }) => {
  const { updateTodo } = useContext(todoContext)

  const onEditMsg = msg => {
    console.log('clicked', msg)
  }

  const onCheck = () => {
    console.log('check')
    updateTodo({
      id,
      checked: !checked
    })
  }

  return (
    <li className={style.todoItem}>
      <span className={style.checked} onClick={onCheck}>
        {checked ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </span>
      <p onClick={onEditMsg}>{msg}</p>
      <Duration className={style.timestamp} seconds={seconds} />
      {/* <span className={style.timestamp}>{seconds}s</span> */}
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

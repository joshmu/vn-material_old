import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from '../styles.module.scss'

const TodoItem = ({ todo: { msg, seconds, checked } }) => {
  const [done, setDone] = useState(checked)

  const onClick = msg => {
    console.log('clicked', msg)
  }

  return (
    <li className={style.todoItem} onClick={() => onClick(msg)}>
      <span className={style.checked}>
        {checked ? (
          <i className="far fa-check-circle"></i>
        ) : (
          <i className="far fa-circle"></i>
        )}
      </span>
      <p>{msg}</p>
      <span className={style.timestamp}>{seconds}</span>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

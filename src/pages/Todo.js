import React from 'react'

import { todoStyle, container } from './todo.module.scss'

const Todo = () => {
  return (
    <div className={todoStyle}>
      <div className={container}>
        <h2>TODO</h2>
      </div>
    </div>
  )
}

export default Todo

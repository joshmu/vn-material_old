import React, { useContext } from 'react'
import { List } from '@material-ui/core'

import TodoItem from '../TodoItem/TodoItem'

import { todoContext } from '../../context/todo/TodoState'

import style from './notesList.module.scss'

const NotesList = () => {
  const { todos } = useContext(todoContext)
  return (
    <>
      {todos.length > 0 && (
        <List className={style.notesList}>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </>
  )
}

export default NotesList

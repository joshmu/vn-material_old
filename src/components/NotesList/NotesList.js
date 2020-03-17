import React, { useContext, useEffect } from 'react'
import { List } from '@material-ui/core'

import TodoItem from '../TodoItem/TodoItem'

import { todoContext } from '../../context/todo/TodoState'

import style from './notesList.module.scss'

const NotesList = () => {
  const { todos, setTodos } = useContext(todoContext)

  // set todos if they are present in local storage
  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem('todos'))
    console.log({ localTodos })
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos)
    } else {
      console.log('no todos found in localStorage')
    }
    // eslint-disable-next-line
  }, [])

  // whenever todos change then lets update the localStorage
  useEffect(() => {
    console.log('set todos in localStorage', { todos })
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

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

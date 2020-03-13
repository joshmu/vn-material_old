import React, { useEffect, useContext } from 'react'
import { Grid, List } from '@material-ui/core'

// todo: click timestamp on todo input to disable timestamp add
// todo: seek whilst there is a note changes timestamp
// todo: selected note click timestamp and seek to change the time
// todo: full screen video with note input
// todo: sidebar opens with all notes
// todo: can have notes without timestamps
// todo: as video plays relevant todo shows/highlighted whilst timestamp is met
// todo: save todos to csv so it can be re-used for other purposes
// todo: load back in csv? with video url too?
// todo: context auto saved to localStorage?
// todo: width of video to view port OR 90% of height?

import ActionInput from '../ActionInput/ActionInput'
import TodoItem from '../TodoItem/TodoItem'

import { playerContext } from '../../context/player/PlayerState'
import { todoContext } from '../../context/todo/TodoState'

import style from './notes.module.scss'

const Todo = () => {
  const { newTodo, todos, updateNewTodo, actionInputRef } = useContext(
    todoContext
  )
  const { progress, ready } = useContext(playerContext)

  return (
    <Grid container justify="center">
      <Grid item className={style.notes} xs={10}>
        <ActionInput />

        {todos.length > 0 && (
          <List className={style.list}>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </List>
        )}
      </Grid>
    </Grid>
  )
}

export default Todo

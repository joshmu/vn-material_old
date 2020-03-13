import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Duration from '../Duration'

import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  IconButton
} from '@material-ui/core'
import { RadioButtonUnchecked, DoneOutline } from '@material-ui/icons'

import { todoContext } from '../../context/todo/TodoState'
import { playerContext } from '../../context/player/PlayerState'

import style from './todoItem.module.scss'

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
    <ListItem
      key={id}
      role={undefined}
      dense
      button
      // onClick={handleToggle(value)}
    >
      <ListItemIcon onClick={onCheck}>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': id }}
        />
      </ListItemIcon>
      <ListItemText id={id} primary={msg} onClick={onTodoClick} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments">
          <Duration className={style.timestamp} seconds={seconds} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>

    // <li className={`${style.todoItem} todoItem ${checked && 'checked'}`}>
    //   <span className={`${style.checked} check`} onClick={onCheck}>
    //     {checked ? <DoneOutline /> : <RadioButtonUnchecked />}
    //   </span>
    //   <p className={style.msg} onClick={onTodoClick}>
    //     {msg}
    //   </p>
    //   <Duration className={style.timestamp} seconds={seconds} />
    // </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  focusInput: PropTypes.func.isRequired
}

export default TodoItem

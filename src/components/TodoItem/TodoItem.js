import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Timestamp from '../Timestamp/Timestamp'

import {
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon,
  Typography
} from '@material-ui/core'

import { todoContext } from '../../context/todo/TodoState'
import { playerContext } from '../../context/player/PlayerState'
import { globalContext } from '../../context/global/GlobalState'

import style from './todoItem.module.scss'

const TodoItem = ({ todo: { id, msg, seconds, checked } }) => {
  const { updateTodo, actionInputRef } = useContext(todoContext)
  const { seekTo } = useContext(playerContext)
  const { bufferSeconds } = useContext(globalContext)

  const onTodoClick = () => {
    console.log('onTodoClick')
    actionInputRef.current.focus()
    console.log({ bufferSeconds })
    seekTo(seconds + bufferSeconds)
  }

  const onCheck = () => {
    console.log('check')
    updateTodo({
      id,
      checked: !checked
    })
  }

  const formattedSeconds =
    seconds + bufferSeconds >= 0 ? seconds + bufferSeconds : 0

  return (
    <ListItem
      key={id}
      role={undefined}
      dense
      button
      // onClick={handleToggle(value)}
    >
      <ListItemIcon onClick={onCheck} className={style.listItemIcon}>
        <Checkbox
          edge="start"
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': id }}
        />
      </ListItemIcon>
      <ListItemText
        id={id}
        primary={<Typography variant="body1">{msg}</Typography>}
        onClick={onTodoClick}
      />
      <ListItemSecondaryAction>
        <Timestamp className={style.timestamp} seconds={formattedSeconds} />
      </ListItemSecondaryAction>
    </ListItem>

    // <li className={`${style.todoItem} todoItem ${checked && 'checked'}`}>
    //   <span className={`${style.checked} check`} onClick={onCheck}>
    //     {checked ? <DoneOutline /> : <RadioButtonUnchecked />}
    //   </span>
    //   <p className={style.msg} onClick={onTodoClick}>
    //     {msg}
    //   </p>
    //   <Timestamp className={style.timestamp} seconds={seconds} />
    // </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

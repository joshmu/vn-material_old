import React from 'react'

import { IconButton } from '@material-ui/core'

import style from './timestamp.module.scss'

const Timestamp = ({ seconds }) => {
  const dateTime = `P${Math.round(seconds)}S`
  return (
    <div className={style.timestamp}>
      <IconButton edge='end' aria-label='timestamp'>
        <time dateTime={dateTime} className={style.time}>
          {format(seconds)}
        </time>
      </IconButton>
    </div>
  )
}

export default Timestamp

function format(seconds) {
  const date = new Date(seconds * 1000)
  const hh = date.getUTCHours()
  const mm = date.getUTCMinutes()
  const ss = pad(date.getUTCSeconds())
  return hh ? `${hh}:${pad(mm)}:${ss}` : `${mm}:${ss}`
}

function pad(string) {
  return ('0' + string).slice(-2)
}

import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'

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
import NotesList from '../NotesList/NotesList'

import style from './notes.module.scss'

const Todo = () => {
  return (
    <Grid container justify="center">
      <Grid item className={style.notes} xs={12}>
        <ActionInput />
        <NotesList />
      </Grid>
    </Grid>
  )
}

export default Todo

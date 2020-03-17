import React, { useContext, useEffect } from 'react'
import {
  makeStyles,
  useTheme,
  Drawer,
  Divider,
  IconButton
} from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'

import Notes from '../Notes/Notes'

import { todoContext } from '../../context/todo/TodoState'
import { globalContext } from '../../context/global/GlobalState'

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: '360px',
    backgroundColor: 'var(--drawerBg)'
  }
}))

const NotesSidebar = () => {
  const classes = useStyles()
  const theme = useTheme()

  const { actionInputRef } = useContext(todoContext)
  const { notesDrawerOpen, toggleNotesDrawerOpen } = useContext(globalContext)

  useEffect(() => {
    if (notesDrawerOpen) {
      actionInputRef.current.focus()
    }
    // eslint-disable-next-line
  }, [notesDrawerOpen])

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={notesDrawerOpen}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div>
        <IconButton onClick={toggleNotesDrawerOpen}>
          {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <Notes />
    </Drawer>
  )
}

export default NotesSidebar

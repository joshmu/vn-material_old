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

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: '360px',
    backgroundColor: 'rgba(225,225,235,1)'
  }
}))

const NotesSidebar = () => {
  const classes = useStyles()
  const theme = useTheme()

  const { toggleOpen, open, actionInputRef } = useContext(todoContext)

  useEffect(() => {
    if (open) {
      actionInputRef.current.focus()
    }
    // eslint-disable-next-line
  }, [open])

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div>
        <IconButton onClick={toggleOpen}>
          {theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />
      <Notes />
    </Drawer>
  )
}

export default NotesSidebar

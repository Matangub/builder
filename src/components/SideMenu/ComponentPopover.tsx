import React, { useState, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Popover } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: 'none',
  },
  popoverContent: {
    pointerEvents: 'auto',
    height: '90vh',
    overflowY: 'scroll',
    padding: theme.spacing(3),
  },
}))

const ComponentPopover = ({ loading, login, wrong, clearWrongLogin }: Props) => {
  const [openedPopover, setOpenedPopover] = useState(false)
  const popoverAnchor = useRef(null)

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true)
  }

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false)
  }

  const classes = useStyles()

  return (
    <div>
      <span
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        MUI Button
      </span>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        <div>My popover content...</div>
      </Popover>
    </div>
  )
}

export default ComponentPopover

import React, { useState } from 'react'
import { Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { List as ListIcon } from '@material-ui/icons'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import ComponentPopover from './ComponentPopover'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(2, 0, 0),
    maxHeight: '95vh',
    overflowY: 'scroll',
  },
  innerList: {
    marginLeft: theme.spacing(2),
    fontSize: 14,
  },
  title: {},
  category: {
    fontWeight: 800,
  },
  listItem: {
    cursor: 'pointer',
    padding: `${theme.spacing(2)} 0`,
  },
}))
// import InfiniteScroll from 'react-infinite-scroll-component'

function SideMenu() {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h5" className={classes.title}>
        Components
      </Typography>
      <div className={classes.wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(i => (
          <List key={i} dense={true}>
            <ListItem>
              <Typography variant="h6" className={classes.title}>
                Category {i}
              </Typography>
            </ListItem>

            <div className={classes.innerList}>
              <ListItem>
                <ComponentPopover />
              </ListItem>
            </div>
          </List>
        ))}
      </div>
    </>
  )
}

export default SideMenu

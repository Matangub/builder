import React, { useContext } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ChooseLibraryPopup from './SettingsPopup'
import SideMenu from '@/components/SideMenu/SideMenu'

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
  },
  grid: {
    height: '100%',
    padding: 0,
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <>
      <Grid className={classes.grid} container spacing={0}>
        <Grid item xs={2}>
          <Paper elevation={3} className={classes.paper}>
            <SideMenu />
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
      </Grid>
      <ChooseLibraryPopup />
    </>
  )
}

export default Home

import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Switch from '@material-ui/core/Switch'

import Context from '@/store/context'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  formControl: {
    marginTop: theme.spacing(2),
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  librarySelect: {
    minWidth: 150,
  },
}))

export default function SettingsPopup() {
  const classes = useStyles()
  const { globalState, globalDispatch } = useContext(Context)
  console.log(globalState)

  const [open, setOpen] = React.useState(!globalState.library)
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('sm')

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const setLibrary = event => globalDispatch({ type: 'SET_LIBRARY', payload: event.target.value })

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked)
  }

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <DialogContentText>Choose your UI library</DialogContentText>
              <Select
                autoFocus
                className={classes.librarySelect}
                value={globalState.library || ''}
                onChange={setLibrary}
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="Material UI">Material UI</MenuItem>
                <MenuItem value="Ant Design">Ant Design</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            LET`S GO
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

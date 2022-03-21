import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material"
import {Subject} from "rxjs"
import {useEffect, useState} from "react"

export interface AppDialogProps {
  contentText?: string
  agreeAction?: () => void
  disagreeAction?: () => void
  open: boolean
}

export const appDialog$ = new Subject<AppDialogProps>()

const AppDialog = () => {
  const [dialogProps, setDialogProps] = useState<AppDialogProps>({open: false})
  const {contentText, agreeAction, disagreeAction, open} = dialogProps

  useEffect(() => {
    const appDialogSub = appDialog$.subscribe({
      next: value => setDialogProps(value)
    })
    return () => {
      appDialogSub.unsubscribe()
    }
  })

  const disagreeHandler = () => {
    disagreeAction && disagreeAction()
    setDialogProps(prevState => ({...prevState, open: false}))
  }

  const agreeHandler = () => {
    agreeAction && agreeAction()
    setDialogProps(prevState => ({...prevState, open: false}))
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        {contentText && <DialogContentText>{contentText}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        {disagreeAction && <Button variant="contained" onClick={disagreeHandler} autoFocus>Cancel</Button>}
        {agreeAction && <Button variant="text" onClick={agreeHandler}>Confirm</Button>}
      </DialogActions>
    </Dialog>
  )
}

export default AppDialog
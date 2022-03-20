import {Button, Dialog, DialogActions, DialogContent, DialogContentText} from "@mui/material"
import {Subject} from "rxjs"
import {useEffect, useState} from "react"

interface AppDialogProps {
  contentText?: string
  agreeAction?: () => void
  disagreeAction?: () => void
}

export const appDialog$ = new Subject<AppDialogProps>()

const AppDialog = () => {
  const [dialogProps, setDialogProps] = useState<AppDialogProps>({})
  const {contentText, agreeAction, disagreeAction} = dialogProps

  useEffect(() => {
    const appDialogSub = appDialog$.subscribe({
      next: value => setDialogProps(value)
    })
    return () => {
      appDialogSub.unsubscribe()
    }
  })

  return (
    <Dialog open={true}>
      <DialogContent>
        {contentText && <DialogContentText>
          {contentText}
        </DialogContentText>}
      </DialogContent>
      <DialogActions>
        {disagreeAction && <Button onClick={disagreeAction}>Disagree</Button>}
        <Button onClick={() => {
        }} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AppDialog
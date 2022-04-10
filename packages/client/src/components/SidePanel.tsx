import { Box, Drawer, IconButton, PaperProps } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Subject } from "rxjs"
import CloseIcon from "@mui/icons-material/Close"

type AnchorProps = "top" | "left" | "bottom" | "right"

export interface SidePanelProps {
  children?: React.ReactNode,
  anchor?: AnchorProps
  showCloseIcon?: boolean
  open?: boolean
  paperProps?: Partial<PaperProps>
  transitionDuration?: number
}

export const sidePanel$ = new Subject<SidePanelProps>()

const SidePanel = () => {
  const [ sidePanelProps, setSidePanelProps ] = useState<SidePanelProps>({
    open: false,
    anchor: "left",
    children: null
  })

  useEffect(() => {
    const sidePanelSub = sidePanel$.subscribe({
      next: value => setSidePanelProps(prevState => ({
        ...value,
        children: value.children || prevState.children,
        anchor: value.anchor || prevState.anchor,
        open: value.open !== undefined ? value.open : true,
        paperProps: value.paperProps || prevState.paperProps,
        transitionDuration: value.transitionDuration || prevState.transitionDuration
      }))
    })
    return () => {
      sidePanelSub.unsubscribe()
    }
  }, [])

  const onDrawerClose = () => {
    setSidePanelProps(prevState => ({ ...prevState, open: false }))
  }

  const { anchor, open, paperProps, showCloseIcon, children, transitionDuration } = sidePanelProps

  return (
    <Drawer anchor={anchor} open={open} onClose={onDrawerClose} transitionDuration={transitionDuration}
            PaperProps={paperProps}>
      {showCloseIcon && <Box sx={{ position: "absolute", top: 0, right: "-3rem" }}>
          <IconButton color="primary" size="large" sx={{ color: "white" }} onClick={onDrawerClose}>
              <CloseIcon/>
          </IconButton>
      </Box>}
      {children}
    </Drawer>
  )
}

export default SidePanel
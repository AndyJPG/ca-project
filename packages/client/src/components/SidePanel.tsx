import {Box, Drawer, IconButton, PaperProps} from "@mui/material"
import React, {useEffect, useState} from "react"
import {Subject} from "rxjs"
import CloseIcon from "@mui/icons-material/Close"

type AnchorProps = "top" | "left" | "bottom" | "right"

export interface SidePanelProps {
  children?: React.ReactNode,
  anchor?: AnchorProps
  showCloseIcon?: boolean
  open?: boolean
  paperProps?: Partial<PaperProps>
}

export const sidePanel$ = new Subject<SidePanelProps>()

export const SidePanel = () => {
  const [open, setOpen] = useState(false)
  const [showCloseIcon, setShowCloseIcon] = useState<boolean | undefined>(undefined)
  const [children, setChildren] = useState<React.ReactNode | null>(null)
  const [anchor, setAnchor] = useState<AnchorProps>("left")
  const [paperProps, setPaperProps] = useState<Partial<PaperProps> | undefined>(undefined)

  useEffect(() => {
    const sidePanelSub = sidePanel$.subscribe({
      next: value => {
        value.children && setChildren(value.children)
        value.anchor && setAnchor(value.anchor)
        setShowCloseIcon(value.showCloseIcon)
        value.open !== undefined ? setOpen(value.open) : setOpen(true)
        setPaperProps(value.paperProps)
      }
    })
    return () => {
      sidePanelSub.unsubscribe()
    }
  }, [])

  return (
    <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)} PaperProps={paperProps}>
      {showCloseIcon && <Box sx={{position: "absolute", top: 0, right: "-3rem"}}>
          <IconButton color="primary" size="large" sx={{color: "white"}} onClick={() => setOpen(false)}>
              <CloseIcon/>
          </IconButton>
      </Box>}
      {children}
    </Drawer>
  )
}

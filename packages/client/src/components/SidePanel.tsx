import {Box, Drawer, IconButton} from "@mui/material"
import React, {useEffect, useState} from "react"
import {Subject} from "rxjs"
import CloseIcon from "@mui/icons-material/Close"

type AnchorProps = "top" | "left" | "bottom" | "right"

interface SidePanelProps {
  children: React.ReactNode,
  anchor?: AnchorProps
  closeIcon?: boolean
}

export const sidePanel$ = new Subject<SidePanelProps>()

export const SidePanel = () => {
  const [open, setOpen] = useState(false)
  const [closeIcon, setCloseIcon] = useState(false)
  const [children, setChildren] = useState<React.ReactNode | null>(null)
  const [anchor, setAnchor] = useState<AnchorProps>("left")

  useEffect(() => {
    sidePanel$.subscribe({
      next: value => {
        setChildren(value.children)
        value.anchor && setAnchor(value.anchor)
        value.closeIcon && setCloseIcon(value.closeIcon)
        setOpen(true)
      }
    })
  }, [])

  return (
    <Drawer anchor={anchor} open={open} onClose={() => setOpen(false)}>
      {closeIcon && <Box sx={{position: "absolute", top: 0, right: "-3rem"}}>
          <IconButton color="primary" size="large" onClick={() => setOpen(false)}>
              <CloseIcon/>
          </IconButton>
      </Box>}
      {children}
    </Drawer>
  )
}

import * as React from "react"
import {Slide, useScrollTrigger} from "@mui/material"

export const ShowOnScroll = (props: { children: React.ReactElement, threshold?: number }) => {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: props.threshold
  })

  return (
    <Slide appear={true} direction="down" in={trigger}>
      {props.children}
    </Slide>
  )
}

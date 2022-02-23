import * as React from "react"
import {Container, ContainerProps, styled} from "@mui/material"

export const BaseContainer = styled(Container)<ContainerProps>(({theme}) => ({
  padding: "1rem 2rem",
  width: "100%",
  background: "transparent"
}))

import * as React from 'react'
import {Container, SxProps, Theme} from "@mui/material"

interface BaseContainerProps {
  id?: string
  children?: React.ReactNode
  sx?: SxProps<Theme>
}

export const BaseContainer = ({sx = [], ...props}: BaseContainerProps) => {
  const {id, children} = props
  
  return (
    <Container id={id} sx={[{
      margin: '1rem 0',
      padding: '0 2rem',
      width: '100%',
      background: 'transparent'
    }, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Container>
  )
}

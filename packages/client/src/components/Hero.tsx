import {Box} from "@mui/material"
import * as React from "react"

interface HeroProps {
  heroImageUrl?: string
}

export const Hero = (props: HeroProps) => {
  const {heroImageUrl} = props

  if (!heroImageUrl) {
    return null
  }

  return (
    <Box sx={{
      maxHeight: '10rem',
      height: '10rem',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      <img alt="Dumpling" src={heroImageUrl}
           style={{width: '100%'}}/>
    </Box>
  )
}

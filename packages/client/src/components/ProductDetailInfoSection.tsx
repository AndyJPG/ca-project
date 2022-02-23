import {Box, Typography} from "@mui/material"
import * as React from "react"

interface ProductDetailInfoSectionProps {
  title: string
  content: string
}

export const ProductDetailInfoSection = (props: ProductDetailInfoSectionProps) => {
  const {title, content} = props
  return (
    <Box sx={{mt: "2.8rem"}}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="body2">{content}</Typography>
    </Box>
  )
}

import {Box, Typography} from "@mui/material"
import * as React from "react"
import {useNavigate} from "react-router-dom"

interface ProductListItemProps {
  id: string
  subtitle: string
  price: number
  description?: string
  imageUrl?: string
  imageTop?: boolean
}

export const ProductListItem = (props: ProductListItemProps) => {
  const navigate = useNavigate()
  const {id, subtitle, price, description, imageUrl, imageTop} = props
  return (
    <Box sx={{
      width: "100%",
      height: "9rem",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      position: "relative",
      background: "white",
      overflow: "hidden",
      marginBottom: "1rem",
      boxShadow: theme => theme.themeShadows[1],
      borderRadius: theme => theme.shape.borderRadius
    }} onClick={() => navigate(id)}>
      <Box sx={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0.75rem 1rem"
      }}>
        <Typography variant="subtitle1">{subtitle.slice(0, 1).toUpperCase()}{subtitle.slice(1)}</Typography>
        {description &&
        <Typography variant="body1">{description.slice(0, 1).toUpperCase()}{description.slice(1)}</Typography>}
        <Box flexGrow={1}/>
        <Typography fontWeight="body1">${price}</Typography>
      </Box>
      {imageUrl && (
        <Box sx={{
          height: "9rem",
          width: "9rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}>
          <img src={imageUrl}
               style={{height: "100%", width: "auto"}}
               alt={subtitle}/>
        </Box>
      )}
    </Box>
  )
}

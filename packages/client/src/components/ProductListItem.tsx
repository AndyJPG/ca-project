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
      display: "flex",
      flexWrap: imageTop ? "wrap" : "nowrap",
      flexDirection: imageTop ? "column-reverse" : "initial",
      alignItems: "center",
      position: "relative",
      background: "white",
      overflow: "hidden",
      marginTop: "1rem",
      boxShadow: theme => theme.themeShadows[1],
      borderRadius: theme => theme.shape.borderRadius
    }} onClick={() => navigate(id)}>
      <Box sx={{flexGrow: 1, padding: imageUrl ? "0 1rem" : "1rem"}}>
        <Typography variant="subtitle1">{subtitle.slice(0, 1).toUpperCase()}{subtitle.slice(1)}</Typography>
        <Typography fontWeight="body2" sx={{marginY: "0.2rem", fontSize: "0.875rem"}}>${price}</Typography>
        {description && !imageTop &&
        <Typography variant="body1">{description.slice(0, 1).toUpperCase()}{description.slice(1)}</Typography>}
      </Box>
      {imageUrl && (
        <Box sx={{
          height: imageTop ? "8.25rem" : "7rem",
          width: imageTop ? "100%" : "7rem",
          marginBottom: imageTop ? "0.4rem" : "0",
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

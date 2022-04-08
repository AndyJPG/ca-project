import Product from "@ca/common/domain/product/Product"
import { Box, Typography } from "@mui/material"
import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface ProductListItemProps {
  product: Product
}

export const ProductListItem = (props: ProductListItemProps) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id, name, price, description, imageUrl } = props.product
  return (
    <Box sx={{
      width: "100%",
      height: imageUrl ? "9rem" : "6rem",
      display: "flex",
      flexWrap: "nowrap",
      alignItems: "center",
      position: "relative",
      background: "white",
      overflow: "hidden",
      marginBottom: "1rem",
      boxShadow: theme => theme.themeShadows[1],
      borderRadius: theme => theme.shape.borderRadius
    }} onClick={() => navigate(id, {
      state: {
        backgroundLocation: location,
        from: location,
        product: props.product
      }
    })}>
      <Box sx={{
        flexGrow: 1,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0.75rem 1rem"
      }}>
        <Typography variant="subtitle1">{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
        {description &&
            <Typography variant="body1"
                        sx={{
                          color: theme => theme.palette.text.secondary,
                          mb: 0
                        }}>{description.slice(0, 1).toUpperCase()}{description.slice(1)}</Typography>}
        {imageUrl && <Box flexGrow={1}/>}
        {imageUrl && <Typography fontWeight="body1" sx={{ mb: 0 }}>${price}</Typography>}
      </Box>
      {!imageUrl && <Box sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0.75rem 1rem"
      }}>
          <Typography fontWeight="body1" sx={{ mb: 0 }}>${price}</Typography>
      </Box>}
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
               style={{ height: "100%", width: "auto" }}
               alt={name}/>
        </Box>
      )}
    </Box>
  )
}

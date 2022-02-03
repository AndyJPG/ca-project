import {Box, Typography} from "@mui/material"
import * as React from "react"

interface ProductListItemProps {
  subtitle: string
  price: number
  description?: string
  imageUrl?: string
  imageTop?: boolean
}

export const ProductListItem = (props: ProductListItemProps) => {
  const {subtitle, price, description, imageUrl, imageTop} = props
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: imageTop ? 'column-reverse' : 'initial',
      position: 'relative'
    }}>
      <Box sx={{flexGrow: 1, paddingRight: '0.5rem'}}>
        <Typography variant="subtitle1" fontWeight="medium">{subtitle}</Typography>
        <Typography fontWeight="thin">${price}</Typography>
        {description && !imageTop && <Typography variant="body2" color="gray">{description}</Typography>}
      </Box>
      {imageUrl && (
        <Box sx={{
          height: imageTop ? '8.25rem' : '7rem',
          width: imageTop ? '100%' : '7rem',
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '0.4rem'
        }}/>
      )}
    </Box>
  )
}

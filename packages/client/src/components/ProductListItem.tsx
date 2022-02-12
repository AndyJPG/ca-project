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
      alignItems: 'center',
      position: 'relative',
      background: 'white',
      overflow: 'hidden',
      boxShadow: theme => theme.themeShadows[1],
      borderRadius: theme => theme.shape.borderRadius
    }}>
      <Box sx={{flexGrow: 1, padding: '0 1rem'}}>
        <Typography variant="h6">{subtitle}</Typography>
        <Typography fontWeight="body2" sx={{marginY: '0.4rem'}}>${price}</Typography>
        {description && !imageTop && <Typography variant="caption">{description}</Typography>}
      </Box>
      {imageUrl && (
        <Box sx={{
          height: imageTop ? '8.25rem' : '7rem',
          width: imageTop ? '100%' : '7rem',
          marginBottom: imageTop ? '0.4rem' : '0',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img src={`${process.env.REACT_APP_DEV_ENDPOINT}${imageUrl}`}
               style={{height: imageTop ? 'auto' : '100%', width: imageTop ? '100%' : 'auto'}}
               alt={`${subtitle}`}/>
        </Box>
      )}
    </Box>
  )
}

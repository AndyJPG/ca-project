import {Box, IconButton, Typography} from "@mui/material"
import Product from "@ca/common/domain/product/Product"
import {BaseContainer} from "../containers/BaseContainer"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

interface ProductDetailPageProps {
  product: Product
}

export const ProductDetailPage = (props: ProductDetailPageProps) => {
  const {name, description, price, productOptions, imageUrl} = props.product
  return (
    <BaseContainer sx={{margin: 0, padding: 0, position: 'relative'}}>
      <BaseContainer sx={{position: 'absolute', top: 0}}>
        <IconButton color="primary"><NavigateBeforeIcon/></IconButton>
      </BaseContainer>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {imageUrl && <img src={`${process.env.REACT_APP_DEV_ENDPOINT}${imageUrl}`} alt={name}
                          style={{width: '100%', height: 'auto'}}/>}
      </Box>
      <BaseContainer>
        <Typography variant="h5" sx={{
          width: '100%',
          textAlign: 'center',
          paddingX: '2rem'
        }}>{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
        <Typography variant="h6" sx={{width: '100%', textAlign: 'center', marginTop: '1.125rem'}}>${price}</Typography>
        <Typography variant="subtitle1">Info</Typography>
        <Typography variant="body2">{description}</Typography>
      </BaseContainer>
    </BaseContainer>
  )
}

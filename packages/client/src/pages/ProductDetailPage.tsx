import {Box, IconButton, List, ListItem, ListItemText, ListSubheader, Typography} from "@mui/material"
import {BaseContainer} from "../containers/BaseContainer"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import {useProductRepository} from "@ca/common/domain/product/ProductRepository"
import {useEffect, useState} from "react"
import Product from "@ca/common/domain/product/Product"
import {useParams} from "react-router-dom"

export const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null)
  const {getProductById} = useProductRepository()
  const params = useParams()

  useEffect(() => {
    const productId = params.productId
    console.log(productId)
    if (productId) {
      getProductById(productId).then(product => setProduct(product))
    }
  }, [])

  if (!product) {
    return null
  }

  const {name, description, price, productOptions, imageUrl} = product

  return (
    <BaseContainer sx={{margin: 0, padding: 0, position: "relative"}}>
      <BaseContainer sx={{position: "absolute", top: 0}}>
        <IconButton color="primary"><NavigateBeforeIcon/></IconButton>
      </BaseContainer>
      {imageUrl && <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={`${process.env.REACT_APP_DEV_ENDPOINT}${imageUrl}`} alt={name}
               style={{width: "100%", height: "auto"}}/>
      </Box>}
      <BaseContainer>
        <Typography variant="h5" sx={{
          width: "100%",
          textAlign: "center",
          paddingX: "2rem"
        }}>{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
        <Typography variant="h6" sx={{width: "100%", textAlign: "center", marginTop: "1.125rem"}}>${price}</Typography>
        <Box sx={{paddingY: "1rem"}}>
          <Typography variant="subtitle1">Info</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
        {productOptions.map(optionList => (
          <List key={optionList.name} subheader={
            <ListSubheader>
              {optionList.name.slice(0, 1).toUpperCase()}{optionList.name.slice(1)}
            </ListSubheader>
          }>
            {optionList.options.map(option => (
              <ListItem key={option.name}>
                <ListItemText primary={option.name}/>
              </ListItem>
            ))}
          </List>
        ))}
      </BaseContainer>
    </BaseContainer>
  )
}

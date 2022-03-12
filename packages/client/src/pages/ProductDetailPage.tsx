import {Box, Button, Typography} from "@mui/material"
import {BaseContainer} from "../containers/BaseContainer"
import {useProductRepository} from "@ca/common/domain/product/ProductRepository"
import * as React from "react"
import {useEffect, useState} from "react"
import Product from "@ca/common/domain/product/Product"
import {useParams} from "react-router-dom"
import {ProductDetailNavBar} from "../components/ProductDetailNavBar"
import {ProductOptionsList} from "../components/ProductOptionsList"

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null)
  const {getProductById} = useProductRepository()
  const params = useParams()

  useEffect(() => {
    const productId = params.productId
    if (productId) {
      getProductById(productId).then(product => setProduct(product))
    }
  }, [])

  if (!product) {
    return null
  }

  const {name, description, ingredients, price, productOptions, imageUrl} = product

  return (
    <>
      <ProductDetailNavBar/>
      {imageUrl &&
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", height: "15rem", overflow: "hidden"}}>
        <img src={imageUrl} alt={name}
             style={{width: "100%", height: "auto"}}/>
      </Box>}
      <BaseContainer sx={{backgroundColor: "white"}}>
        <Typography variant="h4">{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
        <Typography variant="body2"
                    sx={{
                      fontSize: "1.125rem",
                      mb: "2rem"
                    }}>{description}</Typography>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Typography variant="h6">${price}</Typography>
          <Typography variant="body2" sx={{fontSize: "1.125rem", mb: 0}}>V / VG / GF</Typography>
        </Box>
      </BaseContainer>
      <ProductOptionsList productOptions={productOptions}/>
      <BaseContainer
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          backgroundColor: theme => theme.palette.background.default,
          zIndex: theme => theme.zIndex.appBar
        }}>
        <Button variant="contained" sx={{width: "100%", height: "4rem"}}>Add to
          Order Note</Button>
      </BaseContainer>
      <Box sx={{height: "10rem"}}/>
    </>
  )
}

export default ProductDetailPage

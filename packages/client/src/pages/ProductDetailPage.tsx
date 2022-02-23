import {Box, Button, Typography} from "@mui/material"
import {BaseContainer} from "../containers/BaseContainer"
import {useProductRepository} from "@ca/common/domain/product/ProductRepository"
import * as React from "react"
import {useEffect, useState} from "react"
import Product from "@ca/common/domain/product/Product"
import {useParams} from "react-router-dom"
import {ProductDetailNavBar} from "../components/ProductDetailNavBar"
import {ProductDetailInfoSection} from "../components/ProductDetailInfoSection"
import {ProductOptionsList} from "../components/ProductOptionsList"

export const ProductDetailPage = () => {
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
    <BaseContainer sx={{margin: 0, padding: 0, position: "relative", pb: "4.2rem"}}>
      <ProductDetailNavBar title={name}/>
      {imageUrl && <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <img src={imageUrl} alt={name}
               style={{width: "100%", height: "auto"}}/>
      </Box>}
      <BaseContainer sx={{pt: "2.8rem", pb: 0}}>
        <Typography variant="h5" sx={{
          width: "100%",
          textAlign: "center",
          paddingX: "2rem"
        }}>{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
        <Typography variant="h6" sx={{
          width: "100%",
          textAlign: "center",
          marginTop: "1.125rem",
          color: theme => theme.palette.primary.main
        }}>${price}</Typography>
      </BaseContainer>
      <BaseContainer sx={{pt: 0}}>
        {description && <ProductDetailInfoSection title="Info" content={description}/>}
        {ingredients && <ProductDetailInfoSection title="Ingredients" content={ingredients.join(", ")}/>}
      </BaseContainer>
      <BaseContainer sx={{py: "2rem"}}>
        <ProductOptionsList productOptions={productOptions}/>
      </BaseContainer>
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
    </BaseContainer>
  )
}

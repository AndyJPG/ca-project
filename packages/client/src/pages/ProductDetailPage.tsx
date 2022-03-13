import {Box, Button, IconButton, TextField, Typography} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
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
  const [value, setValue] = useState(1)

  useEffect(() => {
    const productId = params.productId
    if (productId) {
      getProductById(productId).then(product => setProduct(product))
    }
  }, [getProductById])

  if (!product) {
    return null
  }

  const {name, description, price, productOptions, imageUrl} = product

  const handleValueChange = (addOn: number) => {
    if (value + addOn < 1) {
      return
    }

    setValue(prevState => prevState + addOn)
  }

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
      <Box sx={{height: "10rem"}}/>
      <BaseContainer
        sx={{
          position: "fixed",
          width: "100%",
          bottom: 0,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(4px)",
          display: "flex",
          zIndex: theme => theme.zIndex.drawer
        }}>

        <Box sx={{
          mr: "1rem",
          flex: 0.7,
          border: "0.15rem solid",
          borderColor: theme => theme.palette.primary.main,
          borderRadius: "4.4px",
          display: "flex",
          alignItems: "center"
        }}>
          <IconButton color="primary" onClick={() => handleValueChange(-1)}>
            <RemoveIcon/>
          </IconButton>
          <TextField value={value} variant="standard" InputProps={{disableUnderline: true}} sx={{
            "& .MuiInput-root": {
              marginBottom: 0,
              "& .MuiInput-input": {
                textAlign: "center"
              }
            }

          }}/>
          <IconButton color="primary" onClick={() => handleValueChange(1)}>
            <AddIcon/>
          </IconButton>
        </Box>
        <Button variant="contained" color="secondary"
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600, flex: 1}}>Add to
          order</Button>
      </BaseContainer>
    </>
  )
}

export default ProductDetailPage

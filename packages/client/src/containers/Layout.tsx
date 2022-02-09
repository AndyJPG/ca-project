import {Box, Grid, Typography} from "@mui/material"
import {Navbar} from "../components/Navbar"
import * as React from "react"
import {useEffect, useState} from "react"
import {BaseContainer} from "./BaseContainer"
import {ProductListItem} from "../components/ProductListItem"
import {useProductRepository} from "@ca/common/domain/product/ProductRepository"
import Product from "@ca/common/domain/product/Product"

export const Layout = () => {
  const {getProductsByTenantId} = useProductRepository()
  const [products, setProducts] = useState<Product[] | null>(null)


  useEffect(() => {
    getProductsByTenantId("1")
      .then(products => setProducts(products))
      .catch(e => console.log(e))
  }, [])

  return (
    <Grid container>
      <Navbar/>
      <Grid container item xs={12}>
        <Box sx={{
          maxHeight: '10rem',
          height: '10rem',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <img alt="Dumpling" src="https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg"
               style={{width: '100%'}}/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <BaseContainer>
          <Grid container spacing={1.5}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight="medium">Dumpling</Typography>
            </Grid>
            {products && products.map(product => (
              <Grid item key={product.id} xs={12}>
                <ProductListItem subtitle={product.name}
                                 price={product.price}
                                 description={product.description}
                                 imageUrl={product.imageUrl || undefined}/>
              </Grid>
            ))}
          </Grid>
        </BaseContainer>
      </Grid>
    </Grid>
  )
}

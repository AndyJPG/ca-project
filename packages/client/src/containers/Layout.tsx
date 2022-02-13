import {Box, Grid, InputAdornment, TextField, Typography} from "@mui/material"
import * as React from "react"
import {BaseContainer} from "./BaseContainer"
import Product from "@ca/common/domain/product/Product"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {ProductListItem} from "../components/ProductListItem"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {ProductDetailPage} from "../pages/ProductDetailPage"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import SearchIcon from '@mui/icons-material/Search'

export const Layout = () => {
  const {categoriesWithProduct} = useLocalCategoryStateService()
  const {tenant} = useLocalTenantStateService()

  return (
    <>
      <BaseContainer sx={{marginTop: '2.6rem'}}>
        <Typography variant="h4" sx={{width: {xs: '80%', md: '100%'}}}>{tenant?.companyName}</Typography>
      </BaseContainer>
      <BaseContainer>
        <TextField hiddenLabel
                   variant="filled"
                   placeholder="Search"
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <SearchIcon/>
                       </InputAdornment>
                     )
                   }}/>
      </BaseContainer>
      <Grid container>
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
              {categoriesWithProduct.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
                  <React.Fragment key={category.id}>
                      <Grid item xs={12}>
                          <Typography variant="h5" fontWeight="medium">{category.name}</Typography>
                      </Grid>
                    {category.products.map((product: Product, index) => (
                      category.name === 'dumpling' && index < 2 ?
                        <Grid item key={product.id} xs={6}>
                          <ProductListItem subtitle={product.name}
                                           price={product.price}
                                           description={product.description}
                                           imageTop
                                           imageUrl={product.imageUrl || undefined}/>
                        </Grid> : <Grid item key={product.id} xs={12}>
                          <ProductListItem subtitle={product.name}
                                           price={product.price}
                                           description={product.description}
                                           imageUrl={product.imageUrl || undefined}/>
                        </Grid>
                    ))}
                  </React.Fragment>
              ))}
            </Grid>
          </BaseContainer>
        </Grid>
        {categoriesWithProduct && categoriesWithProduct.length > 0 &&
        <ProductDetailPage product={categoriesWithProduct[1].products[0]}/>}
      </Grid>
    </>
  )
}

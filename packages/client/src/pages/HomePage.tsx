import {BaseContainer} from "../containers/BaseContainer"
import {InputAdornment, TextField, Typography} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {Hero} from "../components/Hero"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"


export const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryStateService()
  const {tenant} = useLocalTenantStateService()


  return (
    <>
      <Navbar companyName={tenant?.companyName || ""} companyUrl={"/cbd-dumpling-house"}/>
      <Hero heroImageUrl="https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg"/>
      {/*<ShowOnScroll threshold={395}>*/}
      {/*  <AppBar color="default">*/}
      {/*    <CategoriesTabs categoriesWithProduct={categoriesWithProduct}/>*/}
      {/*  </AppBar>*/}
      {/*</ShowOnScroll>*/}
      <BaseContainer sx={{marginTop: "2.6rem"}}>
        <Typography variant="h4" sx={{width: {xs: "80%", md: "100%"}}}>{tenant?.companyName}</Typography>
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
      {categoriesWithProduct.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
          <ProductList key={category.name} products={category.products} title={category.name}/>
      ))}
    </>
  )
}



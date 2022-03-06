import {Box, Button} from "@mui/material"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"
import {useLocalProductSearchResultService} from "@ca/common/services/LocalProductSearchResultServiceAdapter"
import Footer from "../components/Footer"
import {BaseContainer} from "../containers/BaseContainer"

const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryStateService()
  const {categoriesWithProductSearchResult, noSearchResult} = useLocalProductSearchResultService()
  const {tenant} = useLocalTenantStateService()

  return (
    <>
      <Navbar/>
      <Box height="7rem"/>
      {categoriesWithProductSearchResult.length > 0 && categoriesWithProductSearchResult.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      ))}
      {noSearchResult && <p>No result</p>}
      {categoriesWithProductSearchResult.length === 0 && !noSearchResult && categoriesWithProduct.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      ))}
      <Footer/>
      <Box height="5rem"/>
      <BaseContainer
        sx={{
          position: "fixed",
          width: "100%",
          bottom: 0,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(4px)"
        }}>
        <Button variant="contained" color="secondary"
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600}}>View
          order</Button>
      </BaseContainer>
    </>
  )
}

export default HomePage

import {Box, Button} from "@mui/material"
import * as React from "react"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"
import Footer from "../components/Footer"
import {BaseContainer} from "../containers/BaseContainer"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {useLocalCategoryService} from "@ca/common/services/LocalCategoryServiceAdapter"
import {useLocalProductSearchService} from "@ca/common/services/LocalProductSearchServiceAdapter"
import {NavToolbar} from "../components/NavToolbar"
import {useLocation, useNavigate} from "react-router-dom"

const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryService()
  const {searchResult} = useLocalProductSearchService()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <BaseContainer sx={{backgroundColor: theme => theme.palette.background.default, margin: 0, padding: 0}}>
      <Navbar/>
      <Box sx={{position: "fixed", top: "3.5rem", left: 0, right: 0, zIndex: theme => theme.zIndex.appBar}}>
        <NavToolbar/>
      </Box>
      <Box height="7rem"/>
      {searchResult ? searchResult.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      )) : categoriesWithProduct.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      ))}
      {searchResult && searchResult.length === 0 && <p>No result</p>}
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
        <Button variant="contained" color="secondary" onClick={() => navigate("order", {state: {from: location}})}
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600}}>View
          order</Button>
      </BaseContainer>
    </BaseContainer>
  )
}

export default HomePage

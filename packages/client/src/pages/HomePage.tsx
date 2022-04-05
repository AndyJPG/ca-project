import {Box, Button, Typography} from "@mui/material"
import * as React from "react"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"
import Footer from "../components/Footer"
import {BaseContainer} from "../containers/BaseContainer"
import {useLocalCategoryService} from "@ca/common/services/LocalCategoryService"
import {useLocalProductSearchService} from "@ca/common/services/LocalProductSearchService"
import {NavToolbar} from "../components/NavToolbar"
import {useLocation, useNavigate} from "react-router-dom"
import {useLocalCartService} from "@ca/common/services/LocalCartService"
import CategoryWithProducts from "@ca/common/domain/category/CategoryWithProducts"

const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryService()
  const {searchResult} = useLocalProductSearchService()
  const {getTotalItems} = useLocalCartService()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <BaseContainer sx={{backgroundColor: theme => theme.palette.background.default, margin: 0, padding: 0}}>
      <Navbar/>
      <Box sx={{position: "fixed", top: "3.5rem", left: 0, right: 0, zIndex: theme => theme.zIndex.appBar}}>
        <NavToolbar/>
      </Box>
      <Box height="7rem"/>
      {searchResult ? searchResult.map((category: CategoryWithProducts) => (category.products.length > 0 &&
          <ProductList key={category.name} products={category.products} title={category.name}/>
      )) : categoriesWithProduct.map((category: CategoryWithProducts) => (category.products.length > 0 &&
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
        {getTotalItems() > 0 && <Box sx={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          pl: "1.8rem",
          display: "flex",
          alignItems: "center",
          zIndex: theme => theme.zIndex.appBar
        }}>
            <Typography variant="h6" color="secondary" sx={{
              background: "white",
              textAlign: "center",
              padding: "0 0.6rem",
              borderRadius: "10%"
            }}>{getTotalItems()}</Typography>
        </Box>}
        <Button variant="contained" color="secondary" onClick={() => navigate("order", {state: {from: location}})}
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600}}>View
          order</Button>
      </BaseContainer>
    </BaseContainer>
  )
}

export default HomePage

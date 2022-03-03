import {Box} from "@mui/material"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"
import {useLocalProductSearchResultServiceAdapter} from "@ca/common/services/LocalProductSearchResultServiceAdapter"
import Footer from "../components/Footer"

const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryStateService()
  const {categoriesWithProductSearchResult} = useLocalProductSearchResultServiceAdapter()
  const {tenant} = useLocalTenantStateService()

  return (
    <>
      <Navbar/>
      <Box height="7rem"/>
      {categoriesWithProductSearchResult.length > 0 ? categoriesWithProductSearchResult.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      )) : categoriesWithProduct.map((category: CategoryWithProductDto) => (category.products.length > 0 &&
        <ProductList key={category.name} products={category.products} title={category.name}/>
      ))}
      <Footer/>
    </>
  )
}

export default HomePage

import {BaseContainer} from "../containers/BaseContainer"
import {Box, Drawer, InputAdornment, Link as MuiLink, TextField, Typography} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {CategoryWithProductDto} from "@ca/common/domain/category/CategoryDto"
import {useLocalCategoryStateService} from "@ca/common/services/LocalCategoryStateServiceAdapter"
import {Hero} from "../components/Hero"
import {ProductList} from "../components/ProductList"
import {Navbar} from "../components/Navbar"
import logoipsum from "../assets/logoipsum-logo-21.svg"
import {Link} from "react-router-dom"

export const HomePage = () => {
  const {categoriesWithProduct} = useLocalCategoryStateService()
  const {tenant} = useLocalTenantStateService()


  return (
    <>
      <Navbar companyName={tenant?.companyName || ""} companyUrl={"/cbd-dumpling-house"}/>
      <Drawer anchor="left" open={false}>

        <BaseContainer
          sx={{
            width: "17.5rem",
            height: "100%",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
          <BaseContainer sx={{padding: "3.5rem 2rem 0 2rem"}}>
            <Box sx={{height: "3rem"}}>
              <Link to={"/cbd-dumpling-house"}>
                <img src={logoipsum} style={{height: "100%"}} alt={tenant?.companyName + " logo"}/>
              </Link>
            </Box>
          </BaseContainer>
          <BaseContainer sx={{padding: "0 2rem 3.5rem 2rem"}}>
            <MuiLink variant="body2"
                     target="_blank"
                     underline="hover"
                     href="https://www.google.com/maps/place/CBD+Dumpling+House/@-35.2776538,149.1313248,17z/data=!3m1!4b1!4m5!3m4!1s0x6b164d6f52c5649b:0x1f1947da04efabce!8m2!3d-35.2776582!4d149.1335135">Shop
              FG13C, 148 Bunda St, Canberra ACT 2601</MuiLink>
            <MuiLink variant="body2" underline="hover" href="tel:0262628855">(02) 6262 8855</MuiLink>
          </BaseContainer>
        </BaseContainer>
      </Drawer>
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

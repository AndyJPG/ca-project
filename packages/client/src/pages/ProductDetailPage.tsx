import Product from "@ca/common/domain/product/Product"
import { useProductRepository } from "@ca/common/domain/product/ProductRepository"
import { useAddToCart } from "@ca/common/useCases/AddToCart"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
  Alert,
  Box,
  Button,
  Divider,
  FormHelperText,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from "@mui/material"
import { Form, Formik } from "formik"
import * as React from "react"
import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ProductDetailNavBar } from "../components/ProductDetailNavBar"
import { BaseContainer } from "../containers/BaseContainer"
import { useRxjsContext } from "../context"

interface InitialValues {
  quantity: number

  selectedOptions: OptionsValues
}

interface OptionsValues {
  [key: string]: string | string[] | number
}

const ProductDetailPage = () => {
  const [ initialValues, setInitialValues ] = useState<InitialValues>({ quantity: 1, selectedOptions: {} })
  const [ product, setProduct ] = useState<Product | null>(null)
  const [ isLoading, setIsLoading ] = useState(true)
  const { getProductById } = useProductRepository()
  const { addToCart } = useAddToCart()
  const { openSidePanel } = useRxjsContext()
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState & { product: Product }

  useEffect(() => {
    setIsLoading(true)
    const productId = params.productId
    const values: InitialValues = { quantity: 1, selectedOptions: {} }

    if (productId && !product) {
      if (state && state.product) {
        const currentProduct = state.product
        for (const optionList of currentProduct.productOptions || []) {
          if (optionList.singleSelection) {
            values.selectedOptions[optionList.name] = ""
          } else {
            values.selectedOptions[optionList.name] = []
          }
        }

        setInitialValues(values)
        setProduct(currentProduct)
        setIsLoading(false)
      } else {
        getProductById(productId).then(product => {
          if (product) {
            for (const optionList of product?.productOptions || []) {
              if (optionList.singleSelection) {
                values.selectedOptions[optionList.name] = ""
              } else {
                values.selectedOptions[optionList.name] = []
              }
            }

            setInitialValues(values)
            setProduct(product)
          }
        }).catch(e => console.log(e)).finally(() => setIsLoading(false))
      }
    }
  }, [])

  if (isLoading) {
    return null
  }

  const addProductToCart = (values: InitialValues) => {
    if (product) {
      addToCart(product, values.quantity, [])
    }
    backAction()
  }

  const backAction = () => {
    openSidePanel({ open: false })
    setTimeout(() => {
      if (state && state.from) {
        navigate(state.from.pathname)
      } else {
        const lastIndex = location.pathname.lastIndexOf("/")
        navigate(location.pathname.substring(0, lastIndex))
      }
    }, 500)
  }

  const productDetails = () => {
    if (product) {
      const { name, description, price, productOptions, imageUrl } = product

      return (
        <>
          <ProductDetailNavBar backBtnAction={backAction}/>
          {imageUrl ?
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "15rem",
                overflow: "hidden"
              }}>
              <img src={imageUrl} alt={name}
                   style={{ width: "100%", height: "auto" }}/>
            </Box> : <Box height="3.5rem" minHeight="3.5rem"/>}
          <BaseContainer sx={{ backgroundColor: "white" }}>
            <Typography variant="h4">{name.slice(0, 1).toUpperCase()}{name.slice(1)}</Typography>
            <Typography variant="body2"
                        sx={{
                          fontSize: "1.125rem",
                          mb: "2rem"
                        }}>{description}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Typography variant="h6">${price}</Typography>
              <Typography variant="body2" sx={{ fontSize: "1.125rem", mb: 0 }}>V / VG / GF</Typography>
            </Box>
          </BaseContainer>
          <Formik initialValues={initialValues} onSubmit={addProductToCart}>
            {({ errors, setValues, values }) => (
              <Form>
                {productOptions.map(optionList => (
                  <List key={optionList.name} subheader={
                    <ListSubheader>
                      {optionList.name.slice(0, 1).toUpperCase()}{optionList.name.slice(1)}
                      {optionList.required &&
                          <Typography variant="body2" sx={{ margin: "0.2rem 0 0 0" }}>Required</Typography>}
                      {errors.selectedOptions && errors.selectedOptions[optionList.name] &&
                          <FormHelperText
                              error>{errors.selectedOptions[optionList.name]}</FormHelperText>}
                    </ListSubheader>
                  }>
                    {optionList.options.map((option, index) => (
                      <React.Fragment key={option.name}>
                        {index !== 0 && <Divider variant="middle"/>}
                        <ListItemButton>
                          <ListItemText
                            primary={`${option.name.slice(0, 1).toUpperCase()}${option.name.slice(1)}`}
                            secondary={`+$${option.price}`}
                            secondaryTypographyProps={{ margin: "0 0 0 1rem" }}
                            sx={{ display: "flex", alignItems: "center" }}/>
                          <ListItemIcon
                            sx={{ minWidth: 0, "& .MuiButtonBase-root": { position: "inherit" } }}>
                            {/*{optionList.singleSelection ?*/}
                            {/*  <Radio name={`selectedOptions.${optionList.name}`} value={index}*/}
                            {/*         checked={values.selectedOptions[optionList.name] === index.toString()}*/}
                            {/*         onChange={handleChange} color="secondary"*/}
                            {/*         sx={{padding: 0}} disableRipple/> :*/}
                            {/*  <Checkbox name={`selectedOptions.${optionList.name}`} value={index}*/}
                            {/*            onChange={handleChange} color="secondary"*/}
                            {/*            sx={{padding: 0}} disableRipple/>}*/}
                          </ListItemIcon>
                        </ListItemButton>
                      </React.Fragment>
                    ))}
                  </List>
                ))}
                <Box sx={{ height: "10rem" }}/>
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
                    <IconButton color="primary"
                                disabled={values.quantity === 1}
                                onClick={() => values.quantity > 1 && setValues(prevState => ({
                                  ...prevState,
                                  quantity: prevState.quantity - 1
                                }))}>
                      <RemoveIcon/>
                    </IconButton>
                    <Typography variant="body1"
                                sx={{ mb: 0, flex: 1, textAlign: "center" }}>{values.quantity}</Typography>
                    <IconButton color="primary"
                                onClick={() => setValues(prevState => ({
                                  ...prevState,
                                  quantity: prevState.quantity + 1
                                }))}>
                      <AddIcon/>
                    </IconButton>
                  </Box>
                  <Button variant="contained" color="secondary" type="submit"
                          sx={{
                            height: "3.4rem",
                            width: "100%",
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            flex: 1
                          }}>Add to
                    order</Button>
                </BaseContainer>
              </Form>
            )}
          </Formik>
        </>
      )
    } else {
      return <Alert severity="info"
                    action={<Button color="inherit" size="small" onClick={backAction}>Back to menu</Button>}>Not
        found</Alert>
    }
  }

  openSidePanel({
    children: productDetails(),
    anchor: "bottom",
    transitionDuration: 500,
    paperProps: { sx: { top: 0 } }
  })

  return null
}

export default ProductDetailPage

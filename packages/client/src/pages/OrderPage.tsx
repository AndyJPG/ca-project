import * as React from "react"
import {useState} from "react"
import {BaseContainer} from "../containers/BaseContainer"
import {Box, Button, IconButton, Typography} from "@mui/material"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import {useNavigate} from "react-router-dom"
import {useLocalTenantService} from "@ca/common/services/LocalTenantService"
import {useLocalCartService} from "@ca/common/services/LocalCartService"

const OrderPage = () => {
  const [value, setValue] = useState(1)
  const navigate = useNavigate()
  const {tenant} = useLocalTenantService()
  const {cart, getTotal, getSubTotal, changeCartItemQuantity} = useLocalCartService()

  const handleValueChange = (addOn: number) => {
    if (value + addOn < 1) {
      return
    }

    setValue(prevState => prevState + addOn)
  }
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100%",
          background: theme => theme.palette.background.default,
          zIndex: -1
        }}/>
      <BaseContainer
        sx={{
          position: "fixed",
          top: "3.5rem",
          left: 0,
          right: 0,
          boxShadow: theme => theme.themeShadows[1],
          background: "white",
          zIndex: theme => theme.zIndex.appBar
        }}>
        <Typography variant="h6">Order details</Typography>
      </BaseContainer>
      <Box height="7.3rem"/>
      {cart.map(({id, product, quantity}) =>
        <BaseContainer key={id}
                       sx={{display: "flex", background: "white"}}>
          <Box flex={1}>
            <Typography variant="body1" sx={{mb: "0.25rem"}}>{product.name}</Typography>
            <Typography variant="body1"
                        sx={{mb: 0, color: theme => theme.palette.text.secondary}}>${product.price}</Typography>
          </Box>
          <Box flex={0.45}>
            <Box sx={{display: "flex", alignItems: "center"}}>
              <IconButton color="primary" sx={{p: 0}} onClick={() => changeCartItemQuantity(id, -1)}>
                <RemoveCircleOutlineIcon/>
              </IconButton>
              <Typography variant="h6" sx={{flex: 1, textAlign: "center"}}>{quantity}</Typography>
              <IconButton color="primary" sx={{p: 0}} onClick={() => changeCartItemQuantity(id, 1)}>
                <AddCircleOutlineIcon/>
              </IconButton>
            </Box>
          </Box>

        </BaseContainer>
      )}
      <BaseContainer
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "white",
          boxShadow: theme => theme.themeShadows[1]
        }}>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Typography variant="body1" sx={{m: 0, color: theme => theme.palette.text.secondary}}>Subtotal</Typography>
          <Typography variant="body1"
                      sx={{m: 0, color: theme => theme.palette.text.secondary}}>${getSubTotal().toFixed(2)}</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <Typography variant="body1" sx={{m: 0, color: theme => theme.palette.text.secondary}}>Card
            surcharge</Typography>
          <Typography variant="body1" sx={{m: 0, color: theme => theme.palette.text.secondary}}>$0.00</Typography>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "1rem"
        }}>
          <Typography variant="body1" sx={{m: 0, fontWeight: 600}}>Total</Typography>
          <Typography variant="body1" sx={{m: 0, fontWeight: 600}}>${getTotal().toFixed(2)}</Typography>
        </Box>
        <Button variant="contained" color="secondary"
                onClick={() => navigate(`/${tenant?.companyDomain}`)}
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600}}>Add more</Button>
      </BaseContainer>
      <Box height="16rem"/>
    </>
  )
}

export default OrderPage

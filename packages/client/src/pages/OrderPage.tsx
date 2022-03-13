import * as React from "react"
import {useState} from "react"
import {BaseContainer} from "../containers/BaseContainer"
import {Box, Button, IconButton, TextField, Typography} from "@mui/material"
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import {useNavigate} from "react-router-dom"
import {useLocalTenantService} from "@ca/common/services/LocalTenantServiceAdapter"

const OrderPage = () => {
  const [value, setValue] = useState(1)
  const navigate = useNavigate()
  const {tenant} = useLocalTenantService()

  const handleValueChange = (addOn: number) => {
    if (value + addOn < 1) {
      return
    }

    setValue(prevState => prevState + addOn)
  }
  return (
    <BaseContainer sx={{p: 0, background: theme => theme.palette.background.default, height: "100vh"}}>
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
      <BaseContainer sx={{display: "flex", background: "white"}}>
        <Box flex={1}>
          <Typography variant="body1" sx={{mb: "0.25rem"}}>Satay Chicken Skewers (6pcs)</Typography>
          <Typography variant="body1" sx={{mb: 0, color: theme => theme.palette.text.secondary}}>$15.00</Typography>
        </Box>
        <Box flex={0.45} sx={{display: "flex", alignItems: "start"}}>
          <IconButton color="primary" sx={{p: 0}} onClick={() => handleValueChange(-1)}>
            <RemoveCircleOutlineIcon/>
          </IconButton>
          <TextField value={value} variant="standard" InputProps={{disableUnderline: true}} sx={{
            "& .MuiInput-root": {
              marginBottom: 0,
              "& .MuiInput-input": {
                textAlign: "center",
                padding: 0,
                fontSize: "1.125rem",
                fontWeight: 600,
                color: theme => theme.palette.text.primary
              }
            }

          }}/>
          <IconButton color="primary" sx={{p: 0}} onClick={() => handleValueChange(1)}>
            <AddCircleOutlineIcon/>
          </IconButton>
        </Box>
      </BaseContainer>
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
          justifyContent: "space-between",
          mb: "1rem"
        }}>
          <Typography variant="body1" sx={{m: 0, fontWeight: 600}}>Total</Typography>
          <Typography variant="body1" sx={{m: 0, fontWeight: 600}}>$16.8</Typography>
        </Box>
        <Button variant="contained" color="secondary"
                onClick={() => navigate(`/${tenant?.companyDomain}`)}
                sx={{height: "3.4rem", width: "100%", fontSize: "1.125rem", fontWeight: 600}}>Add more</Button>
      </BaseContainer>
    </BaseContainer>
  )
}

export default OrderPage

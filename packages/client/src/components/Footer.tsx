import {Typography} from "@mui/material"
import {BaseContainer} from "../containers/BaseContainer"
import * as React from "react"

const Footer = () => {
  return (
    <BaseContainer sx={{textAlign: "center", py: "2rem", mt: "1rem"}}>
      <Typography variant="subtitle2" sx={{fontWeight: 600}}>Powered by YourMenu</Typography>
      <Typography variant="subtitle2">Build your own menu to serve excellent customer experience</Typography>
      <Typography variant="subtitle2" sx={{fontWeight: "600", textDecoration: "underline"}}>Learn more</Typography>
    </BaseContainer>
  )
}

export default Footer

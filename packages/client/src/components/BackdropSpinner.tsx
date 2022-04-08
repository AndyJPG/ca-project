import {Backdrop, CircularProgress} from "@mui/material"

const BackdropSpinner = () => (
  <Backdrop sx={{color: "white"}} open={true}>
    <CircularProgress color="inherit"/>
  </Backdrop>
)

export default BackdropSpinner
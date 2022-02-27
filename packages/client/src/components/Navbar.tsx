import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import * as React from "react"
import {useNavigate} from "react-router-dom"
import {useRxjsContext} from "../context/RxjsContextProvider"
import {Menu} from "./Menu"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

export const Navbar = () => {
  const navigate = useNavigate()
  const {openSidePanel} = useRxjsContext()
  const {tenant} = useLocalTenantStateService()

  if (!tenant) {
    return null
  }

  const {companyName, companyDomain} = tenant

  return (
    <AppBar color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit"
                    onClick={() => openSidePanel(
                      <Menu/>
                    )}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" sx={{
          flexGrow: 1,
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer"
        }} onClick={() => navigate(companyDomain)}>{companyName}</Typography>
      </Toolbar>
    </AppBar>
  )
}

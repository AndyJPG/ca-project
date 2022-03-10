import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React, {lazy} from "react"
import {useNavigate} from "react-router-dom"
import {useRxjsContext} from "../context/RxjsContextProvider"
import LazySuspense from "./LazySuspense"
import {NavToolbar} from "./NavToolbar"
import {useLocalTenantService} from "@ca/common/services/LocalTenantServiceAdapter"

const Menu = lazy(() => import(/* webpackChunkName: 'navbar-menu' */ "./Menu"))

export const Navbar = () => {
  const navigate = useNavigate()
  const {openSidePanel} = useRxjsContext()
  const {tenant} = useLocalTenantService()

  if (!tenant) {
    return null
  }

  const {companyName, companyDomain} = tenant

  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit"
                    onClick={() => openSidePanel({
                      children: <LazySuspense><Menu/></LazySuspense>,
                      showCloseIcon: true,
                      anchor: "left"
                    })}>
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" sx={{
          flexGrow: 1,
          color: "inherit",
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }} onClick={() => navigate(`/${companyDomain}`)}>{companyName}</Typography>
      </Toolbar>
      <NavToolbar/>
    </AppBar>
  )
}

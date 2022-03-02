import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import React, {lazy} from "react"
import {useNavigate} from "react-router-dom"
import {useRxjsContext} from "../context/RxjsContextProvider"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {BaseContainer} from "../containers/BaseContainer"
import SearchIcon from "@mui/icons-material/Search"
import LazySuspense from "./LazySuspense"

const Menu = lazy(() => import(/* webpackChunkName: 'navbar-menu' */ "./Menu"))
const CategoryMenu = lazy(() => import(/* webpackChunkName: 'category-menu' */ "./CategoryMenu"))

export const Navbar = () => {
  const navigate = useNavigate()
  const {openSidePanel} = useRxjsContext()
  const {tenant} = useLocalTenantStateService()

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
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer"
        }} onClick={() => navigate(`/${companyDomain}`)}>{companyName}</Typography>
      </Toolbar>
      <BaseContainer
        sx={{backgroundColor: "white", color: theme => theme.palette.text.primary, py: "0.6rem", display: "flex"}}>
        <IconButton color="secondary" size="small">
          <SearchIcon fontSize="small"/>
        </IconButton>
        <Box flexGrow={1}/>
        <Button variant="contained" color="primary"
                onClick={() => openSidePanel({
                  children: <LazySuspense><CategoryMenu/></LazySuspense>,
                  anchor: "right"
                })}>
          menu
        </Button>
      </BaseContainer>
    </AppBar>
  )
}

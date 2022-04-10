import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import React, { lazy } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useRxjsContext } from "../context"
import LazySuspense from "./LazySuspense"
import { useLocalTenantService } from "@ca/common/services/LocalTenantService"

const Menu = lazy(() => import(/* webpackChunkName: 'navbar-menu' */ "./Menu"))

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const state = location.state as LocationState
  const { openSidePanel } = useRxjsContext()
  const { tenant } = useLocalTenantService()

  if (!tenant) {
    return null
  }

  const { companyName, companyDomain } = tenant

  const currentPageTile = () => {
    const pathList = location.pathname.split("/")
    return pathList[pathList.length - 1]
  }

  const logoLink = () => {
    if (!state?.from || state?.backgroundLocation) {
      navigate(`/${companyDomain}`)
    }
  }

  const isHomePage = () => {
    const productId = params.productId
    if (productId) {
      return true
    }

    return !state?.from
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <Box flex={0.1}>
          {isHomePage() ? (
            <IconButton color="inherit"
                        sx={{ padding: 0 }}
                        onClick={() => openSidePanel({
                          children: <LazySuspense><Menu/></LazySuspense>,
                          showCloseIcon: true,
                          anchor: "left"
                        })}>
              <MenuIcon/>
            </IconButton>
          ) : (
            <IconButton color="inherit" sx={{ padding: 0 }}
                        onClick={() => navigate(state?.from?.pathname || `/${companyDomain}`)}>
              <NavigateBeforeIcon/>
            </IconButton>
          )}
        </Box>
        <Typography variant="h6" sx={{
          flexGrow: 1,
          color: "inherit",
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
                    onClick={logoLink}>{isHomePage() ? companyName : currentPageTile()}</Typography>
        <Box flex={0.1}/>
      </Toolbar>
    </AppBar>
  )
}

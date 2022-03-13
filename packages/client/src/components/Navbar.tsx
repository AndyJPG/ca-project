import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import React, {lazy, useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import {useRxjsContext} from "../context"
import LazySuspense from "./LazySuspense"
import {useLocalTenantService} from "@ca/common/services/LocalTenantServiceAdapter"

const Menu = lazy(() => import(/* webpackChunkName: 'navbar-menu' */ "./Menu"))

export const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [from, setFrom] = useState<string | null>(null)
  const {openSidePanel} = useRxjsContext()
  const {tenant} = useLocalTenantService()

  useEffect(() => {
    if (tenant && location.pathname !== `/${tenant?.companyDomain}`) {
      setFrom(`/${tenant?.companyDomain}`)
    } else {
      setFrom(null)
    }
  }, [location])

  if (!tenant) {
    return null
  }

  const {companyName, companyDomain} = tenant

  const currentPageTile = () => {
    const pathList = location.pathname.split("/")
    return pathList[pathList.length - 1]
  }

  return (
    <AppBar color="primary">
      <Toolbar>
        <Box flex={0.1}>
          {!from && <IconButton color="inherit"
                                sx={{padding: 0}}
                                onClick={() => openSidePanel({
                                  children: <LazySuspense><Menu/></LazySuspense>,
                                  showCloseIcon: true,
                                  anchor: "left"
                                })}>
            <MenuIcon/>
          </IconButton>}
          {from && <IconButton color="inherit" sx={{padding: 0}} onClick={() => navigate(from)}>
            <NavigateBeforeIcon/>
          </IconButton>}
        </Box>
        {!from && <Typography variant="h6" sx={{
          flexGrow: 1,
          color: "inherit",
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }} onClick={() => navigate(`/${companyDomain}`)}>{companyName}</Typography>}
        {from && <Typography variant="h6" sx={{
          flexGrow: 1,
          color: "inherit",
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}>{currentPageTile()}</Typography>}
        <Box flex={0.1}/>
      </Toolbar>
    </AppBar>
  )
}

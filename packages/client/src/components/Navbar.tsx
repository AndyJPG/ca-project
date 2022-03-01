import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import * as React from "react"
import {useNavigate} from "react-router-dom"
import {useRxjsContext} from "../context/RxjsContextProvider"
import {Menu} from "./Menu"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"
import {BaseContainer} from "../containers/BaseContainer"
import SearchIcon from "@mui/icons-material/Search"
import {CategoryMenu} from "./CategoryMenu"

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
                    onClick={() => openSidePanel(
                      <Menu/>, undefined, true
                    )}>
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
        <Button variant="contained" color="primary" onClick={() => openSidePanel(<CategoryMenu/>, "right")}>
          menu
        </Button>
      </BaseContainer>
    </AppBar>
  )
}

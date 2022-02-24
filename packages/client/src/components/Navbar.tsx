import {AppBar, IconButton, Toolbar, Typography} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import * as React from "react"
import {useNavigate} from "react-router-dom"

interface NavbarProps {
  companyName: string
  companyUrl: string
}

export const Navbar = (props: NavbarProps) => {
  const navigate = useNavigate()
  const {companyName, companyUrl} = props

  return (
    <AppBar color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" sx={{
          flexGrow: 1,
          textAlign: "center",
          whiteSpace: "nowrap",
          cursor: "pointer"
        }} onClick={() => navigate(companyUrl)}>{companyName}</Typography>
      </Toolbar>
    </AppBar>
  )
}

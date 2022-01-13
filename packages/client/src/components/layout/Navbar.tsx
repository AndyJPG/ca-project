import * as React from 'react'
import {AppBar, Link, Toolbar} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";
import logo from '../../assets/logo/logo_primary.svg'

export const Navbar = () => {
    return (
        <AppBar position="static" sx={{
            display: {xs: "none", md: "flex"}
        }}>
            <CustomContainer>
                <Toolbar disableGutters>
                    <Link href="/" sx={{
                        height: '32px'
                    }}>
                        <img src={logo} alt="logo" style={{height: "100%"}}/>
                    </Link>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    )
}

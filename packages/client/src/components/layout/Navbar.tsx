import * as React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <AppBar position="static" sx={{
            display: {xs: "none", md: "flex"}
        }}>
            <CustomContainer>
                <Toolbar disableGutters>
                    <Link to="/">
                        <Typography variant="h6">Logo</Typography>
                    </Link>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    )
}

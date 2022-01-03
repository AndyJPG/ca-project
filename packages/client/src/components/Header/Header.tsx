import * as React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";

export const Header = () => {
    return (
        <AppBar position="static" sx={{
            display: {xs: "none", md: "flex"}
        }}>
            <CustomContainer>
                <Toolbar disableGutters>
                    <Typography variant="h6">Logo</Typography>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    )
}

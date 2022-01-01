import * as React from 'react'
import {AppBar, Toolbar, Typography} from "@mui/material";
import {CustomContainer} from "../../utils/muiStyleComponents";

export const Header = () => {
    return (
        <AppBar position="static">
            <CustomContainer>
                <Toolbar disableGutters>
                    <Typography variant="h6">Logo</Typography>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    )
}

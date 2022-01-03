import {CustomContainer} from "../../utils/muiStyleComponents";
import {AppBar, IconButton, Toolbar} from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as React from "react";

export const MobileHeader = () => {
    return (
        <AppBar position="static" sx={{
            display: {sx: "flex", md: "none"}
        }}>
            <CustomContainer>
                <Toolbar disableGutters>
                    <IconButton sx={{
                        backgroundColor: "white",
                        padding: '8px',
                    }}>
                        <ArrowBackIosNewIcon fontSize="small"/>
                    </IconButton>
                </Toolbar>
            </CustomContainer>
        </AppBar>
    )
}

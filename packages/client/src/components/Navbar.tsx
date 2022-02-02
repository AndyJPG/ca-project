import {AppBar, Toolbar, Typography} from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    Menu
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

import * as React from "react"
import {Grid} from "@mui/material";
import {Footer, Navbar, NavbarMobile} from "../../components";
import {Outlet, useLocation} from "react-router-dom";

export const BaseLayout: React.FC = (props) => {
    const location = useLocation()

    const onHomePage = (): boolean => {
        return location.pathname === "/";
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Navbar/>
                {!onHomePage() && <NavbarMobile/>}
            </Grid>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
            <Grid item xs={12}>
                {onHomePage() && <Footer/>}
            </Grid>
        </Grid>
    )
}

import * as React from "react"
import {Grid} from "@mui/material";
import {Footer, Navbar} from "../../components";
import {NavbarMobile} from "../../components/layout/NavbarMobile/NavbarMobile";
import {Outlet, useLocation} from "react-router-dom";

export const BaseLayout: React.FC = (props) => {
    const location = useLocation()

    const showFooter = (): boolean => {
        return location.pathname === "/";
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Navbar/>
                <NavbarMobile/>
            </Grid>
            <Grid item xs={12}>
                <Outlet/>
            </Grid>
            <Grid item xs={12}>
                {showFooter() && <Footer/>}
            </Grid>
        </Grid>
    )
}

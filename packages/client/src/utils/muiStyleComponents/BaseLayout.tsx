import * as React from "react"
import {Grid} from "@mui/material";
import {Footer, Header} from "../../components";

export const BaseLayout: React.FC = (props) => {
    return (
        <Grid container>
            <Grid item md={12} sx={{
                display: {xs: "none", md: "block"}
            }}>
                <Header/>
            </Grid>
            <Grid item xs={12}>
                {props.children}
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}

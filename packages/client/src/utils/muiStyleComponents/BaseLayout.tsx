import * as React from "react"
import {Grid} from "@mui/material";
import {Footer, Header} from "../../components";
import {MobileHeader} from "../../components/MobileHeader/MobileHeader";

export const BaseLayout: React.FC = (props) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Header/>
                <MobileHeader/>
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

import {Grid} from "@mui/material"
import {Navbar} from "../components/Navbar"

export const Layout = () => {
    return (
        <Grid container>
            <Navbar/>
            <Grid container item xs={12}>
                <Grid item xs={12}>Image</Grid>
                <Grid item xs={12}>Name</Grid>
            </Grid>
        </Grid>
    )
}

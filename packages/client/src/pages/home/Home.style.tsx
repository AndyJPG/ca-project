import * as React from 'react'
import {Grid, Typography} from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";
import Hero from "../../components/Hero/Hero";


const HomeStyle = () => {
    return (
        <Grid container>
            Main container
            <Grid item xs={12}>
                Header
            </Grid>
            <Grid item xs={12}>
                Main content
                <Hero>
                    <SearchBar/>
                    <Typography variant='h5' sx={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>See what others think before move in.</Typography>
                </Hero>
            </Grid>
        </Grid>
    )
}

export default HomeStyle

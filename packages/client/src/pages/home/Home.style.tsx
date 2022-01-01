import * as React from 'react'
import {Grid, Typography} from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";


const HomeStyle = () => {
    return (
        <Grid container>
            <Grid item xs={false} sx={{
                display: {xs: "none", sm: "block"}
            }}>
                Header
            </Grid>
            <Grid item xs={12}>
                <Hero>
                    <SearchBar styles={{
                        margin: "0 0 24px 0"
                    }}/>
                    <Typography variant='h5' sx={{
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}>See what others think before move in.</Typography>
                </Hero>
            </Grid>
            <Grid item xs={12}>
                <Footer/>
            </Grid>
        </Grid>
    )
}

export default HomeStyle

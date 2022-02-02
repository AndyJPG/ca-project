import {Box, Grid, Slide, Tab, Tabs, Typography} from "@mui/material"
import {Navbar} from "../components/Navbar"
import * as React from "react"

const ShowOnScroll = (props: { children: React.ReactElement }) => {
    return (
        <Slide appear={false} direction="down" in={true}>
            {props.children}
        </Slide>
    )
}

export const Layout = () => {
    return (
        <Grid container>
            <Tabs value={0} variant="scrollable">
                <Tab label={1}/>
                <Tab label={2}/>
                <Tab label={3}/>
                <Tab label={4}/>
                <Tab label={5}/>
                <Tab label={6}/>
            </Tabs>
            <Navbar/>
            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <Box sx={{width: '100%', height: 200, backgroundColor: 'primary.dark'}}/>
                </Grid>
                <Grid item xs={12}>CBD Dumpling House</Grid>
            </Grid>
            <Grid container item xs={12}>
                <Grid container item xs={false} md={3.5} sx={{
                    display: {xs: "none", md: "flex"}
                }}>
                    sidebar
                </Grid>
                <Grid container item xs={12} md={8.5}>
                    <Grid item xs={12}>Entrees</Grid>
                    <Grid item xs={12}>
                        <Grid item>
                            <Typography>Seafood Spring Roll</Typography>
                            <Typography>$9.80</Typography>
                            <Typography>Four per serves</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Box sx={{flexGrow: 1}}>
                            <Typography>Seafood Spring Roll</Typography>
                            <Typography>$9.80</Typography>
                            <Typography>Four per serves</Typography>
                        </Box>
                        <Box sx={{height: '6rem', width: '6rem', backgroundColor: 'primary.dark'}}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{height: '100vh'}}/>
        </Grid>
    )
}

import {Box, Grid, Slide, Tab, Tabs, Typography} from "@mui/material"
import {Navbar} from "../components/Navbar"
import * as React from "react"
import {BaseContainer} from "./BaseContainer"

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
                <Box sx={{
                    maxHeight: '10rem',
                    height: '10rem',
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <img src="https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg"
                         style={{width: '100%'}}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <BaseContainer>
                    <Grid container spacing={1.5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" fontWeight="bold"> Picked for you</Typography>
                        </Grid>
                        <Grid item xs={12} sx={{display: 'flex'}}>
                            <Box sx={{flexGrow: 1}}>
                                <Typography>Seafood Spring Roll</Typography>
                                <Typography>$9.80</Typography>
                                <Typography>Four per serves</Typography>
                            </Box>
                            <Box sx={{
                                height: '6rem',
                                width: '6rem',
                                backgroundImage: `url(https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}/>
                        </Grid>
                        <Grid item xs={12} sx={{display: 'flex'}}>
                            <Box sx={{flexGrow: 1}}>
                                <Typography>Seafood Spring Roll</Typography>
                                <Typography>$9.80</Typography>
                                <Typography>Four per serves</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', flexWrap: 'wrap'}}>
                            <Box sx={{
                                height: '8.25rem',
                                width: '100%',
                                backgroundImage: `url(https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                marginBottom: '0.4rem'
                            }}/>
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="subtitle1" fontWeight="medium">Seafood Spring Roll</Typography>
                                <Typography fontWeight="thin">$9.80</Typography>
                                <Typography>Four per serves</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', flexWrap: 'wrap'}}>
                            <Box sx={{
                                height: '8.25rem',
                                width: '100%',
                                backgroundImage: `url(https://d1ralsognjng37.cloudfront.net/f48c9c30-e4ef-40d9-9a90-aaab936a77bd.jpeg)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                marginBottom: '0.4rem'
                            }}/>
                            <Box sx={{flexGrow: 1}}>
                                <Typography variant="subtitle1" fontWeight="medium">Seafood Spring Roll</Typography>
                                <Typography fontWeight="thin">$9.80</Typography>
                                <Typography>Four per serves</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </BaseContainer>
            </Grid>
            <Grid item sx={{height: '100vh'}}/>
        </Grid>
    )
}

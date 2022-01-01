import * as React from 'react'
import {Box, Grid} from "@mui/material";
import SearchBar from "../../components/SearchBar/SearchBar";


const HomeStyle = () => {
    return (
        <Grid container>
            Main container
            <Grid item xs={12}>
                Header
            </Grid>
            <Grid item xs={12}>
                Main content
                <Box sx={{
                    width: '100%',
                    minHeight: '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <SearchBar/>
                </Box>
            </Grid>
        </Grid>
    )
}

export default HomeStyle

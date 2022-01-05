import * as React from "react"
import {Hero, SearchBar} from "../../components";
import {Typography} from "@mui/material";

export const HomePage = () => {
    return (
        <Hero>
            <SearchBar styles={{
                margin: "0 0 24px 0"
            }}/>
            <Typography variant='h5' sx={{
                fontWeight: 'bold',
                textAlign: 'center'
            }}>See what others think before move in.</Typography>
        </Hero>
    )
}

import * as React from 'react'
import {Typography} from "@mui/material";
import {SearchBar, Hero} from "../../components"

const HomeStyle = () => {
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

export default HomeStyle

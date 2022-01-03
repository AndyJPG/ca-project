import * as React from 'react'
import {Typography} from "@mui/material";
import {SearchBar, Hero} from "../../components"
import {BaseLayout} from "../../utils/muiStyleComponents";


const HomeStyle = () => {
    return (
        <BaseLayout>
            <Hero>
                <SearchBar styles={{
                    margin: "0 0 24px 0"
                }}/>
                <Typography variant='h5' sx={{
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>See what others think before move in.</Typography>
            </Hero>
        </BaseLayout>
    )
}

export default HomeStyle

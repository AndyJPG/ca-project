import * as React from 'react'
import {Container, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Container sx={{
            height: "15vh"
        }}>
            <Typography>&#169; 2021 HomeReview</Typography>
        </Container>
    )
}

export default Footer

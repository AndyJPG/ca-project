import * as React from 'react'
import {Container, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Container sx={{
            height: "15vh",
            paddingY: "10px"
        }}>
            <Typography sx={{
                fontSize: "14px"
            }}>&#169; 2021 HomeReview</Typography>
        </Container>
    )
}

export default Footer

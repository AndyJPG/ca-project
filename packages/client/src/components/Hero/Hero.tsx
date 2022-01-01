import * as React from 'react'
import {Box, Container} from "@mui/material";

const Hero: React.FC = (props) => {
    return (
        <Box sx={{
            minHeight: "600px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Container sx={{
                width: "100%"
            }}>
                {props.children}
            </Container>
        </Box>
    )
}

export default Hero

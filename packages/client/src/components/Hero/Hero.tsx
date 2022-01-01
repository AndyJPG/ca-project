import * as React from 'react'
import {Box, Container} from "@mui/material";

const Hero: React.FC = (props) => {
    return (
        <Container sx={{
            minHeight: "85vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Box>
                {props.children}
            </Box>
        </Container>
    )
}

export default Hero

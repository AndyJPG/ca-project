import * as React from 'react'
import {Container} from "@mui/material"

export const BaseContainer: React.FC = (props) => {
    return (
        <Container sx={{
            margin: '1rem 0',
            padding: '0 1rem',
            width: '100%',
        }}>
            {props.children}
        </Container>
    )
}

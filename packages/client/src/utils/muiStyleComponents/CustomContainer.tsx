import {Container, styled} from "@mui/material"

export const CustomContainer = styled(Container)(({theme}) => ({
    maxWidth: theme.breakpoints.values.xl,
    paddingLeft: '20px',
    paddingRight: '20px',
    [theme.breakpoints.up('md')]: {
        paddingLeft: '40px',
        paddingRight: '40px'
    }
}))

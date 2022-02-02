import * as React from "react"
import {createTheme, ThemeProvider} from "@mui/material"

const theme = createTheme({
    components: {
        MuiGrid: {
            styleOverrides: {
                root: {
                    border: '1px solid black'
                }
            }
        }
    }
})

export const ThemeContextProvider: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

import React from "react"
import {createTheme, ThemeProvider} from "@mui/material";

const baseTheme = createTheme({
    palette: {
        primary: {
            main: "#e74e35",
            light: "#EB715D",
            dark: "#A13625"
        }
    },
    typography: {
        fontFamily: "'Quicksand', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
    }
})

const theme = createTheme(baseTheme, {
    components: {
        MuiAppBar: {
            variants: [
                {
                    props: {position: "static"},
                    style: {
                        backgroundColor: "transparent"
                    }
                }
            ]
        }
    }
})

export const AppThemeProvider: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

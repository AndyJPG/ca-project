import * as React from "react"
import {createTheme, ThemeOptions, ThemeProvider} from "@mui/material"

declare module '@mui/material/styles' {
  interface Theme {
    shape: {
      borderRadius: number
      borderRadiusFull: number
    },
    themeShadows: {
      0: string
      1: string
    }
  }

  interface ThemeOptions {
    shape: {
      borderRadius: number
      borderRadiusFull: number
    },
    themeShadows: {
      0: string
      1: string
    }
  }
}

const theme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    background: {
      default: '#F5F5F8'
    }
  },
  shape: {
    borderRadius: 4.4,
    borderRadiusFull: 999
  },
  themeShadows: {
    0: 'none',
    1: '0px 10px 40px rgba(0, 0, 0, 0.03)'
  },
  typography: {
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      textTransform: "capitalize",
      lineHeight: 1.2
    },
    body1: {
      margin: '0.2rem 0'
    },
    body2: {
      margin: '0.2rem 0'
    }
  },
  components: {}
})

export const ThemeContextProvider: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

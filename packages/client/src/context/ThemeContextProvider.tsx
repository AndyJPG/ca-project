import * as React from "react"
import {createTheme, ThemeProvider} from "@mui/material"

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius: number
      borderRadiusFull: string
    },
    themeShadows: {
      0: string
      1: string
    }
  }

  interface ThemeOptions {
    shape: {
      borderRadius: number
      borderRadiusFull: string
    },
    themeShadows: {
      0: string
      1: string
    }
  }
}

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#E84C4F"
    },
    text: {
      primary: "#3E4462",
      secondary: "#7E7E7E"
    },
    background: {
      default: "#F5F5F8"
    }
  },
  shape: {
    borderRadius: 4.4,
    borderRadiusFull: "999px"
  },
  themeShadows: {
    0: "none",
    1: "0px 10px 40px rgba(0, 0, 0, 0.03)"
  }
})

const theme = createTheme(baseTheme, {
  typography: {
    h4: {
      fontWeight: 700
    },
    h5: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: "2rem"
    },
    h6: {
      fontSize: "1.375rem",
      fontWeight: 600,
      textTransform: "capitalize",
      lineHeight: 1.2
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: "1.25rem"
    },
    body1: {
      margin: "0.2rem 0"
    },
    body2: {
      margin: "0.2rem 0",
      color: baseTheme.palette.text.secondary
    },
    caption: {
      fontSize: "0.875rem",
      color: baseTheme.palette.text.secondary
    }
  },
  components: {
    MuiIconButton: {
      variants: [
        {
          props: {color: "primary"},
          style: {
            backgroundColor: "white"
          }
        }
      ]
    },
    MuiTextField: {
      variants: [
        {
          props: {variant: "filled"},
          style: {
            width: "100%",
            "& .MuiFilledInput-root": {
              borderRadius: baseTheme.shape.borderRadiusFull,
              padding: "0 1.8rem",
              backgroundColor: "#EFEEEE",
              "& .MuiFilledInput-input": {
                paddingRight: 0,
                "::placeholder": {
                  fontWeight: 600
                }
              },
              "&.Mui-focused": {
                backgroundColor: "white"
              },
              "&:before": {
                content: "none"
              },
              "&:after": {
                content: "none"
              }
            }
          }
        },
        {
          props: {variant: "outlined"},
          style: {
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: baseTheme.shape.borderRadiusFull,
              padding: "0 1.8rem",
              "&:before": {
                border: "none"
              },
              "& .MuiFilledInput-input": {
                paddingRight: 0
              }
            }
          }
        }
      ]
    },
    MuiInputAdornment: {
      variants: [
        {
          props: {position: "start"},
          style: {
            color: baseTheme.palette.text.primary
          }
        }
      ]
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: baseTheme.themeShadows[1],
          borderRadius: baseTheme.shape.borderRadius
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent"
        }
      }
    },
    MuiButton: {
      variants: [
        {
          props: {variant: "contained"},
          style: {
            borderRadius: baseTheme.shape.borderRadiusFull,
            boxShadow: "none",
            textTransform: "none",
            fontWeight: 600
          }
        }
      ]
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

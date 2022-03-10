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
      main: "#1D1D1D"
    },
    secondary: {
      main: "#E84C4F"
    },
    text: {
      primary: "#1D1D1D",
      secondary: "#4D4D4D"
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
      fontWeight: 600,
      fontSize: "1.6rem",
      marginBottom: "0.5rem",
      color: baseTheme.palette.text.primary
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      color: baseTheme.palette.text.primary
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      textTransform: "capitalize",
      color: baseTheme.palette.text.primary
    },
    subtitle1: {
      fontWeight: 600,
      color: baseTheme.palette.text.primary
    },
    subtitle2: {
      fontWeight: 400,
      marginBottom: "1rem",
      color: baseTheme.palette.text.primary
    },
    body1: {
      marginBottom: "0.875rem",
      color: baseTheme.palette.text.primary,
      [baseTheme.breakpoints.up("md")]: {
        marginBottom: "1rem"
      }
    },
    body2: {
      marginBottom: "0.875rem",
      color: baseTheme.palette.text.secondary,
      [baseTheme.breakpoints.up("md")]: {
        marginBottom: "1rem"
      }
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
          props: {color: "primary"}
        },
        {
          props: {color: "secondary"},
          style: {
            color: baseTheme.palette.text.primary
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
              margin: "0",
              borderRadius: baseTheme.shape.borderRadiusFull,
              "&:before": {
                border: "none"
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
    MuiListItemButton: {
      variants: [
        {
          props: {selected: true},
          style: {
            "& .MuiTypography-root": {
              fontWeight: 700,
              margin: 0
            }
          }
        }
      ]
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
            boxShadow: "none",
            textTransform: "none",
            fontWeight: 400,
            "& .MuiButton-contained": {
              margin: 0
            }
          }
        },
        {
          props: {color: "primary"},
          style: {
            borderRadius: baseTheme.shape.borderRadiusFull
          }
        },
        {
          props: {color: "secondary"},
          style: {
            borderRadius: baseTheme.shape.borderRadius
          }
        }
      ]
    },
    MuiAppBar: {
      variants: [
        {
          props: {color: "primary"},
          style: {
            boxShadow: "none"
          }
        }
      ]
    },
    MuiLink: {
      variants: [
        {
          props: {variant: "body2"},
          style: {
            display: "block",
            color: baseTheme.palette.text.primary,
            textDecorationColor: baseTheme.palette.text.primary,
            margin: "0 0 1rem 0"
          }
        }
      ]
    },
    MuiDrawer: {
      variants: [
        {
          props: {anchor: "left"},
          style: {
            "& .MuiDrawer-paper": {
              overflow: "visible"
            }
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

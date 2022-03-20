import {ShowOnScroll} from "./ShowOnScroll"
import {BaseContainer} from "../containers/BaseContainer"
import {AppBar, IconButton, Typography} from "@mui/material"
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"
import * as React from "react"
import {useNavigate} from "react-router-dom"

interface ProductDetailNavBarProps {
  title?: string
  backBtnAction?: () => void
}

export const ProductDetailNavBar = (props: ProductDetailNavBarProps) => {
  const {title, backBtnAction} = props
  const navigate = useNavigate()

  return (
    <>
      {title && <ShowOnScroll threshold={1}>
          <BaseContainer sx={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "4.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white"
          }}><Typography variant="body1">{title.slice(0, 1).toUpperCase()}{title.slice(1)}</Typography></BaseContainer>
      </ShowOnScroll>}
      <AppBar color="default" sx={{backgroundColor: "transparent", boxShadow: "none"}}>
        <BaseContainer>
          <IconButton color="primary"
                      sx={{backgroundColor: "white"}}
                      onClick={() => backBtnAction ? backBtnAction() : navigate(-1)}><NavigateBeforeIcon/></IconButton>
        </BaseContainer>
      </AppBar>
    </>
  )
}

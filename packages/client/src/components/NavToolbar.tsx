import {Box, Button, IconButton, TextField} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import LazySuspense from "./LazySuspense"
import {BaseContainer} from "../containers/BaseContainer"
import React, {lazy} from "react"
import {useRxjsContext} from "../context/RxjsContextProvider"

const CategoryMenu = lazy(() => import(/* webpackChunkName: 'category-menu' */ "./CategoryMenu"))

export const NavToolbar = () => {
  const {openSidePanel} = useRxjsContext()

  return (
    <BaseContainer
      sx={{backgroundColor: "white", color: theme => theme.palette.text.primary, py: "0.6rem", display: "flex"}}>
      <TextField variant="outlined"
                 size="small"
                 placeholder="BBQ Pork Bun ..."
                 sx={{
                   "& .MuiOutlinedInput-input": {
                     padding: "0.3rem 0"
                   }
                 }}
                 InputProps={{
                   startAdornment: <IconButton color="secondary" size="small">
                     <SearchIcon fontSize="small"/>
                   </IconButton>
                 }}/>
      <Box width="1rem"/>
      <Button variant="contained" color="primary"
              onClick={() => openSidePanel({
                children: <LazySuspense><CategoryMenu/></LazySuspense>,
                anchor: "right"
              })}>
        menu
      </Button>
    </BaseContainer>
  )
}

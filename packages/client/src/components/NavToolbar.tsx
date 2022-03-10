import {Button, IconButton, TextField} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import LazySuspense from "./LazySuspense"
import {BaseContainer} from "../containers/BaseContainer"
import React, {lazy} from "react"
import {useRxjsContext} from "../context/RxjsContextProvider"
import {useSearchProductLocalState} from "@ca/common/useCases/SearchProductLocalState"

const CategoryMenu = lazy(() => import(/* webpackChunkName: 'category-menu' */ "./CategoryMenu"))

export const NavToolbar = () => {
  const {openSidePanel} = useRxjsContext()
  const {searchProductLocalState} = useSearchProductLocalState()

  return (
    <BaseContainer
      sx={{backgroundColor: "white", color: theme => theme.palette.text.primary, py: "0.6rem", display: "flex"}}>
      <TextField variant="outlined"
                 size="small"
                 placeholder="BBQ Pork Bun ..."
                 onChange={event => searchProductLocalState(event.target.value)}
                 sx={{
                   "& .MuiOutlinedInput-input": {
                     padding: "0.3rem 0"
                   },
                   pr: "1rem"
                 }}
                 InputProps={{
                   startAdornment: <IconButton color="secondary" size="small">
                     <SearchIcon fontSize="small"/>
                   </IconButton>
                 }}/>
      <Button variant="contained" color="primary" sx={{py: 0, minHeight: "1rem"}}
              onClick={() => openSidePanel({
                children: <LazySuspense><CategoryMenu/></LazySuspense>,
                anchor: "right"
              })}>
        Menu
      </Button>
    </BaseContainer>
  )
}

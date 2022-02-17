import {BaseContainer} from "../containers/BaseContainer"
import {InputAdornment, TextField, Typography} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

export const HomePage = () => {
  const {tenant} = useLocalTenantStateService()
  
  return (
    <>
      <BaseContainer sx={{marginTop: '2.6rem'}}>
        <Typography variant="h4" sx={{width: {xs: '80%', md: '100%'}}}>{tenant?.companyName}</Typography>
      </BaseContainer>
      <BaseContainer>
        <TextField hiddenLabel
                   variant="filled"
                   placeholder="Search"
                   InputProps={{
                     startAdornment: (
                       <InputAdornment position="start">
                         <SearchIcon/>
                       </InputAdornment>
                     )
                   }}/>
      </BaseContainer>
    </>
  )
}

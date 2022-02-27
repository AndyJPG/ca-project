import {BaseContainer} from "../containers/BaseContainer"
import {Box, Link as MuiLink} from "@mui/material"
import {Link} from "react-router-dom"
import * as React from "react"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

export const Menu = () => {
  const {tenant} = useLocalTenantStateService()

  if (!tenant) {
    return null
  }

  const {companyLogoUrl, companyName, companyAddress, companyAddressUrl, companyContactNumber} = tenant
  return (
    <BaseContainer
      sx={{
        width: "17.5rem",
        height: "100%",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
      <BaseContainer sx={{padding: "3.5rem 2rem 0 2rem"}}>
        <Box sx={{height: "3rem"}}>
          <Link to={"/cbd-dumpling-house"}>
            <img src={companyLogoUrl} style={{height: "100%"}} alt={companyName + " logo"}/>
          </Link>
        </Box>
      </BaseContainer>
      <BaseContainer sx={{padding: "0 2rem 3.5rem 2rem"}}>
        <MuiLink variant="body2"
                 target="_blank"
                 underline="hover"
                 href={companyAddressUrl}>{companyAddress}</MuiLink>
        <MuiLink variant="body2" underline="hover" href={`tel:${companyContactNumber}`}>{companyContactNumber}</MuiLink>
      </BaseContainer>
    </BaseContainer>
  )
}

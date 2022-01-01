import * as React from "react"
import {InputBase, styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'

export interface SearchBarStyles {
    width?: string
}

interface SearchBarStyleProps {
    styles?: SearchBarStyles
}

const SearchBar = styled('div')(() => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    minHeight: '48px',
    width: '100%',
    borderRadius: '999px',
    backgroundColor: 'white',
}))

const StyledInputBase = styled(InputBase)(() => ({
    fontSize: '14px',
    minWidth: '180px'
}))

const SearchBarIconWrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    marginRight: '8px'
}))

const SearchBarStyle = (props: SearchBarStyleProps) => {
    return (
        <SearchBar sx={{
            width: props.styles?.width
        }}>
            <SearchBarIconWrapper>
                <SearchIcon/>
            </SearchBarIconWrapper>
            <StyledInputBase placeholder="Where are your next home?"/>
        </SearchBar>
    )
}

export default SearchBarStyle

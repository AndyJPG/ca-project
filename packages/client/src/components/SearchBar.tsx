import {Button, InputBase, styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import * as React from "react"

interface SearchBarProps {
    value: string
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onClickHandler: () => void
    styles?: SearchBarStyles
}

interface SearchBarStyles {
    width?: string,
    margin?: string
}

const StyledSearchBar = styled('div')(({theme}) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    minHeight: '48px',
    width: '100%',
    borderRadius: '999px',
    backgroundColor: 'white',
    [theme.breakpoints.up("md")]: {
        padding: "9px",
        justifyContent: 'space-between'
    }
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
    fontSize: '14px',
    minWidth: '200px',
    [theme.breakpoints.up("md")]: {
        marginLeft: "18px",
        fontSize: '16px',
        minWidth: '240px'
    }
}))

const SearchBarIconWrapper = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '100%',
    marginRight: '8px',
    [theme.breakpoints.up("md")]: {
        display: 'none'
    }
}))

const SearchBarButton = styled(Button)(({theme}) => ({
    border: "1px solid black",
    borderRadius: "100%",
    padding: "11px",
    minWidth: "auto",
    display: "none",
    [theme.breakpoints.up("md")]: {
        display: "inline-flex"
    }
}))

export const SearchBar = (props: SearchBarProps) => {
    return (
        <StyledSearchBar sx={{
            width: props.styles?.width,
            margin: props.styles?.margin
        }}>
            <SearchBarIconWrapper>
                <SearchIcon sx={{color: 'black'}}/>
            </SearchBarIconWrapper>
            <StyledInputBase value={props.value}
                             onChange={props.onChangeHandler}
                             placeholder="Where are your next home?"/>
            <SearchBarButton onClick={props.onClickHandler}>
                <SearchIcon/>
            </SearchBarButton>
        </StyledSearchBar>
    )
}

import SearchBarStyle, {SearchBarStyles} from "./SearchBar.style";

interface SearchBarProps {
    styles?: SearchBarStyles
}


export const SearchBar = (props: SearchBarProps) => {
    return (
        <SearchBarStyle styles={props.styles}/>
    )
}

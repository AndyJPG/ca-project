import SearchBarStyle, {SearchBarStyles} from "./SearchBar.style";

interface SearchBarProps {
    styles?: SearchBarStyles
}


const SearchBar = (props: SearchBarProps) => {
    return (
        <SearchBarStyle styles={props.styles}/>
    )
}

export default SearchBar

import * as React from "react"
import {Hero, SearchBar} from "../../components";
import {Typography} from "@mui/material";
import {useSearchPosts} from "@ca/common/useCases";
import {useState} from "react";

export const HomePage = () => {
    const {searchPosts} = useSearchPosts()
    const [keywords, setKeywords] = useState("")
    const searchOnClickHandler = () => {
        searchPosts(keywords)
            .catch(e => console.log(e))
    }
    return (
        <Hero>
            <SearchBar value={keywords} onChangeHandler={(e) => setKeywords(e.currentTarget.value)}
                       onClickHandler={searchOnClickHandler} styles={{
                margin: "0 0 24px 0"
            }}/>
            <Typography variant='h5' sx={{
                fontWeight: 'bold',
                textAlign: 'center'
            }}>See what others think before move in.</Typography>
        </Hero>
    )
}

import * as React from "react"
import {Hero, SearchBar} from "../../components";
import {Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const HomePage = () => {
    const [keywords, setKeywords] = useState("")
    const navigate = useNavigate()

    const searchOnClickHandler = () => {
        navigate(`/s/homes/${keywords}`)
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

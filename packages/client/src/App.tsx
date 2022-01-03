import * as React from 'react'
import {BaseLayout} from "./utils/muiStyleComponents"
import {Post, Home, PostList} from "./pages"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Typography} from "@mui/material";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="homes" element={<PostList/>}/>
                    <Route path="homes/:homeId" element={<Post/>}/>
                    <Route path="*" element={
                        <Typography>404 not found</Typography>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

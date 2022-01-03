import * as React from 'react'
import {BaseLayout} from "./utils/muiStyleComponents"
import {PostPage, HomePage, PostListPage} from "./pages"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Typography} from "@mui/material";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="homes" element={<PostListPage/>}/>
                    <Route path="homes/:homeId" element={<PostPage/>}/>
                    <Route path="*" element={
                        <Typography>404 not found</Typography>
                    }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

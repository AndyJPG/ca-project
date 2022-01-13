import * as React from 'react'
import {BaseLayout} from "./components"
import {HomeDetailPage, HomePage, HomeListPage} from "./pages"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Typography} from "@mui/material";
import {HomeContextProvider} from "./store/HomeContext";
import {AppThemeProvider} from "./store/AppThemeProvider";

function App() {
    return (
        <AppThemeProvider>
            <HomeContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BaseLayout/>}>
                            <Route index element={<HomePage/>}/>
                            <Route path="/s/homes/:keywords" element={<HomeListPage/>}/>
                            <Route path="homes/:homeId" element={<HomeDetailPage/>}/>
                            <Route path="*" element={
                                <Typography>404 not found</Typography>
                            }/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </HomeContextProvider>
        </AppThemeProvider>
    );
}

export default App;

import React from 'react';
import {AppContextProvider} from "./context/AppContextProvider";
import {Auth} from "./pages/Auth/Auth";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/user" element={<div>User page</div>}/>
                    <Route index element={<div>Front page</div>}/>
                </Routes>
            </BrowserRouter>
            <Auth/>
        </AppContextProvider>
    );
}

export default App;

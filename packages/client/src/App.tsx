import React from 'react';
import {AppContextProvider} from "./context/AppContextProvider";
import {Auth} from "./pages/Auth/Auth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Front} from "./pages/Front/Front";
import {User} from "./pages/User/User";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/auth" element={<Auth/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route index element={<Front/>}/>
                </Routes>
            </BrowserRouter>
        </AppContextProvider>
    );
}

export default App;

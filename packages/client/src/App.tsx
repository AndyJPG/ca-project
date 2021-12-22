import React from 'react';
import {AppContextProvider} from "./context/AppContextProvider";
import {Auth} from "./components/Auth/Auth";

function App() {
    return (
        <AppContextProvider>
            <Auth/>
        </AppContextProvider>
    );
}

export default App;

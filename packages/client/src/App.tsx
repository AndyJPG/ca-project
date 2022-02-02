import * as React from 'react'
import {ThemeContextProvider} from "./Context/ThemeContextProvider"
import {Layout} from "./containers/Layout"

function App() {
    return (
        <ThemeContextProvider>
            <Layout/>
        </ThemeContextProvider>
    )
}

export default App

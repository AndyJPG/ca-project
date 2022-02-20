import * as React from 'react'
import {useEffect} from 'react'
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"
import {BrowserRouter} from "react-router-dom"
import {ThemeContextProvider} from "./context"
import {PageRoutes} from "./pages/PageRoutes"
import {ScrollToAnchor} from "./components/ScrollToAnchor"

function App() {
  const {initializeTenant} = useInitializeTenant()

  useEffect(() => {
    initializeTenant('1')
      .catch(e => console.log(e))
  }, [])

  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <ScrollToAnchor/>
        {/*<Layout/>*/}
        <PageRoutes/>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}

export default App

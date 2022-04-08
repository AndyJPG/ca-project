import { useInitializeTenant } from "@ca/common/useCases/InitializeTenant"
import * as React from "react"
import { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import AppDialog from "./components/AppDialog"
import BackdropSpinner from "./components/BackdropSpinner"
import { ScrollToAnchor } from "./components/ScrollToAnchor"
import { SidePanel } from "./components/SidePanel"
import { RxjsContextProvider } from "./context"
import { PageRoutes } from "./pages/PageRoutes"

function App() {
  const [ loading, setLoading ] = useState(true)
  const { initializeTenant } = useInitializeTenant()

  useEffect(() => {
    setLoading(true)
    const pathName = window.location.pathname.split("/")
    if (pathName.length > 1) {
      initializeTenant(pathName[1])
        .catch(e => console.log(e))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <RxjsContextProvider>
      <AppDialog/>
      {loading ? <BackdropSpinner/> : (
        <BrowserRouter>
          <ScrollToAnchor/>
          <SidePanel/>
          <PageRoutes/>
        </BrowserRouter>
      )}
    </RxjsContextProvider>
  )
}

export default App

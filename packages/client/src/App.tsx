import { useInitializeTenant } from "@ca/common/useCases/InitializeTenant"
import * as React from "react"
import { lazy, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import BackdropSpinner from "./components/BackdropSpinner"
import LazySuspense from "./components/LazySuspense"
import { RxjsContextProvider } from "./context"
import { PageRoutes } from "./pages/PageRoutes"

const AppDialog = lazy(() => import("./components/AppDialog"))
const SidePanel = lazy(() => import("./components/SidePanel"))
const ScrollToAnchor = lazy(() => import("./components/ScrollToAnchor"))

function App() {
  const [ loading, setLoading ] = useState(false)
  const { initializeTenant } = useInitializeTenant()

  useEffect(() => {
    // setLoading(true)
    // const pathName = window.location.pathname.split("/")
    // if (pathName.length > 1) {
    //   initializeTenant(pathName[1])
    //     .catch(e => console.log(e))
    //     .finally(() => setLoading(false))
    // } else {
    //   setLoading(false)
    // }
  }, [])

  return (
    <RxjsContextProvider>
      <LazySuspense name="app dialog">
        <AppDialog/>
      </LazySuspense>
      {loading ? <BackdropSpinner/> : (
        <BrowserRouter>
          <LazySuspense name="side panel and scroll to anchor">
            <ScrollToAnchor/>
            <SidePanel/>
          </LazySuspense>
          <PageRoutes/>
        </BrowserRouter>
      )}
    </RxjsContextProvider>
  )
}

export default App

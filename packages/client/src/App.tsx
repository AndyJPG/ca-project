import * as React from "react"
import {lazy, Suspense, useEffect} from "react"
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"
import {useLocation} from "react-router-dom"
import {PageRoutes} from "./pages/PageRoutes"
import {ScrollToAnchor} from "./components/ScrollToAnchor"
import {SidePanel} from "./components/SidePanel"
import {RxjsContextProvider} from "./context/RxjsContextProvider"
import {ErrorBoundary} from "react-error-boundary"

const ShareModuleHeader = lazy(() => import("shareModules/Header"))

function App() {
  const {initializeTenant} = useInitializeTenant()
  const location = useLocation()

  useEffect(() => {
    const pathName = location.pathname.split("/")
    if (pathName.length > 1) {
      initializeTenant(pathName[1])
        .catch(e => console.log(e))
    }
  }, [])

  return (
    <>
      <ErrorBoundary FallbackComponent={({error}) => <p>{error.message}</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <ShareModuleHeader/>
        </Suspense>
      </ErrorBoundary>
      <ScrollToAnchor/>
      <SidePanel/>
      <RxjsContextProvider>
        <PageRoutes/>
      </RxjsContextProvider>
    </>
  )
}

export default App

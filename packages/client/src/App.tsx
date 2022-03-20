import * as React from "react"
import {useEffect} from "react"
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"
import {useLocation} from "react-router-dom"
import {ScrollToAnchor} from "./components/ScrollToAnchor"
import {SidePanel} from "./components/SidePanel"
import {RxjsContextProvider} from "./context"
import LazySuspense from "./components/LazySuspense"
import {PageRoutes} from "./pages/PageRoutes"

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
    <RxjsContextProvider>
      <ScrollToAnchor/>
      <SidePanel/>
      <LazySuspense>
        <PageRoutes/>
      </LazySuspense>
    </RxjsContextProvider>
  )
}

export default App

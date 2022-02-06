import * as React from 'react'
import {useEffect} from 'react'
import {ThemeContextProvider} from "./Context/ThemeContextProvider"
import {Layout} from "./containers/Layout"
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"

function App() {
  const {initializeTenant} = useInitializeTenant()

  useEffect(() => {
    initializeTenant("123")
  }, [])
  return (
    <ThemeContextProvider>
      <Layout/>
    </ThemeContextProvider>
  )
}

export default App

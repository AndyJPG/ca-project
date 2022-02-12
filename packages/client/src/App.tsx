import * as React from 'react'
import {useEffect} from 'react'
import {Layout} from "./containers/Layout"
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"

function App() {
  const {initializeTenant} = useInitializeTenant()

  useEffect(() => {
    initializeTenant('1')
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <Layout/>
    </>
  )
}

export default App

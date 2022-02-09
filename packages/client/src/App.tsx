import * as React from 'react'
import {useEffect} from 'react'
import {Layout} from "./containers/Layout"
import {useInitializeTenant} from "@ca/common/useCases/InitializeTenant"
import {useLocalTenantStateService} from "@ca/common/services/LocalTenantStateServiceAdapter"

function App() {
  const {tenant} = useLocalTenantStateService()
  const {initializeTenant} = useInitializeTenant()

  useEffect(() => {
    initializeTenant('1')
      .catch(e => console.log(e))
  }, [])

  if (tenant) {
    console.log(tenant)
  }

  return (
    <>
      {tenant ? tenant.companyName : "loading"}
      <Layout/>
    </>
  )
}

export default App

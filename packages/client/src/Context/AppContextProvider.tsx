import React, {createContext, useContext, useState} from "react"
import Tenant from "@ca/common/domain/tenant/Tenant"

interface IAppContext {
  tenant: Tenant | null
  updateTenant: (tenant: Tenant) => void
}

const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider: React.FC = (props) => {
  const [tenant, setTenant] = useState<Tenant | null>(null)

  return (
    <AppContext.Provider
      value={{tenant, updateTenant: setTenant}}>{props.children}</AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)

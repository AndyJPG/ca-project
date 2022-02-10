import {LocalTenantStateService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/Context/AppContextProvider"

export const useLocalTenantStateService = (): LocalTenantStateService => {
  return useAppContext()
}

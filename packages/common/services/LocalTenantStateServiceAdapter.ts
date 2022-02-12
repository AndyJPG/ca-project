import {LocalTenantStateService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalTenantStateService = (): LocalTenantStateService => {
  return useAppContext()
}

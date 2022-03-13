import {LocalTenantService} from "../useCases/ServicesAdapter.interfaces"
import {useAppContext} from "@ca/client/src/context"

export const useLocalTenantService = (): LocalTenantService => {
  return useAppContext()
}

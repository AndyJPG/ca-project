import {LocalTenantStateService} from "../useCases/ServicesAdapter.interfaces"
import Tenant from "../domain/tenant/Tenant"

export const useLocalTenantStateService = (): LocalTenantStateService => {
  return {
    setTenant(tenant: Tenant): void {
      console.log(tenant)
    }
  }
}

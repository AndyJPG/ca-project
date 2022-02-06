import Tenant from "../domain/tenant/Tenant"

export interface LocalTenantStateService {
  setTenant(tenant: Tenant): void
}

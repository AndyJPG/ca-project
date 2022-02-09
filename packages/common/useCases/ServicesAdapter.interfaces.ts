import Tenant from "../domain/tenant/Tenant"

export interface LocalTenantStateService {
  tenant: Tenant | null

  updateTenant(tenant: Tenant): void
}

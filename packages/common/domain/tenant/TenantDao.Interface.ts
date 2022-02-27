import Tenant from "./Tenant"

export default interface TenantDaoInterface {
  getTenantById(tenantId: string): Promise<Tenant>

  getTenantByDomain(tenantDomain: string): Promise<Tenant | null>
}

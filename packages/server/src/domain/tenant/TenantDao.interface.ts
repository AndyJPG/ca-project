import Tenant from "./Tenant"
import TenantDto from "./TenantDto"

export default interface TenantDaoInterface {
    getTenants(): Promise<Tenant[] | null>

    getTenantById(tenantId: string): Promise<Tenant | null>

    addTenant(tenant: TenantDto): Promise<Tenant | null>
}

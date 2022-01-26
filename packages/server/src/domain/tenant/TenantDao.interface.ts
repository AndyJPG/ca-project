import Tenant from "./Tenant"
import TenantDto from "./TenantDto"

export default interface TenantDaoInterface {
    getTenants(): Promise<Tenant[]>

    getTenantById(tenantId: string): Promise<Tenant | null>

    addTenant(tenant: TenantDto): Promise<Tenant | null>

    updateTenant(tenantId: string, tenant: TenantDto): Promise<Tenant | null>
}

import TenantDaoInterface from "./TenantDao.interface"
import TenantDto from "./TenantDto"
import Tenant from "./Tenant"
import shortid from "shortid"

export default class TenantDao implements TenantDaoInterface {
    tenants: Tenant[] = []

    async addTenant(tenant: TenantDto): Promise<Tenant | null> {
        tenant.id = shortid.generate()
        const newTenant = new Tenant(tenant.id, tenant.companyName)
        this.tenants.push(newTenant)
        return newTenant
    }

    async getTenantById(tenantId: string): Promise<Tenant | null> {
        const tenantIndex = this.tenants.findIndex(tenant => tenant.id === tenantId)
        return this.tenants[tenantIndex]
    }

    async getTenants(): Promise<Tenant[]> {
        return this.tenants
    }

    async updateTenant(tenantId: string, tenant: TenantDto): Promise<Tenant | null> {
        const index = this.tenants.findIndex(tenant => tenant.id === tenantId)
        if (index < 0) return null

        const updatedTenant = this.tenants[index]
        const allowedUpdateField = [
            "companyName",
            "categories",
            "products"
        ]

        for (const field of allowedUpdateField) {
            if (field in tenant) {
                // @ts-ignore
                updatedTenant[field] = tenant[field]
            }
        }
        this.tenants.splice(index, 1, updatedTenant)

        return updatedTenant
    }
}

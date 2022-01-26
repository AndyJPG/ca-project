import Tenant from "./Tenant"
import TenantDto from "./TenantDto"
import TenantDaoInterface from "./TenantDao.interface"

export default class TenantRepository {
    private _tenantDao: TenantDaoInterface

    constructor(
        tenantDao: TenantDaoInterface
    ) {
        this._tenantDao = tenantDao
    }

    async getTenants(): Promise<Tenant[]> {
        return this._tenantDao.getTenants()
    }

    async getTenantById(tenantId: string): Promise<Tenant | null> {
        return this._tenantDao.getTenantById(tenantId)
    }

    async addTenant(tenant: TenantDto): Promise<Tenant | null> {
        return this._tenantDao.addTenant(tenant)
    }

    async updateTenant(tenantId: string, tenant: TenantDto): Promise<Tenant | null> {
        return this._tenantDao.updateTenant(tenantId, tenant)
    }
}

import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"

export const TenantDao = (): TenantDaoInterface => {
    return {
        getTenantById(tenantId: string): Promise<Tenant> {
            return Promise.resolve({id: '1', companyName: 'cbd dumpling house'})
        }
    }
}

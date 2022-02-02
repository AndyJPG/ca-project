import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {TenantDao} from "./TenantDao"

interface Dependencies {
    tenantDao: TenantDaoInterface
}

const tenantRepository = (dependencies: Dependencies) => {
    const tenantDao: TenantDaoInterface = dependencies.tenantDao

    return {
        getTenantById(tenantId: string): Promise<Tenant> {
            return tenantDao.getTenantById(tenantId)
        }
    }
}

export const useTenantRepository = () => {
    const tenantDao: TenantDaoInterface = TenantDao()
    return tenantRepository({tenantDao})
}

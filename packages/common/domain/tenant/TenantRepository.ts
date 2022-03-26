import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {FirebaseTenantDao} from "./FirebaseTenantDao"

interface Dependencies {
  tenantDao: TenantDaoInterface
}

const tenantRepository = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao

  return {
    getTenantById(tenantId: string): Promise<Tenant> {
      return tenantDao.getTenantById(tenantId)
    },
    getTenantByDomain(tenantDomain: string): Promise<Tenant | null> {
      return tenantDao.getTenantByDomain(tenantDomain)
    }
  }
}

export const useTenantRepository = () => {
  const tenantDao: TenantDaoInterface = FirebaseTenantDao()
  return tenantRepository({tenantDao})
}

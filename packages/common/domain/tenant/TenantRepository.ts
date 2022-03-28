import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {FirestoreTenantDao} from "./FirestoreTenantDao"

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
  const tenantDao: TenantDaoInterface = FirestoreTenantDao()
  return tenantRepository({tenantDao})
}

import TenantDaoInterface from "./TenantDao.Interface"
import Tenant from "./Tenant"
import {GraphqlTenantDao} from "./GraphqlTenantDao"

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
  const tenantDao: TenantDaoInterface = GraphqlTenantDao()
  return tenantRepository({tenantDao})
}

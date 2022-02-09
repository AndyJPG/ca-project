import TenantDaoInterface from "../domain/tenant/TenantDao.Interface"
import {LocalTenantStateService} from "./ServicesAdapter.interfaces"
import {useTenantRepository} from "../domain/tenant/TenantRepository"
import {useLocalTenantStateService} from "../services/LocalTenantStateServiceAdapter"

interface Dependencies {
  tenantDao: TenantDaoInterface
  localTenantState: LocalTenantStateService
}

export const initializeTenant = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao
  const localTenantState: LocalTenantStateService = dependencies.localTenantState

  return {
    async initializeTenant(tenantId: string): Promise<void> {
      try {
        const tenant = await tenantDao.getTenantById(tenantId)
        localTenantState.updateTenant(tenant)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export const useInitializeTenant = () => {
  const tenantDao = useTenantRepository()
  const localTenantState = useLocalTenantStateService()

  return initializeTenant({tenantDao, localTenantState})
}

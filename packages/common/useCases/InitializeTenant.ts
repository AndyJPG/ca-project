import TenantDaoInterface from "../domain/tenant/TenantDao.Interface"
import {LocalCategoryStateService, LocalTenantStateService} from "./ServicesAdapter.interfaces"
import {useTenantRepository} from "../domain/tenant/TenantRepository"
import {useLocalTenantStateService} from "../services/LocalTenantStateServiceAdapter"
import {CategoryDaoInterface} from "../domain/category/CategoryDao.interface"
import {useCategoryRepository} from "../domain/category/CategoryRepository"
import {useLocalCategoryStateService} from "../services/LocalCategoryStateServiceAdapter"

interface Dependencies {
  tenantDao: TenantDaoInterface
  categoryDao: CategoryDaoInterface
  localTenantState: LocalTenantStateService
  localCategoryState: LocalCategoryStateService
}

export const initializeTenant = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao
  const localTenantState: LocalTenantStateService = dependencies.localTenantState
  const localCategoryState: LocalCategoryStateService = dependencies.localCategoryState

  return {
    async initializeTenant(tenantDomain: string): Promise<void> {
      try {
        const tenant = await tenantDao.getTenantByDomain(tenantDomain)
        if (tenant) {
          const categoriesWithProduct = await categoryDao.getCategoriesWithProductsByTenantId(tenant.id)
          localTenantState.updateTenant(tenant)
          localCategoryState.updateCategoriesWithProduct(categoriesWithProduct)
        } else {
          localTenantState.updateTenant(tenant)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export const useInitializeTenant = () => {
  const tenantDao = useTenantRepository()
  const categoryDao = useCategoryRepository()
  const localTenantState = useLocalTenantStateService()
  const localCategoryState = useLocalCategoryStateService()

  return initializeTenant({tenantDao, categoryDao, localTenantState, localCategoryState})
}

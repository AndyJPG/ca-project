import TenantDaoInterface from "../domain/tenant/TenantDao.Interface"
import {LocalCategoryService, LocalTenantService} from "./ServicesAdapter.interfaces"
import {useTenantRepository} from "../domain/tenant/TenantRepository"
import {useLocalTenantService} from "../services/LocalTenantServiceAdapter"
import {CategoryDaoInterface} from "../domain/category/CategoryDao.interface"
import {useCategoryRepository} from "../domain/category/CategoryRepository"
import {useLocalCategoryService} from "../services/LocalCategoryServiceAdapter"

interface Dependencies {
  tenantDao: TenantDaoInterface
  categoryDao: CategoryDaoInterface
  localTenantState: LocalTenantService
  localCategoryState: LocalCategoryService
}

export const initializeTenant = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao
  const localTenantState: LocalTenantService = dependencies.localTenantState
  const localCategoryState: LocalCategoryService = dependencies.localCategoryState

  return {
    async initializeTenant(tenantDomain: string): Promise<void> {
      try {
        const tenant = await tenantDao.getTenantByDomain(tenantDomain)
        if (tenant) {
          const categories = await categoryDao.getCategoriesByTenantId(tenant.id)
          const categoriesWithProduct = await categoryDao.getCategoriesWithProductsByTenantId(tenant.id)
          localTenantState.setTenant(tenant)
          localCategoryState.setCategories(categories)
          localCategoryState.setCategoriesWithProduct(categoriesWithProduct)
        } else {
          localTenantState.setTenant(tenant)
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
  const localTenantState = useLocalTenantService()
  const localCategoryState = useLocalCategoryService()

  return initializeTenant({tenantDao, categoryDao, localTenantState, localCategoryState})
}

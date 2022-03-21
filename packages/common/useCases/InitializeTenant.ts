import TenantDaoInterface from "../domain/tenant/TenantDao.Interface"
import {LocalCartService, LocalCategoryService, LocalTenantService} from "./ServicesAdapter.interfaces"
import {useTenantRepository} from "../domain/tenant/TenantRepository"
import {useLocalTenantService} from "../services/LocalTenantService"
import {CategoryDaoInterface} from "../domain/category/CategoryDao.interface"
import {useCategoryRepository} from "../domain/category/CategoryRepository"
import {useLocalCategoryService} from "../services/LocalCategoryService"
import {useLocalCartService} from "../services/LocalCartService"

interface Dependencies {
  tenantDao: TenantDaoInterface
  categoryDao: CategoryDaoInterface
  localTenantState: LocalTenantService
  localCategoryState: LocalCategoryService
  localCartState: LocalCartService
}

const initializeTenant = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao
  const localTenantState: LocalTenantService = dependencies.localTenantState
  const localCategoryState: LocalCategoryService = dependencies.localCategoryState
  const localCartState: LocalCartService = dependencies.localCartState

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
          localCartState.initializeCart(tenant.companyDomain)
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
  const localCartState = useLocalCartService()

  return initializeTenant({tenantDao, categoryDao, localTenantState, localCategoryState, localCartState})
}

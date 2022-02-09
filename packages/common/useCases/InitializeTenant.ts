import TenantDaoInterface from "../domain/tenant/TenantDao.Interface"
import {LocalTenantStateService} from "./ServicesAdapter.interfaces"
import {useTenantRepository} from "../domain/tenant/TenantRepository"
import {useLocalTenantStateService} from "../services/LocalTenantStateServiceAdapter"
import {CategoryDaoInterface} from "../domain/category/CategoryDao.interface"
import ProductDaoInterface from "../domain/product/ProductDao.interface"
import {useCategoryRepository} from "../domain/category/CategoryRepository"
import {useProductRepository} from "../domain/product/ProductRepository"

interface Dependencies {
  tenantDao: TenantDaoInterface
  categoryDao: CategoryDaoInterface
  productDao: ProductDaoInterface
  localTenantState: LocalTenantStateService
}

export const initializeTenant = (dependencies: Dependencies) => {
  const tenantDao: TenantDaoInterface = dependencies.tenantDao
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao
  const productDao: ProductDaoInterface = dependencies.productDao
  const localTenantState: LocalTenantStateService = dependencies.localTenantState

  return {
    async initializeTenant(tenantId: string): Promise<void> {
      try {
        const tenant = await tenantDao.getTenantById(tenantId)
        const categories = await categoryDao.getCategoriesByTenantId(tenant.id)
        const products = await productDao.getProductsByTenantId(tenant.id)
        console.log(process.env.DEV_API)
        console.log(tenant)
        console.log(categories)
        console.log(products)
        localTenantState.updateTenant(tenant)
      } catch (e) {
        console.log(e)
      }
    }
  }
}

export const useInitializeTenant = () => {
  const tenantDao = useTenantRepository()
  const categoryDao = useCategoryRepository()
  const productDao = useProductRepository()
  const localTenantState = useLocalTenantStateService()

  return initializeTenant({tenantDao, categoryDao, productDao, localTenantState})
}

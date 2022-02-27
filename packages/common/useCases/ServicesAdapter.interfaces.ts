import Tenant from "../domain/tenant/Tenant"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"

export interface LocalTenantStateService {
  tenant: Tenant | null

  updateTenant(tenant: Tenant | null): void
}

export interface LocalCategoryStateService {
  categoriesWithProduct: CategoryWithProductDto[]

  updateCategoriesWithProduct(data: CategoryWithProductDto[]): void
}

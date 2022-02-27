import Tenant from "../domain/tenant/Tenant"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"
import Category from "../domain/category/Category"

export interface LocalTenantStateService {
  tenant: Tenant | null

  updateTenant(tenant: Tenant | null): void
}

export interface LocalCategoryStateService {
  categories: Category[] | null
  categoriesWithProduct: CategoryWithProductDto[]

  updateCategories(data: Category[]): void

  updateCategoriesWithProduct(data: CategoryWithProductDto[]): void
}

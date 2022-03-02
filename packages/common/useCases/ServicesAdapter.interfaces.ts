import Tenant from "../domain/tenant/Tenant"
import {CategoryWithProductDto} from "../domain/category/CategoryDto"
import Category from "../domain/category/Category"
import Product from "../domain/product/Product"

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

export interface LocalProductStateService {
  products: Product[] | null

  updateProducts(data: Product[] | null): void
}

export interface LocalProductSearchResultService {
  categoriesWithProductSearchResult: CategoryWithProductDto[]

  updateCategoriesWithProductSearchResult(data: CategoryWithProductDto[]): void
}

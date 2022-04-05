import Category from "./Category"
import CategoryWithProducts from "./CategoryWithProducts"

export interface CategoryDaoInterface {
  getCategoriesByTenantId(tenantId: string): Promise<Category[]>

  getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProducts[]>
}

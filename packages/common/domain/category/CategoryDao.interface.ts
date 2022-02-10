import Category from "./Category"
import {CategoryWithProductDto} from "./CategoryDto"

export interface CategoryDaoInterface {
  getCategoriesByTenantId(tenantId: string): Promise<Category[]>

  getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProductDto[]>
}

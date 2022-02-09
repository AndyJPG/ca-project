import Category from "./Category"

export interface CategoryDaoInterface {
  getCategoriesWithProductsByTenantId(tenantId: string): Promise<Category[]>

  getCategoriesByTenantId(tenantId: string): Promise<Category[]>
}

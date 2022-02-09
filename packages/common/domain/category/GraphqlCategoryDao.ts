import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"

export const graphqlCategoryDao = (): CategoryDaoInterface => {
  return {
    getCategoriesWithProductsByTenantId(tenantId: string): Promise<Category[]> {
      return Promise.resolve([])
    }

  }
}

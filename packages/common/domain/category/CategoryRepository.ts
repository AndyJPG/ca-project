import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import {graphqlCategoryDao} from "./GraphqlCategoryDao"

interface Dependencies {
  categoryDao: CategoryDaoInterface
}

const categoryRepository = (dependencies: Dependencies) => {
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao

  return {
    getCategoriesWithProductsByTenantId(tenantId: string): Promise<Category[]> {
      return categoryDao.getCategoriesWithProductsByTenantId(tenantId)
    },
    getCategoriesByTenantId(tenantId: string): Promise<Category[]> {
      return categoryDao.getCategoriesByTenantId(tenantId)
    }
  }
}

export const useCategoryRepository = () => {
  const categoryDao: CategoryDaoInterface = graphqlCategoryDao()
  return categoryRepository({categoryDao})
}

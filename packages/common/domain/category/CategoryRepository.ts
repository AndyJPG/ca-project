import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import CategoryWithProducts from "./CategoryWithProducts"
import {firestoreCategoryDao} from "./FirestoreCategoryDao"

interface Dependencies {
  categoryDao: CategoryDaoInterface
}

const categoryRepository = (dependencies: Dependencies) => {
  const categoryDao: CategoryDaoInterface = dependencies.categoryDao

  return {
    getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProducts[]> {
      return categoryDao.getCategoriesWithProductsByTenantId(tenantId)
    },
    getCategoriesByTenantId(tenantId: string): Promise<Category[]> {
      return categoryDao.getCategoriesByTenantId(tenantId)
    }
  }
}

export const useCategoryRepository = () => {
  const categoryDao: CategoryDaoInterface = firestoreCategoryDao()
  return categoryRepository({categoryDao})
}

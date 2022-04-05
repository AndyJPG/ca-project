import {collection, getDocs, query, where, orderBy} from "firebase/firestore"
import {CategoryDaoInterface} from "./CategoryDao.interface"
import Category from "./Category"
import {CategoryWithProductDto} from "./CategoryDto"
import {db} from "../../index"
import {firestoreCategoryMapper} from "./FirestoreCategoryMapper"
import CategoryWithProducts from "./CategoryWithProducts"

export const firestoreCategoryDao = (): CategoryDaoInterface => {
  return {
    async getCategoriesByTenantId(tenantId: string): Promise<Category[]> {
      return []
    },
    async getCategoriesWithProductsByTenantId(tenantId: string): Promise<CategoryWithProducts[]> {
      const categoriesSnap = await getDocs(query(collection(db, "mp_categories"), orderBy("order", "asc"), where("tenant_id", "==", tenantId)))

      if (categoriesSnap.empty) {
        return []
      }

      return categoriesSnap.docs.map(categorySnap => {
        const category = categorySnap.data() as CategoryWithProductDto
        return firestoreCategoryMapper(category, categorySnap.id)
      })
    }
  }
}

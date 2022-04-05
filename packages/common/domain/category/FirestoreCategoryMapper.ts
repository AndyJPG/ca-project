import {CategoryWithProductDto} from "./CategoryDto"
import CategoryWithProducts from "./CategoryWithProducts"
import firestoreProductMapper from "../product/FirestoreProductMapper"

export const firestoreCategoryMapper = (data: CategoryWithProductDto, id: string): CategoryWithProducts => {
  return {
    id: id,
    tenantId: data.tenant_id,
    name: data.name,
    order: data.order,
    products: data.products.map(({id, ...values}) => firestoreProductMapper(values, id))
  }
}
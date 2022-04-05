import {ProductDto} from "./ProductDto"
import Product from "./Product"
import firestoreProductOptionsMapper from "./FirestoreProductOptionsMapper"

const firestoreProductMapper = (data: ProductDto, id: string): Product => {
  return {
    id: id,
    tenantId: data.tenant_id,
    name: data.name,
    description: data.description,
    price: data.price,
    imageUrl: data.image_url,
    ingredients: data.ingredients,
    categories: data.categories,
    productOptions: firestoreProductOptionsMapper(data.product_options)
  }
}

export default firestoreProductMapper
import Category from "../category/Category"
import {ProductOptions} from "./ProductOption"

export default interface Product {
  id: string
  tenantId: string
  name: string
  description: string
  price: number
  imageUrl: string | null
  categories: Category[]
  productOptions: ProductOptions[]
}

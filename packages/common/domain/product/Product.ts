import {ProductOptions} from "./ProductOption"

export default interface Product {
  id: string
  tenantId: string
  name: string
  description: string
  price: number
  imageUrl: string | null
  ingredients: string[]
  categories: string[]
  productOptions: ProductOptions[]
}

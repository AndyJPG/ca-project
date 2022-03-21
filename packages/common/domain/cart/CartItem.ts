import Product from "../product/Product"
import {ProductOptions} from "../product/ProductOption"

export default interface CartItem {
  id: string
  product: Product
  productOptions: ProductOptions[]
  quantity: number
}

import Category from "./Category"
import Product from "../product/Product"

export interface CategoryWithProductDto extends Category {
  products: Product[]
}

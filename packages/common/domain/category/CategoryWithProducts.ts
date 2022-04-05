import Category from "./Category"
import Product from "../product/Product"

export default interface CategoryWithProducts extends Category {
  products: Product[]
}
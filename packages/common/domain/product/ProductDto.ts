import Category from "../category/Category"
import {ProductOptionsDto} from "./ProductOptionDto"

export interface ProductDto {
  tenant_id: string
  name: string
  description: string
  price: number
  image_url: string | null
  ingredients: string[]
  categories: Category[]
  product_options: ProductOptionsDto[]
}
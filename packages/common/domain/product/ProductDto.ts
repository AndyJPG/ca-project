import { ProductOptionsDto } from "./ProductOptionDto"

export interface ProductDto {
  tenant_id: string
  name: string
  description: string
  price: number
  image_url: string | null
  ingredients: string[]
  categories: string[]
  diet: string[]
  product_options: ProductOptionsDto[]
}
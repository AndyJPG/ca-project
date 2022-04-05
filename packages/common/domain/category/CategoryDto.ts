import {ProductDto} from "../product/ProductDto"

export interface CategoryDto {
  tenant_id: string
  name: string
  order: number
}

export interface CategoryWithProductDto extends CategoryDto {
  products: (ProductDto & { id: string })[]
}

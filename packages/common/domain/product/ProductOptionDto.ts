export interface ProductOptionsDto {
  name: string
  required: boolean
  single_selection: boolean
  options: ProductOptionDto[]
}

export interface ProductOptionDto {
  name: string
  price: number
}

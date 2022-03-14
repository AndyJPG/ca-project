export interface ProductOptions {
  name: string
  required: boolean
  singleSelection: boolean
  options: ProductOption[]
}

export interface ProductOption {
  name: string
  price: number
}

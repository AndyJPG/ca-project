import Category from "../../Category"

export interface ProductDto {
    id: string
    name: string
    description: string
    price: number
    tenantId: string
    images: string[]
    categories: Category[]
}

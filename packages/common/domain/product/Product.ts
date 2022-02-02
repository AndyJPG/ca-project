import Category from "../category/Category"

export default interface Product {
    id: string
    tenantId: string
    name: string
    description: string
    price: string
    categories: Category[]
}

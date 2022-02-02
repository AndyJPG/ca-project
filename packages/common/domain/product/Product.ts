import Category from "../category/Category"
import ProductOption from "./ProductOption"

export default interface Product {
    id: string
    tenantId: string
    name: string
    description: string
    price: string
    categories: Category[]
    productOptions: ProductOption[]
}

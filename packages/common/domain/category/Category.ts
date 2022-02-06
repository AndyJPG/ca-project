import Product from "../product/Product"

export default interface Category {
  id: string
  tenantId: string
  name: string
  products: Product[]
}

import Product from "./Product"
import { ProductDto } from "./ProductDto"

export default interface ProductDaoInterface {
  getProducts(): Promise<Product[]>

  getProductsByTenantId(tenantId: string): Promise<Product[]>

  getProductById(productId: string): Promise<Product | null>

  createProduct(product: ProductDto): Promise<{ id: string } | null>
}

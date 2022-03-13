import Product from "./Product"

export default interface ProductDaoInterface {
    getProducts(): Promise<Product[]>

    getProductsByTenantId(tenantId: string): Promise<Product[]>

    getProductById(productId: string): Promise<Product>
}

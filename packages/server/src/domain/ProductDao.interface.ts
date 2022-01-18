import Product from "./Product";

export interface ProductDaoInterface {
    getProductsByTenantId(tenantId: string): Promise<Product[]>
}

import ProductRepository from "../domain/ProductRepository";
import FakeProductDao from "../domain/FakeProductDao";
import Product from "../domain/Product";

export function getProductsByTenantId(tenantId: string): Promise<Product[]> {
    return new ProductRepository(new FakeProductDao()).getProductsByTenantId(tenantId)
}

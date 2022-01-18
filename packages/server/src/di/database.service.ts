import ProductRepository from "../domain/ProductRepository";
import FakeProductDao from "../domain/FakeProductDao";
import Product from "../domain/Product";

export const fakeProductDao = new FakeProductDao()
export const productRepository = new ProductRepository(fakeProductDao)

export function getProductsByTenantId(tenantId: string): Promise<Product[]> {
    return productRepository.getProductsByTenantId(tenantId)
}

import ProductRepository from "../domain/product/repository/ProductRepository"
import FakeProductDao from "../domain/product/dao/FakeProductDao"
import TenantDao from "../domain/tenant/TenantDao"
import TenantRepository from "../domain/tenant/TenantRepository"

const fakeProductDao = new FakeProductDao()
export const productRepository = new ProductRepository(fakeProductDao)

const tenantDao = new TenantDao()
export const tenantRepository = new TenantRepository(tenantDao)

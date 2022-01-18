import Product from "./Product";

export default class ProductRepository {
    private _productDao: any

    constructor(
        productDao: any
    ) {
        this._productDao = productDao
    }

    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
        return this._productDao.getProductsByTenantId(tenantId)
    }
}

import Product from "./Product";
import {ProductDaoInterface} from "./ProductDao.interface";

export default class ProductRepository {
    private _productDao: ProductDaoInterface

    constructor(
        productDao: ProductDaoInterface
    ) {
        this._productDao = productDao
    }

    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
        return this._productDao.getProductsByTenantId(tenantId)
    }
}

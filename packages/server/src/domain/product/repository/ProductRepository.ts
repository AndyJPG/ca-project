import Product from "../entity/Product"
import {ProductDaoInterface} from "../dao/ProductDao.interface"

export default class ProductRepository {
    private _productDao: ProductDaoInterface

    constructor(
        productDao: ProductDaoInterface
    ) {
        this._productDao = productDao
    }

    async getProductById(productId: string): Promise<Product | null> {
        return this._productDao.getProductById(productId)
    }
}

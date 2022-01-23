import Product from "../entity/Product"
import ProductDaoInterface from "../dao/ProductDao.interface"
import ProductDto from "../dto/ProductDto"

export default class ProductRepository {
    private _productDao: ProductDaoInterface

    constructor(
        productDao: ProductDaoInterface
    ) {
        this._productDao = productDao
    }

    async getProducts(): Promise<Product[]> {
        return this._productDao.getProducts()
    }

    async getProductById(productId: string): Promise<Product | null> {
        return this._productDao.getProductById(productId)
    }

    async addProduct(product: ProductDto): Promise<Product | null> {
        return this._productDao.addProduct(product)
    }

    async updateProductById(productId: string, product: ProductDto): Promise<Product | null> {
        return this._productDao.updateProductById(productId, product)
    }

    async deleteProductById(productId: string): Promise<Product | null> {
        return this._productDao.deleteProductById(productId)
    }
}

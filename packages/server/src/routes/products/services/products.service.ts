import Product from "../../../domain/product/entity/Product"
import {productRepository} from "../../../config/database.service"

class ProductsService {
    async getProductsByTenantId(productId: string): Promise<Product> {
        const product = await productRepository.getProductById(productId)
    }
}

const productsService = new ProductsService()
export default productsService

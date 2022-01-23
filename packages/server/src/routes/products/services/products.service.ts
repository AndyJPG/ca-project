import {productRepository} from "../../../config/database.service"
import Product from "../../../domain/product/entity/Product"
import {ProductDto} from "../../../domain/product/dto/ProductDto"

class ProductsService {
    async getProducts(): Promise<Product[]> {
        return productRepository.getProducts()
    }

    async getProductsById(productId: string): Promise<Product | null> {
        return productRepository.getProductById(productId)
    }

    async addProduct(product: ProductDto): Promise<Product | null> {
        return productRepository.addProduct(product)
    }

    async updateProductById(productId: string, product: ProductDto): Promise<Product | null> {
        return productRepository.updateProductById(productId, product)
    }

    async deleteProductById(productId: string): Promise<Product | null> {
        return productRepository.deleteProductById(productId)
    }
}

const productsService = new ProductsService()
export default productsService

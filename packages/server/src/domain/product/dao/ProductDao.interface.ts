import Product from "../entity/Product"
import {ProductDto} from "../dto/ProductDto"

export interface ProductDaoInterface {
    getProducts(): Promise<Product[]>

    getProductById(tenantId: string): Promise<Product | null>

    addProduct(product: ProductDto): Promise<Product | null>

    updateProductById(productId: string, product: ProductDto): Promise<Product | null>

    deleteProductById(productId: string): Promise<Product | null>
}

import {productRepository} from "../../../config/database.service"
import Product from "../../../domain/product/entity/Product"
import ProductDto from "../../../domain/product/dto/ProductDto"
import {CRUD} from "../../common/interfaces/crud.interface"

class ProductsService implements CRUD {

    create(product: ProductDto): Promise<Product | null> {
        return productRepository.addProduct(product)
    }

    deleteById(id: string): Promise<Product | null> {
        return productRepository.deleteProductById(id)
    }

    list(limit: number, page: number): Promise<Product[]> {
        return productRepository.getProducts()
    }

    patchById(id: string, product: ProductDto): Promise<Product | null> {
        return productRepository.updateProductById(id, product)
    }

    putById(id: string, resource: any): Promise<string> {
        return Promise.resolve("")
    }

    readById(id: string): Promise<Product | null> {
        return productRepository.getProductById(id)
    }
}

const productsService = new ProductsService()
export default productsService

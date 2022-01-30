import Product from "./Product"
import ProductDaoInterface from "./ProductDao.interface"
import {ProductDao} from "./ProductDao"

interface Dependencies {
    productDao: ProductDaoInterface
}

const productRepository = (dependencies: Dependencies) => {
    const productDao: ProductDaoInterface = dependencies.productDao

    return {
        getProducts(): Promise<Product[]> {
            return productDao.getProducts()
        }
    }
}

export const useProductRepository = () => {
    const productDao: ProductDaoInterface = ProductDao()
    return productRepository({productDao})
}

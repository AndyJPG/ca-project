import Product from "./Product"
import ProductDaoInterface from "./ProductDao.interface"
import {FirestoreProductDao} from "./FirestoreProductDao"

interface Dependencies {
  productDao: ProductDaoInterface
}

const productRepository = (dependencies: Dependencies) => {
  const productDao: ProductDaoInterface = dependencies.productDao

  return {
    getProducts(): Promise<Product[]> {
      return productDao.getProducts()
    },
    getProductsByTenantId(tenantId: string): Promise<Product[]> {
      return productDao.getProductsByTenantId(tenantId)
    },
    getProductById(productId: string): Promise<Product | null> {
      return productDao.getProductById(productId)
    }
  }
}

export const useProductRepository = () => {
  const productDao: ProductDaoInterface = FirestoreProductDao()
  return productRepository({productDao})
}

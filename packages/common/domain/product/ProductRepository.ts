import Product from "./Product"
import ProductDaoInterface from "./ProductDao.interface"
import {GraphqlProductDao} from "./GraphqlProductDao"

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
    }
  }
}

export const useProductRepository = () => {
  const productDao: ProductDaoInterface = GraphqlProductDao()
  return productRepository({productDao})
}

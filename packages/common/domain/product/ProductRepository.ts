import Product from "./Product"
import ProductDaoInterface from "./ProductDao.interface"
import { FirestoreProductDao } from "./FirestoreProductDao"
import { ProductDto } from "./ProductDto"

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
    },
    createProduct(product: ProductDto): Promise<{ id: string } | null> {
      return productDao.createProduct(product)
    }
  }
}

export const useProductRepository = () => {
  const productDao: ProductDaoInterface = FirestoreProductDao()
  return productRepository({ productDao })
}

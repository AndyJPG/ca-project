import {getDoc, collection, doc, query, getDocs, where} from "firebase/firestore"
import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"
import {db} from "../../index"
import {ProductDto} from "./ProductDto"
import Category from "../category/Category"
import {ProductOptions} from "./ProductOption"

export const FirestoreProductDao = (): ProductDaoInterface => {
  return {
    async getProductById(productId: string): Promise<Product | null> {
      const productSnap = await getDoc(doc(db, "mp_products", productId))
      if (!productSnap.exists()) {
        return null
      }

      const product = productSnap.data() as ProductDto
      const productOptions = product.product_options.map(option => ({
        ...option,
        singleSelection: option.single_selection
      }))

      return {
        id: productId,
        tenantId: product.tenant_id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.image_url,
        ingredients: product.ingredients,
        categories: product.categories,
        productOptions
      }
    },
    async getProducts(): Promise<Product[]> {
      return []
    },
    async getProductsByTenantId(tenantId: string): Promise<Product[]> {
      const productsSnap = await getDocs(query(collection(db, "mp_products"), where("tenant_id", "==", tenantId)))
      if (productsSnap.empty) {
        return []
      }

      return productsSnap.docs.map(product => {
        const productData = product.data() as ProductDto
        const productOptions = productData.product_options.map(option => ({
          ...option,
          singleSelection: option.single_selection
        }))
        return {
          id: product.id,
          tenantId: productData.tenant_id,
          name: productData.name,
          description: productData.description,
          price: productData.price,
          imageUrl: productData.image_url,
          ingredients: productData.ingredients,
          categories: productData.categories,
          productOptions
        }
      })
    }
  }
}

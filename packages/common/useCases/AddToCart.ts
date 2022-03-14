import Product from "../domain/product/Product"
import {LocalCartService} from "./ServicesAdapter.interfaces"
import {useLocalCartService} from "../services/LocalCartService"
import {ProductOptions} from "../domain/product/ProductOption"

interface Dependencies {
  localCartService: LocalCartService
}

const addToCart = (dependencies: Dependencies) => {
  const localCart: LocalCartService = dependencies.localCartService

  return {
    addToCart(product: Product, quantity: number, productOptions: ProductOptions[]): void {
      localCart.addToCart(product, quantity, productOptions)
    }
  }
}

export const useAddToCart = () => {
  const localCartService = useLocalCartService()
  return addToCart({localCartService})
}

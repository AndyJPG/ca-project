import Product from "../domain/product/Product"
import {LocalCartService} from "./ServicesAdapter.interfaces"
import {useLocalCartService} from "../services/LocalCartService"

interface Dependencies {
  localCartService: LocalCartService
}

const addToCart = (dependencies: Dependencies) => {
  const localCart: LocalCartService = dependencies.localCartService

  return {
    addToCart(product: Product, quantity: number): void {
      localCart.addToCart(product, quantity)
    }
  }
}

export const useAddToCart = () => {
  const localCartService = useLocalCartService()
  return addToCart({localCartService})
}

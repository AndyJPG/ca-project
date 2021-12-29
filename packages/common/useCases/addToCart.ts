import {CartStorageService, NotificationService} from "./ports"
import {useCartStorageService, useNotifierService} from "../services"
import {hasAllergy, addProduct, Product, User} from "../domain"

interface Dependencies {
    storage: CartStorageService
    notifier: NotificationService
}

export function useAddToCart() {
    const storage: CartStorageService = useCartStorageService()
    const notifier: NotificationService = useNotifierService()

    return {
        addToCart: (user: User, product: Product) => addToCart(user, product, {storage, notifier})
    }
}

function addToCart(user: User, product: Product, dependencies: Dependencies): void {
    const {storage, notifier} = dependencies
    const warning = "This cookie is dengrous to your health!"
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item))
    if (isDangerous) return notifier.notify(warning)

    const {cart} = storage
    const updated = addProduct(cart, product)
    storage.updateCart(updated)
}

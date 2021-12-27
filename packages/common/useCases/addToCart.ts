import {Product, User} from "../domain";
import {CartStorageService, NotificationService} from "./ports";
import {useCartStorage} from "../services/storageAdapter";
import {useNotifier} from "../services/notificationAdapter";
import {hasAllergy} from "../domain/user";
import {addProduct} from "../domain/cart";

interface Dependencies {
    storage: CartStorageService
    notifier: NotificationService
}

export function useAddToCart() {
    const storage: CartStorageService = useCartStorage()
    const notifier: NotificationService = useNotifier()

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

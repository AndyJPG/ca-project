import {User} from "./user"
import {ProductList, totalPrice} from "./product"
import {DateTimeString, PriceCents, UniqueId} from "./shared-kernel"

export type OrderStatus = "new" | "delivery" | "completed"

export interface Order {
    user: UniqueId
    cart: ProductList
    created: DateTimeString
    status: OrderStatus
    total: PriceCents
}

export function createOrder(user: User, cart: ProductList): Order {
    return {
        user: user.id,
        cart,
        created: new Date().toISOString(),
        status: 'new',
        total: totalPrice(cart)
    }
}

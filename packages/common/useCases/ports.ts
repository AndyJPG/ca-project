import {PriceCents} from "../domain/shared-kernel";
import {Order} from "../domain/order";
import {Cart} from "../domain/cart";

export interface PaymentService {
    tryPay(amount: PriceCents): Promise<boolean>
}

export interface NotificationService {
    notify(message: string): void
}

export interface CartStorageService {
    cart: Cart
    updateCart(cart: Cart): void
    emptyCart(): void
}

export interface OrdersStorageService {
    orders: Order[]
    updateOrders(orders: Order[]): void
}

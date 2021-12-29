import {CartStorageService, NotificationService, OrdersStorageService, PaymentService} from "./ports"
import {User, Cart, createOrder} from "../domain"
import {useCartStorageService, useOrdersStorageService, useNotifierService, usePaymentService} from "../services"

type Dependencies = {
    notifier: NotificationService
    payment: PaymentService
    orderStorage: OrdersStorageService
    cartStorage: CartStorageService
}

export function useOrderProducts() {
    const payment: PaymentService = usePaymentService()
    const notifier: NotificationService = useNotifierService()
    const orderStorage: OrdersStorageService = useOrdersStorageService()
    const cartStorage: CartStorageService = useCartStorageService()

    return {
        orderProducts: (user: User, cart: Cart) => orderProducts(user, cart, {
            notifier,
            payment,
            cartStorage,
            orderStorage
        })
    }
}

async function orderProducts(user: User, cart: Cart, dependencies: Dependencies) {
    const {payment, notifier, orderStorage, cartStorage} = dependencies
    const order = createOrder(user, cart.products)

    const paid = await payment.tryPay(order.total)
    if (!paid) return notifier.notify("Oops!")

    const {orders} = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
}

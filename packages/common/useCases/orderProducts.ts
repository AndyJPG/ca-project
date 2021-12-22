import {CartStorageService, NotificationService, OrdersStorageService, PaymentService} from "./ports";
import {User} from "../domain/user";
import {Cart} from "../domain/cart";
import {createOrder} from "../domain/order";
import {usePayment} from "../services/paymentAdapter";
import {useNotifier} from "../services/notificationAdapter";
import {useCartStorage, useOrdersStorage} from "../services/storageAdapter";

type Dependencies = {
    notifier: NotificationService
    payment: PaymentService
    orderStorage: OrdersStorageService
    cartStorage: CartStorageService
}

export function useOrderProducts() {
    const payment: PaymentService = usePayment()
    const notifier: NotificationService = useNotifier()
    const orderStorage: OrdersStorageService = useOrdersStorage()
    const cartStorage: CartStorageService = useCartStorage()

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

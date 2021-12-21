import {CartStorageService, NotificationService, OrdersStorageService, PaymentService} from "./ports";
import {User} from "../domain/user";
import {Cart} from "../domain/cart";
import {createOrder} from "../domain/order";
import {usePayment} from "../services/paymentAdapter";
import {useNotifier} from "../services/notificationAdapter";
import {useCartStorage, useOrdersStorage} from "../services/storageAdapter";

export function useOrderProducts() {
    const payment: PaymentService = usePayment()
    const notifier: NotificationService = useNotifier()
    const orderStorage: OrdersStorageService = useOrdersStorage()
    const cartStorage: CartStorageService = useCartStorage()

    async function orderProducts(user: User, cart: Cart) {
        const order = createOrder(user, cart)

        const paid = await payment.tryPay(order.total)
        if (!paid) return notifier.notify("Oops!")

        const {orders} = orderStorage
        orderStorage.updateOrders([...orders, order])
        cartStorage.emptyCart()
    }

    return {orderProducts}
}

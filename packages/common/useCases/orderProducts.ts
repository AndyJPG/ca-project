import {CartStorageService, NotificationService, OrdersStorageService, PaymentService} from "./ports";
import {User} from "../domain/user";
import {Cart} from "../domain/cart";
import {createOrder} from "../domain/order";

const payment: PaymentService = {}
const notifier: NotificationService = {}
const orderStorage: OrdersStorageService = {}
const cartStorage: CartStorageService = {}

async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart)

    const paid = await payment.tryPay(order.total)
    if (!paid) return notifier.notify("Oops!")

    const {orders} = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
}

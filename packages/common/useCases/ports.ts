import {Order, Cart, User, Email, PriceCents, UserName} from "../domain";

export interface UserStorageService {
    user?: User;

    updateUser(user: User): void
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

export interface AuthenticationService {
    auth(name: UserName, email: Email): Promise<User>
}

export interface PaymentService {
    tryPay(amount: PriceCents): Promise<boolean>
}

export interface NotificationService {
    notify(message: string): void
}

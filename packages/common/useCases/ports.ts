import {Email, PriceCents, UserName} from "../domain/shared-kernel";
import {Order} from "../domain/order";
import {Cart} from "../domain/cart";
import {User} from "../domain/user";

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

import {Cart} from "./cart";

export type OrderStatus = "new" | "delivery" | "completed"
export interface Order {
    user: string
    cart: Cart
    created: Date
    status: OrderStatus
    total: number
}

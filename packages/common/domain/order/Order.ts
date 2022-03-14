import Cart from "../cart/Cart"

export default interface Order {
  products: Cart
  total: number
}

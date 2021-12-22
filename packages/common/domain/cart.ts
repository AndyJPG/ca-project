import {Product, ProductList} from "./product";

export interface Cart {
    products: ProductList
}

export function addProduct(cart: Cart, product: Product): Cart {
    return { ...cart, products: [...cart.products, product]}
}

export function contains(cart: Cart, product: Product): boolean {
    return cart.products.some(({id}) => id === product.id)
}

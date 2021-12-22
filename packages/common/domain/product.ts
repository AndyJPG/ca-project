import {Ingredient, PriceCents, ProductTitle, UniqueId} from "./shared-kernel";

export type ProductList = Product[]

export interface Product {
    id: UniqueId
    title: ProductTitle
    price: PriceCents
    toppings: Ingredient[]
}

export const ingredients: Record<Ingredient, string> = {
    chocolate: "Chocolate",
    cocoa: "Cocoa Power",
    cherry: "Cherry",
    marshmallow: "Marshmallow",
    peanuts: "Peanut Butter"
}

export function totalPrice(products: Product[]): PriceCents {
    return products.reduce((total, {price}) => total + price, 0)
}

import Product from "./Product"

export default interface ProductDaoInterface {
    getProducts(): Promise<Product[]>
}

import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"

const data: Product[] = [
    {
        id: "1",
        tenantId: "2",
        name: "apple",
        description: "this is apple",
        price: "12"
    }
]

export const ProductDao = (): ProductDaoInterface => {
    return {
        getProducts(): Promise<Product[]> {
            return Promise.resolve(data)
        }
    }
}

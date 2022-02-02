import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"

const data: Product[] = [
    {
        id: "1",
        tenantId: "2",
        name: "apple",
        description: "this is apple",
        price: "12",
        categories: [],
        productOptions: []
    }
]

export const ProductDao = (): ProductDaoInterface => {
    return {
        getProductsByTenantId(tenantId: string): Promise<Product[]> {
            return Promise.resolve(data)
        },
        getProducts(): Promise<Product[]> {
            return Promise.resolve(data)
        }
    }
}

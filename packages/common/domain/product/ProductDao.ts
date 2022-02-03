import ProductDaoInterface from "./ProductDao.interface"
import Product from "./Product"

const data: Product[] = [
    {
        id: "p_1",
        tenantId: "2",
        name: "Special dumpling",
        description: "Ten pieces",
        price: 15.8,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/83346e61-d930-4ccf-b2a8-439a5e0319da.jpeg',
        categories: [{id: 'c_2', name: 'dumpling'}],
        productOptions: []
    },
    {
        id: "p_2",
        tenantId: "2",
        name: "Shanghai pork dumpling",
        description: "Six pieces",
        price: 15.2,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/b0319908-9784-4f35-8228-890edc14bf7e.jpeg',
        categories: [{id: 'c_2', name: 'dumpling'}],
        productOptions: []
    },
    {
        id: "p_3",
        tenantId: "2",
        name: "Pan fried pork dumpling",
        description: "Twelve pieces",
        price: 15.2,
        imageUrl: 'https://d1ralsognjng37.cloudfront.net/c001a013-9427-4815-a1ad-78a7d87bc0a7.jpeg',
        categories: [{id: 'c_2', name: 'dumpling'}],
        productOptions: []
    },
    {
        id: "p_4",
        tenantId: "2",
        name: "Vegetable bun",
        description: "Three pieces. Steamed",
        price: 14.2,
        imageUrl: null,
        categories: [{id: 'c_2', name: 'dumpling'}],
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

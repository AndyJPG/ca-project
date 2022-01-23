import Product from '../entity/Product'
import ProductDaoInterface from "./ProductDao.interface"
import ProductDto from "../dto/ProductDto"
import shortid from "shortid"

export default class FakeProductDao implements ProductDaoInterface {
    products: Product[] = []

    async addProduct(product: ProductDto): Promise<Product | null> {
        product.id = shortid.generate()
        const {id, name, description, price, tenantId} = product
        if (name && description && price && tenantId) {
            const newProduct = new Product(id, name, description, price, tenantId)
            this.products.push(newProduct)
            return newProduct
        }
        return null
    }

    async deleteProductById(productId: string): Promise<Product | null> {
        const index = this.products.findIndex(product => product.id === productId)
        if (index < 0) return null

        const removedProduct = this.products[index]
        this.products.splice(index, 1)
        return removedProduct
    }

    async getProductById(productId: string): Promise<Product | null> {
        const index = this.products.findIndex(product => product.id === productId)
        if (index < 0) return null

        return this.products[index]
    }

    async getProducts(): Promise<Product[]> {
        return this.products
    }

    async updateProductById(productId: string, product: ProductDto): Promise<Product | null> {
        const index = this.products.findIndex(product => product.id === productId)
        if (index < 0) return null

        const updatedProduct = this.products[index]
        const allowedUpdateField = [
            "name",
            "description",
            "price",
            "images",
            "categories",
        ]

        for (let field of allowedUpdateField) {
            if (field in product) {
                // @ts-ignore
                updatedProduct[field] = product[field]
            }
        }
        this.products.splice(index, 1, updatedProduct)

        return updatedProduct
    }
}

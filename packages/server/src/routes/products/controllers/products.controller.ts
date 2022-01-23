import debug from 'debug'
import express from "express"
import productsService from "../services/products.service"

const log: debug.IDebugger = debug('app:products-controller')

class ProductsController {
    async getProducts(req: express.Request, res: express.Response) {
        const products = await productsService.getProducts()
        res.status(200).send(products)
    }

    async getProductsByTenantId(req: express.Request, res: express.Response) {
        const product = await productsService.getProductsById(req.body.id)
        res.status(200).send(product)
    }
}

const productsController = new ProductsController()
export default productsController

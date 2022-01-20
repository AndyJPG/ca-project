import debug from 'debug'
import express from "express"
import productsService from "../services/products.service"

const log: debug.IDebugger = debug('app:products-controller')

class ProductsController {
    async getProductsByTenantId(req: express.Request, res: express.Response) {
        const user = await productsService.getProductsByTenantId(req.body.id)
        res.status(200).send(user)
    }
}

const productsController = new ProductsController()
export default productsController

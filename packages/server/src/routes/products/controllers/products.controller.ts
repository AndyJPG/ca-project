import debug from 'debug'
import express from "express"
import productsService from "../services/products.service"

const log: debug.IDebugger = debug('app:products-controller')

class ProductsController {
    async getProducts(req: express.Request, res: express.Response) {
        const products = await productsService.list(0, 0)
        res.status(200).send(products.map(product => product.toJSON()))
    }

    async getProductById(req: express.Request, res: express.Response) {
        const product = await productsService.readById(req.params.productId)
        res.status(200).send(product?.toJSON())
    }

    async createProduct(req: express.Request, res: express.Response) {
        const product = await productsService.create(req.body)
        res.status(201).send({id: product?.id})
    }
}

const productsController = new ProductsController()
export default productsController

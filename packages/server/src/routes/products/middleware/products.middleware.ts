import express from "express"
import productsService from "../services/products.service"

class ProductsMiddleware {
    async validateProductExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const product = await productsService.readById(req.params.productId)
        if (product) {
            next()
        } else {
            res.status(404).send({
                error: `Product ${req.params.productId} not found`
            })
        }
    }

    async validateCreateProductRequiredBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const {name, description, price, tenantId} = req.body
        if (name && description && price && tenantId) {
            next()
        } else {
            res.status(400).send({
                error: 'Missing required fields to create product'
            })
        }
    }

    async extractProductId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.productId
        next()
    }
}

const productsMiddleware = new ProductsMiddleware()
export default productsMiddleware

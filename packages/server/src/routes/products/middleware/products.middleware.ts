import express from "express"
import productsService from "../services/products.service"

class ProductsMiddleware {
    async validateProductExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const product = await productsService.getProductsById(req.params.productId)
        if (product) {
            next()
        } else {
            res.status(404).send({
                error: `Product ${req.params.productId} not found`
            })
        }
    }
}

const productsMiddleware = new ProductsMiddleware()
export default productsMiddleware

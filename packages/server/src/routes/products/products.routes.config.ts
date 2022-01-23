import {CommonRoutesConfig} from "../common/common.routes.config"
import express from "express"
import productsController from "./controllers/products.controller"
import productsMiddleware from "./middleware/products.middleware"

export default class ProductsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductsRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route('/products')
            .get(productsController.getProducts)

        this.app.route('/products/:productId')
            .get(productsMiddleware.validateProductExists,
                productsController.getProductsByTenantId)

        return this.app
    }
}

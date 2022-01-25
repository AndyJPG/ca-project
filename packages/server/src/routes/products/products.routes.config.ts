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
            .post(productsMiddleware.validateCreateProductTenantIdExists,
                productsMiddleware.validateCreateProductRequiredBodyFields,
                productsController.createProduct)

        this.app.route('/products/:productId')
            .all(productsMiddleware.validateProductExists,
                productsMiddleware.extractProductId)
            .get(productsController.getProductById)
            .delete(productsController.deleteProduct)
            .patch(productsController.updateProduct)

        return this.app
    }
}

import {CommonRoutesConfig} from "../common/common.routes.config"
import express from "express"
import productsController from "./controllers/products.controller"

export default class ProductsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductsRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route('/products/:tenantId')
            .get(productsController.getProductsByTenantId)
        return this.app
    }
}

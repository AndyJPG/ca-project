import {CommonRoutesConfig} from "./common/common.routes.config";
import express from "express";
import {getProductsByTenantId} from "../di/database.service";

export default class ProductsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ProductsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route('/products/:tenantId')
            .get(async (req: express.Request, res: express.Response) => {
                try {
                    const products = await getProductsByTenantId(req.params.tenantId)
                    res.status(200).send(products)
                } catch (e) {
                    res.status(500).send(e)
                }
            })
        return this.app
    }
}

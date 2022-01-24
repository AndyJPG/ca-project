import express from "express"
import {CommonRoutesConfig} from "../common/common.routes.config"
import tenantsController from "./controllers/tenants.controller"
import tenantsMiddleware from "./middleware/tenants.middleware"

export default class TenantsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'TenantsRoutes')
    }

    configureRoutes(): express.Application {
        this.app.route('/tenants')
            .get(tenantsController.getTenants)
            .post(tenantsMiddleware.validateCreateTenantRequiredBodyFields,
                tenantsController.addTenant)

        this.app.route('/tenants/:tenantId')
            .all(tenantsMiddleware.validateTenantExists,
                tenantsMiddleware.extractTenantId)
            .get(tenantsController.getTenantById)

        return this.app
    }
}

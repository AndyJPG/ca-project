import express from "express"
import { CommonRoutesConfig } from "../common/common.routes.config"
import TenantsController from "./controllers/tenants.controller"
import tenantsMiddleware from "./middleware/tenants.middleware"
import TenantsMiddleware from "./middleware/tenants.middleware"

export default class TenantsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TenantsRoutes")
  }

  configureRoutes(): express.Application {
    this.app.route("/tenants")
      .get(TenantsController.listTenants)
      .post(
        tenantsMiddleware.validateCreateTenantRequiredBodyFields,
        TenantsMiddleware.validateSameCompanyDomainDoesntExist,
        TenantsController.createTenant
      )

    this.app.param(`tenantId`, TenantsMiddleware.extractTenantId)
    this.app.route("/tenants/:tenantId")
      .all(TenantsMiddleware.validateTenantExists)
      .get(TenantsController.getTenantById)
      .delete(TenantsController.removeTenant)

    this.app.put("/tenants/:tenantId", [
      TenantsController.put
    ])

    this.app.patch("/tenants/:tenantId", [
      TenantsController.patch
    ])

    return this.app
  }
}
